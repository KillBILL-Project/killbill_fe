import { ApiResponse } from '@type/common';
import { AlarmType } from '@type/notifications';
import api from '@services/utils/api';

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
export const getAlarm = (): ApiResponse<AlarmType[]> => {
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
export const createAlarm = (params: AlarmType): ApiResponse<void> => {
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
export const updateAlarm = (params: AlarmType): ApiResponse<void> => {
  return api.patch(`/alarm/${params.alarmId}`, params);
};

/**
 * 알람 삭제
 */
export const deleteAlarm = (alarmId: number): ApiResponse<void> => {
  return api.delete(`/alarm/${alarmId}`);
};

/**
 * 알람 ON/OFF
 */
export const switchAlarm = ({
  alarmId,
  isOn,
}: {
  alarmId: number;
  isOn: boolean;
}): ApiResponse<void> => {
  return api.patch(`/alarm/${alarmId}/on-off`, { on: isOn });
};
