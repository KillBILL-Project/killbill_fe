import styled from 'styled-components/native';
import { ratioPx } from '@utils/platform';

const externalPadding = 24;

export const Container = styled.ScrollView`
  flex: 1;
  padding: ${ratioPx(externalPadding)};
`;
export const ThreeButtonContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const MenuButtonContainer = styled.View``;
