import styled from 'styled-components/native';
import { ratioPx } from '../../../../../../utils/platform';
import { MAIN } from '../../../../../../constants/colors';

export const CategoryImage = styled.Image`
  width: ${ratioPx(95)};
  height: ${ratioPx(95)};
`;

export const FirstCircle = styled.View`
  width: ${ratioPx(95)};
  height: ${ratioPx(95)};
  background-color: ${MAIN};
  border-radius: 1000px;
  justify-content: center;
  align-items: center;
`;

export const SecondCircle = styled.View`
  width: ${ratioPx(107)};
  height: ${ratioPx(107)};
  background-color: ${MAIN + 80};
  border-radius: 1000px;
  justify-content: center;
  align-items: center;
`;

export const ThirdCircle = styled.View`
  width: ${ratioPx(119)};
  height: ${ratioPx(119)};
  background-color: ${MAIN + 50};
  border-radius: 1000px;
  justify-content: center;
  align-items: center;
`;

export const UnselectedCircle = styled.View`
  width: ${ratioPx(80)};
  height: ${ratioPx(80)};
  background-color: #f3f3f3;
  border-radius: 1000px;
  justify-content: center;
  align-items: center;
`;
