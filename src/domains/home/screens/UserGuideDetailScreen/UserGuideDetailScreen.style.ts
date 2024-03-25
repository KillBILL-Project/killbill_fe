import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import {
  hRatio,
  paddingHorizontal,
  titleHeight,
  titleLineHeight,
  titleMarginBottom,
  titleMarginTop,
} from '../../../../constants/userGuide';
import { px } from '../../../../utils/platform';

export const Container = styled(LinearGradient)`
  position: relative;
  flex: 1;
  align-items: center;
  padding: 0 ${`${paddingHorizontal}px`};
`;

export const TitleContainer = styled.View`
  width: 100%;
  margin-top: ${px(titleMarginTop)};
  margin-bottom: ${px(titleMarginBottom)};
  flex-direction: row;
  justify-content: space-between;
`;

export const TitleText = styled.Text<{ color: string }>`
  color: ${({ color }) => color};
  font-size: ${`${hRatio * 18}px`};
  font-weight: 700;
  line-height: ${px(titleLineHeight)};
`;

export const PanResponderContainer = styled.View`
  flex: 1;
  width: 100%;
  margin-top: ${px(titleHeight)};
  padding-bottom: ${px(hRatio * 56)};
`;

export const Title = styled.View``;

export const Index = styled.View``;

export const IndexText = styled.Text``;
