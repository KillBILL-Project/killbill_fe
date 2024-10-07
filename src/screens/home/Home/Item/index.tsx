import React from 'react';
import { convertTimeFullDate } from '@utils/common';
import {
  Container,
  CreatedTime,
  CreatedTimeText,
  DetailContainer,
  ItemImage,
  ItemImageContainer,
  ItemName,
  ItemNameText,
} from './styles';

const Item = (data: any) => {
  const trash = data?.data;
  const { createdAt, trashImagePath, size, trashCategoryName } = trash;

  return (
    <Container>
      <ItemImageContainer>
        <ItemImage source={{ uri: trashImagePath }} resizeMode="contain" />
      </ItemImageContainer>
      <DetailContainer>
        <CreatedTime>
          <CreatedTimeText>{convertTimeFullDate(createdAt)}</CreatedTimeText>
        </CreatedTime>
        <ItemName>
          <ItemNameText>{trashCategoryName}</ItemNameText>
        </ItemName>
      </DetailContainer>
    </Container>
  );
};

export default Item;
