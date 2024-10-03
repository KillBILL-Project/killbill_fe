import styled from 'styled-components/native';
import { ratioPx } from '@utils/platform';

export const Container = styled.ScrollView`
  flex: 1;
`;
export const ThreeButtonContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: ${ratioPx(6)};
`;
export const MenuButtonContainer = styled.View``;

export const TopSection = styled.View`
  padding: ${ratioPx(24)};
  gap: ${ratioPx(16)};
`;

export const BottomSection = styled.View`
  padding: ${ratioPx(24)};
`;
