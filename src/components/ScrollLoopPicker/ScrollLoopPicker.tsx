import React, {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import Animated, { useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated';
import type { ViewToken } from '@react-native/virtualized-lists';
import { ViewStyle } from 'react-native/Libraries/StyleSheet/StyleSheetTypes';
import { floor, random } from 'lodash';
import { FlatList, Text, View } from 'react-native';
import { LayoutChangeEvent } from 'react-native/Libraries/Types/CoreEventTypes';
import { Container } from './ScrollLoopPicker.style';
import { width } from '../../utils/platform';

// 이 컴포넌트의 한계점 = 무조건 화면이 n등분 되어야만 아이템이 가운데 올 수 있음.

interface LoopScrollProps {
  visibleItemCount?: number;
  height?: number | string;
  width?: number | string;
  itemStyle?: ViewStyle;
  itemTextStyle?: ViewStyle;
  selectedItemStyle?: ViewStyle;
  selectedItemTextStyle?: ViewStyle;
  lineStyle?: ViewStyle;
  chosenIndex?: number;
  items: any[];
  value: any;
  setValue: Dispatch<SetStateAction<any>>;
  onSelected?: (selectedValue?: any) => void;
  horizontal?: boolean;
  itemComponent?: (item?: any, index?: number, selected?: boolean) => React.ReactElement;
}

const ScrollLoopPicker = React.memo(
  ({
    itemStyle,
    itemTextStyle,
    selectedItemStyle,
    selectedItemTextStyle,
    lineStyle,
    height,
    width: scrollWidth = '100%',
    items,
    onSelected,
    value,
    setValue,
    horizontal,
    visibleItemCount = 5,
    chosenIndex = floor(visibleItemCount / 2),
    itemComponent,
  }: LoopScrollProps) => {
    console.log('-----re-render-----');

    const [ready, setReady] = useState(false);

    const flatListRef = useRef<FlatList>(null);
    const scroll = useSharedValue(0);

    const selectedIndex = useRef<number | null>();
    const selectedValue = useRef<number | undefined>(value);

    const layout = useRef<{
      width: number;
      height: number;
      offset: number;
    }>({
      width: 0,
      height: 0,
      offset: 0,
    });

    const scrollHandler = useAnimatedScrollHandler(event => {
      scroll.value = event.contentOffset.x;
    });

    const onViewableItemsChanged = useCallback(
      ({ viewableItems }: { viewableItems: Array<ViewToken>; changed: Array<ViewToken> }) => {
        if (viewableItems.length > 0) {
          const centerIndex = floor(visibleItemCount / 2);
          const currentItem = viewableItems[centerIndex]?.item;
          const currentIndex = viewableItems[centerIndex]?.index;

          if (selectedIndex.current !== currentIndex && currentItem) {
            selectedValue.current = currentItem;
            selectedIndex.current = currentIndex;
            console.log('Selected Value:', selectedValue.current);
            console.log('Selected Index:', selectedIndex.current);
          }
        }
      },
      [],
    );

    const viewabilityConfig = {
      itemVisiblePercentThreshold: 50,
    };

    const filteredData = useMemo(() => {
      const newData = Array(11).fill(items).flat();
      for (let i = 0; i < chosenIndex; i += 1) newData.unshift('');
      for (let i = 0; i < visibleItemCount - chosenIndex - 1; i += 1) newData.push('');
      return newData;
    }, []);

    const initialIndex = useMemo(() => {
      const itemIndex = items.indexOf(value);
      console.log(itemIndex, items.length * 5 + itemIndex + chosenIndex);
      return items.length * 5 + itemIndex + chosenIndex;
    }, []);

    const renderItem = ({ item, index }) => {
      const selected = index === selectedIndex;
      const isSelectedItemStyle = selected && selectedItemStyle;
      const isSelectedItemTextStyle = selected && selectedItemTextStyle;

      if (itemComponent) {
        return (
          <View style={{ width: width / 3, justifyContent: 'center', alignItems: 'center' }}>
            {itemComponent(item, index, selected)}
          </View>
        );
      }

      return (
        <View style={{ width: width / 3, justifyContent: 'center', alignItems: 'center' }}>
          <View style={[itemStyle, isSelectedItemStyle && selectedItemStyle]}>
            <Text style={[itemTextStyle, isSelectedItemTextStyle && selectedItemTextStyle]}>
              {item}
            </Text>
          </View>
        </View>
      );
    };

    const onScrollEnd = useCallback(() => {
      setValue(selectedValue.current);
      if (onSelected) onSelected(selectedValue.current);
    }, []);

    const onLayout = (event: LayoutChangeEvent) => {
      layout.current = {
        width: event.nativeEvent.layout.width,
        height: event.nativeEvent.layout.height,
        offset: horizontal
          ? event.nativeEvent.layout.width / visibleItemCount
          : event.nativeEvent.layout.height / visibleItemCount,
      };
    };

    useEffect(() => {
      setTimeout(() => {
        setReady(true);
      }, 50);
    }, []);

    return (
      <Container height={height} width={scrollWidth} onLayout={onLayout}>
        {ready && (
          <Animated.FlatList
            horizontal={horizontal}
            ref={flatListRef}
            data={filteredData}
            renderItem={renderItem}
            keyExtractor={(_, index) => random() + index.toString()}
            onScroll={scrollHandler}
            onMomentumScrollEnd={onScrollEnd}
            viewabilityConfig={viewabilityConfig}
            onViewableItemsChanged={onViewableItemsChanged}
            initialScrollIndex={initialIndex}
            getItemLayout={(_, index) => ({
              length: layout.current.offset,
              offset: layout.current.offset * index,
              index,
            })}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            snapToInterval={layout.current.offset}
            decelerationRate="fast"
            style={{ width: layout.current.width }}
          />
        )}
      </Container>
    );
  },
);

export default ScrollLoopPicker;