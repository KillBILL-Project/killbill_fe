import React, { ReactNode, useCallback, useMemo, useState } from 'react';
import DialogContext from './DialogContext';
import { DialogProps, ShowAlertProps, ShowConfirmProps } from '../../types/notifications';

interface PromiseType {
  resolve: (value?: unknown) => void;
  reject: (reason?: any) => void;
}

const DialogProvider = ({ children }: { children: ReactNode }) => {
  const [isShow, setIsShow] = useState(false);
  const [dialogProps, setDialogProps] = useState<DialogProps>({
    dialogType: 'ALERT',
    alertMessage: '',
    confirmText: '확인',
    cancelText: '취소',
  });
  const [promise, setPromise] = useState<PromiseType>({ resolve: () => {}, reject: () => {} });

  const hideAlert = useCallback(() => {
    promise.resolve();
    setIsShow(false);
  }, [promise]);

  const hideConfirm = useCallback(
    (confirmed: boolean) => {
      if (confirmed) promise.resolve();
      else promise.reject(() => {});
      setIsShow(false);
    },
    [promise],
  );

  const showDialog = (props: DialogProps) => {
    return new Promise((resolve, reject) => {
      setDialogProps(prevState => ({
        dialogType: props.dialogType,
        alertMessage: props.alertMessage,
        confirmText: props.confirmText ?? prevState.confirmText,
        cancelText: props.cancelText ?? prevState.cancelText,
      }));
      setIsShow(true);
      setPromise({ resolve, reject });
    });
  };

  const showAlert = useCallback((props: ShowAlertProps) => {
    const showDialogProps: DialogProps = { ...props, dialogType: 'ALERT' };
    return showDialog(showDialogProps);
  }, []);

  const showConfirm = useCallback((props: ShowConfirmProps) => {
    const showDialogProps: DialogProps = { ...props, dialogType: 'CONFIRM' };
    return showDialog(showDialogProps);
  }, []);

  return useMemo(
    () => (
      <DialogContext.Provider
        value={{
          isShowDialog: isShow,
          setIsShow,
          dialogProps,
          showAlert,
          showConfirm,
          hideAlert,
          hideConfirm,
        }}
      >
        {children}
      </DialogContext.Provider>
    ),
    [children, isShow, dialogProps, showAlert, hideAlert, showConfirm, hideConfirm],
  );
};

export default DialogProvider;
