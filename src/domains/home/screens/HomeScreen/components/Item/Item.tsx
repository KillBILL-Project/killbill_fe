import React from 'react';
import {
  Container,
  CreatedTime,
  DetailContainer,
  ItemImage,
  ItemImageContainer,
  ItemName,
} from './Item.style';

import can from '../../../../../../assets/image/can.png';
import { Regular14, Regular16 } from '../../../../../../components/Typography';
import { BLACK, GREY600 } from '../../../../../../constants/colors';

const Item = () => {
  return (
    <Container>
      <ItemImageContainer>
        <ItemImage source={can} />
      </ItemImageContainer>
      <DetailContainer>
        <CreatedTime>
          <Regular14 color={GREY600}>2023. 10. 30. 16:00</Regular14>
        </CreatedTime>
        <ItemName>
          <Regular16 color={BLACK}>작은 플라스틱</Regular16>
        </ItemName>
      </DetailContainer>
    </Container>
  );
};

export default Item;
