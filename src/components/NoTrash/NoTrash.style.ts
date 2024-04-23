import styled from 'styled-components/native';
import { ratioPx } from '../../utils/platform';
import { GREY600 } from '../../constants/colors';

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
