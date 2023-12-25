import React from 'react';
import { PopupTextContainer, AlertButton, PopupContainer } from './Popup.style';
import { Medium16, Regular16 } from '../Typography/Typography';
import { BLACK, MAIN } from '../../constants/colors';
import { PopupProps } from '../../types/common';
import Backdrop from '../Backdrop/Backdrop';

const Alert = ({ text, confirmText = '확인', onPressConfirm }: PopupProps) => {
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
