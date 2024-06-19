import React from 'react';
import { BLACK, GREY600 } from '@constants/colors';

import { Regular14, Regular16 } from '@components/Typography';
import { convertTimeFullDate } from '@utils/common';
import {
  Container,
  CreatedTime,
  DetailContainer,
  ItemImage,
  ItemImageContainer,
  ItemName,
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
          <Regular14 color={GREY600}>{convertTimeFullDate(createdAt)}</Regular14>
        </CreatedTime>
        <ItemName>
          <Regular16 color={BLACK}>{`${trashSize} ${trashCategoryName}`}</Regular16>
        </ItemName>
      </DetailContainer>
    </Container>
  );
};

export default Item;
