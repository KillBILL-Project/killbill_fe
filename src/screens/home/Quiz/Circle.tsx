import React from 'react';
import { QuizHistoryInfoType, quizStatus } from '@constants/quiz';
import { CircleContainer, CircleText, CircleValueText } from '@screens/home/Quiz/style';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { HomeStackParamList } from '@type/navigation';
import { GREY400 } from '@constants/colors';

interface CircleProps {
  quizHistoryInfo: QuizHistoryInfoType;
}

const Circle = ({ quizHistoryInfo }: CircleProps) => {
  const { status, quizId, tokenValue, quizHistoryId } = quizHistoryInfo;
  const { navigate } = useNavigation<NavigationProp<HomeStackParamList>>();

  const handleCirclePress = () => {
    if (status === 'PASS') navigate('QuestionResult', { quizId, result: status, quizHistoryId });
    else navigate('Question', { quizId, status, quizHistoryId });
  };

  return (
    <CircleContainer
      color={quizStatus[status].color}
      underlayColor={GREY400}
      onPress={handleCirclePress}
      disabled={status === 'ISSUED'}
    >
      {status === 'ISSUED' ? (
        <>
          <CircleValueText>{tokenValue}</CircleValueText>
          <CircleText>발급완료</CircleText>
        </>
      ) : status === 'PASS' ? (
        <CircleText>토큰발급</CircleText>
      ) : status === 'FAIL' ? (
        <CircleText>발급실패</CircleText>
      ) : (
        <CircleText>문제풀기</CircleText>
      )}
    </CircleContainer>
  );
};

export default Circle;
