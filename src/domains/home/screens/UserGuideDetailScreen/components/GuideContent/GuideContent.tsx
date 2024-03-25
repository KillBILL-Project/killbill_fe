import React from 'react';
import {
  Container,
  ContentContainer,
  ContentText,
  TitleContainer,
  TitleText,
} from './GuideContent.style';
import { GuidanceContentType } from '../../../../../../constants/userGuide';

interface GuideContentProps {
  isFullWidth?: boolean;
  guidance: GuidanceContentType;
  color?: string;
}

const GuideContent = ({ isFullWidth, guidance, color }: GuideContentProps) => {
  return (
    <Container>
      <ContentContainer isFullWidth={isFullWidth}>
        <TitleContainer>
          {guidance.title && <TitleText colorType={guidance.colorType}>{guidance.title}</TitleText>}
        </TitleContainer>
        {guidance.content?.map((content, index) => {
          return (
            <ContentText key={`content${index.toString()}`} colorType={guidance.colorType}>
              {content}
            </ContentText>
          );
        })}
      </ContentContainer>
    </Container>
  );
};

export default GuideContent;
