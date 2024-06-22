import React, { useState } from 'react';
import { GREY400 } from '@constants/colors';
import { width } from '@utils/platform';
import Screen from '@components/Screen';
import Separator from '@components/Separator';
import Category from './Category';
import { CategoryContainer, Container } from './styles';
import FaqItem from './FaqItem';

const categories = [
  { key: 'all', name: '전체' },
  { key: 'one', name: '하나' },
  { key: 'two', name: '둘' },
];

const faqList = [
  { title: '질문명', category: '카테고리명', content: '답변 답변 답변' },
  { title: '질문명', category: '카테고리명', content: '답변 답변 답변' },
  { title: '질문명', category: '카테고리명', content: '답변 답변 답변' },
];

const Faq = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);

  const onPressCategory = (index: number) => setSelectedCategory(index);
  return (
    <Screen title="자주묻는질문">
      <Container>
        <CategoryContainer>
          {categories.map((category, index) => (
            <Category
              key={category.key}
              category={category.name}
              selected={selectedCategory === index}
              onPress={() => onPressCategory(index)}
            />
          ))}
        </CategoryContainer>
        <Separator horizontal length={width} margin={0} color={GREY400} />
        {faqList.map(({ title, category, content }) => (
          <FaqItem key={title} title={title} category={category} content={content} />
        ))}
      </Container>
    </Screen>
  );
};

export default Faq;
