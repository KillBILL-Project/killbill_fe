import React from 'react';
import { Image } from 'react-native';
import noTrashImage from '@assets/image/no_trash_image.png';
import { GREY600 } from '@constants/colors';
import { scale } from '@utils/platform';
import { Container, NoTrashText } from './styles';

const NoTrash = () => {
  return (
    <Container>
      <Image
        source={noTrashImage}
        style={{ height: scale(55), tintColor: GREY600, marginVertical: scale(15) }}
        resizeMode="contain"
      />
      <NoTrashText>아직 버린 쓰레기가 없습니다.</NoTrashText>
      <NoTrashText>쓰레기를 비워주세요.</NoTrashText>
    </Container>
  );
};

export default NoTrash;
