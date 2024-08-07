import React, { useCallback, useState } from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { CardCategory, ComplimentCardType } from '@services/api/complimentService';
import { CardDetailParamList } from '@type/navigation';
import useComplimentQuery from '@hooks/queries/compliment/useComplimentQuery';
import Screen from '@components/Screen';
import NoData from '@components/common/NoData';
import CategoryTab, { CategoryType } from '@components/CategoryTab';
import ComplimentCard from '@components/ComplimentCard';
import { Container } from './styles';

export const cardType: CategoryType<CardCategory>[] = [
  { category: 'WEEKLY', name: '주간미션' },
  { category: 'INTEGRATE', name: '통합미션' },
];

const ComplimentCardScreen = () => {
  const [selectedCardType, setSelectedCardType] = useState<CategoryType<CardCategory>>({
    category: 'WEEKLY',
    name: '주간미션',
  });

  const { navigate } = useNavigation<NavigationProp<CardDetailParamList>>();
  const { data, hasNextPage, fetchNextPage } = useComplimentQuery(selectedCardType.category);

  const onPressCardType = (param: CategoryType<CardCategory>) => {
    setSelectedCardType(param);
  };

  const onPressCard = useCallback((cardInfo: ComplimentCardType) => {
    navigate('CardDetail', { ...cardInfo });
  }, []);

  const keyExtractor = useCallback(
    ({ complimentCardId }: { complimentCardId: number }) => `${complimentCardId}`,
    [],
  );

  const renderItem: ListRenderItem<ComplimentCardType> = useCallback(
    ({ item, index }) => {
      return <ComplimentCard item={item} index={index} onPressCard={onPressCard} />;
    },
    [onPressCard],
  );

  return (
    <Screen title="칭찬카드">
      <CategoryTab selectList={cardType} selected={selectedCardType} onPress={onPressCardType} />
      <Container>
        <FlatList
          showsVerticalScrollIndicator={false}
          keyExtractor={keyExtractor}
          data={data?.pages.flatMap(compliment => compliment.complimentCardResponses)}
          renderItem={renderItem}
          style={{}}
          contentContainerStyle={{
            flexGrow: 1,
            paddingVertical: 24,
            paddingHorizontal: 16,
          }}
          numColumns={2}
          onEndReached={() => hasNextPage && fetchNextPage()}
          ListEmptyComponent={<NoData />}
        />
      </Container>
    </Screen>
  );
};

export default ComplimentCardScreen;
