export type CarbonMetricsKeyType = 'emission' | 'reduction';

export type TooltipKeyType = 'token' | 'refund' | 'emission' | 'reduction';

export interface TooltipContentType {
  text: string;
  bold: boolean;
  newline: boolean;
}

export type TooltipType = {
  [key in TooltipKeyType]: {
    title: string;
    content: TooltipContentType[];
  };
};

export const tooltip: TooltipType = {
  token: {
    title: '토큰이란?',
    content: [
      {
        text: '향후 개인의 ',
        bold: false,
        newline: false,
      },
      {
        text: '분리수거 환경 활동을 자산화',
        bold: true,
        newline: false,
      },
      {
        text: '할 수 있는 환경 블록체인 토큰(TOKEN)입니다. 현재는 오픈베타 중이며, 향후 프로젝트가 완료되면 사용할 수 있습니다.',
        bold: false,
        newline: false,
      },
    ],
  },
  refund: {
    title: '예상환급금이란?',
    content: [
      {
        text: '분리수거 ',
        bold: false,
        newline: false,
      },
      {
        text: '활동을 통하여 받을 수 있는 잠재적인 예상환급금 누적 수치',
        bold: true,
        newline: false,
      },
      {
        text: '입니다.',
        bold: false,
        newline: false,
      },
      {
        text: '해당 수치는 환급을 보장하는 금액은 아니며, 지역과 수거업체마다 다를 수 있습니다.',
        bold: false,
        newline: true,
      },
    ],
  },
  reduction: {
    title: '탄소절감량이란?',
    content: [
      {
        text: '분리수거 활동을 통하여 절감한 탄소절감량 누적 수치입니다. 기록량에 인증량이 포함됩니다.',
        bold: false,
        newline: false,
      },
      {
        text: '(인증) = 기록과 증명까지 완료한 절감량의 합',
        bold: false,
        newline: true,
      },
      {
        text: '(기록) = 증명없이 기록만 완료한 절감량의 합',
        bold: false,
        newline: true,
      },
    ],
  },
  emission: {
    title: '탄소배출량이란?',
    content: [
      {
        text: '분리수거 활동을 통하여 절감한 탄소배출량 누적 수치입니다. 기록량에 인증량이 포함됩니다.',
        bold: false,
        newline: false,
      },
      {
        text: '(인증) = 기록과 증명까지 완료한 배출량의 합',
        bold: false,
        newline: true,
      },
      {
        text: '(기록) = 증명없이 기록만 완료한 배출량의 합',
        bold: false,
        newline: true,
      },
    ],
  },
};

export type CarbonMetricsType = {
  [key in CarbonMetricsKeyType]: { key: TooltipKeyType; title: string; switchTitle: string };
};

export const carbonMetrics: CarbonMetricsType = {
  emission: {
    key: 'emission',
    title: '탄소배출량',
    switchTitle: '절감량으로 보기',
  },
  reduction: {
    key: 'reduction',
    title: '탄소절감량',
    switchTitle: '배출량으로 보기',
  },
};

export interface TooltipBottomSheetProps {
  setActive: (param: boolean) => void;
  selectedTooltip: TooltipKeyType;
}

export interface QrCodeBottomSheetProps {
  setActive: (param: boolean) => void;
}
