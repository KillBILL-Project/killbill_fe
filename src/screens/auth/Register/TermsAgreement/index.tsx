import React, { Dispatch, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import checkedIcon from '@assets/icon/checked.png';
import uncheckedIcon from '@assets/icon/unchecked.png';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { GREY900 } from '@constants/colors';
import { Medium14 } from '@components/Typography';
import { MyPageParamList } from '@type/navigation';
import {
  TermsAgreementButton,
  TermsAgreementCheckBox,
  TermsAgreementContainer,
  TermsAgreementDetailButton,
  TermsAgreementDetailButtonText,
} from './styles';

interface TermsAgreementProps {
  isCheckedTermsAgreement: boolean;
  setIsCheckedTermsAgreement: Dispatch<SetStateAction<boolean>>;
}

const TermsAgreement = ({
  isCheckedTermsAgreement,
  setIsCheckedTermsAgreement,
}: TermsAgreementProps) => {
  const { navigate } = useNavigation<NavigationProp<MyPageParamList>>();
  const { t } = useTranslation();
  const onPressTermsAgreementButton = () => setIsCheckedTermsAgreement(prevState => !prevState);
  const onPressDetail = () => {
    navigate('WebView', {
      url: 'https://wwooss.notion.site/4ffdf0c0d7134630bcc0482bb524bbe3?pvs=4',
    });
  };

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
      <TermsAgreementDetailButton onPress={onPressDetail}>
        <TermsAgreementDetailButtonText>
          {t('terms_agreement.button.detail')}
        </TermsAgreementDetailButtonText>
      </TermsAgreementDetailButton>
    </TermsAgreementContainer>
  );
};

export default TermsAgreement;