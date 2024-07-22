import { objectToQueryParam } from '@utils/common';
import { ApiResponse } from '@type/common';
import { ReportDetailType, ReportResponseType } from '@type/report';
import api from '@services/utils/api';

interface GetWeeklyReportParams {
  date?: string;
  page: number;
  size?: number;
}

export const getWeeklyReport = async (
  params: GetWeeklyReportParams,
): Promise<ReportResponseType> => {
  const queryParam = objectToQueryParam(params);
  const response = await api.get(`/weekly-reports?${queryParam}`);
  return response.data.data;
};

export const getWeeklyReportDetail = async (
  weeklyReportId: number,
): ApiResponse<ReportDetailType> => {
  return api.get(`/weekly-reports/${weeklyReportId}`);
};
