import styled from 'styled-components/native';
import { hRatioPx, ratioPx } from '@utils/platform';
import { PRIMARY, WHITE } from '@constants/colors';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled.View`
  overflow: hidden;
  border-radius: ${ratioPx(20)} ${ratioPx(20)} 0 0;
`;

export const Gradient = styled(LinearGradient)`
  width: 100%;
  padding: ${hRatioPx(56)} ${ratioPx(56)};
  align-items: center;
`;

export const CloseButton = styled.TouchableOpacity`
  position: absolute;
  width: ${hRatioPx(72)};
  height: ${hRatioPx(72)};
  background-color: #000;
  align-self: center;
  top: ${hRatioPx(-36)};
  border-radius: ${hRatioPx(36)};
  overflow: hidden;
  z-index: 2;
`;

export const CloseButtonGradient = styled(LinearGradient)`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const CloseButtonImage = styled.Image`
  width: ${hRatioPx(24)};
  height: ${hRatioPx(24)};
`;

export const Notice = styled.View`
  padding-top: ${hRatioPx(8)};
  padding-bottom: ${hRatioPx(16)};
  align-items: center;
  gap: ${hRatioPx(4)};
`;

export const NoticeText = styled.Text`
  font-size: ${ratioPx(16)};
  font-weight: 400;
  color: ${WHITE};
  text-align: center;
`;

export const QrCodeSection = styled.View`
  width: ${hRatioPx(230)};
  height: ${hRatioPx(230)};
  background-color: #fff;
  border-radius: ${ratioPx(20)};
  justify-content: center;
  align-items: center;
  margin-bottom: ${hRatioPx(24)};
`;

export const QrCodeImage = styled.Image`
  width: ${hRatioPx(182)};
  height: ${hRatioPx(182)};
`;

export const UsernameTitleText = styled.Text`
  font-size: ${hRatioPx(16)};
  font-weight: 400;
  color: ${WHITE};
`;

export const UsernameText = styled.Text`
  font-size: ${hRatioPx(24)};
  font-weight: 700;
  color: ${PRIMARY};
`;

export const AdditionalButtonSection = styled.View`
  margin-top: ${hRatioPx(60)};
  flex-direction: row;
  align-items: center;
  gap: ${hRatioPx(24)};
`;

export const CopyButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  gap: ${hRatioPx(6)};
`;

export const CopyButtonText = styled.Text`
  font-size: ${hRatioPx(16)};
  font-weight: 400;
  color: ${WHITE};
`;

export const CopyButtonImage = styled.Image`
  width: ${hRatioPx(24)};
  height: ${hRatioPx(24)};
`;

export const ShareButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  gap: ${hRatioPx(6)};
`;

export const ShareButtonText = styled.Text`
  font-size: ${hRatioPx(16)};
  font-weight: 400;
  color: ${WHITE};
`;

export const ShareButtonImage = styled.Image`
  width: ${hRatioPx(24)};
  height: ${hRatioPx(24)};
`;
