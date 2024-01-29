import React from 'react';
import { processColor, Text } from 'react-native';
import { BarChart } from 'react-native-charts-wrapper';
import Screen from '../../../../components/Screen/Screen';
import {
  BLACK,
  GREY100,
  GREY600,
  GREY700,
  MAIN,
  PRIMARY,
  TRACK_BG,
  WHITE,
} from '../../../../constants/colors';
import { Bold12, Medium14, Regular11, Regular12 } from '../../../../components/Typography';
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
} from './ReportDetailScreen.style';
import Spacer from '../../../../components/Spacer/Spacer';
import Separator from '../../../../components/Separator/Separator';
import { styles } from '../../../../constants/constants';

const ReportDetailScreen = () => {
  return (
    <Screen
      title="9월 4주차 리포트"
      isHeaderShown
      headerColor={BLACK}
      titleColor={WHITE}
      backButtonColor={WHITE}
    >
      <Container>
        <Header />
        <OverviewContainer style={styles.shadow}>
          <WeeklyAttendanceStatus>
            <AttendanceTitle>
              <Medium14 color={BLACK}>출석체크</Medium14>
            </AttendanceTitle>
            <DailyIndicatorContainer>
              <DailyIndicator>
                <Regular12 color={BLACK}>월</Regular12>
              </DailyIndicator>
              <DailyIndicator>
                <Regular12 color={BLACK}>화</Regular12>
              </DailyIndicator>
              <DailyIndicator>
                <Regular12 color={BLACK}>수</Regular12>
              </DailyIndicator>
              <DailyIndicator>
                <Regular12 color={BLACK}>목</Regular12>
              </DailyIndicator>
              <DailyIndicator>
                <Regular12 color={BLACK}>금</Regular12>
              </DailyIndicator>
              <DailyIndicator>
                <Regular12 color={BLACK}>토</Regular12>
              </DailyIndicator>
              <DailyIndicator>
                <Regular12 color={BLACK}>일</Regular12>
              </DailyIndicator>
            </DailyIndicatorContainer>
          </WeeklyAttendanceStatus>
          <Separator horizontal length={303} margin={16} />
          <WeeklyChange>
            <WeeklyChangeTitle>
              <Medium14 color={BLACK}>탄소절감량(Beta)</Medium14>
            </WeeklyChangeTitle>
            <WeeklyTotalAmount>
              <Bold12 color={BLACK}>2,937 gCO2</Bold12>
            </WeeklyTotalAmount>
            <ChangeIndicator>
              <ChangeIndicatorIcon />
              <WeeklyChangeAmount>
                <Regular11 color={GREY600}>1000</Regular11>
              </WeeklyChangeAmount>
            </ChangeIndicator>
          </WeeklyChange>
          <Spacer height={16} />
          <WeeklyChange>
            <WeeklyChangeTitle>
              <Medium14 color={BLACK}>탄소절감량(Beta)</Medium14>
            </WeeklyChangeTitle>
            <WeeklyTotalAmount>
              <Bold12 color={BLACK}>2,937 gCO2</Bold12>
            </WeeklyTotalAmount>
            <ChangeIndicator>
              <ChangeIndicatorIcon />
              <WeeklyChangeAmount>
                <Regular11 color={GREY600}>1000</Regular11>
              </WeeklyChangeAmount>
            </ChangeIndicator>
          </WeeklyChange>
        </OverviewContainer>
        <TrashSummaryContainer style={styles.shadow}>
          <TrashAmountContainer>
            <TrashAmountTitle>
              <Bold12 color={GREY700}>우리가 버린 쓰레기</Bold12>
            </TrashAmountTitle>
            <TrashAmount>
              <Bold12 color={GREY700}>30,000개</Bold12>
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
                    values: [8, 8, 20, 8, 38, 8],
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
                valueFormatter: ['유리', '종이', '플라스틱', '캔', '비닐', '기타'],
                position: 'BOTTOM',
                drawGridLines: false,
              }}
              yAxis={{
                left: {
                  drawLabels: false,
                  drawAxisLine: false,
                  gridColor: processColor(GREY100),
                },
                right: { drawAxisLine: false, gridColor: processColor(GREY100) },
              }}
            />
          </TrashCategoryChart>
          <TrashChangeGuide>
            <Text>
              <Bold12 color={GREY700}>지난주보다 쓰레기 배출량이 </Bold12>
              <Bold12 color={MAIN}>-11% 감소</Bold12>
              <Bold12 color={GREY700}>했네요</Bold12>
            </Text>
          </TrashChangeGuide>
        </TrashSummaryContainer>
      </Container>
    </Screen>
  );
};

export default ReportDetailScreen;
