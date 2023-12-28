import React, { ComponentType } from 'react';
import { Image, ImageProps } from 'react-native';

const ComponentWithRef = <T, P>(Component: ComponentType<P>) => {
  return React.forwardRef<T, P>((props, ref) => <Component ref={ref} {...props} />);
};

export default ComponentWithRef;
