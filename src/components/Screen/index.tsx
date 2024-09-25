import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ImageSourcePropType, StatusBar } from 'react-native';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import backButton from '@assets/icon/back_button.png';
import { BLACK } from '@constants/colors';
import { Medium18 } from '@components/Typography';
import HeaderButton from '@components/Screen/HeaderButton';
import Toast from '@components/Toast';

import Spinner from '@components/Spinner';
import { isShowToastState } from '@states/notification';
import { inProgressState, screenHeightState } from '@states/common';
import { Body, Center, Container, Header, HeaderContainer, Left, Right } from './styles';

interface RightButtonProps {
  icon: ImageSourcePropType;
  padding: number;
  size: number;
  color?: string;
  onPress: () => void;
}

interface ScreenProps {
  title?: string;
  backgroundColor?: string;
  backButtonColor?: string;
  headerColor?: string;
  titleColor?: string;
  children?: React.ReactNode;
  isTopSafeArea?: boolean;
  isHeaderShown?: boolean;
  isBackButtonShown?: boolean;
  rightButtonProps?: RightButtonProps;
}

const Screen = ({
  children,
  title,
  backgroundColor,
  backButtonColor,
  headerColor,
  titleColor,
  isTopSafeArea = true,
  isHeaderShown = true,
  isBackButtonShown = true,
  rightButtonProps,
}: ScreenProps) => {
  const { goBack, canGoBack } = useNavigation();
  const isShowToast = useRecoilValue(isShowToastState);
  const inProgress = useRecoilValue(inProgressState);
  const setScreenHeight = useSetRecoilState(screenHeightState);

  return (
    <>
      <StatusBar
        translucent
        barStyle={headerColor === '#000000' ? 'light-content' : 'dark-content'}
        backgroundColor="transparent"
      />
      {isShowToast && <Toast />}
      <Container
        backgroundColor={backgroundColor}
        onLayout={e => {
          setScreenHeight(e.nativeEvent.layout.height);
        }}
      >
        {inProgress && <Spinner />}
        <HeaderContainer
          backgroundColor={headerColor}
          edges={{ top: isTopSafeArea ? 'additive' : 'off' }}
        >
          {isHeaderShown && (
            <Header>
              <Left>
                {canGoBack() && isBackButtonShown && (
                  <HeaderButton
                    padding={15}
                    size={24}
                    color={backButtonColor}
                    icon={backButton}
                    onPress={goBack}
                  />
                )}
              </Left>
              <Center>
                <Medium18 color={titleColor ?? BLACK}>{title}</Medium18>
              </Center>
              <Right>{rightButtonProps && <HeaderButton {...rightButtonProps} />}</Right>
            </Header>
          )}
        </HeaderContainer>
        <Body>{children}</Body>
      </Container>
    </>
  );
};

export default Screen;
