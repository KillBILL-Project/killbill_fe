import React, { ComponentType } from 'react';

const ComponentWithRef = <T, P>(Component: ComponentType<P>) => {
  return React.forwardRef<T, P>((props, ref) => <Component ref={ref} {...props} />);
};

export default ComponentWithRef;
