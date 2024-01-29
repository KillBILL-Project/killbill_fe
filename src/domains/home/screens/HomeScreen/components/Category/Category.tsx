import React from 'react';
import { ImageSourcePropType } from 'react-native';
import {
  CategoryImage,
  FirstCircle,
  SecondCircle,
  ThirdCircle,
  UnselectedCircle,
} from './Category.style';

interface CategoryProps {
  isSelected: boolean;
  image: ImageSourcePropType;
}

const Category = ({ isSelected, image }: CategoryProps) => {
  return isSelected ? (
    <ThirdCircle>
      <SecondCircle>
        <FirstCircle>
          <CategoryImage source={image} />
        </FirstCircle>
      </SecondCircle>
    </ThirdCircle>
  ) : (
    <UnselectedCircle>
      <CategoryImage source={image} />
    </UnselectedCircle>
  );
};

export default Category;
