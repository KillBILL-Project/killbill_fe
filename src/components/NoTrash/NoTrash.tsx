import React from 'react';
import { Image } from 'react-native';
import { Container, NoTrashText } from './NoTrash.style';
import noTrashImage from '../../assets/image/no_trash_image.png';
import { ratio } from '../../utils/platform';
import { GREY600 } from '../../constants/colors';

const NoTrash = () => {
  return (
    <Container>
      <Image
        source={noTrashImage}
        style={{ height: ratio * 55, tintColor: GREY600, marginVertical: ratio * 15 }}
        resizeMode="contain"
      />
      <NoTrashText>아직 버린 쓰레기가 없습니다.</NoTrashText>
      <NoTrashText>쓰레기를 비워주세요.</NoTrashText>
    </Container>
  );
};

export default NoTrash;
