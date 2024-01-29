import styled from 'styled-components/native';
import { LIGHT_BG } from '../../../../../../constants/colors';
import { ratioPx } from '../../../../../../utils/platform';

export const Container = styled.TouchableOpacity`
  padding: ${ratioPx(16)} ${ratioPx(24)};
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const TitleContainer = styled.View``;

export const Title = styled.View``;

export const Category = styled.View``;

export const Content = styled.View`
  padding: ${ratioPx(24)};
  background-color: ${LIGHT_BG};
`;
