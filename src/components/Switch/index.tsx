import React, { useEffect } from 'react';
import { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { scale } from '@utils/platform';
import { Knob, SwitchTrack } from './styles';

interface SwitchProps {
  width: number;
  height: number;
  knobMargin?: number;
  value: boolean;
  activeColor: string;
  inactiveColor: string;
  knobColor: string;
  onValueChange: () => void;
}

const Switch = ({
  width,
  height,
  knobMargin = 0,
  activeColor,
  inactiveColor,
  knobColor,
  value,
  onValueChange,
}: SwitchProps) => {
  const distance = scale(width) - scale(height);
  const knobPosition = useSharedValue(value ? distance : 0);

  useEffect(() => {
    knobPosition.value = withSpring(value ? distance : 0, {
      mass: 0.2,
      damping: 10,
      velocity: 200,
    });
  }, [value]);

  const animatedKnobStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: knobPosition.value }],
  }));

  return (
    <SwitchTrack
      switchWidth={width}
      switchHeight={height}
      switchColor={value ? activeColor : inactiveColor}
      onPress={onValueChange}
    >
      <Knob
        knobSize={height}
        knobMargin={knobMargin}
        knobColor={knobColor}
        style={animatedKnobStyle}
      />
    </SwitchTrack>
  );
};

export default Switch;
