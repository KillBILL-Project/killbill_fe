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
  const trashSize = size === 'SMALL' ? '작은' : size === 'MEDIUM' ? '중간' : '큰';

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
          <ItemNameText>{`${trashSize} ${trashCategoryName}`}</ItemNameText>
        </ItemName>
      </DetailContainer>
    </Container>
  );
};

export default Item;
