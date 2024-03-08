import styled from 'styled-components/native';
import { ratioPx } from '../../../../../utils/platform';
import { BTN_DESELECTED_BG } from '../../../../../constants/colors';

interface ContainerProps {
  size: 'large' | 'small';
}

export const Container = styled.TouchableOpacity<ContainerProps>`
  position: relative;
  width: ${({ size }) => (size === 'large' ? ratioPx(155.5) : ratioPx(132))};
  height: ${({ size }) => (size === 'large' ? ratioPx(155.5) : ratioPx(132))};
  margin: ${ratioPx(8)};
  background-color: ${BTN_DESELECTED_BG};
  border-radius: ${ratioPx(20)};
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const PraiseCardName = styled.View`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: ${ratioPx(40)};
  margin-top: ${ratioPx(16)};
  background-color: rgba(36, 16, 35, 0.5);
  justify-content: center;
  align-items: center;
`;
