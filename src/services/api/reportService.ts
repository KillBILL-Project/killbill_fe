import { AxiosResponse } from 'axios';
import api from '../utils/api';
import { objectToQueryParam } from '../../utils/common';
import { WwoossResponse } from '../../types/common';
import { ReportResponseType } from '../../types/report';

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
