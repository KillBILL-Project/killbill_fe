import styled from 'styled-components/native';
import { ratioPx } from '@utils/platform';
import { GREY600, GREY800, PRIMARY, WHITE } from '@constants/colors';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled.View`
  flex: 1;
  padding: ${ratioPx(24)};
`;

export const Background = styled.View`
  position: absolute;
  width: 100%;
  height: 40%;
`;

export const Gradient = styled(LinearGradient)`
  width: 100%;
  height: 100%;
`;

export const TooltipButton = styled.TouchableOpacity``;

export const TooltipImage = styled.Image`
  width: ${ratioPx(16)};
  height: ${ratioPx(16)};
`;

export const TokenSection = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: ${ratioPx(40)};
  padding-bottom: ${ratioPx(53)};
`;

export const TokenValueColumn = styled.View``;

export const TokenTitle = styled.View`
  flex-direction: row;
  align-items: center;
  gap: ${ratioPx(6)};
`;

export const TokenTitleText = styled.Text`
  font-size: ${ratioPx(16)};
  color: ${WHITE};
  font-weight: 400;
`;

export const TokenValue = styled.View``;

export const TokenValueText = styled.Text`
  font-size: ${ratioPx(42)};
  color: ${PRIMARY};
  font-weight: 700;
`;

export const TokenQrCodeGradient = styled(LinearGradient)`
  padding: ${ratioPx(8)};
  border-radius: ${ratioPx(5)};
  z-index: 100;
`;

export const TokenQrCodeButton = styled.TouchableOpacity``;

export const TokenQrCode = styled.Image`
  width: ${ratioPx(40)};
  height: ${ratioPx(40)};
`;

export const TokenButtonSection = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  border-radius: ${ratioPx(15)};
`;

export const ConnectWalletButton = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: ${ratioPx(20)} 0;
  gap: ${ratioPx(4)};
`;

export const ConnectWalletButtonImage = styled.Image`
  width: ${ratioPx(32)};
  height: ${ratioPx(32)};
`;

export const TradeButton = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: ${ratioPx(20)} 0;
  gap: ${ratioPx(4)};
`;

export const TradeButtonImage = styled.Image`
  width: ${ratioPx(32)};
  height: ${ratioPx(32)};
`;

export const ButtonTitle = styled.View``;

export const ButtonTitleText = styled.Text`
  font-size: ${ratioPx(14)};
  font-weight: 500;
  color: #8e8e93;
`;

export const EsgContainer = styled.View`
  margin: ${ratioPx(24)} 0;
`;

export const CarbonSavingSection = styled.View``;

export const CarbonSavingTitleRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${ratioPx(12)};
`;

export const CarbonSavingTitle = styled.View`
  flex-direction: row;
  align-items: center;
  gap: ${ratioPx(6)};
`;

export const CarbonSavingTitleText = styled.Text`
  font-size: ${ratioPx(20)};
  font-weight: 700;
`;

export const UnitSwitchingButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  gap: ${ratioPx(4)};
`;

export const UnitSwitchingButtonImage = styled.Image`
  width: ${ratioPx(24)};
  height: ${ratioPx(24)};
`;

export const UnitSwitchingButtonText = styled.Text`
  font-size: ${ratioPx(14)};
  font-weight: 400;
`;

export const CarbonSavingCardRow = styled.View`
  flex-direction: row;
  gap: ${ratioPx(12)};
  margin-bottom: ${ratioPx(24)};
`;

export const SavingValueCard = styled(LinearGradient)`
  flex: 1;
  padding: ${ratioPx(16)};
  background-color: #00008b;
  border-radius: ${ratioPx(10)};
`;

export const SavingValueTitle = styled.View`
  margin-bottom: ${ratioPx(33)};
`;

export const SavingValueTitleText = styled.Text`
  font-size: ${ratioPx(16)};
  font-weight: 400;
  color: ${WHITE};
`;

export const SavingValue = styled.View`
  flex-direction: row;
  align-items: flex-end;
  gap: ${ratioPx(4)};
`;

export const SavingValueText = styled.Text`
  font-size: ${ratioPx(32)};
  font-weight: 700;
  color: ${PRIMARY};
`;

export const SavingUnitText = styled.Text`
  font-size: ${ratioPx(16)};
  font-weight: 400;
  color: ${PRIMARY};
`;

export const RefundSection = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const RefundTitle = styled.View`
  flex-direction: row;
  gap: ${ratioPx(6)};
`;

export const RefundTitleText = styled.Text`
  font-size: ${ratioPx(16)};
  font-weight: 500;
  color: ${GREY800};
`;

export const RefundValue = styled.View`
  flex-direction: row;
`;

export const RefundValueText = styled.Text`
  font-size: ${ratioPx(20)};
  font-weight: 700;
  color: ${GREY800};
`;

export const RefundSubtitle = styled.View`
  justify-content: center;
  align-items: flex-end;
`;

export const RefundSubtitleText = styled.Text`
  font-size: ${ratioPx(12)};
  font-weight: 500;
  color: ${GREY600};
`;
