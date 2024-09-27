import React, { useState } from 'react';
import Screen from '@components/Screen';
import { BLACK, GREY400, GREY600, LIGHT, WHITE } from '@constants/colors';
import Separator from '@components/Separator';

import switchIcon from '@assets/icon/passport/switch.png';
import tooltipIcon from '@assets/icon/passport/tooltip.png';
import tradeIcon from '@assets/icon/passport/trade.png';
import walletIcon from '@assets/icon/passport/wallet.png';
import qrcode from '@assets/icon/passport/qrcode.png';
import shareIcon from '@assets/icon/share.png';
import { styles } from '@constants/constants';
import Animated, { useAnimatedStyle, useSharedValue } from 'react-native-reanimated';
import { ratio } from '@utils/platform';
import { Modal, Pressable, View } from 'react-native';
import { carbonMetrics, CarbonMetricsKeyType, TooltipKeyType } from '@screens/home/EsgWallet/type';
import QrCodeBottomSheet from '@screens/home/EsgWallet/QrCodeBottomSheet';
import TooltipBottomSheet from '@screens/home/EsgWallet/TooltipBottomSheet';
import useWwoossTokenQuery from '@hooks/queries/quiz/useWwoossTokenQuery';
import useUserActiveLogQuery from '@hooks/queries/log/useUserActiveLogQuery';
import useVerifiedUserActiveLogQuery from '@hooks/queries/log/useVerifiedUserActiveLogQuery';
import useTotalRefundQuery from '@hooks/queries/log/useTotalRefundQuery';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { HomeStackParamList } from '@type/navigation';
import {
  ButtonTitle,
  ButtonTitleText,
  CarbonSavingCardRow,
  CarbonSavingSection,
  CarbonSavingTitle,
  CarbonSavingTitleRow,
  CarbonSavingTitleText,
  ConnectWalletButton,
  ConnectWalletButtonImage,
  Container,
  EsgContainer,
  Gradient,
  RefundSection,
  RefundSubtitle,
  RefundSubtitleText,
  RefundTitle,
  RefundTitleText,
  RefundValue,
  RefundValueText,
  SavingUnitText,
  SavingValue,
  SavingValueCard,
  SavingValueText,
  SavingValueTitle,
  SavingValueTitleText,
  TokenButtonSection,
  TokenQrCode,
  TokenQrCodeButton,
  TokenQrCodeGradient,
  TokenSection,
  TokenTitle,
  TokenTitleText,
  TokenValue,
  TokenValueColumn,
  TokenValueText,
  TooltipButton,
  TooltipImage,
  TradeButton,
  TradeButtonImage,
  UnitSwitchingButton,
  UnitSwitchingButtonImage,
  UnitSwitchingButtonText,
} from './styles';

const EsgWalletScreen = () => {
  const [isActiveTooltip, setIsActiveTooltip] = useState(false);
  const [isActiveQrCode, setIsActiveQrCode] = useState(false);
  const [selectedTooltip, setSelectedTooltip] = useState<TooltipKeyType>('token');
  const [carbonMetricsKey, setCarbonMetricsKey] = useState<CarbonMetricsKeyType>('reduction');

  const { navigate } = useNavigation<NavigationProp<HomeStackParamList>>();

  const { data: totalToken } = useWwoossTokenQuery({});
  const { data: userActiveLog } = useUserActiveLogQuery();
  const { data: verifiedUserActiveLog } = useVerifiedUserActiveLogQuery();
  const { data: totalRefund } = useTotalRefundQuery();
  const backgroundHeight = useSharedValue(ratio * 240);

  const gradientViewStyle = useAnimatedStyle(() => ({
    height: backgroundHeight.value,
  }));

  const onPressTooltipButton = (type: TooltipKeyType) => {
    setIsActiveTooltip(true);
    setSelectedTooltip(type);
  };

  const handlePlannedButtonPress = () => {
    navigate('WebView', {
      url: 'https://wwooss.notion.site/ESG-Wallet-10eb50d14cf68083b228e4d912ebc5d6',
    });
  };

  return (
    <Screen
      title="ESG Wallet"
      titleColor={WHITE}
      headerColor={BLACK}
      isBackButtonShown={false}
      rightButtonProps={{
        icon: shareIcon,
        size: 24,
        padding: 24,
        color: WHITE,
        onPress: handlePlannedButtonPress,
      }}
    >
      <Animated.View style={[{ position: 'absolute', width: '100%' }, gradientViewStyle]}>
        <Gradient colors={[BLACK, LIGHT]} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} />
      </Animated.View>
      <Container>
        <TokenSection>
          <TokenValueColumn>
            <TokenTitle>
              <TokenTitleText>CREDIT</TokenTitleText>
              <TooltipButton onPress={() => onPressTooltipButton('token')}>
                <TooltipImage source={tooltipIcon} tintColor={WHITE} />
              </TooltipButton>
            </TokenTitle>
            <TokenValue>
              <TokenValueText>{totalToken}</TokenValueText>
            </TokenValue>
          </TokenValueColumn>
          <TokenQrCodeButton onPress={() => setIsActiveQrCode(true)}>
            <TokenQrCodeGradient
              colors={['#E7FFC4', '#F8FFEE']}
              useAngle
              angle={136}
              angleCenter={{ x: 1, y: 1 }}
            >
              <TokenQrCode source={qrcode} />
            </TokenQrCodeGradient>
          </TokenQrCodeButton>
        </TokenSection>
        <TokenButtonSection
          style={styles.shadow}
          onLayout={event => {
            const { height, y } = event.nativeEvent.layout;
            backgroundHeight.value = y + height / 2;
          }}
        >
          <ConnectWalletButton onPress={handlePlannedButtonPress}>
            <ConnectWalletButtonImage source={walletIcon} />
            <ButtonTitle>
              <ButtonTitleText>Connect Wallet</ButtonTitleText>
            </ButtonTitle>
          </ConnectWalletButton>
          <Separator length={48} horizontal={false} color={GREY400} />
          <TradeButton onPress={handlePlannedButtonPress}>
            <TradeButtonImage source={tradeIcon} />
            <ButtonTitle>
              <ButtonTitleText>Trade</ButtonTitleText>
            </ButtonTitle>
          </TradeButton>
        </TokenButtonSection>
        <EsgContainer>
          <CarbonSavingSection>
            <CarbonSavingTitleRow>
              <CarbonSavingTitle>
                <CarbonSavingTitleText>
                  {carbonMetrics[carbonMetricsKey].title}
                </CarbonSavingTitleText>
                <TooltipButton
                  onPress={() => onPressTooltipButton(carbonMetrics[carbonMetricsKey].key)}
                >
                  <TooltipImage source={tooltipIcon} />
                </TooltipButton>
              </CarbonSavingTitle>
              <UnitSwitchingButton
                onPress={() =>
                  setCarbonMetricsKey(prevState =>
                    prevState === 'reduction' ? 'emission' : 'reduction',
                  )
                }
                disabled
              >
                <UnitSwitchingButtonImage source={switchIcon} tintColor={GREY600} />
                <UnitSwitchingButtonText>
                  {carbonMetrics[carbonMetricsKey].switchTitle}
                </UnitSwitchingButtonText>
              </UnitSwitchingButton>
            </CarbonSavingTitleRow>
            <CarbonSavingCardRow>
              <SavingValueCard colors={[BLACK, LIGHT]} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }}>
                <SavingValueTitle>
                  <SavingValueTitleText>인증</SavingValueTitleText>
                </SavingValueTitle>
                <SavingValue>
                  <SavingValueText>{(verifiedUserActiveLog ?? 0).toFixed(1)}</SavingValueText>
                  <SavingUnitText>kgCO2</SavingUnitText>
                </SavingValue>
              </SavingValueCard>
              <SavingValueCard colors={[BLACK, LIGHT]} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }}>
                <SavingValueTitle>
                  <SavingValueTitleText>기록</SavingValueTitleText>
                </SavingValueTitle>
                <SavingValue>
                  <SavingValueText>{(userActiveLog ?? 0).toFixed(1)}</SavingValueText>
                  <SavingUnitText>kgCO2</SavingUnitText>
                </SavingValue>
              </SavingValueCard>
            </CarbonSavingCardRow>
          </CarbonSavingSection>
          <RefundSection>
            <RefundTitle>
              <RefundTitleText>예상환급금</RefundTitleText>
              <TooltipButton onPress={() => onPressTooltipButton('refund')}>
                <TooltipImage source={tooltipIcon} />
              </TooltipButton>
            </RefundTitle>
            <RefundValue>
              <RefundValueText>{`${(totalRefund ?? 0).toLocaleString()}원`}</RefundValueText>
            </RefundValue>
          </RefundSection>
          <Separator length="100%" horizontal color="#D9D9D9" margin={8} />
          <RefundSubtitle>
            <RefundSubtitleText>잠재적인 예상환급금 누적 수치</RefundSubtitleText>
          </RefundSubtitle>
        </EsgContainer>
      </Container>
      <Modal transparent visible={isActiveTooltip || isActiveQrCode} statusBarTranslucent>
        <View style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.32)' }}>
          <Pressable
            style={{ flex: 1 }}
            onPress={() => {
              setIsActiveTooltip(false);
              setIsActiveQrCode(false);
            }}
          />
          {isActiveTooltip && (
            <TooltipBottomSheet setActive={setIsActiveTooltip} selectedTooltip={selectedTooltip} />
          )}
          {isActiveQrCode && <QrCodeBottomSheet setActive={setIsActiveQrCode} />}
        </View>
      </Modal>
    </Screen>
  );
};

export default EsgWalletScreen;
