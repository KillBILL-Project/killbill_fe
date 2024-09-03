import styled from 'styled-components/native';
import { BLACK, PRIMARY, WHITE } from '@constants/colors';
import { hRatioPx } from '@utils/platform';

export const Container = styled.View`
  flex: 1;
  background-color: ${BLACK};
  padding: ${hRatioPx(40)};
`;

export const Title = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: ${hRatioPx(14)};
`;

export const TitleText = styled.Text`
  color: ${PRIMARY};
  font-size: ${hRatioPx(30)};
  font-weight: 700;
  line-height: ${hRatioPx(42)};
`;

export const ImageSection = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  gap: ${hRatioPx(24)};
`;

export const AcquiredToken = styled.View`
  background-color: ${WHITE};
  padding: ${hRatioPx(8)} ${hRatioPx(35)};
  border-radius: ${hRatioPx(29)};
`;

export const AcquiredTokenText = styled.Text`
  font-size: ${hRatioPx(20)};
  font-weight: 700;
  line-height: ${hRatioPx(30)};
`;

export const TokenIssuedImage = styled.Image`
  width: ${hRatioPx(162)};
  height: ${hRatioPx(162)};
`;

export const Log = styled.View`
  justify-content: center;
  align-items: center;
`;

export const LogText = styled.Text`
  color: ${WHITE};
  font-size: ${hRatioPx(16)};
  font-weight: 400;
  line-height: ${hRatioPx(24)};
`;
