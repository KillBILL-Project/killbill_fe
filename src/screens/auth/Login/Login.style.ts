import styled from 'styled-components/native';
import { GREY_2, GREY_8 } from '../../../common/colors';

export const Container = styled.View`
  align-items: center;
  padding: 20px;
  flex: 1;
`;

export const GreetingBox = styled.View`
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

export const AdditionalButton = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
`;

export const AdditionalButtonText = styled.Text`
  color: ${GREY_8};
`;

export const Separator = styled.Text`
  color: ${GREY_2};
`;

export const EmailLoginContainer = styled.View`
  flex: 3;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const LoginButtonContainer = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
`;
