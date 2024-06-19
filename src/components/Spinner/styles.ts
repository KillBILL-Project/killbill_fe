import styled from 'styled-components/native';
import { px, windowHeight } from '@utils/platform';

export const ActivityIndicator = styled.ActivityIndicator`
  position: absolute;
  align-self: center;
  bottom: ${px(windowHeight / 2)};
  z-index: 1;
`;
