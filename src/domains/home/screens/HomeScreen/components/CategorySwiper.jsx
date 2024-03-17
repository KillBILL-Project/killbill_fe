import React from 'react';
import { FlatList } from 'react-native';
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

const data = [
  { id: 1, image: bag },
  { id: 2, image: bottle },
  { id: 3, image: can },
  { id: 4, image: paper },
  { id: 5, image: glass },
  { id: 6, image: etc },
];

const CategorySwiper = () => {
  const renderItem = ({ item }) => {
    return (
      <>
        {item.id === 3 ? (
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
      </>
    );
  };

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      horizontal
      contentContainerStyle={{
        gap: 16,
        alignItems: 'center',
      }}
    />
  );
};

export default CategorySwiper;
