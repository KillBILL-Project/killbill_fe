import React from 'react';
import styled from 'styled-components/native';
import { Medium14, Medium18, Regular16 } from '../../../../../../components/Typography/Typography';
import { BLACK, GREY600, LIGHT_BG, MAIN } from '../../../../../../constants/colors';
import BaseIcon from '../../../../../../components/Icon/BaseIcon';
import dropDownIcon from '../../../../../../assets/icon/dropdown_icon.png';

const Container = styled.TouchableOpacity`
  padding: 16px 24px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

const TitleContainer = styled.View``;

export const Title = styled.View``;

export const Category = styled.View``;

export const Content = styled.View`
  padding: 24px;
  background-color: ${LIGHT_BG};
`;

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
