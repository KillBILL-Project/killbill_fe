import styled from 'styled-components/native';
import { AUTH_BORDER_RADIUS, AUTH_HEIGHT } from '../../../../constants/constants';
import { GREY_2, GREY_3, GREY_8, WHITE } from '../../../../constants/colors';

export const Container = styled.View`
  align-items: center;
  padding: 20px;
  flex: 1;
`;

export const LoginContainer = styled.View`
  flex: 3;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Greeting = styled.View`
  justify-content: center;
  align-items: center;
  padding-bottom: 30px;
`;

export const GreetingText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  padding: 5px;
`;

export const AdditionalButtonContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Separator = styled.Text`
  color: ${GREY_2};
`;

export const SsoLoginButtonContainer = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
`;

export const LoginTextInput = styled.TextInput`
  height: ${AUTH_HEIGHT};
  width: 100%;
  padding: 5px 15px;
  background-color: ${WHITE};
  border-width: 1px;
  border-color: ${GREY_3};
  border-radius: ${AUTH_BORDER_RADIUS};
`;
