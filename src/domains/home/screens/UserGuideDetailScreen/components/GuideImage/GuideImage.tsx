import React from 'react';
import { Image, ImageSourcePropType } from 'react-native';
import { Container } from './GuideImage.style';

interface GuideImageProps {
  image: ImageSourcePropType;
}

const GuideImage = ({ image }: GuideImageProps) => {
  return (
    <Container>
      <Image
        source={image}
        style={[{ width: '100%', height: '100%', top: 0, position: 'absolute' }]}
        // style={[{ width: '100%', height: '100%' }, isFullWidth && { top: 0 }]}
        resizeMode="contain"
      />
    </Container>
  );
};

export default GuideImage;
