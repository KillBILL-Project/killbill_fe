import styled from 'styled-components/native';
import { ratioPx } from '../../../../../../utils/platform';
import { PRIMARY } from '../../../../../../constants/colors';

interface ButtonProps {
  backgroundColor?: string;
}

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: ${ratioPx(24)};
`;

export const CardContainer = styled.View`
  flex: 1;
  width: 100%;
  border-radius: ${ratioPx(20)};
  align-items: center;
  margin-top: ${ratioPx(24)};
`;

export const CardImage = styled.View`
  width: 100%;
  aspect-ratio: 1;
  margin-bottom: ${ratioPx(32)};
`;

export const Title = styled.View`
  margin-bottom: ${ratioPx(8)};
`;

export const TitleText = styled.Text`
  color: ${PRIMARY};
  font-size: ${ratioPx(24)};
  font-weight: 700;
  line-height: ${ratioPx(42)};
`;

export const Content = styled.View``;

export const ButtonContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const Button = styled.TouchableOpacity<ButtonProps>`
  width: ${ratioPx(159.5)};
  height: ${ratioPx(56)};
  border-radius: ${ratioPx(10)};
  border-color: ${PRIMARY};
  border-width: 1px;
  background-color: ${({ backgroundColor }) => backgroundColor ?? 'transparent'};
  justify-content: center;
  align-items: center;
`;
