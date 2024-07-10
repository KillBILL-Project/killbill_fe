import styled from 'styled-components/native';
import { ratioPx } from '@utils/platform';
import { MAIN } from '@constants/colors';

export const Container = styled.View`
  background-color: #fff;
  border-radius: ${ratioPx(10)} ${ratioPx(10)} 0 0;
  overflow: hidden;
`;

export const Header = styled.View``;

export const Body = styled.View``;

export const Title = styled.View`
  padding: ${ratioPx(16)} ${ratioPx(20)};
`;

export const TitleText = styled.Text`
  font-size: ${ratioPx(20)};
  font-weight: 700;
  color: ${MAIN};
`;

export const Content = styled.View`
  padding: ${ratioPx(4)} ${ratioPx(20)} ${ratioPx(56)};
`;

export const ContentText = styled.Text`
  font-size: ${ratioPx(16)};
  font-weight: 400;
  color: ${MAIN};
`;

export const Bold = styled(ContentText)`
  font-weight: 700;
`;
