import styled from 'styled-components/native';
import { ratioPx } from '../../../../utils/platform';
import { BLACK } from '../../../../constants/colors';

export const Container = styled.View`
  flex: 1;
  padding-top: ${ratioPx(24)};
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
  color: ${BLACK};
`;

export const AuthButtonContainer = styled.View`
  align-items: center;
  width: 100%;
`;
