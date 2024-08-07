import React from 'react';
import { KeyboardTypeOptions } from 'react-native/Libraries/Components/TextInput/TextInput';
import { GREY500, GREY800 } from '@constants/colors';
import { Medium14 } from '@components/Typography';
import { BaseTextInput, Container, InputTitle } from './styles';

interface BaseInputProps {
  title: string;
  placeholder: string;
  onChangeText: (text: string) => void;
  isSecure?: boolean;
  keyboardType?: KeyboardTypeOptions;
  value: string;
}

const BaseInput = ({
  title,
  placeholder,
  onChangeText,
  value,
  isSecure,
  keyboardType,
}: BaseInputProps) => {
  return (
    <Container>
      <InputTitle>
        <Medium14 color={GREY800}>{title}</Medium14>
      </InputTitle>
      <BaseTextInput
        keyboardType={keyboardType}
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
