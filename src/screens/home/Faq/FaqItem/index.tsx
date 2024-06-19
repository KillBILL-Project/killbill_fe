import React from 'react';
import dropDownIcon from '@assets/icon/dropdown_icon.png';
import { BLACK, GREY600, MAIN } from '@constants/colors';
import { Medium14, Medium18, Regular16 } from '@components/Typography';
import BaseIcon from '@components/BaseIcon';
import { Category, Container, Content, Title, TitleContainer } from './styles';

interface FaqProps {
  title: string;
  category: string;
  content: string;
}

const Faq = ({ title, category, content }: FaqProps) => {
  return (
    <>
      <Container>
        <TitleContainer>
          <Title>
            <Medium18 color={BLACK}>{title}</Medium18>
          </Title>
          <Category>
            <Medium14 color={GREY600}>{category}</Medium14>
          </Category>
        </TitleContainer>
        <BaseIcon size={24} icon={dropDownIcon} />
      </Container>
      <Content>
        <Regular16 color={MAIN}>{content}</Regular16>
      </Content>
    </>
  );
};

export default Faq;
