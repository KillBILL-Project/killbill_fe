import styled from 'styled-components/native';
import { ratioPx } from '../../../../../../utils/platform';

export const TooltipContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 7px;
`;

export const Tooltip = styled.Text`
  height: 15px;
  font-size: 10px;
  font-weight: 600;
  color: #767676;
  line-height: 15px;
  margin-right: 12px;
  margin-left: 6px;
`;

export const CountWrapper = styled.View<{ top: number }>`
  position: absolute;
  top: ${props => ratioPx(props.top)};
  right: ${ratioPx(25)};
`;

export const CountText = styled.Text`
  font-size: ${ratioPx(16)};
  font-weight: bold;
`;
