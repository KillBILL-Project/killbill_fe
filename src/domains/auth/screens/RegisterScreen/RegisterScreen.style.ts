import styled from 'styled-components/native';
import { WHITE } from '../../../../constants/colors';
import { AUTH_BORDER_RADIUS, AUTH_HEIGHT } from '../../../../constants/constants';

export const Container = styled.ScrollView`
  flex: 1;
  padding: 20px;
  background-color: ${WHITE};
`;

export const RegisterContainer = styled.View`
  flex: 1;
  align-items: center;
`;

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

export const TermsAgreementButtonText = styled.Text``;

export const TermsAgreementDetailButton = styled.TouchableOpacity``;

export const TermsAgreementDetailButtonText = styled.Text``;

export const RegisterBottomContainer = styled.View`
  margin-top: 20px;
  align-items: center;
`;
