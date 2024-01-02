import styled from 'styled-components/native';
import { AUTH_BORDER_RADIUS } from '../../constants/constants';
import { PRIMARY, WHITE } from '../../constants/colors';
import { px } from '../../utils/platform';

export const PopupContainer = styled.View`
  width: 90%;
  border-radius: ${px(AUTH_BORDER_RADIUS)};
  overflow: hidden;
  z-index: 1001;
`;

export const PopupTextContainer = styled.View`
  background-color: ${WHITE};
  justify-content: center;
  align-items: center;
  height: 130px;
`;

export const AlertButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background-color: ${PRIMARY};
  height: 40px;
`;

export const ConfirmButtonContainer = styled.View`
  flex-direction: row;
`;

export const ConfirmButtonLeft = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background-color: ${PRIMARY};
  height: 40px;
`;

export const ConfirmButtonRight = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background-color: ${PRIMARY};
  height: 40px;
`;
