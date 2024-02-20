import React, { useState } from 'react';
import { FlatList, Modal } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { SvgUri } from 'react-native-svg';
import Screen from '../../../../components/Screen';
import HeaderTabBar from '../components/HeaderTabBar';
import { SelectType } from '../components/HeaderTabBar/HeaderTabBar';
import { Container, New, NewText, PraiseCard, PraiseCardName } from './PraiseCardScreen.style';
import { Bold18 } from '../../../../components/Typography';
import { GREY700 } from '../../../../constants/colors';
import CardModal from './CardModal';
import {
  getComplimentCard,
  GetComplimentCardParams,
} from '../../../../services/api/complimentService';

const selectList: SelectType[] = [
  { key: 'weeklyMission', name: '주간미션' },
  { key: 'generalMission', name: '통합미션' },
];

const NewCard = () => {
  return (
    <New>
      <NewText>NEW</NewText>
    </New>
  );
};

const PraiseCardScreen = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['compliment-card'],
    queryFn: async () => {
      const params: GetComplimentCardParams = {
        'card-type': 'INTEGRATE',
        page: 0,
        size: 100,
      };

      const response = await getComplimentCard(params);

      console.log('onse.data.data', response.data.data);

      return response.data.data;
    },
  });

  const onPress = (key: string) => {
    setSelected(key);
  };

  const onPressCard = () => {
    setModalVisible(true);
  };
  const closeModal = () => setModalVisible(false);

  const list = Array.from({ length: 7 });
  return (
    <>
      <Screen title="칭찬카드">
        <HeaderTabBar selectList={selectList} selectedKey={selected} onPress={onPress} />
        <Container>
          <FlatList
            data={data?.complimentCardResponses}
            renderItem={({ item, index }) => (
              <PraiseCard key={`a${index.toString()}`} onPress={onPressCard}>
                <NewCard />
                <SvgUri uri={item.cardImage} width="100%" height="100%" />
                <PraiseCardName>
                  <Bold18 color={GREY700}>{item.title}</Bold18>
                </PraiseCardName>
              </PraiseCard>
            )}
          />
        </Container>
      </Screen>
      <Modal animationType="fade" visible={modalVisible} onRequestClose={closeModal}>
        <CardModal onPressClose={closeModal} />
      </Modal>
    </>
  );
};

export default PraiseCardScreen;
