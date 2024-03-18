import React, { useRef, useState } from 'react';
import { FlatList, View } from 'react-native';
import {
  CategoryImage,
  FirstCircle,
  SecondCircle,
  ThirdCircle,
  UnselectedCircle,
} from './Category/Category.style';
import can from '../../../../../assets/image/can.png';
import bottle from '../../../../../assets/image/bottle.png';
import bag from '../../../../../assets/image/bag.png';
import etc from '../../../../../assets/image/etc.png';
import glass from '../../../../../assets/image/glass.png';
import paper from '../../../../../assets/image/paper.png';
import useThrowTrashMutation from '../../../../../hooks/mutation/trash/useThrowTrashMutation';

const data = [
  { id: 1, image: bag },
  { id: 2, image: bottle },
  { id: 3, image: can },
  { id: 4, image: paper },
  { id: 5, image: glass },
  { id: 6, image: etc },
];

const CategorySwiper = ({ motionRef }: any) => {
  const [selectId, setSelectId] = useState(data[0].id);
  const [selectAble, setSelectAble] = useState(true);
  const { mutate } = useThrowTrashMutation();

  const flatListRef = useRef<FlatList>(null);

  const renderItem = ({ item, index }: any) => {
    return (
      <View
        onTouchEnd={() => {
          if (!selectAble) {
            return;
          }
          if (item.id !== selectId) {
            setSelectId(item.id);
          }
          mutate(1);
          flatListRef.current?.scrollToIndex({ animated: true, index, viewPosition: 0.5 });
          motionRef.current?.play();
        }}
      >
        {item.id === selectId ? (
          <ThirdCircle>
            <SecondCircle>
              <FirstCircle>
                <CategoryImage source={item.image} />
              </FirstCircle>
            </SecondCircle>
          </ThirdCircle>
        ) : (
          <UnselectedCircle>
            <CategoryImage source={item.image} />
          </UnselectedCircle>
        )}
      </View>
    );
  };

  return (
    <FlatList
      ref={flatListRef}
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      horizontal
      onScrollBeginDrag={() => setSelectAble(false)} // 스크롤 시작 시 호출
      onScrollEndDrag={() => setSelectAble(true)}
      contentContainerStyle={{
        gap: 16,
        alignItems: 'center',
      }}
    />
  );
};

export default CategorySwiper;
