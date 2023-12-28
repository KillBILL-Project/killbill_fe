import { useNavigation } from '@react-navigation/native';
import React from 'react';
import dropDownIcon from '../../assets/icon/dropdown_icon.png';

import { Container, Header, Left, Center, Right, Body, InnerContainer } from './Screen.style';
import HeaderButton from './components/HeaderButton/HeaderButton';
import useAuth from '../../hooks/useAuth';
import { Medium18 } from '../Typography/Typography';
import { BLACK } from '../../constants/colors';

interface ScreenProps {
  title?: string;
  backgroundColor?: string;
  children?: React.ReactNode;
  isHeaderShown?: boolean;
  isBackButtonShown?: boolean;
}

const Screen = ({
  children,
  title,
  backgroundColor,
  isHeaderShown = true,
  isBackButtonShown = true,
}: ScreenProps) => {
  const { clearTokens } = useAuth();
  const { goBack, canGoBack } = useNavigation();

  const onPressBackButton = () => goBack();
  const onPressTempButton = async () => {
    await clearTokens();
  };

  return (
    <Container backgroundColor={backgroundColor}>
      <InnerContainer>
        {isHeaderShown ? (
          <Header>
            <Left>
              {canGoBack() && isBackButtonShown && (
                <HeaderButton
                  margin={15}
                  padding={15}
                  height={25}
                  width={25}
                  rotate={90}
                  icon={dropDownIcon}
                  onPress={onPressBackButton}
                />
              )}
            </Left>
            <Center>
              <Medium18 color={BLACK}>{title}</Medium18>
            </Center>
            <Right>
              <HeaderButton
                margin={15}
                padding={15}
                height={25}
                width={25}
                rotate={270}
                icon={dropDownIcon}
                onPress={onPressTempButton}
              />
            </Right>
          </Header>
        ) : null}
        <Body>{children}</Body>
      </InnerContainer>
    </Container>
  );
};

export default Screen;
