import styled from 'styled-components/native';
import { GREY600 } from '@constants/colors';
import { ratioPx } from '@utils/platform';

export const Container = styled.View`
  flex: 1;
  margin-bottom: ${ratioPx(100)};
  justify-content: center;
  align-items: center;
`;

export const NoTrashText = styled.Text`
  color: ${GREY600};
  font-size: 16px;
  margin-bottom: ${ratioPx(4)};
`;
