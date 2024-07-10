import styled from 'styled-components/native';
import { ratioPx } from '@utils/platform';
import { PRIMARY, WHITE } from '@constants/colors';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled.View`
  overflow: hidden;
  border-radius: ${ratioPx(20)} ${ratioPx(20)} 0 0;
`;

export const Gradient = styled(LinearGradient)`
  width: 100%;
  padding: ${ratioPx(56)};
  align-items: center;
`;

export const CloseButton = styled.TouchableOpacity`
  position: absolute;
  width: ${ratioPx(72)};
  height: ${ratioPx(72)};
  background-color: #000;
  align-self: center;
  top: ${ratioPx(-36)};
  border-radius: ${ratioPx(36)};
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
  width: ${ratioPx(24)};
  height: ${ratioPx(24)};
`;

export const Notice = styled.View`
  padding-top: ${ratioPx(8)};
  padding-bottom: ${ratioPx(16)};
  align-items: center;
  gap: ${ratioPx(4)};
`;

export const NoticeText = styled.Text`
  font-size: ${ratioPx(16)};
  font-weight: 400;
  color: ${WHITE};
  text-align: center;
`;

export const QrCodeSection = styled.View`
  width: ${ratioPx(230)};
  height: ${ratioPx(230)};
  background-color: #fff;
  border-radius: ${ratioPx(20)};
  justify-content: center;
  align-items: center;
  margin-bottom: ${ratioPx(24)};
`;

export const QrCodeImage = styled.Image`
  width: ${ratioPx(182)};
  height: ${ratioPx(182)};
`;

export const UsernameTitleText = styled.Text`
  font-size: ${ratioPx(16)};
  font-weight: 400;
  color: ${WHITE};
`;

export const UsernameText = styled.Text`
  font-size: ${ratioPx(24)};
  font-weight: 700;
  color: ${PRIMARY};
`;

export const AdditionalButtonSection = styled.View`
  margin-top: ${ratioPx(60)};
  flex-direction: row;
  align-items: center;
  gap: ${ratioPx(24)};
`;

export const CopyButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  gap: ${ratioPx(6)};
`;

export const CopyButtonText = styled.Text`
  font-size: ${ratioPx(16)};
  font-weight: 400;
  color: ${WHITE};
`;

export const CopyButtonImage = styled.Image`
  width: ${ratioPx(24)};
  height: ${ratioPx(24)};
`;

export const ShareButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  gap: ${ratioPx(6)};
`;

export const ShareButtonText = styled.Text`
  font-size: ${ratioPx(16)};
  font-weight: 400;
  color: ${WHITE};
`;

export const ShareButtonImage = styled.Image`
  width: ${ratioPx(24)};
  height: ${ratioPx(24)};
`;
