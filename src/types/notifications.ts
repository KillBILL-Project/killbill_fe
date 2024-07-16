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

export interface AlarmType {
  alarmId?: number;
  dayOfWeekList: number[];
  on?: boolean;
  sendHour: number;
  sendMinute: number;
}

export interface AlarmParams {
  alarmId?: number;
  dayOfWeek: number[];
  isOn?: boolean;
  meridiem: string;
  hour: string;
  minute: string;
}
