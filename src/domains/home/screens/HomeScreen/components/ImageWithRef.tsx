import React from 'react';
import { Image, ImageProps } from 'react-native';

const ImageWithRef = React.forwardRef<Image, ImageProps>((props, ref) => (
  <Image ref={ref} {...props} />
));

export default ImageWithRef;
