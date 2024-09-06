import styled from 'styled-components/native';
import { hRatioPx, ratioPx } from '@utils/platform';
import { GREY500, MAIN } from '@constants/colors';

export const Container = styled.View`
  background-color: #fff;
  border-radius: ${ratioPx(10)} ${ratioPx(10)} 0 0;
  overflow: hidden;
`;

export const Header = styled.View`
  padding: ${hRatioPx(10)} 0;
  justify-content: center;
  align-items: center;
`;

export const HeaderBar = styled.View`
  width: ${ratioPx(48)};
  height: ${hRatioPx(4)};
  border-radius: ${hRatioPx(10)};
  background-color: ${GREY500};
`;

export const Body = styled.View``;

export const Title = styled.View`
  padding: ${ratioPx(16)} ${ratioPx(20)};
`;

export const TitleText = styled.Text`
  font-size: ${hRatioPx(20)};
  line-height: ${hRatioPx(30)};
  font-weight: 700;
  color: ${MAIN};
`;

export const Content = styled.View`
  padding: ${ratioPx(4)} ${ratioPx(20)} ${ratioPx(56)};
`;

export const ContentText = styled.Text`
  font-size: ${hRatioPx(16)};
  line-height: ${hRatioPx(24)};
  font-weight: 400;
  color: ${MAIN};
`;

export const Bold = styled(ContentText)`
  font-weight: 700;
`;
