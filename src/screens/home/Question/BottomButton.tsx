import React from 'react';
import {
  AdSection,
  BottomButtonSection,
  ButtonSection,
  ResultButton,
  ResultButtonText,
} from '@screens/home/Question/style';
import { BannerAd, BannerAdSize } from 'react-native-google-mobile-ads';

interface BottomButtonProps {
  buttonText: string;
  onPress: () => void;
}

const BottomButton = ({ buttonText, onPress }: BottomButtonProps) => {
  return (
    <BottomButtonSection>
      <AdSection>
        <BannerAd unitId="adUnitId" size={BannerAdSize.LARGE_BANNER} />
      </AdSection>
      <ButtonSection>
        <ResultButton onPress={onPress}>
          <ResultButtonText>{buttonText}</ResultButtonText>
        </ResultButton>
      </ButtonSection>
    </BottomButtonSection>
  );
};

export default BottomButton;
