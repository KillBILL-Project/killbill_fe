import styled from 'styled-components/native';
import { BTN_DESELECTED_BG } from '../../../../constants/colors';
import { ratioPx } from '../../../../utils/platform';

export const Container = styled.View`
  flex: 1;
  width: 100%;
`;

export const PraiseCard = styled.TouchableOpacity`
  position: relative;
  width: ${ratioPx(155.5)};
  height: ${ratioPx(155.5)};
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
