import styled from 'styled-components/native';
import { GREY100, PRIMARY, WHITE } from '../../constants/colors';
import { ratioPx } from '../../utils/platform';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 ${ratioPx(24)};
  background-color: #3e3e3e;
`;

export const PopupContainer = styled.View`
  width: 100%;
  border-radius: ${ratioPx(10)};
  overflow: hidden;
`;

export const PopupTextContainer = styled.View`
  background-color: ${WHITE};
  justify-content: center;
  align-items: center;
  padding: ${ratioPx(40)} 0;
`;

export const AlertButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background-color: ${PRIMARY};
  height: ${ratioPx(48)};
`;

export const ConfirmButtonContainer = styled.View`
  flex-direction: row;
`;

export const ConfirmButtonLeft = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${GREY100};
  height: ${ratioPx(48)};
`;

export const ConfirmButtonRight = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${PRIMARY};
  height: ${ratioPx(48)};
`;
