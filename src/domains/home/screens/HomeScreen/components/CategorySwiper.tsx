import React, { useEffect, useRef, useState } from 'react';
import { FlatList, View } from 'react-native';
import { useRecoilValue } from 'recoil';
import {
  CategoryImage,
  FirstCircle,
  SecondCircle,
  ThirdCircle,
  UnselectedCircle,
} from './Category/Category.style';
import { useTrashInfoQuery } from '../../../../../hooks/queries/trash/useTrashInfoQuery';
import useThrowTrashMutation from '../../../../../hooks/mutation/trash/useThrowTrashMutation';
import { trashFilterState } from '../../../../../states';

const CategorySwiper = ({ motionRef }: any) => {
  const trashFilter = useRecoilValue(trashFilterState);
  const { data: result, isSuccess } = useTrashInfoQuery();
  const metaData = result?.data?.data?.filter(
    (item: { size: string }) => item.size === trashFilter,
  );

  const [selectIndex, setSelectIndex] = useState(0);
  const [selectId, setSelectId] = useState(0);
  const [selectAble, setSelectAble] = useState(true);
  const { mutate } = useThrowTrashMutation();

  const flatListRef = useRef<FlatList>(null);

  const imageSize = trashFilter === 'SMALL' ? 30 : trashFilter === 'MEDIUM' ? 40 : 50;

  const renderItem = ({ item, index }: any) => {
    return (
      <View
        onTouchEnd={() => {
          if (!selectAble) {
            return;
          }

          if (item.trashInfoId !== selectId) {
            setSelectIndex(index);
            setSelectId(item.trashInfoId);
          }

          flatListRef.current?.scrollToIndex({ animated: true, index, viewPosition: 0.5 });
          motionRef.current?.play();

          mutate(item.trashInfoId);
        }}
      >
        {item.trashInfoId === selectId ? (
          <ThirdCircle>
            <SecondCircle>
              <FirstCircle>
                <CategoryImage
                  source={{ uri: item.trashImagePath }}
                  resizeMode="contain"
                  imageSize={imageSize}
                />
              </FirstCircle>
            </SecondCircle>
          </ThirdCircle>
        ) : (
          <UnselectedCircle>
            <CategoryImage
              source={{ uri: item.trashImagePath }}
              resizeMode="contain"
              imageSize={imageSize}
            />
          </UnselectedCircle>
        )}
      </View>
    );
  };

  useEffect(() => {
    if (isSuccess) {
      setSelectId(metaData[0].trashInfoId);
    }
  }, [isSuccess]);

  useEffect(() => {
    if (!metaData) {
      return;
    }

    setSelectId(metaData[selectIndex].trashInfoId);
  }, [trashFilter, metaData]);

  return (
    <FlatList
      ref={flatListRef}
      data={metaData}
      renderItem={renderItem}
      keyExtractor={item => item.trashInfoId}
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
