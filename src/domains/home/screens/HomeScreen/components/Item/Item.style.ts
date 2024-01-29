import styled from 'styled-components/native';
import { ratioPx } from '../../../../../../utils/platform';
import { LIGHT_BG } from '../../../../../../constants/colors';

export const Container = styled.View`
  padding: ${ratioPx(8)};
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
  width: ${ratioPx(46)};
  height: ${ratioPx(46)};
`;

export const DetailContainer = styled.View`
  justify-content: center;
  margin-left: ${ratioPx(16)};
`;

export const CreatedTime = styled.View``;

export const ItemName = styled.View``;
