import React from 'react';
import { Modal, Text, View } from 'react-native';
import { styles as categoryStyles } from '@screens/home/Home/TrashCategory/styles';
import {
  Background,
  CategoryCircle,
  CategoryImage,
  CloseButton,
  CloseButtonImage,
  CloseButtonSection,
  EmptyDescription,
  EmptyDescriptionRow,
  EmptyTrashButton,
  EmptyTrashButtonSection,
  EmptyTrashButtonText,
  HandImage,
  HighlightedDescriptionText,
  LoopedArrowImage,
  MotionSection,
  NormalDescriptionText,
  ScrollGuideSection,
  ScrollSection,
  ThrowDescription,
} from '@screens/home/Home/styles';

import x from '@assets/icon/x.png';
import hand from '@assets/image/home/hand_with_direction.png';
import loopedArrow from '@assets/image/home/looped_arrow.png';
import can from '@assets/image/home/can.png';
import { WHITE } from '@constants/colors';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { setHomeGuideShown } from '@states/asyncStorage';

interface HomeGuideProps {
  visible: boolean;
  motionHeight: number;
  lottieHeight: number;
  setGuideShown: React.Dispatch<React.SetStateAction<boolean>>;
}

const HomeGuide = ({ visible, motionHeight, lottieHeight, setGuideShown }: HomeGuideProps) => {
  const { top } = useSafeAreaInsets();

  const handleCloseButtonPress = async () => {
    try {
      await setHomeGuideShown();
    } finally {
      setGuideShown(true);
    }
  };

  return (
    lottieHeight != null && (
      <Modal visible={visible} transparent statusBarTranslucent>
        <Background>
          <CloseButtonSection topInset={top}>
            <CloseButton onPress={handleCloseButtonPress}>
              <CloseButtonImage source={x} tintColor={WHITE} />
            </CloseButton>
          </CloseButtonSection>
          <MotionSection height={motionHeight}>
            <ThrowDescription position={lottieHeight * 0.55}>
              <Text>
                <HighlightedDescriptionText>여기</HighlightedDescriptionText>
                <NormalDescriptionText>로 버리고 싶은</NormalDescriptionText>
              </Text>
              <Text>
                <NormalDescriptionText>쓰레기를 옮겨서 </NormalDescriptionText>
                <HighlightedDescriptionText>버릴 수 있어요.</HighlightedDescriptionText>
              </Text>
            </ThrowDescription>
            <EmptyTrashButtonSection>
              <EmptyDescriptionRow>
                <LoopedArrowImage source={loopedArrow} />
                <EmptyDescription>
                  <NormalDescriptionText>쌓인 쓰레기를</NormalDescriptionText>
                  <HighlightedDescriptionText>비울 수 있어요</HighlightedDescriptionText>
                </EmptyDescription>
              </EmptyDescriptionRow>
              <EmptyTrashButton disabled>
                <EmptyTrashButtonText>비우기</EmptyTrashButtonText>
              </EmptyTrashButton>
            </EmptyTrashButtonSection>
          </MotionSection>
          <ScrollSection>
            <CategoryCircle>
              <View style={categoryStyles.outerCircle}>
                <View style={categoryStyles.middleCircle}>
                  <View style={categoryStyles.innerCircle} />
                </View>
              </View>
              <CategoryImage
                source={can}
                resizeMode="contain"
                style={categoryStyles.fixedCategoryImage}
              />
            </CategoryCircle>
          </ScrollSection>
          <ScrollGuideSection>
            <HandImage source={hand} />
            <Text>
              <NormalDescriptionText>좌, 우 밀기로 </NormalDescriptionText>
              <HighlightedDescriptionText>쓰레기를 선택</HighlightedDescriptionText>
              <NormalDescriptionText>할 수 있어요.</NormalDescriptionText>
            </Text>
          </ScrollGuideSection>
        </Background>
      </Modal>
    )
  );
};

export default HomeGuide;
