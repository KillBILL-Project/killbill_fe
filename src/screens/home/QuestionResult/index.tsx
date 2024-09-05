import React from 'react';
import Screen from '@components/Screen';
import { BLACK, WHITE } from '@constants/colors';
import {
  BottomSection,
  Container,
  ImageSection,
  QuestionImage,
  QuestionImageWrapper,
  QuestionResultSection,
  QuestionResultText,
  QuestionTitle,
  QuestionTitleText,
  TopSection,
} from '@screens/home/QuestionResult/style';
import BottomButton from '@screens/home/Question/BottomButton';
import { NavigationProp, RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { HomeStackParamList } from '@type/navigation';
import useRecordActiveLogMutation from '@hooks/mutation/log/useRecordActiveLogMutation';
import useValidateActiveLogMutation from '@hooks/mutation/log/useValidateActiveLogMutation';
import useQuizQuery from '@hooks/queries/quiz/useQuizQuery';
import useIssueWwoossTokenMutation from '@hooks/mutation/quiz/useIssueWwoossTokenMutation';
import usePatchQuizHistory from '@hooks/mutation/quiz/usePatchQuizHistory';

const QuestionResultScreen = () => {
  const { navigate, goBack } = useNavigation<NavigationProp<HomeStackParamList>>();
  const { params } = useRoute<RouteProp<HomeStackParamList, 'QuestionResult'>>();

  const { data: quizInfo } = useQuizQuery({ quizId: params.quizId });
  const { mutateAsync: recordActiveLog } = useRecordActiveLogMutation();
  const { mutateAsync: validateActiveLog } = useValidateActiveLogMutation();
  const { mutateAsync: issueWwoossToken } = useIssueWwoossTokenMutation('QUIZ');
  const { mutate: patchQuizHistory } = usePatchQuizHistory();

  const handleButtonPressWhenPass = async () => {
    const recordedActiveLog = await recordActiveLog({ activeLogType: 'QUIZ' });
    const validatedActiveLog = await validateActiveLog(recordedActiveLog.userActiveLogId);
    const wwoossToken = await issueWwoossToken();
    patchQuizHistory(params.quizHistoryId);

    navigate('TokenIssued', {
      recordedActiveLog,
      validatedActiveLog,
      issuedTokenValue: wwoossToken.value,
    });
  };

  const handleButtonPressWhenFail = () => {
    goBack();
  };

  return (
    <Screen headerColor={BLACK} backButtonColor={WHITE}>
      <Container>
        {quizInfo && (
          <>
            <TopSection>
              <QuestionTitle>
                <QuestionTitleText>
                  {params.result === 'PASS' ? '정답입니다.' : '오답입니다.'}
                </QuestionTitleText>
              </QuestionTitle>
            </TopSection>
            <ImageSection>
              <QuestionImageWrapper>
                <QuestionImage source={{ uri: quizInfo?.imagePath }} />
              </QuestionImageWrapper>
            </ImageSection>
            <BottomSection>
              <QuestionResultSection>
                <QuestionResultText>
                  {params.result === 'PASS' ? '' : '문제를 다시 풀어볼까요?'}
                </QuestionResultText>
              </QuestionResultSection>
            </BottomSection>
          </>
        )}
      </Container>
      {params.result === 'PASS' ? (
        <BottomButton buttonText="토큰 발급 받기" onPress={handleButtonPressWhenPass} />
      ) : (
        <BottomButton buttonText="다시 풀기" onPress={handleButtonPressWhenFail} />
      )}
    </Screen>
  );
};

export default QuestionResultScreen;
