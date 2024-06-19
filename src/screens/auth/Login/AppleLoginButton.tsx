import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import AppleLoginIcon from '@assets/icon/login_icon_apple.png';
import { BLACK, WHITE } from '@constants/colors';
import { LoginType } from '@type/common';
import BaseButton from '@components/BaseButton';

const AppleLoginButton: React.FC<{ login: (loginType: LoginType) => Promise<void> }> = ({
  login,
}) => {
  const { t } = useTranslation();

  const onPressAppleLoginButton = useCallback(() => login('APPLE'), []);

  return (
    <BaseButton
      onPress={onPressAppleLoginButton}
      text={t('login.button.apple_login')}
      backgroundColor={BLACK}
      color={WHITE}
      icon={AppleLoginIcon}
      marginBottom={12}
    />
  );
};

export default AppleLoginButton;
