import React from 'react';
import {
  PopupTextContainer,
  PopupContainer,
  ConfirmButtonContainer,
  ConfirmButtonLeft,
  ConfirmButtonRight,
} from './Popup.style';
import { Medium16, Regular16 } from '../Typography';
import { BLACK, MAIN } from '../../constants/colors';
import { PopupProps } from '../../types/common';
import i18n from '../../locales/i18n';

const Confirm = ({
  text,
  confirmText = i18n.t('confirm.confirm_text'),
  onPressConfirm,
  onPressCancel,
}: PopupProps) => {
  return (
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
      <ConfirmButtonContainer>
        <ConfirmButtonLeft onPress={onPressCancel}>
          <Medium16 color={MAIN}>{i18n.t('confirm.cancel_text')}</Medium16>
        </ConfirmButtonLeft>
        <ConfirmButtonRight onPress={onPressConfirm}>
          <Medium16 color={MAIN}>{confirmText}</Medium16>
        </ConfirmButtonRight>
      </ConfirmButtonContainer>
    </PopupContainer>
  );
};

export default Confirm;
