import React from 'react';
import {
  MultiChoiceButton,
  MultiChoiceButtonText,
  MultiChoiceSection,
} from '@screens/home/Question/style';
import { PRIMARY } from '@constants/colors';
import { QuizInfoType, QuizOptionType, SolveQuizParams } from '@constants/quiz';

interface MultiChoiceProps {
  quizInfo: QuizInfoType;
  quizOptions: QuizOptionType[];
  solveQuiz: (params: SolveQuizParams) => void;
  quizHistoryId: number;
}

const MultiChoice = ({ quizOptions, quizInfo, solveQuiz, quizHistoryId }: MultiChoiceProps) => {
  return (
    <MultiChoiceSection>
      {quizOptions.map(quizOption => (
        <MultiChoiceButton
          key={`quizOption${quizOption.optionId}`}
          onPress={() => {
            solveQuiz({
              quizInfo,
              answer: quizOption.value,
              quizHistoryId,
            });
          }}
          underlayColor={PRIMARY}
        >
          <MultiChoiceButtonText>{quizOption.value}</MultiChoiceButtonText>
        </MultiChoiceButton>
      ))}
    </MultiChoiceSection>
  );
};

export default MultiChoice;
