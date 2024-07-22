import { ImageSourcePropType } from 'react-native';

import common from '@assets/image/user_guide/common.png';
import canMain from '@assets/image/user_guide/can/main.png';
import canRecycle from '@assets/image/user_guide/can/recycle.png';
import canComposition from '@assets/image/user_guide/can/composition.png';
import canComposition2 from '@assets/image/user_guide/can/composition_2.png';
import generalMain from '@assets/image/user_guide/general/main.png';
import generalComposition from '@assets/image/user_guide/general/composition.png';
import generalComposition2 from '@assets/image/user_guide/general/composition_2.png';
import guideAlarm from '@assets/image/user_guide/guide/alarm.png';
import guideThrow from '@assets/image/user_guide/guide/throw.png';
import guideEmpty from '@assets/image/user_guide/guide/empty.png';
import guideRefund from '@assets/image/user_guide/guide/refund.png';
import paperMain from '@assets/image/user_guide/paper/main.png';
import paperRecycle from '@assets/image/user_guide/paper/recycle.png';
import paperComposition from '@assets/image/user_guide/paper/composition.png';
import paperComposition2 from '@assets/image/user_guide/paper/composition_2.png';
import plasticMain from '@assets/image/user_guide/plastic/main.png';
import plasticRecycle from '@assets/image/user_guide/plastic/recycle.png';
import plasticComposition from '@assets/image/user_guide/plastic/composition.png';
import plasticComposition2 from '@assets/image/user_guide/plastic/composition_2.png';
import glassMain from '@assets/image/user_guide/glass/main.png';
import glassRecycle from '@assets/image/user_guide/glass/recycle.png';
import glassComposition from '@assets/image/user_guide/glass/composition.png';
import glassComposition2 from '@assets/image/user_guide/glass/composition_2.png';
import vinylMain from '@assets/image/user_guide/vinyl/main.png';
import vinylRecycle from '@assets/image/user_guide/vinyl/recycle.png';
import vinylComposition from '@assets/image/user_guide/vinyl/composition.png';
import vinylComposition2 from '@assets/image/user_guide/vinyl/composition_2.png';
import GlobalVariableManager from '@services/utils/GlobalVariableManager';
import { width, windowHeight } from '@utils/platform';
import { HEADER_HEIGHT } from './constants';

export interface GuidanceContentType {
  colorType?: string;
  title?: string;
  content?: string[];
  contentType?: 'numbering' | 'list' | 'array';
}

export interface GuidanceType {
  image?: ImageSourcePropType;
  isFullWidth?: boolean;
  guidance?: GuidanceContentType;
}

export type UserGuideList =
  | 'plasticGuide'
  | 'paperGuide'
  | 'glassGuide'
  | 'canGuide'
  | 'vinylGuide'
  | 'generalGuide'
  | 'serviceGuide';

export type UserGuideListType = {
  [key in UserGuideList]: GuidanceType[];
};

export type UserGuideCategoryType = {
  [key in UserGuideList]: {
    title: string;
    icon: ImageSourcePropType;
  };
};

export interface UserGuideDetailParams {
  category: UserGuideList;
}

export const userGuideCategoryArray: UserGuideList[] = [
  'plasticGuide',
  'paperGuide',
  'glassGuide',
  'canGuide',
  'vinylGuide',
  'generalGuide',
  'serviceGuide',
];

export const userGuideCategory: UserGuideCategoryType = {
  plasticGuide: {
    title: '플라스틱 가이드',
    icon: plasticMain,
  },
  paperGuide: {
    title: '종이 가이드',
    icon: paperMain,
  },
  glassGuide: {
    title: '유리 가이드',
    icon: glassMain,
  },
  canGuide: {
    title: '캔 가이드',
    icon: canMain,
  },
  vinylGuide: {
    title: '비닐 가이드',
    icon: vinylMain,
  },
  generalGuide: {
    title: '일반쓰레기 가이드',
    icon: generalMain,
  },
  serviceGuide: {
    title: '서비스 이용 가이드',
    icon: guideThrow,
  },
};

export const commonGuidance: GuidanceType = {
  image: common,
  isFullWidth: true,
  guidance: {
    title: '공통 분리수거 가이드',
    content: ['첫번째, 비운다', '두번째, 헹군다', '세번째, 분리한다', '네번째, 섞지 않는다'],
    contentType: 'list',
  },
};

export const plasticGuide: GuidanceType[] = [
  {
    image: plasticMain,
  },
  { ...commonGuidance },
  {
    image: plasticRecycle,
    guidance: {
      colorType: 'type2',
      title: '분리수거 방법',
      content: [
        '플라스틱 성분(마크)확인하기',
        '플라스틱의 이물질을 제거하기',
        '플라스틱과 다른 성분 분리하기',
        '플라스틱 분리수거함 확인 및 사용하기',
      ],
      contentType: 'numbering',
    },
  },
  {
    image: plasticComposition,
    guidance: {
      title: '성분예시',
      content: ['음료수병', '배달용기', '세제', '샴푸'],
      contentType: 'array',
    },
  },
  {
    image: plasticComposition2,
    guidance: {
      colorType: 'type2',
      title: '성분예시 이미지',
    },
  },
];

export const paperGuide: GuidanceType[] = [
  {
    image: paperMain,
  },
  { ...commonGuidance },
  {
    image: paperRecycle,
    guidance: {
      colorType: 'type2',
      title: '분리수거 방법',
      content: [
        '종이 성분(마크) 확인하기',
        '종이에 묻어있는 내용물 제거하기',
        '종이와 다른 성분 분리하기 (ex. 라벨 등)',
        '종이 제품 펼치기',
        '중요한 문서는 조각 낸 후 분리수거',
        '종이 분리수거함(용기)확인 및 사용하기',
      ],
      contentType: 'numbering',
    },
  },
  {
    image: paperComposition,
    guidance: {
      title: '성분예시',
      content: ['택배상자', '포장박스', '서류'],
      contentType: 'array',
    },
  },
  {
    image: paperComposition2,
    guidance: {
      colorType: 'type2',
      title: '성분예시 이미지',
    },
  },
];

export const glassGuide: GuidanceType[] = [
  {
    image: glassMain,
  },
  { ...commonGuidance },
  {
    image: glassRecycle,
    guidance: {
      colorType: 'type2',
      title: '분리수거 방법',
      content: [
        '유리(병) 성분(마크) 확인하기',
        '유리(병) 라벨이나 뚜껑 제거하기',
        '유리(병) 세척하기',
        '유리(병) 분리수거함 확인 및 사용하기',
      ],
      contentType: 'numbering',
    },
  },
  {
    image: glassComposition,
    guidance: {
      title: '성분예시',
      content: ['와인병', '소스용기'],
      contentType: 'array',
    },
  },
  {
    image: glassComposition2,
    guidance: {
      colorType: 'type2',
      title: '성분예시 이미지',
    },
  },
];

export const canGuide: GuidanceType[] = [
  {
    image: canMain,
  },
  { ...commonGuidance },
  {
    image: canRecycle,
    guidance: {
      colorType: 'type2',
      title: '분리수거 방법',
      content: [
        '캔 성분(마크) 확인하기',
        '캔의 이물질을 제거하기',
        '캔과 다른 성분 분리하기 (ex. 라벨, 뚜껑)',
        '캔 압축하기',
        '캔 분리수거함 확인 및 사용하기',
      ],
      contentType: 'numbering',
    },
  },
  {
    image: canComposition,
    guidance: {
      title: '성분예시',
      content: ['음료수', '캔', '통조림'],
      contentType: 'array',
    },
  },
  {
    image: canComposition2,
    guidance: {
      colorType: 'type2',
      title: '성분예시 이미지',
    },
  },
];

export const vinylGuide: GuidanceType[] = [
  {
    image: vinylMain,
  },
  { ...commonGuidance },
  {
    image: vinylRecycle,
    guidance: {
      colorType: 'type2',
      title: '분리수거 방법',
      content: [
        '비닐 종류 확인하기',
        '비닐 내용물 및 물질 분리하기',
        '색상/투명 비닐 봉투 구분 (지역에 따라)',
        '플라스틱 및 종이 분리 ',
        '비닐 분리수거함 확인 및 사용하기',
      ],
      contentType: 'numbering',
    },
  },
  {
    image: vinylComposition,
    guidance: {
      title: '성분예시',
      content: ['봉투', '택배포장지'],
      contentType: 'array',
    },
  },
  {
    image: vinylComposition2,
    guidance: {
      colorType: 'type2',
      title: '성분예시 이미지',
    },
  },
];

export const generalGuide: GuidanceType[] = [
  {
    image: generalMain,
  },
  { ...commonGuidance },
  {
    image: undefined,
    guidance: {
      colorType: 'type2',
      title: '분리수거 방법',
      content: [
        '분리수거 불가능 확인을 위한 성분 확인',
        '일반쓰레기 봉투 사용',
        '일반쓰레기 수거함 사용',
        '수거일 및 규정 확인',
      ],
      contentType: 'numbering',
    },
  },
  {
    image: generalComposition,
    guidance: {
      title: '성분예시',
      content: ['휴지', '과자봉지'],
      contentType: 'array',
    },
  },
  {
    image: generalComposition2,
    guidance: {
      colorType: 'type2',
      title: '성분예시 이미지',
    },
  },
];

export const serviceGuide: GuidanceType[] = [
  {
    image: guideAlarm,
    guidance: {
      title: '분리수거 방법',
      content: ['생활패턴을 고려하여 쓰레기를 잘 배출하는 시간으로 설정해주세요'],
      contentType: 'list',
    },
  },
  {
    image: guideThrow,
    guidance: {
      title: '쓰레기 버리기',
      content: [
        '홈 화면에서 배출한 쓰레기를 입력해주세요',
        '성분의 크기를 입력해주세요',
        '성분을 찾아주세요',
        '클릭으로 쓰레기통에 넣어주세요',
      ],
      contentType: 'list',
    },
  },
  {
    image: guideEmpty,
    guidance: {
      title: '쓰레기 비우기',
      content: [
        '쌓아놓은 쓰레기는 ‘비우기’ 버튼을 통하여 적당한 시점에 비워주세요',
        '비우기리포트와 주간리포트를 통하여 버린 쓰레기의 탄소절감량과 예상환급금을 확인해주세요',
      ],
      contentType: 'list',
    },
  },
  {
    image: guideRefund,
    guidance: {
      title: '예상환급금 조회',
      content: [
        '리포트들을 통하여 쓰레기 배출 습관을 개선해서 탄소절감량을 늘리고 예상환급금도 받아보세요',
      ],
      contentType: 'list',
    },
  },
];

export const userGuideList: UserGuideListType = {
  plasticGuide,
  paperGuide,
  glassGuide,
  canGuide,
  vinylGuide,
  generalGuide,
  serviceGuide,
};

export const ratio = 327 / 756;
export const h = windowHeight - HEADER_HEIGHT - GlobalVariableManager.insets.top;
export const w = h * ratio;
export const hRatio = h / 756;
export const paddingHorizontal = (width - w) / 2;
export const titleMarginTop = hRatio * 60;
export const titleMarginBottom = hRatio * 12;
export const titleLineHeight = hRatio * 28;
export const titleHeight = titleMarginTop + titleMarginBottom + titleLineHeight;
