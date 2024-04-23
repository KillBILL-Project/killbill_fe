import React, { useEffect, useLayoutEffect, useState } from 'react';
import styled from 'styled-components/native';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { PieChart } from 'react-native-chart-kit';
import Screen from '../../../../components/Screen/Screen';
import useEmptyTrashMutation from '../../../../hooks/mutation/trash/useEmptyTrashMutation';
import { trashMeta } from '../../../../constants/data';
import { HomeTabParamList } from '../../../../types/navigation';

const TopContainer = styled.View`
  align-items: center;
  height: 120px;
  background-color: black;
`;

const TrashInfo = styled.View`
  border-radius: 15px;
  background-color: #ffffff;
  padding: 20px 16px 0;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;
`;

const MoneyInfo = styled.View`
  border-radius: 15px;
  background-color: #ffffff;
  padding: 20px 0 0;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;
  gap: 8px;
`;

const EmptyTrashScreen = () => {
  const { goBack } = useNavigation();
  const { navigate } = useNavigation<NavigationProp<HomeTabParamList>>();
  const { mutate, data: result } = useEmptyTrashMutation();
  const emptyTrashData = result?.data?.data;

  const [pieData, setPieData] = useState([]);

  useLayoutEffect(() => {
    mutate();
  }, []);

  useEffect(() => {
    if (!result) {
      return;
    }

    const tempPieData: any = [];

    emptyTrashData.carbonSavingByTrashCategoryList.map(
      (carbonTrashCategory: { trashCategoryName: string; carbonSaving: number }) => {
        tempPieData.push({
          ...trashMeta[carbonTrashCategory.trashCategoryName],
          carbonSaving: carbonTrashCategory.carbonSaving,
        });
      },
    );

    setPieData(tempPieData);
  }, [result]);

  return (
    <Screen title="쓰레기 비우기" isHeaderShown={false} headerColor="#000">
      <TopContainer>
        <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#fff' }}>비우기 완료!</Text>
      </TopContainer>

      <View
        style={{
          flex: 1,
          height: '100%',
          position: 'absolute',
          top: 50,
          paddingHorizontal: 24,
          width: '100%',
          backgroundColor: 'rgba(255,255,255,0)',
        }}
      >
        {result && (
          <View style={{ gap: 24 }}>
            <TrashInfo>
              <View style={{ justifyContent: 'space-between', gap: 24 }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <Text style={{ color: '#767676', fontWeight: '700' }}>탄소절감량</Text>
                  <Text style={{ color: '#767676', fontWeight: '700' }}>
                    {emptyTrashData.totalCarbonSaving.toFixed(1)} gCO2
                  </Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <View style={{ flex: 1, position: 'relative' }}>
                    <PieChart
                      data={pieData}
                      chartConfig={{
                        backgroundColor: '#ffffff',
                        backgroundGradientFrom: '#ffffff',
                        backgroundGradientTo: '#ffffff',
                        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                      }}
                      width={300}
                      height={200}
                      accessor="carbonSaving"
                      backgroundColor="transparent"
                      paddingLeft="0"
                      center={[10, -10]}
                      hasLegend={false}
                    />
                    <View
                      style={{
                        width: 130,
                        height: 130,
                        borderRadius: 200,
                        position: 'absolute',
                        top: 25,
                        left: 20,
                        zIndex: 1,
                        backgroundColor: '#fff',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <Text style={{ fontSize: 12, fontWeight: 'bold', color: 'grey' }}>
                        쓰레기 비율
                      </Text>
                    </View>
                  </View>
                  <View style={{ flex: 1, gap: 6, paddingLeft: 50 }}>
                    {emptyTrashData.carbonSavingByTrashCategoryList.map(
                      (
                        carbonTrashCategory: {
                          trashCategoryName: string;
                          carbonSaving: number;
                        },
                        index: { toString: () => any },
                      ) => (
                        <View
                          key={`carbon${index.toString}`}
                          style={{ flexDirection: 'row', alignItems: 'center' }}
                        >
                          <View
                            style={{
                              width: 12,
                              height: 12,
                              borderRadius: 6,
                              marginRight: 8,
                              backgroundColor:
                                trashMeta[carbonTrashCategory.trashCategoryName].color,
                            }}
                          />
                          <Text>{trashMeta[carbonTrashCategory.trashCategoryName].name}</Text>
                          <Text style={{ color: 'gray' }}>{` (${(
                            (carbonTrashCategory.carbonSaving / emptyTrashData.totalCarbonSaving) *
                            100
                          ).toFixed(0)}%)`}</Text>
                        </View>
                      ),
                    )}
                  </View>
                </View>
              </View>
            </TrashInfo>

            <MoneyInfo>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginBottom: 8,
                  paddingHorizontal: 16,
                }}
              >
                <Text style={{ color: '#000', fontWeight: '700' }}>예상환금급</Text>
                <Text style={{ color: '#000', fontWeight: '700' }}>30,000원</Text>
              </View>
              {emptyTrashData.refundByTrashCategoryList.map(
                (
                  refundTrashCategory: { trashCategoryName: string; refund: number },
                  index: { toString: () => any },
                ) => (
                  <View
                    key={`refund_${index.toString}`}
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      paddingHorizontal: 16,
                    }}
                  >
                    <Text style={{ color: '#767676', fontWeight: '500' }}>
                      {trashMeta[refundTrashCategory.trashCategoryName].name}
                    </Text>
                    <Text style={{ color: '#767676', fontWeight: '500' }}>
                      {refundTrashCategory.refund}원
                    </Text>
                  </View>
                ),
              )}
              <TouchableOpacity
                style={{
                  borderTopWidth: 1,
                  borderTopColor: '#F0F0F6',
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingVertical: 10,
                  marginTop: 5,
                }}
                onPress={() => navigate('Location')}
              >
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>환급금을 반환해볼까요?</Text>
              </TouchableOpacity>
            </MoneyInfo>
          </View>
        )}
        <View style={{ position: 'absolute', bottom: 80, left: 24, width: '100%' }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#AFFC41',
              width: '100%',
              height: 56,
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={goBack}
          >
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>확인</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Screen>
  );
};

export default EmptyTrashScreen;
