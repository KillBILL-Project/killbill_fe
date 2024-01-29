import React from 'react';
import { PopupTextContainer, AlertButton, PopupContainer } from './Popup.style';
import { Medium16, Regular16 } from '../Typography';
import { BLACK, MAIN } from '../../constants/colors';
import { PopupProps } from '../../types/common';
import Backdrop from '../Backdrop/Backdrop';
import i18n from '../../locales/i18n';

const Alert = ({
  text,
  confirmText = i18n.t('alert.confirm_text'),
  onPressConfirm,
}: PopupProps) => {
  return (
    <Backdrop>
      <PopupContainer>
        <PopupTextContainer>
          {typeof text === 'string' ? (
            <Regular16 color={BLACK}>{text}</Regular16>
          ) : (
            text.map((value, index) => (
              <Regular16 key={value.length + index.toString()} color={BLACK}>
                {value}
              </Regular16>
            ))
          )}
        </PopupTextContainer>
        <AlertButton onPress={onPressConfirm}>
          <Medium16 color={MAIN}>{confirmText}</Medium16>
        </AlertButton>
      </PopupContainer>
    </Backdrop>
  );
};

export default Alert;
