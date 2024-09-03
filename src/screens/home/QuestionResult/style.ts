import styled from 'styled-components/native';
import { hRatioPx, ratioPx } from '@utils/platform';
import { BLACK, PRIMARY } from '@constants/colors';

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

export const QuestionTitle = styled.View``;

export const QuestionTitleText = styled.Text`
  color: ${PRIMARY};
  font-size: ${hRatioPx(30)};
  font-weight: 700;
  line-height: ${hRatioPx(42)};
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
