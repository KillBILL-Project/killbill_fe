import styled from 'styled-components/native';
import { AUTH_BORDER_RADIUS, AUTH_HEIGHT } from '../../../../../constants/constants';
import { GREY500, GREY900 } from '../../../../../constants/colors';

export const TermsAgreementContainer = styled.View`
  width: 100%;
  height: ${AUTH_HEIGHT};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  margin-bottom: 30px;
  background-color: #f7f7fb;
  border-radius: ${AUTH_BORDER_RADIUS};
`;

export const TermsAgreementButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const TermsAgreementCheckBox = styled.Image`
  width: 21px;
  height: 21px;
  margin-right: 5px;
`;

export const TermsAgreementButtonText = styled.Text`
  color: ${GREY900};
`;

export const TermsAgreementDetailButton = styled.TouchableOpacity``;

export const TermsAgreementDetailButtonText = styled.Text`
  color: ${GREY500};
`;
