import styled from 'styled-components/native';
import { GREY400 } from '@constants/colors';
import { ratioPx } from '@utils/platform';

export const Container = styled.View`
  flex: 1;
  padding: ${ratioPx(24)};
`;

export const Title = styled.View`
  margin-bottom: ${ratioPx(8)};
`;

export const Box = styled.View`
  width: ${ratioPx(327)};
  padding: ${ratioPx(12)} ${ratioPx(16)};
  flex-direction: row;
  align-items: center;
  border-width: 1px;
  border-color: ${GREY400};
  border-radius: ${ratioPx(5)};
`;

export const LogoutButton = styled.TouchableOpacity<{ bottom: number }>`
  align-self: center;
  position: absolute;
  bottom: ${({ bottom }) => ratioPx(bottom + 40)};
`;
