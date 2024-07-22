import React from 'react';
import { GuidanceType } from '@constants/userGuide';
import { Container } from './styles';
import GuideImage from '../GuideImage';
import GuideContent from '../GuideContent';

interface SliderItemProps extends GuidanceType {
  color?: string;
}

const SliderItem = ({ image, guidance, isFullWidth, color }: SliderItemProps) => {
  return (
    <Container isFullWidth={isFullWidth} colorType={guidance?.colorType}>
      {image && <GuideImage image={image} />}
      {guidance && <GuideContent guidance={guidance} isFullWidth={isFullWidth} color={color} />}
    </Container>
  );
};

export default SliderItem;
