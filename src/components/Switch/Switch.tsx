import React, { useEffect, useRef } from 'react';
import { Animated, Easing } from 'react-native';
import { Circle, Container } from './Switch.style';

interface SwitchProps {
  width: number;
  height: number;
  circleMargin: number;
  value: boolean;
  backgroundActive: string;
  backgroundInactive: string;
  circleColor: string;
  onValueChange: () => void;
}

const Switch = ({
  width,
  height,
  circleMargin,
  backgroundActive,
  backgroundInactive,
  circleColor,
  value,
  onValueChange,
}: SwitchProps) => {
  const switchAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(switchAnim, {
      toValue: !value ? 0 : width - height,
      easing: Easing.out(Easing.circle),
      duration: 50,
      useNativeDriver: true,
    }).start();
  }, [height, switchAnim, value, width]);

  return (
    <Container
      width={width}
      height={height}
      backgroundColor={value ? backgroundActive : backgroundInactive}
      onPress={onValueChange}
    >
      <Circle
        height={height}
        backgroundColor={circleColor}
        borderWidth={circleMargin}
        borderColor={value ? backgroundActive : backgroundInactive}
        style={{
          transform: [
            {
              translateX: switchAnim,
            },
          ],
        }}
      />
    </Container>
  );
};

export default Switch;
