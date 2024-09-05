import styled from 'styled-components/native';
import { hRatioPx, ratioPx } from '@utils/platform';
import { BLACK, GREY500, GREY800, MAIN, PRIMARY, WHITE } from '@constants/colors';

export const Container = styled.View`
  flex: 1;
  background-color: ${BLACK};
  padding: ${hRatioPx(0)} ${ratioPx(24)} ${hRatioPx(40)};
  overflow: visible;
`;

export const TopSection = styled.View`
  justify-content: center;
  align-items: center;
  height: ${hRatioPx(150)};
`;

export const AccuracyRate = styled.View`
  padding: ${hRatioPx(6)} ${ratioPx(20)};
  background-color: ${GREY800};
  border-radius: ${ratioPx(29)};
  margin-bottom: ${hRatioPx(20)};
`;

export const AccuracyRateText = styled.Text`
  color: ${GREY500};
  font-size: ${hRatioPx(12)};
  font-weight: 700;
  line-height: ${hRatioPx(18)};
`;

export const QuestionTitle = styled.View``;

export const QuestionTitleText = styled.Text`
  color: ${PRIMARY};
  font-size: ${hRatioPx(24)};
  font-weight: 700;
  line-height: ${hRatioPx(36)};
`;

export const ImageSection = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const QuestionImageWrapper = styled.View`
  width: ${hRatioPx(223)};
  height: ${hRatioPx(223)};
  border-radius: ${ratioPx(20)};
  overflow: hidden;
`;

export const QuestionImage = styled.Image`
  width: 100%;
  height: 100%;
`;

export const BottomSection = styled.View`
  flex: 1;
  padding-bottom: ${hRatioPx(24)};
  justify-content: flex-end;
`;

export const MultiChoiceSection = styled.View`
  justify-content: space-between;
  align-items: center;
  gap: ${hRatioPx(12)};
`;

export const MultiChoiceButton = styled.TouchableHighlight`
  background-color: ${WHITE};
  width: 100%;
  padding: ${hRatioPx(10)} 0;
  justify-content: center;
  align-items: center;
  border-radius: ${ratioPx(28)};
`;

export const MultiChoiceButtonText = styled.Text`
  color: ${GREY800};
  font-size: ${hRatioPx(24)};
  font-weight: 400;
  line-height: ${hRatioPx(36)};
`;

export const OxChoiceSection = styled.View`
  flex-direction: row;
  gap: ${ratioPx(12)};
  justify-content: space-between;
  align-items: center;
`;

export const OxChoiceButton = styled.TouchableHighlight`
  flex: 1;
  background-color: ${WHITE};
  justify-content: center;
  align-items: center;
  border-radius: ${hRatioPx(28)};
  padding: ${hRatioPx(50)};
`;

export const OxChoiceButtonImage = styled.Image`
  width: ${hRatioPx(80)};
  height: ${hRatioPx(80)};
`;

export const BottomButtonSection = styled.View`
  background-color: ${BLACK};
`;

export const AdSection = styled.View`
  height: ${ratioPx(57)};
`;

export const ButtonSection = styled.View`
  padding: ${hRatioPx(24)};
`;

export const ResultButton = styled.TouchableOpacity`
  background-color: ${PRIMARY};
  justify-content: center;
  align-items: center;
  height: ${hRatioPx(56)};
  border-radius: ${ratioPx(10)};
`;

export const ResultButtonText = styled.Text`
  color: ${MAIN};
  font-size: ${hRatioPx(18)};
  font-weight: 700;
  line-height: ${hRatioPx(28)};
`;

export const QuestionResultSection = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const QuestionResultText = styled.Text`
  color: ${PRIMARY};
  font-size: ${hRatioPx(20)};
  font-weight: 700;
  line-height: ${hRatioPx(30)};
`;
