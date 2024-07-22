import React from 'react';
import { Modal } from 'react-native';
import { BLACK, MAIN } from '@constants/colors';
import { useDialog } from '@states/context/DialogContext';
import { Medium16, Regular16 } from '@components/Typography';
import {
  ConfirmButtonContainer,
  ConfirmButtonLeft,
  ConfirmButtonRight,
  Container,
  PopupContainer,
  PopupTextContainer,
} from './Dialog.style';

const Confirm = () => {
  const { isShowDialog, hideConfirm, dialogProps } = useDialog();

  const onPressConfirm = () => hideConfirm(true);
  const onPressCancel = () => hideConfirm(false);

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
          <ConfirmButtonContainer>
            <ConfirmButtonLeft onPress={onPressCancel}>
              <Medium16 color={MAIN}>{dialogProps.cancelText}</Medium16>
            </ConfirmButtonLeft>
            <ConfirmButtonRight onPress={onPressConfirm}>
              <Medium16 color={MAIN}>{dialogProps.confirmText}</Medium16>
            </ConfirmButtonRight>
          </ConfirmButtonContainer>
        </PopupContainer>
      </Container>
    </Modal>
  );
};

export default Confirm;
