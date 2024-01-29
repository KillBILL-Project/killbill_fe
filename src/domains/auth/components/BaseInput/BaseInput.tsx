import React from 'react';
import { BaseTextInput, Container, InputTitle } from './BaseInput.style';
import { GREY500, GREY800 } from '../../../../constants/colors';
import { Medium14 } from '../../../../components/Typography';

interface BaseInputProps {
  title: string;
  placeholder: string;
  onChangeText: (text: string) => void;
  isSecure?: boolean;
  value: string;
}

const BaseInput = ({ title, placeholder, onChangeText, value, isSecure }: BaseInputProps) => {
  return (
    <Container>
      <InputTitle>
        <Medium14 color={GREY800}>{title}</Medium14>
      </InputTitle>
      <BaseTextInput
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        secureTextEntry={isSecure}
        autoCapitalize="none"
        placeholderTextColor={GREY500}
      />
    </Container>
  );
};

export default BaseInput;
