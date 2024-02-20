import styled from 'styled-components/native';
import { px, ratioPx } from '../../../../utils/platform';

export const Container = styled.View<{ height: number }>`
  flex: 1;
  align-items: center;
  height: ${({ height }) => px(height)};
`;

export const KeyboardHideArea = styled.Pressable`
  flex: 1;
`;

export const LoginContainer = styled.View`
  width: 100%;
  flex: 3;
  justify-content: center;
  align-items: center;
`;

export const Greeting = styled.View`
  justify-content: center;
  align-items: center;
  margin-bottom: ${ratioPx(36)};
`;

export const AdditionalButtonContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const SsoLoginButtonContainer = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
`;
