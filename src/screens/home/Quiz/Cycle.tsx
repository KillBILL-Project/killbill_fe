import React from 'react';
import {
  CycleContainer,
  FirstRow,
  Horizontal,
  LeftArc,
  Line,
  LineWrapper,
  RightArc,
  SecondRow,
  Vertical,
} from '@screens/home/TokenIssued/style';
import { QuizHistoryInfoType } from '@constants/quiz';
import Circle from '@screens/home/Quiz/Circle';

interface CycleProps {
  quizHistoryInfoList: QuizHistoryInfoType[];
  index: number;
}

const Cycle = ({ quizHistoryInfoList, index }: CycleProps) => {
  return (
    <>
      {!!index && <Vertical />}
      <CycleContainer index={index}>
        {!!index && <LeftArc />}
        {quizHistoryInfoList[3] && <RightArc />}
        <FirstRow>
          <LineWrapper>
            {quizHistoryInfoList[1] && <Line />}
            {quizHistoryInfoList[2] && <Line />}
          </LineWrapper>
          <Circle quizHistoryInfo={quizHistoryInfoList[0]} />
          <Horizontal />
          {quizHistoryInfoList[1] && (
            <>
              <Circle quizHistoryInfo={quizHistoryInfoList[1]} />
              <Horizontal />
            </>
          )}
          {quizHistoryInfoList[2] && <Circle quizHistoryInfo={quizHistoryInfoList[2]} />}
        </FirstRow>
        {quizHistoryInfoList[3] && (
          <>
            <Vertical />
            <SecondRow>
              <LineWrapper>{quizHistoryInfoList[4] && <Line />}</LineWrapper>
              {quizHistoryInfoList[4] && <Circle quizHistoryInfo={quizHistoryInfoList[4]} />}
              {quizHistoryInfoList[3] && (
                <>
                  <Horizontal />
                  <Circle quizHistoryInfo={quizHistoryInfoList[3]} />
                </>
              )}
            </SecondRow>
          </>
        )}
      </CycleContainer>
    </>
  );
};

export default Cycle;
