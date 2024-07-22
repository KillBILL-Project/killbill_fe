import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Image, ScrollView } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { BannerAd, BannerAdSize } from 'react-native-google-mobile-ads';
import arrow from '@assets/icon/arrow-right-black.png';
import { trashMeta } from '@constants/data';
import { styles } from '@constants/constants';
import { BLACK, GREY600, GREY700, MAIN } from '@constants/colors';
import { HomeTabParamList } from '@type/navigation';
import { CarbonSavingType, RefundType } from '@services/api/trashService';
import { getColorOfTrashCategory } from '@utils/trash';
import PieChart, { PieChartData } from '@components/PieChart';
import { Bold16, Bold18, Regular14, Regular16 } from '@components/Typography';
import { calculatePercentage } from '@utils/common';
import { scale } from '@utils/platform';
import useEmptyTrashMutation from '@hooks/mutation/trash/useEmptyTrashMutation';
import Screen from '@components/Screen';
import Spacer from '@components/Spacer';
import BaseButton from '@components/BaseButton';
import {
  AdSection,
  BottomArea,
  CarbonSavingRateContainer,
  CompleteText,
  CompleteTextContainer,
  Container,
  Contents,
  NavigateLocationButton,
  RefundContainer,
  RefundContents,
  RefundInfo,
  RefundTitleContainer,
  TopBlackArea,
  TotalCarbonSavingContainer,
  TrashCategoryContainer,
  TrashColorIndicator,
  TrashContainer,
  TrashRateChartContainer,
  TrashRateContainer,
} from './styles';

const EmptyTrashScreen = () => {
  const [totalRefund, setTotalRefund] = useState(0);
  const [trashChartItemList, setTrashChartItemList] = useState<PieChartData[]>([]);
  const { goBack } = useNavigation();
  const { navigate } = useNavigation<NavigationProp<HomeTabParamList>>();
  const { mutate, data: emptyTrashResponse } = useEmptyTrashMutation();

  const emptyTrashData = emptyTrashResponse?.data;

  useLayoutEffect(() => mutate(), [mutate]);

  useEffect(() => {
    if (!emptyTrashData) return;

    const sumOfRefund = emptyTrashData.refundByTrashCategoryList.reduce((accumulator, item) => {
      return accumulator + item.refund;
    }, 0);

    const trashChartData: PieChartData[] = emptyTrashData.carbonSavingByTrashCategoryList.map(
      (carbonTrashCategory: CarbonSavingType) => {
        return {
          name: carbonTrashCategory.trashCategoryName,
          value: carbonTrashCategory.carbonSaving,
          color: getColorOfTrashCategory(carbonTrashCategory.trashCategoryName),
        };
      },
    );

    setTrashChartItemList(trashChartData);
    setTotalRefund(sumOfRefund);
  }, [emptyTrashData]);

  return (
    <Screen title="쓰레기 비우기" isHeaderShown={false} isTopSafeArea={false}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <TopBlackArea />
        <Container>
          <BottomArea>
            <CompleteTextContainer>
              <CompleteText>비우기 완료!</CompleteText>
            </CompleteTextContainer>
            {emptyTrashData && (
              <Contents>
                <CarbonSavingRateContainer style={styles.shadow}>
                  <TotalCarbonSavingContainer>
                    <Bold16 color={GREY700}>탄소절감량</Bold16>
                    <Bold16 color={GREY700}>
                      {`${emptyTrashData.totalCarbonSaving.toFixed(1)} gCO2`}
                    </Bold16>
                  </TotalCarbonSavingContainer>
                  <TrashRateContainer>
                    <TrashRateChartContainer>
                      <PieChart
                        data={trashChartItemList}
                        size={156}
                        innerRadius={61}
                        centerText="쓰레기 비율"
                      />
                    </TrashRateChartContainer>
                    <TrashCategoryContainer>
                      {emptyTrashData.carbonSavingByTrashCategoryList.map(
                        (carbonTrashCategory: {
                          trashCategoryName: string;
                          carbonSaving: number;
                        }) => (
                          <TrashContainer key={`empty-${carbonTrashCategory.trashCategoryName}`}>
                            <TrashColorIndicator
                              trashCategoryName={carbonTrashCategory.trashCategoryName}
                            />
                            <Regular14 color={BLACK}>
                              {trashMeta[carbonTrashCategory.trashCategoryName].name}
                            </Regular14>
                            <Spacer width={2} />
                            <Regular14 color={GREY600}>
                              {`(${calculatePercentage(
                                carbonTrashCategory.carbonSaving,
                                emptyTrashData.totalCarbonSaving,
                              )})`}
                            </Regular14>
                          </TrashContainer>
                        ),
                      )}
                    </TrashCategoryContainer>
                  </TrashRateContainer>
                </CarbonSavingRateContainer>

                <RefundInfo style={styles.shadow}>
                  <RefundContainer>
                    <RefundTitleContainer>
                      <Bold16 color={BLACK}>예상환급금</Bold16>
                      <Bold16 color={BLACK}>{`${totalRefund.toLocaleString()}원`}</Bold16>
                    </RefundTitleContainer>
                    {emptyTrashData.refundByTrashCategoryList.map(
                      (refundTrashCategory: RefundType) => (
                        <RefundContents key={`refund-${refundTrashCategory.trashCategoryName}`}>
                          <Regular16 color={GREY700}>
                            {trashMeta[refundTrashCategory.trashCategoryName].name}
                          </Regular16>
                          <Regular16
                            color={GREY700}
                          >{`${refundTrashCategory.refund.toLocaleString()}원`}</Regular16>
                        </RefundContents>
                      ),
                    )}
                  </RefundContainer>
                  <NavigateLocationButton onPress={() => navigate('Location')}>
                    <Bold18 color={MAIN}>환급금을 반환해볼까요?</Bold18>
                    <Image source={arrow} style={{ width: scale(28), height: scale(28) }} />
                  </NavigateLocationButton>
                </RefundInfo>
              </Contents>
            )}
          </BottomArea>
          <AdSection>
            <BannerAd
              unitId="ca-app-pub-6467079030703763/7907740481"
              size={BannerAdSize.LARGE_BANNER}
            />
          </AdSection>
          <BaseButton text="확인" onPress={goBack} />
        </Container>
      </ScrollView>
    </Screen>
  );
};

export default EmptyTrashScreen;
