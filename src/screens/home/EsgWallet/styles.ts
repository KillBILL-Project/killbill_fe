import styled from 'styled-components/native';
import { hRatioPx, ratioPx } from '@utils/platform';
import { GREY600, GREY800, PRIMARY, WHITE } from '@constants/colors';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled.View`
  flex: 1;
  padding: ${hRatioPx(24)} ${ratioPx(24)};
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
  width: ${hRatioPx(16)};
  height: ${hRatioPx(16)};
`;

export const TokenSection = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: ${hRatioPx(40)};
  padding-bottom: ${hRatioPx(53)};
`;

export const TokenValueColumn = styled.View``;

export const TokenTitle = styled.View`
  flex-direction: row;
  align-items: center;
  gap: ${hRatioPx(6)};
`;

export const TokenTitleText = styled.Text`
  font-size: ${hRatioPx(16)};
  color: ${WHITE};
  font-weight: 400;
`;

export const TokenValue = styled.View``;

export const TokenValueText = styled.Text`
  font-size: ${hRatioPx(42)};
  color: ${PRIMARY};
  font-weight: 700;
`;

export const TokenQrCodeGradient = styled(LinearGradient)`
  padding: ${hRatioPx(8)};
  border-radius: ${ratioPx(5)};
  z-index: 100;
`;

export const TokenQrCodeButton = styled.TouchableOpacity``;

export const TokenQrCode = styled.Image`
  width: ${hRatioPx(40)};
  height: ${hRatioPx(40)};
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
  padding: ${hRatioPx(20)} 0;
  gap: ${hRatioPx(4)};
`;

export const ConnectWalletButtonImage = styled.Image`
  width: ${hRatioPx(32)};
  height: ${hRatioPx(32)};
`;

export const TradeButton = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: ${hRatioPx(20)} 0;
  gap: ${hRatioPx(4)};
`;

export const TradeButtonImage = styled.Image`
  width: ${hRatioPx(32)};
  height: ${hRatioPx(32)};
`;

export const ButtonTitle = styled.View``;

export const ButtonTitleText = styled.Text`
  font-size: ${hRatioPx(14)};
  font-weight: 500;
  color: #8e8e93;
`;

export const EsgContainer = styled.View`
  margin: ${hRatioPx(24)} 0;
`;

export const CarbonSavingSection = styled.View``;

export const CarbonSavingTitleRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${hRatioPx(12)};
`;

export const CarbonSavingTitle = styled.View`
  flex-direction: row;
  align-items: center;
  gap: ${hRatioPx(6)};
`;

export const CarbonSavingTitleText = styled.Text`
  font-size: ${hRatioPx(20)};
  font-weight: 700;
  line-height: ${hRatioPx(30)};
`;

export const UnitSwitchingButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  gap: ${ratioPx(4)};
`;

export const UnitSwitchingButtonImage = styled.Image`
  width: ${hRatioPx(22)};
  height: ${hRatioPx(22)};
`;

export const UnitSwitchingButtonText = styled.Text`
  font-size: ${hRatioPx(14)};
  font-weight: 400;
  line-height: ${hRatioPx(20)};
  color: ${GREY600};
`;

export const CarbonSavingCardRow = styled.View`
  flex-direction: row;
  gap: ${hRatioPx(12)};
  margin-bottom: ${hRatioPx(24)};
`;

export const SavingValueCard = styled(LinearGradient)`
  flex: 1;
  padding: ${hRatioPx(16)} ${ratioPx(16)};
  background-color: #00008b;
  border-radius: ${ratioPx(10)};
`;

export const SavingValueTitle = styled.View`
  margin-bottom: ${hRatioPx(33)};
`;

export const SavingValueTitleText = styled.Text`
  font-size: ${hRatioPx(16)};
  font-weight: 400;
  color: ${WHITE};
`;

export const SavingValue = styled.View`
  flex-direction: row;
  align-items: flex-end;
  gap: ${hRatioPx(4)};
  line-height: ${hRatioPx(24)};
`;

export const SavingValueText = styled.Text`
  font-size: ${hRatioPx(32)};
  font-weight: 700;
  line-height: ${hRatioPx(32)};
  color: ${PRIMARY};
  align-self: flex-end;
`;

export const SavingUnitText = styled.Text`
  font-size: ${hRatioPx(16)};
  font-weight: 400;
  line-height: ${hRatioPx(24)};
  color: ${PRIMARY};
`;

export const RefundSection = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const RefundTitle = styled.View`
  flex-direction: row;
  align-items: center;
  gap: ${hRatioPx(6)};
`;

export const RefundTitleText = styled.Text`
  font-size: ${hRatioPx(16)};
  font-weight: 500;
  line-height: ${hRatioPx(26)};
  color: ${GREY800};
`;

export const RefundValue = styled.View`
  flex-direction: row;
`;

export const RefundValueText = styled.Text`
  font-size: ${hRatioPx(20)};
  font-weight: 700;
  line-height: ${hRatioPx(32)};
  color: ${GREY800};
`;

export const RefundSubtitle = styled.View`
  justify-content: center;
  align-items: flex-end;
`;

export const RefundSubtitleText = styled.Text`
  font-size: ${hRatioPx(12)};
  line-height: ${hRatioPx(20)};
  font-weight: 500;
  color: ${GREY600};
`;
