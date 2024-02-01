export interface ShowAlertProps {
  alertMessage: string | string[];
  confirmText?: string;
}

export interface ShowConfirmProps {
  alertMessage: string | string[];
  confirmText?: string;
  cancelText?: string;
}

export interface DialogProps {
  dialogType: 'ALERT' | 'CONFIRM';
  alertMessage: string | string[];
  confirmText?: string;
  cancelText?: string;
}
