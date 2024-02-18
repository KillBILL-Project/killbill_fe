import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import BaseButton from '../../../components/BaseButton/BaseButton';
import { BLACK, WHITE } from '../../../../../constants/colors';
import AppleLoginIcon from '../../../../../assets/icon/login_icon_apple.png';
import { LoginType } from '../../../../../types/common';

const AppleLoginButton: React.FC<{ login: (loginType: LoginType) => Promise<void> }> = ({
  login,
}) => {
  const { t } = useTranslation();

  const onPressAppleLoginButton = useCallback(() => login('APPLE'), []);

  return (
    <>
      <BaseButton
        onPress={onPressAppleLoginButton}
        text={t('login.button.apple_login')}
        backgroundColor={BLACK}
        color={WHITE}
        icon={AppleLoginIcon}
        marginBottom={12}
      />
    </>
  );
};

export default AppleLoginButton;
