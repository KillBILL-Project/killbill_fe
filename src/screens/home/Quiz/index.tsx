import React, { useCallback } from 'react';
import Screen from '@components/Screen';
import { BLACK, LIGHT, WHITE } from '@constants/colors';
import {
  BottomSection,
  Gradient,
  SolveQuestionButton,
  SolveQuestionButtonText,
  TokenStatus,
  TokenStatusRow,
  TokenStatusText,
  TokenTitle,
  TokenTitleText,
  TopSection,
} from '@screens/home/Quiz/style';
import { FlatList, View } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { HomeStackParamList } from '@type/navigation';
import Cycle from '@screens/home/Quiz/Cycle';
import { hScale, scale } from '@utils/platform';
import useQuizHistoryQuery from '@hooks/queries/quiz/useQuizHistoryQuery';
import useWwoossTokenQuery from '@hooks/queries/quiz/useWwoossTokenQuery';

const QuizScreen = () => {
  const navigation = useNavigation<NavigationProp<HomeStackParamList>>();
  const { data: quizHistory, hasNextPage, fetchNextPage } = useQuizHistoryQuery();
  const { data: wwoossToken } = useWwoossTokenQuery({ issueType: 'QUIZ' });
  const handleSolveButtonPress = () => {
    navigation.navigate('Question', {
      quizId: quizHistory!.pages[0].quizHistoryInfoList[0].quizId,
      status: 'UNSOLVED',
    });
  };

  const zIndexCell = useCallback(({ children, index }: any) => {
    return <View style={{ zIndex: -index }}>{children}</View>;
  }, []);

  return (
    <Screen title="퀴즈" headerColor={BLACK} titleColor={WHITE} isBackButtonShown={false}>
      <TopSection>
        <Gradient colors={[BLACK, LIGHT]} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }}>
          <TokenTitle>
            <TokenTitleText>퀴즈로 모은 토큰</TokenTitleText>
          </TokenTitle>
          <TokenStatusRow>
            <TokenStatus>
              <TokenStatusText>{wwoossToken}</TokenStatusText>
            </TokenStatus>
            <SolveQuestionButton
              onPress={handleSolveButtonPress}
              disabled={
                !quizHistory ||
                ['PASS', 'ISSUED'].includes(quizHistory.pages[0].quizHistoryInfoList[0].status)
              }
            >
              <SolveQuestionButtonText>문제 풀기</SolveQuestionButtonText>
            </SolveQuestionButton>
          </TokenStatusRow>
        </Gradient>
      </TopSection>
      <BottomSection>
        {quizHistory && (
          <FlatList
            data={quizHistory.pages.flatMap(item => item)}
            CellRendererComponent={zIndexCell}
            renderItem={({ item, index }) => (
              <Cycle quizHistoryInfoList={item.quizHistoryInfoList} index={index} />
            )}
            contentContainerStyle={{ marginVertical: hScale(32), marginHorizontal: scale(30) }}
            ListFooterComponent={<View style={{ height: 20 + scale(5 + 3 + 24) }} />}
            onEndReachedThreshold={0.8}
            onEndReached={() => hasNextPage && fetchNextPage()}
          />
        )}
      </BottomSection>
    </Screen>
  );
};

export default QuizScreen;
