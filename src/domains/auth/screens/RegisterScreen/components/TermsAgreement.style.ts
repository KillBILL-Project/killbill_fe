import styled from 'styled-components/native';
import { AUTH_BORDER_RADIUS, AUTH_HEIGHT, INPUT_WIDTH } from '../../../../../constants/constants';
import { GREY500 } from '../../../../../constants/colors';
import { px, ratioPx } from '../../../../../utils/platform';

export const TermsAgreementContainer = styled.View`
  width: ${px(INPUT_WIDTH)};
  height: ${px(AUTH_HEIGHT)};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 ${ratioPx(10)};
  margin-bottom: ${ratioPx(40)};
  background-color: #f7f7fb;
  border-radius: ${px(AUTH_BORDER_RADIUS)};
`;

export const TermsAgreementButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const TermsAgreementCheckBox = styled.Image`
  width: ${ratioPx(21)};
  height: ${ratioPx(21)};
  margin-right: ${ratioPx(5)};
`;

export const TermsAgreementDetailButton = styled.TouchableOpacity``;

export const TermsAgreementDetailButtonText = styled.Text`
  color: ${GREY500};
`;
