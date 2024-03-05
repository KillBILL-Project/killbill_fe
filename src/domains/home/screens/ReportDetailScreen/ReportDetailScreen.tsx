import React, { useEffect } from 'react';
import { FlatList, Image, processColor, Text } from 'react-native';
import { BarChart } from 'react-native-charts-wrapper';
import { useQuery } from '@tanstack/react-query';
import { RouteProp, useRoute } from '@react-navigation/native';
import { findIndex } from 'lodash';
import Screen from '../../../../components/Screen/Screen';
import {
  BLACK,
  GREY100,
  GREY500,
  GREY600,
  GREY700,
  MAIN,
  PRIMARY,
  TRACK_BG,
  WHITE,
} from '../../../../constants/colors';
import { Bold12, Bold16, Medium14, Regular11, Regular12 } from '../../../../components/Typography';
import {
  Container,
  Header,
  OverviewContainer,
  WeeklyAttendanceStatus,
  AttendanceTitle,
  DailyIndicatorContainer,
  DailyIndicator,
  WeeklyChange,
  WeeklyChangeTitle,
  WeeklyTotalAmount,
  ChangeIndicator,
  ChangeIndicatorIcon,
  WeeklyChangeAmount,
  TrashSummaryContainer,
  TrashAmountContainer,
  TrashAmountTitle,
  TrashAmount,
  TrashCategoryChart,
  TrashChangeGuide,
  WeeklyChangeAmountText,
} from './ReportDetailScreen.style';
import Spacer from '../../../../components/Spacer/Spacer';
import Separator from '../../../../components/Separator/Separator';
import { styles } from '../../../../constants/constants';
import { MenuParamList } from '../../../../types/navigation';
import { getWeeklyReportDetail } from '../../../../services/api/reportService';
import Spinner from '../../../../components/Spinner';
import { TrashCategory } from '../../../../types/report';
import { ratio } from '../../../../utils/platform';

import increaseArrow from '../../../../assets/icon/arrow_increase.png';
import decreaseArrow from '../../../../assets/icon/arrow_decrease.png';

const days = ['월', '화', '수', '목', '금', '토', '일'];
const day = Array.from({ length: 7 }, (_, i) => ({
  name: days[i],
  value: i + 1,
}));
const trashCategory: TrashCategory[] = ['유리', '종이', '플라스틱', '캔', '비닐', '기타'];

const ReportDetailScreen = () => {
  const { params } = useRoute<RouteProp<MenuParamList, 'ReportDetail'>>();
  const { weeklyReportId, reportTitle } = params;

  const { data, isLoading } = useQuery({
    queryKey: ['report-detail'],
    queryFn: async () => {
      const response = await getWeeklyReportDetail(weeklyReportId);
      return response.data.data;
    },
  });

  useEffect(() => {
    console.log('data: ', data);
  }, [data]);

  return (
    <Screen
      title={params.reportTitle}
      isHeaderShown
      headerColor={BLACK}
      titleColor={WHITE}
      backButtonColor={WHITE}
    >
      {/* TODO: data 가 없는 케이스 작성 */}
      {isLoading || !data ? (
        <Spinner />
      ) : (
        <Container>
          <Header />
          <OverviewContainer style={styles.shadow}>
            <WeeklyAttendanceStatus>
              <AttendanceTitle>
                <Medium14 color={BLACK}>출석체크</Medium14>
              </AttendanceTitle>
              <FlatList
                data={day}
                renderItem={({ item }) => {
                  const attended = data.attendanceRecord.includes(item.value) ?? false;
                  return (
                    <DailyIndicator attended={attended}>
                      <Regular12 color={attended ? BLACK : GREY500}>{item.name}</Regular12>
                    </DailyIndicator>
                  );
                }}
                contentContainerStyle={{ flexDirection: 'row', justifyContent: 'flex-end' }}
              />
            </WeeklyAttendanceStatus>
            <Separator horizontal length={303} margin={16} />
            <WeeklyChange>
              <WeeklyChangeTitle>
                <Medium14 color={BLACK}>탄소절감량(Beta)</Medium14>
              </WeeklyChangeTitle>
              <WeeklyTotalAmount>
                <Bold12 color={BLACK}>{`${data.weeklyCarbonSaving ?? 0}gCO2`}</Bold12>
              </WeeklyTotalAmount>
              <ChangeIndicator>
                <ChangeIndicatorIcon />
                <WeeklyChangeAmount>
                  <Image
                    source={data.wowCarbonSaving > 0 ? increaseArrow : decreaseArrow}
                    style={{ width: 14, height: 14 }}
                  />
                  <WeeklyChangeAmountText>{data.wowCarbonSaving ?? 0}</WeeklyChangeAmountText>
                </WeeklyChangeAmount>
              </ChangeIndicator>
            </WeeklyChange>
            <Spacer height={16} />
            <WeeklyChange>
              <WeeklyChangeTitle>
                <Medium14 color={BLACK}>예상환급금(Beta)</Medium14>
              </WeeklyChangeTitle>
              <WeeklyTotalAmount>
                <Bold12 color={BLACK}>{`${data.weeklyRefund.toLocaleString()} 원`}</Bold12>
              </WeeklyTotalAmount>
              <ChangeIndicator>
                <ChangeIndicatorIcon />
                <WeeklyChangeAmount>
                  <Image
                    source={data.wowRefund > 0 ? increaseArrow : decreaseArrow}
                    style={{ width: 14, height: 14 }}
                  />
                  <WeeklyChangeAmountText>{data.wowRefund ?? 0}</WeeklyChangeAmountText>
                </WeeklyChangeAmount>
              </ChangeIndicator>
            </WeeklyChange>
          </OverviewContainer>
          <TrashSummaryContainer style={styles.shadow}>
            <TrashAmountContainer>
              <TrashAmountTitle>
                <Bold16 color={GREY700}>우리가 버린 쓰레기</Bold16>
              </TrashAmountTitle>
              <TrashAmount>
                <Bold16 color={GREY700}>{`${data.weeklyTrashCount.toLocaleString()}개`}</Bold16>
              </TrashAmount>
            </TrashAmountContainer>
            <TrashCategoryChart>
              <BarChart
                chartDescription={{ text: '' }}
                legend={{ enabled: false }}
                style={{ flex: 1 }}
                data={{
                  dataSets: [
                    {
                      values: trashCategory.map(item => {
                        const index = findIndex(data.weeklyTrashCountByCategoryList, {
                          trashCategoryName: item,
                        });
                        if (index < 0) return 0;
                        return data.weeklyTrashCountByCategoryList[index].trashCount ?? 0;
                      }),
                      label: '',
                      config: {
                        drawValues: false,
                        highlightColor: processColor(PRIMARY),
                        color: processColor(TRACK_BG),
                        highlightAlpha: 255,
                      },
                    },
                  ],
                  config: { barWidth: 0.7 },
                }}
                scaleEnabled={false}
                xAxis={{
                  valueFormatter: trashCategory,
                  position: 'BOTTOM',
                  drawGridLines: false,
                  textSize: ratio * 14,
                  textColor: processColor(GREY600),
                  fontWeight: '700',
                  drawAxisLine: false,
                }}
                yAxis={{
                  left: {
                    drawLabels: false,
                    drawAxisLine: false,
                    gridColor: processColor(GREY100),
                    spaceBottom: 0.05,
                  },
                  right: {
                    drawAxisLine: false,
                    gridColor: processColor(GREY100),
                    textSize: ratio * 12,
                    textColor: processColor(GREY600),
                    fontWeight: '400',
                    spaceBottom: 0.05,
                  },
                }}
              />
            </TrashCategoryChart>
            <TrashChangeGuide>
              <Text>
                <Bold12 color={GREY700}>지난주보다 쓰레기 배출량이 </Bold12>
                <Bold12 color={MAIN}>-11% 감소</Bold12>
                <Bold12 color={GREY700}>했어요!</Bold12>
              </Text>
            </TrashChangeGuide>
          </TrashSummaryContainer>
        </Container>
      )}
    </Screen>
  );
};

export default ReportDetailScreen;
