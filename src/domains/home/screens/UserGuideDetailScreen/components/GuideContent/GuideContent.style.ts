import styled from 'styled-components/native';
import { px, ratioPx } from '../../../../../../utils/platform';
import { hRatio } from '../../../../../../constants/userGuide';
import { BLACK, PRIMARY } from '../../../../../../constants/colors';

interface ContentContainerProps {
  isFullWidth?: boolean;
}

export const Container = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const ContentContainer = styled.View<ContentContainerProps>`
  width: 100%;
  padding-left: ${({ isFullWidth }) => (isFullWidth ? ratioPx(24) : 0)};
  padding-right: ${({ isFullWidth }) => (isFullWidth ? ratioPx(24) : 0)};
  padding-bottom: ${({ isFullWidth }) => (isFullWidth ? px(hRatio * 40) : px(hRatio * 16))};
`;

export const TitleContainer = styled.View`
  margin-bottom: ${px(hRatio * 12)};
`;

export const TitleText = styled.Text<{ colorType?: string }>`
  color: ${({ colorType }) => (colorType === 'type2' ? BLACK : PRIMARY)};
  font-size: ${px(hRatio * 24)};
  font-weight: 700;
  line-height: ${px(hRatio * 36)};
`;

export const ContentText = styled.Text<{ colorType?: string }>`
  color: ${({ colorType }) => (colorType === 'type2' ? BLACK : PRIMARY)};
  font-size: ${px(hRatio * 16)};
  font-weight: 400;
  line-height: ${px(hRatio * 24)};
`;
