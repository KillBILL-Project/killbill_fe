import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ImageSourcePropType } from 'react-native';
import backButton from '../../assets/icon/back_button.png';

import { Container, HeaderContainer, Left, Center, Right, Body, Header } from './Screen.style';
import { Medium18 } from '../Typography/Typography';
import { BLACK } from '../../constants/colors';
import HeaderButton from './components/HeaderButton/HeaderButton';

interface RightButtonProps {
  icon: ImageSourcePropType;
  padding: number;
  size: number;
  onPress: () => void;
}

interface ScreenProps {
  title?: string;
  backgroundColor?: string;
  backButtonColor?: string;
  headerColor?: string;
  titleColor?: string;
  children?: React.ReactNode;
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
  isHeaderShown = true,
  isBackButtonShown = true,
  rightButtonProps,
}: ScreenProps) => {
  const { top } = useSafeAreaInsets();
  const { goBack, canGoBack } = useNavigation();

  const onPressBackButton = () => goBack();

  return (
    <Container backgroundColor={backgroundColor}>
      {isHeaderShown ? (
        <HeaderContainer backgroundColor={headerColor} topSafeArea={top}>
          <Header>
            <Left>
              {canGoBack() && isBackButtonShown && (
                <HeaderButton
                  padding={15}
                  size={24}
                  color={backButtonColor}
                  icon={backButton}
                  onPress={onPressBackButton}
                />
              )}
            </Left>
            <Center>
              <Medium18 color={titleColor ?? BLACK}>{title}</Medium18>
            </Center>
            <Right>{rightButtonProps && <HeaderButton {...rightButtonProps} />}</Right>
          </Header>
        </HeaderContainer>
      ) : null}
      <Body>{children}</Body>
    </Container>
  );
};

export default Screen;
