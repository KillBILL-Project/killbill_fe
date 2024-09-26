import React from 'react';
import Separator from '@components/Separator';
import { BLACK, LIGHT, WHITE } from '@constants/colors';
import shareIcon from '@assets/icon/share.png';
import copyIcon from '@assets/icon/copy.png';
import xIcon from '@assets/icon/passport/x.png';
import qrcodeIcon from '@assets/icon/passport/qrcode.png';
import { View } from 'react-native';
import { QrCodeBottomSheetProps } from '@screens/home/EsgWallet/type';
import useAlert from '@hooks/useAlert';
import {
  Container,
  Gradient,
  CloseButton,
  Notice,
  NoticeText,
  QrCodeSection,
  QrCodeImage,
  UsernameTitleText,
  UsernameText,
  AdditionalButtonSection,
  CopyButton,
  CopyButtonText,
  ShareButton,
  ShareButtonText,
  CopyButtonImage,
  ShareButtonImage,
  CloseButtonGradient,
  CloseButtonImage,
} from './styles';

const QrCodeBottomSheet = ({ setActive }: QrCodeBottomSheetProps) => {
  const { showAlert, Alert } = useAlert();
  return (
    <View>
      <Alert />
      <CloseButton onPress={() => setActive(false)}>
        <CloseButtonGradient colors={[BLACK, LIGHT]} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }}>
          <CloseButtonImage source={xIcon} tintColor={WHITE} />
        </CloseButtonGradient>
      </CloseButton>
      <Container>
        <Gradient colors={[BLACK, LIGHT]} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }}>
          <Notice>
            <NoticeText>* 아래 지갑QR은 Sample입니다.</NoticeText>
            <NoticeText>추후 업데이트 예정</NoticeText>
          </Notice>
          <QrCodeSection>
            <QrCodeImage source={qrcodeIcon} />
          </QrCodeSection>
          <UsernameTitleText>Username</UsernameTitleText>
          <UsernameText>Coming Soon...</UsernameText>
          <AdditionalButtonSection>
            <CopyButton
              onPress={() =>
                showAlert({ content: '본인의 탄소관리지갑(ESG Wallet)을 공유할 수 있습니다.' })
              }
            >
              <CopyButtonImage source={copyIcon} tintColor={WHITE} />
              <CopyButtonText>복사하기</CopyButtonText>
            </CopyButton>
            <Separator length={16} thickness={2} horizontal={false} />
            <ShareButton
              onPress={() =>
                showAlert({ content: '본인의 탄소관리지갑(ESG Wallet)을 공유할 수 있습니다.' })
              }
            >
              <ShareButtonImage source={shareIcon} tintColor={WHITE} />
              <ShareButtonText>공유하기</ShareButtonText>
            </ShareButton>
          </AdditionalButtonSection>
        </Gradient>
      </Container>
    </View>
  );
};

export default QrCodeBottomSheet;
