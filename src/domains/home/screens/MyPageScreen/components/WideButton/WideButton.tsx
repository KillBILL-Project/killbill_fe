import React from 'react';
import { Regular14, Semibold18 } from '../../../../../../components/Typography/Typography';
import { WHITE } from '../../../../../../constants/colors';
import Spacer from '../../../../../../components/Spacer/Spacer';
import checkedIcon from '../../../../../../assets/icon/checked.png';
import { Container, Description, Icon, TextContainer, Title } from './WideButton.style';

const WideButton = () => {
  return (
    <Container>
      <TextContainer>
        <Title>
          <Semibold18 color={WHITE}>티끌모아 태산!</Semibold18>
        </Title>
        <Spacer height={5} />
        <Description>
          <Regular14 color={WHITE}>환급금을 찾아볼까요?</Regular14>
        </Description>
      </TextContainer>
      <Icon source={checkedIcon} width={61} height={61} />
    </Container>
  );
};

export default WideButton;
