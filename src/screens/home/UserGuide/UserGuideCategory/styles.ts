import styled from 'styled-components/native';
import { ratioPx } from '@utils/platform';

export const Container = styled.View`
  width: 100%;
`;

export const ButtonContainer = styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
`;

export const InnerContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: ${ratioPx(16)};
`;

export const TitleContainer = styled.View``;
