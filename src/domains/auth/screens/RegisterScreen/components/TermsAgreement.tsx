import React, { Dispatch, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import {
  TermsAgreementButton,
  TermsAgreementCheckBox,
  TermsAgreementContainer,
  TermsAgreementDetailButton,
  TermsAgreementDetailButtonText,
} from './TermsAgreement.style';
import checkedIcon from '../../../../../assets/icon/checked.png';
import uncheckedIcon from '../../../../../assets/icon/unchecked.png';
import { Medium14 } from '../../../../../components/Typography';
import { GREY900 } from '../../../../../constants/colors';

interface TermsAgreementProps {
  isCheckedTermsAgreement: boolean;
  setIsCheckedTermsAgreement: Dispatch<SetStateAction<boolean>>;
}

const TermsAgreement = ({
  isCheckedTermsAgreement,
  setIsCheckedTermsAgreement,
}: TermsAgreementProps) => {
  const { t } = useTranslation();
  const onPressTermsAgreementButton = () => setIsCheckedTermsAgreement(prevState => !prevState);

  return (
    <TermsAgreementContainer>
      <TermsAgreementButton onPress={onPressTermsAgreementButton}>
        {isCheckedTermsAgreement ? (
          <TermsAgreementCheckBox source={checkedIcon} />
        ) : (
          <TermsAgreementCheckBox source={uncheckedIcon} />
        )}
        <Medium14 color={GREY900}>{t('terms_agreement.terms.0')}</Medium14>
      </TermsAgreementButton>
      <TermsAgreementDetailButton>
        <TermsAgreementDetailButtonText>
          {t('terms_agreement.button.detail')}
        </TermsAgreementDetailButtonText>
      </TermsAgreementDetailButton>
    </TermsAgreementContainer>
  );
};

export default TermsAgreement;
