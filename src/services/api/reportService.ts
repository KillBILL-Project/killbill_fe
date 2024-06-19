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
): ApiResponse<ReportResponseType> => {
  const queryParam = objectToQueryParam(params);

  return api.get(`/weekly-reports?${queryParam}`);
};

export const getWeeklyReportDetail = async (
  weeklyReportId: number,
): ApiResponse<ReportDetailType> => {
  return api.get(`/weekly-reports/${weeklyReportId}`);
};
