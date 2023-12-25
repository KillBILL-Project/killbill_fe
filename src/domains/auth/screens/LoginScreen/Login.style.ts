import styled from 'styled-components/native';
import { GREY300 } from '../../../../constants/colors';

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
  color: ${GREY300};
`;

export const SsoLoginButtonContainer = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
`;
