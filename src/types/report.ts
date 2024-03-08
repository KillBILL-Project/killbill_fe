import { ComplimentCardType } from '../services/api/complimentService';

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

export interface ReportDetailParams {
  weeklyReportId: number;
  reportTitle: string;
}

export type TrashCategory = '유리' | '종이' | '플라스틱' | '캔' | '비닐' | '기타';

export interface ReportDetailType {
  weeklyReportId: number;
  attendanceRecord: number[];
  weeklyCarbonSaving: number;
  weeklyRefund: number;
  weeklyTrashCount: number;
  wowCarbonSaving: number;
  wowRefund: number;
  wowTrashCount: number;
  weeklyTrashCountByCategoryList: [
    {
      trashCategoryName: TrashCategory;
      trashCount: number;
    },
  ];
  complimentCardIconList: ComplimentCardType[];
}
