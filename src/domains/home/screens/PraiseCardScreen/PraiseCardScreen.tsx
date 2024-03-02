import React, { useState } from 'react';
import { FlatList, Image, Modal } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { toString } from 'lodash';
import Screen from '../../../../components/Screen';
import CategoryTab from '../components/CategoryTab';
import { CategoryType } from '../components/CategoryTab/CategoryTab';
import { Container, PraiseCard, PraiseCardName } from './PraiseCardScreen.style';
import { Bold18 } from '../../../../components/Typography';
import { PRIMARY } from '../../../../constants/colors';
import CardModal from './components/CardModal';
import {
  ComplimentCardType,
  getComplimentCard,
  GetComplimentCardParams,
} from '../../../../services/api/complimentService';
import NewBadge from './components/NewBadge';

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

  const { data, isLoading } = useQuery({
    queryKey: ['compliment-card', selectedCardType.category],
    queryFn: async () => {
      const params: GetComplimentCardParams = {
        'card-type': selectedCardType.category,
        page: 0,
        size: 100,
      };

      const response = await getComplimentCard(params);
      return response.data.data;
    },
  });

  const onPressCardType = (param: CategoryType<CardCategory>) => {
    setSelectedCardType(param);
  };

  const onPressCard = (cardInfo: ComplimentCardType) => {
    setSelectedCardInfo(cardInfo);
    setModalVisible(true);
  };
  const closeModal = () => setModalVisible(false);

  return (
    <>
      <Screen title="칭찬카드" isBackButtonShown={false}>
        <CategoryTab selectList={cardType} selected={selectedCardType} onPress={onPressCardType} />
        <Container>
          <FlatList
            showsVerticalScrollIndicator={false}
            keyExtractor={item => toString(item.complimentCardId)}
            data={data?.complimentCardResponses}
            renderItem={({ item, index }) => (
              <PraiseCard key={`a${index.toString()}`} onPress={() => onPressCard(item)}>
                <NewBadge />
                <Image
                  source={{ uri: item.cardImage }}
                  resizeMode="contain"
                  style={{ width: '100%', height: '100%' }}
                />
                <PraiseCardName>
                  <Bold18 color={PRIMARY}>{item.title}</Bold18>
                </PraiseCardName>
              </PraiseCard>
            )}
            style={{}}
            contentContainerStyle={{
              flexGrow: 1,
              paddingVertical: 24,
              paddingHorizontal: 16,
            }}
            numColumns={2}
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
