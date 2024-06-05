import styled from 'styled-components/native';
import { ratioPx } from '../../../../utils/platform';
import { GREY400 } from '../../../../constants/colors';

export const Container = styled.View`
  flex: 1;
  padding: ${ratioPx(24)};
`;

export const PushContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const PushTitle = styled.View``;

export const PushToggleSwitch = styled.View``;

export const Title = styled.View`
  margin-bottom: ${ratioPx(8)};
`;

export const Box = styled.View`
  width: ${ratioPx(327)};
  padding: ${ratioPx(12)} ${ratioPx(16)};
  flex-direction: row;
  align-items: center;
  border-width: 1px;
  border-color: ${GREY400};
  border-radius: ${ratioPx(5)};
`;

export const SecessionButton = styled.TouchableOpacity`
  align-self: center;
  position: absolute;
  bottom: ${ratioPx(40)};
`;
