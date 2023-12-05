import React from 'react';
import { BaseTextInput, Container, InputTitle } from './BaseInput.style';

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
      <InputTitle>{title}</InputTitle>
      <BaseTextInput
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        secureTextEntry={isSecure}
        autoCapitalize="none"
      />
    </Container>
  );
};

export default BaseInput;
