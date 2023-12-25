import styled from 'styled-components/native';
import { GREY600 } from '../../constants/colors';

interface TypographyStyleProps {
  color?: string;
}

const BoldText = styled.Text<TypographyStyleProps>`
  font-weight: 700;
  color: ${({ color }) => color ?? GREY600};
`;

const SemiboldText = styled.Text<TypographyStyleProps>`
  font-weight: 600;
  color: ${({ color }) => color ?? GREY600};
`;

const MediumText = styled.Text<TypographyStyleProps>`
  font-weight: 500;
  color: ${({ color }) => color ?? GREY600};
`;

const RegularText = styled.Text<TypographyStyleProps>`
  font-weight: 400;
  color: ${({ color }) => color ?? GREY600};
`;

/* Headlines */

export const H1Text = styled(BoldText)`
  font-size: 24px;
  line-height: 36px;
`;

export const H2Text = styled(BoldText)`
  font-size: 20px;
  line-height: 30px;
`;

export const H3Text = styled(BoldText)`
  font-size: 18px;
  line-height: 28px;
`;

export const H4Text = styled(BoldText)`
  font-size: 16px;
  line-height: 24px;
`;

export const H5Text = styled(BoldText)`
  font-size: 14px;
  line-height: 20px;
`;

export const H6Text = styled(BoldText)`
  font-size: 12px;
  line-height: 18px;
`;

export const H7Text = styled(BoldText)`
  font-size: 10px;
  line-height: 14px;
`;

/* Texts */

export const Semibold1Text = styled(SemiboldText)`
  font-size: 18px;
  line-height: 27px;
`;

export const Semibold2Text = styled(SemiboldText)`
  font-size: 16px;
  line-height: 24px;
`;

export const Semibold3Text = styled(SemiboldText)`
  font-size: 14px;
  line-height: 21px;
`;

export const Semibold4Text = styled(SemiboldText)`
  font-size: 12px;
  line-height: 18px;
`;

export const Semibold5Text = styled(SemiboldText)`
  font-size: 11px;
  line-height: 16px;
`;

export const Semibold6Text = styled(SemiboldText)`
  font-size: 10px;
  line-height: 15px;
`;

export const Medium1Text = styled(MediumText)`
  font-size: 20px;
  line-height: 30px;
`;

export const Medium2Text = styled(MediumText)`
  font-size: 18px;
  line-height: 28px;
`;

export const Medium3Text = styled(MediumText)`
  font-size: 14px;
  line-height: 20px;
`;

export const Regular1Text = styled(RegularText)`
  font-size: 16px;
  line-height: 24px;
`;

export const Regular2Text = styled(RegularText)`
  font-size: 14px;
  line-height: 20px;
`;

export const Regular3Text = styled(RegularText)`
  font-size: 12px;
  line-height: 18px;
`;

export const Regular4Text = styled(RegularText)`
  font-size: 11px;
  line-height: 24px;
`;

/* Buttons */

export const Bold18Text = styled(BoldText)`
  font-size: 18px;
  line-height: 28px;
`;

export const Bold16Text = styled(BoldText)`
  font-size: 16px;
  line-height: 24px;
`;

export const Bold12Text = styled(BoldText)`
  font-size: 12px;
  line-height: 18px;
`;

export const Semibold18Text = styled(SemiboldText)`
  font-size: 18px;
  line-height: 27px;
`;

export const Semibold12Text = styled(SemiboldText)`
  font-size: 12px;
  line-height: 18px;
`;

export const Medium16Text = styled(MediumText)`
  font-size: 16px;
  line-height: 24px;
`;

export const Regular18Text = styled(RegularText)`
  font-size: 18px;
  line-height: 28px;
`;

export const Regular14Text = styled(RegularText)`
  font-size: 14px;
  line-height: 20px;
`;
