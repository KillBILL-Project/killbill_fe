import React, { Dispatch, SetStateAction, useContext } from 'react';
import { DialogProps, ShowAlertProps, ShowConfirmProps } from '@type/notifications';

interface DialogContextProps {
  isShowDialog: boolean;
  setIsShow: Dispatch<SetStateAction<boolean>>;
  dialogProps: DialogProps;
  showAlert: (props: ShowAlertProps) => Promise<unknown>;
  showConfirm: (props: ShowConfirmProps) => Promise<unknown>;
  hideAlert: () => void;
  hideConfirm: (confirmed: boolean) => void;
}

const DialogContext = React.createContext<DialogContextProps>({
  isShowDialog: false,
  setIsShow: () => {},
  dialogProps: { dialogType: 'ALERT', alertMessage: '', confirmText: '확인', cancelText: '취소' },
  showAlert: () => new Promise(() => {}),
  showConfirm: () => new Promise(() => {}),
  hideAlert: () => {},
  hideConfirm: () => {},
});

export const useDialog = () => useContext(DialogContext);

export default DialogContext;
