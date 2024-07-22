import React from 'react';
import {
  H1Text,
  H2Text,
  H3Text,
  H4Text,
  H5Text,
  H6Text,
  H7Text,
  Semibold1Text,
  Semibold2Text,
  Semibold3Text,
  Semibold4Text,
  Semibold5Text,
  Semibold6Text,
  Medium1Text,
  Medium2Text,
  Medium3Text,
  Regular1Text,
  Regular2Text,
  Regular3Text,
  Regular4Text,
  Bold18Text,
  Bold16Text,
  Bold12Text,
  Semibold18Text,
  Semibold12Text,
  Medium16Text,
  Regular18Text,
  // Regular14Text,
} from './styles';

interface TypographyProps {
  children?: string | number;
  color: string;
}

/* Headlines */

export const H1 = ({ children, color }: TypographyProps) => {
  return <H1Text color={color}>{children}</H1Text>;
};

export const H2 = ({ children, color }: TypographyProps) => {
  return <H2Text color={color}>{children}</H2Text>;
};

export const H3 = ({ children, color }: TypographyProps) => {
  return <H3Text color={color}>{children}</H3Text>;
};

export const H4 = ({ children, color }: TypographyProps) => {
  return <H4Text color={color}>{children}</H4Text>;
};

export const H5 = ({ children, color }: TypographyProps) => {
  return <H5Text color={color}>{children}</H5Text>;
};

export const H6 = ({ children, color }: TypographyProps) => {
  return <H6Text color={color}>{children}</H6Text>;
};

export const H7 = ({ children, color }: TypographyProps) => {
  return <H7Text color={color}>{children}</H7Text>;
};

/* Texts */

export const Semibold1 = ({ children, color }: TypographyProps) => {
  return <Semibold1Text color={color}>{children}</Semibold1Text>;
};

export const Semibold2 = ({ children, color }: TypographyProps) => {
  return <Semibold2Text color={color}>{children}</Semibold2Text>;
};

export const Semibold3 = ({ children, color }: TypographyProps) => {
  return <Semibold3Text color={color}>{children}</Semibold3Text>;
};

export const Semibold4 = ({ children, color }: TypographyProps) => {
  return <Semibold4Text color={color}>{children}</Semibold4Text>;
};

export const Semibold5 = ({ children, color }: TypographyProps) => {
  return <Semibold5Text color={color}>{children}</Semibold5Text>;
};

export const Semibold6 = ({ children, color }: TypographyProps) => {
  return <Semibold6Text color={color}>{children}</Semibold6Text>;
};

export const Medium20 = ({ children, color }: TypographyProps) => {
  return <Medium1Text color={color}>{children}</Medium1Text>;
};

export const Medium18 = ({ children, color }: TypographyProps) => {
  return <Medium2Text color={color}>{children}</Medium2Text>;
};

export const Medium14 = ({ children, color }: TypographyProps) => {
  return <Medium3Text color={color}>{children}</Medium3Text>;
};

export const Regular16 = ({ children, color }: TypographyProps) => {
  return <Regular1Text color={color}>{children}</Regular1Text>;
};

export const Regular14 = ({ children, color }: TypographyProps) => {
  return <Regular2Text color={color}>{children}</Regular2Text>;
};

export const Regular12 = ({ children, color }: TypographyProps) => {
  return <Regular3Text color={color}>{children}</Regular3Text>;
};

export const Regular11 = ({ children, color }: TypographyProps) => {
  return <Regular4Text color={color}>{children}</Regular4Text>;
};

/* Buttons */

export const Bold18 = ({ children, color }: TypographyProps) => {
  return <Bold18Text color={color}>{children}</Bold18Text>;
};

export const Bold16 = ({ children, color }: TypographyProps) => {
  return <Bold16Text color={color}>{children}</Bold16Text>;
};

export const Bold12 = ({ children, color }: TypographyProps) => {
  return <Bold12Text color={color}>{children}</Bold12Text>;
};

export const Semibold18 = ({ children, color }: TypographyProps) => {
  return <Semibold18Text color={color}>{children}</Semibold18Text>;
};

export const Semibold12 = ({ children, color }: TypographyProps) => {
  return <Semibold12Text color={color}>{children}</Semibold12Text>;
};

export const Medium16 = ({ children, color }: TypographyProps) => {
  return <Medium16Text color={color}>{children}</Medium16Text>;
};

export const Regular18 = ({ children, color }: TypographyProps) => {
  return <Regular18Text color={color}>{children}</Regular18Text>;
};
