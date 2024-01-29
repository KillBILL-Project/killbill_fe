import React, { useState } from 'react';
import { Modal } from 'react-native';
import Screen from '../../../../components/Screen/Screen';
import HeaderTabBar from '../components/HeaderTabBar';
import { SelectType } from '../components/HeaderTabBar/HeaderTabBar';
import {
  Container,
  New,
  NewText,
  PraiseCard,
  PraiseCardName,
  Scroll,
} from './PraiseCardScreen.style';
import card from '../../../../assets/image/card_sample.png';
import BaseIcon from '../../../../components/Icon/BaseIcon';
import { Bold18 } from '../../../../components/Typography';
import { GREY700 } from '../../../../constants/colors';
import CardModal from './CardModal/CardModal';

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
        <Scroll>
          <Container>
            {list.map((_, index) => (
              <PraiseCard key={`a${index.toString()}`} onPress={onPressCard}>
                <NewCard />
                <BaseIcon size={90} icon={card} />
                <PraiseCardName>
                  <Bold18 color={GREY700}>환경운동가</Bold18>
                </PraiseCardName>
              </PraiseCard>
            ))}
          </Container>
        </Scroll>
      </Screen>
      <Modal animationType="fade" visible={modalVisible} onRequestClose={closeModal}>
        <CardModal onPressClose={closeModal} />
      </Modal>
    </>
  );
};

export default PraiseCardScreen;
