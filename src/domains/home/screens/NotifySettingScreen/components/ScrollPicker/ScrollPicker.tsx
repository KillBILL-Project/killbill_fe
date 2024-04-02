import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { round } from 'lodash';
import { Container, ItemText, ItemTextContainer } from './ScrollPicker.style';
import { ratio } from '../../../../../../utils/platform';

interface ScrollPickerProps {
  itemList: string[];
  value?: string;
  setValue: (value: any) => void;
  fontSize: number;
  fontWeight: number;
}

const TEXT_HEIGHT = round(ratio * 46);
const TEXT_MARGIN = round(ratio * 10);
const ITEM_HEIGHT = TEXT_HEIGHT + TEXT_MARGIN * 2;
const SCROLL_HEIGHT = ITEM_HEIGHT * 3;

const ScrollPicker = ({ itemList, value, setValue, fontSize, fontWeight }: ScrollPickerProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const render = (item: number | string, index: number) => {
    return (
      <ItemTextContainer height={TEXT_HEIGHT} margin={TEXT_MARGIN}>
        {/* index 는 앞뒤로 공백이 있어서 1 만큼의 오차가 있음. */}
        <ItemText
          isSelected={index === selectedIndex + 1}
          fontSize={fontSize}
          fontWeight={fontWeight}
        >
          {item}
        </ItemText>
      </ItemTextContainer>
    );
  };

  useEffect(() => {
    if (value != null) setSelectedIndex(itemList.indexOf(value));
  }, [itemList, value]);

  return (
    <Container height={SCROLL_HEIGHT}>
      <FlatList
        data={['', ...itemList, '']}
        renderItem={({ item, index }) => render(item, index)}
        snapToInterval={ITEM_HEIGHT}
        showsVerticalScrollIndicator={false}
        onMomentumScrollEnd={event => {
          const index = event.nativeEvent.contentOffset.y / ITEM_HEIGHT;
          if (itemList.length - 1 >= index && index >= 0) setValue(itemList[index]);
        }}
        getItemLayout={(data, index) => ({
          length: ITEM_HEIGHT,
          offset: ITEM_HEIGHT * index,
          index,
        })}
        initialScrollIndex={selectedIndex}
      />
    </Container>
  );
};

export default ScrollPicker;
