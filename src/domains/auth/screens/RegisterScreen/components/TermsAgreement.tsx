import React, { Dispatch, SetStateAction } from 'react';
import {
  TermsAgreementButton,
  TermsAgreementCheckBox,
  TermsAgreementContainer,
  TermsAgreementDetailButton,
  TermsAgreementDetailButtonText,
} from './TermsAgreement.style';
import checkedIcon from '../../../../../assets/icon/checked.png';
import uncheckedIcon from '../../../../../assets/icon/unchecked.png';
import { Medium14 } from '../../../../../components/Typography/Typography';
import { GREY900 } from '../../../../../constants/colors';

interface TermsAgreementProps {
  isCheckedTermsAgreement: boolean;
  setIsCheckedTermsAgreement: Dispatch<SetStateAction<boolean>>;
}

const TermsAgreement = ({
  isCheckedTermsAgreement,
  setIsCheckedTermsAgreement,
}: TermsAgreementProps) => {
  const onPressTermsAgreementButton = () => setIsCheckedTermsAgreement(prevState => !prevState);

  return (
    <TermsAgreementContainer>
      <TermsAgreementButton onPress={onPressTermsAgreementButton}>
        {isCheckedTermsAgreement ? (
          <TermsAgreementCheckBox source={checkedIcon} />
        ) : (
          <TermsAgreementCheckBox source={uncheckedIcon} />
        )}
        <Medium14 color={GREY900}>서비스 이용약관 동의 (필수)</Medium14>
      </TermsAgreementButton>
      <TermsAgreementDetailButton>
        <TermsAgreementDetailButtonText>{'자세히 >'}</TermsAgreementDetailButtonText>
      </TermsAgreementDetailButton>
    </TermsAgreementContainer>
  );
};

export default TermsAgreement;
