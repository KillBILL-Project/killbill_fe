export interface WeekInfoType {
  year: number;
  weekOfMonth: number;
  month: number;
  isChanged?: boolean;
}

export interface ReportType {
  complimentCardIconList: [];
  fromDate: string;
  toDate: string;
  weekInfo: WeekInfoType;
  weeklyReportId: number;
}

export interface ReportResponseType {
  hasNext: boolean;
  weeklyReportResponseList: ReportType[];
}
