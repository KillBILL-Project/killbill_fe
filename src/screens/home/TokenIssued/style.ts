import styled from 'styled-components/native';
import { BLACK, GREY200, PRIMARY, WHITE } from '@constants/colors';
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

export const CycleContainer = styled.View<{ index: number }>`
  z-index: ${({ index }) => -index};
  align-items: center;
`;

export const CircleContainer = styled.TouchableHighlight<{ color: string }>`
  width: 100px;
  height: 100px;
  background-color: ${({ color }) => color};
  border-radius: 50px;
  justify-content: center;
  align-items: center;
`;

export const Horizontal = styled.View`
  width: 10px;
`;

export const Vertical = styled.View`
  height: 30px;
`;

export const FirstRow = styled.View`
  width: 320px;
  height: 100px;
  flex-direction: row;
`;

export const SecondRow = styled.View`
  width: 210px;
  height: 100px;
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
  width: 160px;
  height: 3px;
  background-color: ${GREY200};
`;

export const RightArc = styled.View`
  position: absolute;
  width: 135px;
  height: 135px;
  top: 50px;
  right: 25px;
  border-radius: 100px;
  border-width: 3px;
  border-right-color: ${GREY200};
  border-bottom-color: ${GREY200};
  border-left-color: transparent;
  border-top-color: transparent;
`;

export const LeftArc = styled.View`
  position: absolute;
  width: 135px;
  height: 135px;
  top: -85px;
  left: 25px;
  border-radius: 100px;
  border-width: 3px;
  border-right-color: transparent;
  border-bottom-color: transparent;
  border-left-color: ${GREY200};
  border-top-color: ${GREY200};
`;
