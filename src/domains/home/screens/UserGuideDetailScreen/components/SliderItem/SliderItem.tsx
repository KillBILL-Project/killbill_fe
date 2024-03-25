import React from 'react';
import { Container } from './SliderItem.style';
import GuideImage from '../GuideImage';
import GuideContent from '../GuideContent';
import { GuidanceType } from '../../../../../../constants/userGuide';

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
