import React from 'react';
import styled from 'styled-components/native';
import { Medium14, Medium18, Regular16 } from '../../../../../../components/Typography/Typography';
import { BLACK, GREY600, MAIN } from '../../../../../../constants/colors';

const Container = styled.View`
  padding: 16px 24px;
`;

export const Title = styled.View``;

export const Category = styled.View``;

export const Content = styled.View``;

interface FaqProps {
  title: string;
  category: string;
  content: string;
}

const Faq = ({ title, category, content }: FaqProps) => {
  return (
    <Container>
      <Title>
        <Medium18 color={BLACK}>{title}</Medium18>
      </Title>
      <Category>
        <Medium14 color={GREY600}>{category}</Medium14>
      </Category>
      <Content>
        <Regular16 color={MAIN}>{content}</Regular16>
      </Content>
    </Container>
  );
};

export default Faq;
