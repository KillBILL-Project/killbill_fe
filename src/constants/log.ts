export interface RecordActiveLogParams {
  activeLogType: ActiveLogType;
}

export type ActiveLogType = 'QUIZ';

export interface UserActiveLogType {
  userActiveLogId: number;
  contents: string;
  value: number;
}
