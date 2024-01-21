import React, { useState } from 'react';
import Screen from '../../../../components/Screen/Screen';
import Category from './components/Category/Category';
import { CategoryContainer, Container } from './FaqScreen.style';
import Separator from '../../../../components/Separator/Separator';
import { width } from '../../../../utils/platform';
import { GREY400 } from '../../../../constants/colors';
import Faq from './components/Faq/Faq';

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

const FaqScreen = () => {
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
          <Faq title={title} category={category} content={content} />
        ))}
      </Container>
    </Screen>
  );
};

export default FaqScreen;
