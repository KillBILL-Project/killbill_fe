import styled from 'styled-components/native';
import { GREY600, LIGHT_BG } from '@constants/colors';
import { hRatioPx, ratioPx } from '@utils/platform';

export const Container = styled.View`
  padding: ${ratioPx(8)} 0;
  flex-direction: row;
  align-items: center;
`;

export const ItemImageContainer = styled.View`
  width: ${ratioPx(56)};
  height: ${ratioPx(62)};
  border-radius: ${ratioPx(10)};
  background-color: ${LIGHT_BG};
  justify-content: center;
  align-items: center;
`;

export const ItemImage = styled.Image`
  width: ${ratioPx(32)};
  height: ${ratioPx(32)};
`;

export const DetailContainer = styled.View`
  justify-content: space-between;
  margin-left: ${ratioPx(16)};
`;

export const CreatedTime = styled.View``;

export const ItemName = styled.View``;

export const CreatedTimeText = styled.Text`
  font-size: ${hRatioPx(14)};
  font-weight: 400;
  line-height: ${hRatioPx(20)};
  color: ${GREY600};
`;

export const ItemNameText = styled.Text`
  font-size: ${hRatioPx(16)};
  font-weight: 400;
  line-height: ${hRatioPx(24)};
`;
