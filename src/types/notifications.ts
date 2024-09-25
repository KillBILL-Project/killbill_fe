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
