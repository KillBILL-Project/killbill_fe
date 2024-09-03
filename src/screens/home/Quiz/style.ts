import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import { hRatioPx, ratioPx } from '@utils/platform';
import { GREY400, PRIMARY, WHITE } from '@constants/colors';

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
