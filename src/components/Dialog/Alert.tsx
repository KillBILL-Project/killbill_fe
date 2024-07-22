import React from 'react';
import { Modal } from 'react-native';
import { BLACK, MAIN } from '@constants/colors';
import { useDialog } from '@states/context/DialogContext';
import { Medium16, Regular16 } from '@components/Typography';
import { AlertButton, Container, PopupContainer, PopupTextContainer } from './Dialog.style';

const Alert = () => {
  const { isShowDialog, hideAlert, dialogProps } = useDialog();

  const onPressConfirm = () => hideAlert();

  return (
    <Modal visible={isShowDialog}>
      <Container>
        <PopupContainer>
          <PopupTextContainer>
            {typeof dialogProps.alertMessage === 'string' ? (
              <Regular16 color={BLACK}>{dialogProps.alertMessage}</Regular16>
            ) : (
              dialogProps.alertMessage.map((value, index) => (
                <Regular16 key={value.length + index.toString()} color={BLACK}>
                  {value}
                </Regular16>
              ))
            )}
          </PopupTextContainer>
          <AlertButton onPress={onPressConfirm}>
            <Medium16 color={MAIN}>{dialogProps.confirmText}</Medium16>
          </AlertButton>
        </PopupContainer>
      </Container>
    </Modal>
  );
};

export default Alert;
