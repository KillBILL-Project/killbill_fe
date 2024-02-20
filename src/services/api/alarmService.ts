import { AxiosResponse } from 'axios';
import api from '../utils/api';
import { WwoossResponse } from '../../types/common';
import { AlarmType } from '../../types/notifications';

/**
 * 알람 목록 가져오기
 * @return {
 *   alarmId: number
 *   dayOfWeek: number[]
 *   isOn: boolean
 *   sendHour: number
 *   sendMinute: number
 * }
 */
export const getAlarm = (): Promise<AxiosResponse<WwoossResponse<AlarmType[]>>> => {
  return api.get('/alarm');
};

/**
 * 알람 생성
 * @param params
 * {
 *   "dayOfWeekList": number[],
 *   "sendHour": number,
 *   "sendMinute": number
 * }
 */
export const createAlarm = (params: AlarmType): Promise<AxiosResponse<WwoossResponse<void>>> => {
  return api.post('/alarm', params);
};

/**
 * 알람 수정
 * @param params
 * {
 *   "dayOfWeekList": number[],
 *   "sendHour": number,
 *   "sendMinute": number
 * }
 */
export const updateAlarm = (params: AlarmType): Promise<AxiosResponse<WwoossResponse<void>>> => {
  return api.patch(`/alarm/${params.alarmId}`, params);
};

/**
 * 알람 삭제
 */
export const deleteAlarm = (alarmId: number): Promise<AxiosResponse<WwoossResponse<void>>> => {
  return api.delete(`/alarm/${alarmId}`);
};

/**
 * 알람 ON/OFF
 */
export const switchAlarm = (
  alarmId: number,
  isOn: boolean,
): Promise<AxiosResponse<WwoossResponse<void>>> => {
  return api.patch(`/alarm/${alarmId}/on-off`, { isOn });
};
