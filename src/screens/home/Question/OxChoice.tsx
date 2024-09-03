import React from 'react';
import { OxChoiceButton, OxChoiceButtonImage, OxChoiceSection } from '@screens/home/Question/style';
import o from '@assets/image/quiz/o.png';
import x from '@assets/image/quiz/x.png';
import { PRIMARY } from '@constants/colors';
import { QuizInfoType, SolveQuizParams } from '@constants/quiz';

interface OxChoiceProps {
  quizInfo: QuizInfoType;
  solveQuiz: (params: SolveQuizParams) => void;
}

const OxChoice = ({ quizInfo, solveQuiz }: OxChoiceProps) => {
  return (
    <OxChoiceSection>
      <OxChoiceButton
        onPress={() => {
          solveQuiz({ quizInfo, answer: 'o' });
        }}
        underlayColor={PRIMARY}
      >
        <OxChoiceButtonImage source={o} />
      </OxChoiceButton>
      <OxChoiceButton
        onPress={() => {
          solveQuiz({ quizInfo, answer: 'x' });
        }}
        underlayColor={PRIMARY}
      >
        <OxChoiceButtonImage source={x} />
      </OxChoiceButton>
    </OxChoiceSection>
  );
};

export default OxChoice;
