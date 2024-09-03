import React from 'react';
import Screen from '@components/Screen';
import { BLACK, WHITE } from '@constants/colors';
import OxChoice from '@screens/home/Question/OxChoice';
import MultiChoice from '@screens/home/Question/MultiChoice';
import { RouteProp, useRoute } from '@react-navigation/native';
import { HomeStackParamList } from '@type/navigation';
import useQuizQuery from '@hooks/queries/quiz/useQuizQuery';
import useSolveQuizMutation from '@hooks/mutation/quiz/useSolveQuizMutation';
import {
  AccuracyRate,
  AccuracyRateText,
  BottomSection,
  Container,
  ImageSection,
  QuestionImage,
  QuestionImageWrapper,
  QuestionTitle,
  QuestionTitleText,
  TopSection,
} from './style';

const QuestionScreen = () => {
  const { params } = useRoute<RouteProp<HomeStackParamList, 'Question'>>();
  const { data: quizInfo } = useQuizQuery({ quizId: params.quizId });
  const { mutate: solveQuiz } = useSolveQuizMutation();

  return (
    <Screen headerColor={BLACK} backButtonColor={WHITE}>
      <Container>
        {quizInfo && (
          <>
            <TopSection>
              <>
                <AccuracyRate>
                  <AccuracyRateText>{`정답률 ${quizInfo.correctRate}%`}</AccuracyRateText>
                </AccuracyRate>
                <QuestionTitle>
                  <QuestionTitleText>{quizInfo.question}</QuestionTitleText>
                </QuestionTitle>
              </>
            </TopSection>
            <ImageSection>
              <QuestionImageWrapper>
                <QuestionImage source={{ uri: quizInfo?.imagePath }} />
              </QuestionImageWrapper>
            </ImageSection>
            <BottomSection>
              {quizInfo.quizType === 'OX' ? (
                <OxChoice quizInfo={quizInfo} solveQuiz={solveQuiz} />
              ) : quizInfo.quizType === 'MULTI_CHOICE' ? (
                <MultiChoice
                  quizInfo={quizInfo}
                  quizOptions={quizInfo.options}
                  solveQuiz={solveQuiz}
                />
              ) : null}
            </BottomSection>
          </>
        )}
      </Container>
    </Screen>
  );
};

export default QuestionScreen;
