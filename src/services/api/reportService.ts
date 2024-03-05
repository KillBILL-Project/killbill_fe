import { AxiosResponse } from 'axios';
import api from '../utils/api';
import { objectToQueryParam } from '../../utils/common';
import { WwoossResponse } from '../../types/common';
import { ReportDetailType, ReportResponseType } from '../../types/report';

interface GetWeeklyReportParams {
  date?: string;
  page: number;
  size?: number;
}

export const getWeeklyReport = async (
  params: GetWeeklyReportParams,
): Promise<AxiosResponse<WwoossResponse<ReportResponseType>>> => {
  const queryParam = objectToQueryParam(params);

  return api.get(`/weekly-reports?${queryParam}`);
};

export const getWeeklyReportDetail = async (
  weeklyReportId: number,
): Promise<AxiosResponse<WwoossResponse<ReportDetailType>>> => {
  return api.get(`/weekly-reports/${weeklyReportId}`);
};
