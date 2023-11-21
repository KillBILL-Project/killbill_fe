import { useNavigation } from '@react-navigation/native';
import React from 'react';
import dropDownIcon from '../../assets/icon/dropdown_icon.png';

import {
  Container,
  Header,
  Left,
  BackButton,
  BackButtonIcon,
  Center,
  Right,
  HeaderTitle,
  Body,
} from './Screen.style';
// import useInterceptor from '../../hooks/useInterceptor';

interface ScreenProps {
  title?: string;
  backgroundColor?: string;
  children?: React.ReactNode;
  isHeaderShown?: boolean;
}

const Screen = ({ children, title, backgroundColor, isHeaderShown = true }: ScreenProps) => {
  const { goBack, canGoBack } = useNavigation();
  const onPressBackButton = () => goBack();

  // useInterceptor();

  return (
    <Container backgroundColor={backgroundColor}>
      {isHeaderShown ? (
        <Header>
          <Left>
            {canGoBack() && (
              <BackButton onPress={onPressBackButton}>
                <BackButtonIcon source={dropDownIcon} />
              </BackButton>
            )}
          </Left>
          <Center>
            <HeaderTitle>{title}</HeaderTitle>
          </Center>
          <Right />
        </Header>
      ) : null}
      <Body>{children}</Body>
    </Container>
  );
};

export default Screen;
