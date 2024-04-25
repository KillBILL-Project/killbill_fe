import React, { useCallback, useState } from 'react';
import { FlatList, ListRenderItem, Modal } from 'react-native';
import Screen from '../../../../components/Screen';
import CategoryTab from '../components/CategoryTab';
import { CategoryType } from '../components/CategoryTab/CategoryTab';
import { Container } from './PraiseCardScreen.style';
import CardModal from './components/CardModal';
import { ComplimentCardType } from '../../../../services/api/complimentService';
import PraiseCard from '../components/PraiseCard';
import usePraiseQuery from '../../../../hooks/queries/praise/usePraiseQuery';
import NoData from '../../../../components/common/NoData';

export type CardCategory = 'WEEKLY' | 'INTEGRATE';

export const cardType: CategoryType<CardCategory>[] = [
  { category: 'WEEKLY', name: '주간미션' },
  { category: 'INTEGRATE', name: '통합미션' },
];

const PraiseCardScreen = () => {
  const [selectedCardType, setSelectedCardType] = useState<CategoryType<CardCategory>>({
    category: 'WEEKLY',
    name: '주간미션',
  });
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCardInfo, setSelectedCardInfo] = useState<ComplimentCardType | null>(null);

  const { data, hasNextPage, fetchNextPage } = usePraiseQuery(selectedCardType.category);

  const onPressCardType = (param: CategoryType<CardCategory>) => {
    setSelectedCardType(param);
  };

  const onPressCard = (cardInfo: ComplimentCardType) => {
    setSelectedCardInfo(cardInfo);
    setModalVisible(true);
  };

  const closeModal = () => setModalVisible(false);

  const keyExtractor = useCallback(
    ({ complimentCardId }: { complimentCardId: number }) => `${complimentCardId}`,
    [],
  );
  const renderItem: ListRenderItem<ComplimentCardType> = useCallback(({ item, index }) => {
    return <PraiseCard item={item} index={index} onPressCard={onPressCard} />;
  }, []);

  return (
    <>
      <Screen title="칭찬카드">
        <CategoryTab selectList={cardType} selected={selectedCardType} onPress={onPressCardType} />
        <Container>
          <FlatList
            showsVerticalScrollIndicator={false}
            keyExtractor={keyExtractor}
            data={data?.pages.flatMap(praise => praise.complimentCardResponses)}
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
      {selectedCardInfo && (
        <Modal animationType="slide" visible={modalVisible} onRequestClose={closeModal}>
          <CardModal cardInfo={selectedCardInfo} onPressClose={closeModal} />
        </Modal>
      )}
    </>
  );
};

export default PraiseCardScreen;
