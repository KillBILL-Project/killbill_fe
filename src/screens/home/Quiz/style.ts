import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import { hRatioPx, hScale, px, ratioPx, scale, width } from '@utils/platform';
import { GREY200, GREY400, PRIMARY, WHITE } from '@constants/colors';

export const TopSection = styled.View``;

export const Gradient = styled(LinearGradient)`
  padding: ${hRatioPx(40)} ${ratioPx(24)} ${hRatioPx(32)};
`;

export const TokenTitle = styled.View``;

export const TokenTitleText = styled.Text`
  color: ${WHITE};
  font-size: ${hRatioPx(16)};
  font-weight: 400;
`;

export const TokenStatusRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TokenStatus = styled.View``;

export const TokenStatusText = styled.Text`
  color: ${PRIMARY};
  font-size: ${hRatioPx(42)};
  font-weight: 700;
`;

export const SolveQuestionButton = styled.TouchableOpacity<{ disabled: boolean }>`
  background-color: ${({ disabled }) => (disabled ? GREY400 : PRIMARY)};
  padding: ${hRatioPx(8)} ${hRatioPx(16)};
  border-radius: ${ratioPx(10)};
`;

export const SolveQuestionButtonText = styled.Text`
  font-size: ${hRatioPx(14)};
  font-weight: 400;
  line-height: ${hRatioPx(20)};
`;

export const BottomSection = styled.View`
  flex: 1;
`;

export const CircleValueText = styled.Text`
  font-size: ${ratioPx(18)};
  font-weight: 700;
  line-height: ${ratioPx(28)};
`;

export const CircleText = styled.Text`
  font-size: ${ratioPx(14)};
  font-weight: 400;
  line-height: ${ratioPx(20)};
`;
export const CycleContainer = styled.View<{ index: number }>`
  z-index: ${({ index }) => -index};
  align-items: center;
`;

const marginVertical = scale(32);
const horizontal = scale(22);
const firstRowWidth = width - marginVertical * 2;
const circleWidth = (firstRowWidth - horizontal * 2) / 3;
const vertical = hScale(30);

export const CircleContainer = styled.TouchableHighlight<{ color: string }>`
  width: ${px(circleWidth)};
  height: ${px(circleWidth)};
  background-color: ${({ color }) => color};
  border-radius: ${px(circleWidth / 2)};
  justify-content: center;
  align-items: center;
`;
export const Horizontal = styled.View`
  width: ${px(horizontal)};
`;
export const Vertical = styled.View`
  height: ${px(vertical)};
`;
export const FirstRow = styled.View`
  width: ${px(firstRowWidth)};
  height: ${px(circleWidth)};
  flex-direction: row;
`;
export const SecondRow = styled.View`
  width: ${px(circleWidth * 2 + horizontal)};
  height: ${px(circleWidth)};
  flex-direction: row;
`;
export const LineWrapper = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  flex-direction: row;
  align-items: center;
`;
export const Line = styled.View`
  width: ${px(firstRowWidth / 2)};
  height: 3px;
  background-color: ${GREY200};
`;
export const RightArc = styled.Image`
  position: absolute;
  width: ${px(circleWidth + vertical)};
  height: ${px(circleWidth + vertical)};
  top: ${px(circleWidth / 2)};
  right: 0;
`;
export const LeftArc = styled.Image`
  position: absolute;
  width: ${px(circleWidth + vertical)};
  height: ${px(circleWidth + vertical)};
  top: ${px(-circleWidth / 2 - vertical)};
  left: 0;
`;
