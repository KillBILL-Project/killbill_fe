import styled from 'styled-components/native';
import { ORANGE, WHITE } from '../../../../constants/colors';
import { AUTH_BORDER_RADIUS } from '../../../../constants/constants';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  justify-content: space-between;
`;

export const InputContainer = styled.View`
  align-items: center;
  width: 100%;
`;

export const InfoMessage = styled.View`
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;
`;

export const InfoMessageText = styled.Text`
  font-size: 20px;
  padding: 5px;
`;

export const AuthButtonContainer = styled.View`
  align-items: center;
  width: 100%;
`;

export const FullScreen = styled.View`
  position: absolute;
  background-color: #3e3e3e;
  width: 100%;
  height: 100%;
  flex: 1;
  z-index: 2;
  justify-content: center;
  align-items: center;
`;

export const BackDropContainer = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  padding: 40px;
`;

export const NotificationContainer = styled.View`
  width: 100%;
  border-radius: ${AUTH_BORDER_RADIUS};
  overflow: hidden;
`;

export const Notification = styled.View`
  background-color: ${WHITE};
  justify-content: center;
  align-items: center;
  height: 130px;
`;

export const NotificationText = styled.Text`
  color: #111111;
  padding: 3px;
`;

export const NotificationButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background-color: ${ORANGE};
  height: 40px;
`;

export const NotificationButtonText = styled.Text`
  color: ${WHITE};
`;
