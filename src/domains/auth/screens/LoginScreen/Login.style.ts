import styled from 'styled-components/native';
import { GREY300 } from '../../../../constants/colors';
import { px, ratioPx } from '../../../../utils/platform';

export const Container = styled.SafeAreaView<{ height: number }>`
  align-items: center;
  height: ${({ height }) => px(height)};
  justify-content: space-between;
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

export const Separator = styled.Text`
  color: ${GREY300};
`;

export const SsoLoginButtonContainer = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
`;
