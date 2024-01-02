import styled from 'styled-components/native';
import { GREY600 } from '../../constants/colors';
import { ratioPx } from '../../utils/platform';

interface TypographyStyleProps {
  color?: string;
}

const BoldText = styled.Text<TypographyStyleProps>`
  font-weight: 700;
  color: ${({ color }) => color ?? GREY600};
`;

const SemiBoldText = styled.Text<TypographyStyleProps>`
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
  font-size: ${ratioPx(24)};
  line-height: 36px;
`;

export const H2Text = styled(BoldText)`
  font-size: ${ratioPx(20)};
  line-height: 30px;
`;

export const H3Text = styled(BoldText)`
  font-size: ${ratioPx(18)};
  line-height: 28px;
`;

export const H4Text = styled(BoldText)`
  font-size: ${ratioPx(16)};
  line-height: 24px;
`;

export const H5Text = styled(BoldText)`
  font-size: ${ratioPx(14)};
  line-height: 20px;
`;

export const H6Text = styled(BoldText)`
  font-size: ${ratioPx(12)};
  line-height: 18px;
`;

export const H7Text = styled(BoldText)`
  font-size: ${ratioPx(10)};
  line-height: 14px;
`;

/* Texts */

export const Semibold1Text = styled(SemiBoldText)`
  font-size: ${ratioPx(18)};
  line-height: 27px;
`;

export const Semibold2Text = styled(SemiBoldText)`
  font-size: ${ratioPx(16)};
  line-height: 24px;
`;

export const Semibold3Text = styled(SemiBoldText)`
  font-size: ${ratioPx(14)};
  line-height: 21px;
`;

export const Semibold4Text = styled(SemiBoldText)`
  font-size: ${ratioPx(12)};
  line-height: 18px;
`;

export const Semibold5Text = styled(SemiBoldText)`
  font-size: ${ratioPx(11)};
  line-height: 16px;
`;

export const Semibold6Text = styled(SemiBoldText)`
  font-size: ${ratioPx(10)};
  line-height: 15px;
`;

export const Medium1Text = styled(MediumText)`
  font-size: ${ratioPx(20)};
  line-height: 30px;
`;

export const Medium2Text = styled(MediumText)`
  font-size: ${ratioPx(18)};
  line-height: 28px;
`;

export const Medium3Text = styled(MediumText)`
  font-size: ${ratioPx(14)};
  line-height: 20px;
`;

export const Regular1Text = styled(RegularText)`
  font-size: ${ratioPx(16)};
  line-height: 24px;
`;

export const Regular2Text = styled(RegularText)`
  font-size: ${ratioPx(14)};
  line-height: 20px;
`;

export const Regular3Text = styled(RegularText)`
  font-size: ${ratioPx(12)};
  line-height: 18px;
`;

export const Regular4Text = styled(RegularText)`
  font-size: ${ratioPx(11)};
  line-height: 24px;
`;

/* Buttons */

export const Bold18Text = styled(BoldText)`
  font-size: ${ratioPx(18)};
  line-height: 28px;
`;

export const Bold16Text = styled(BoldText)`
  font-size: ${ratioPx(16)};
  line-height: 24px;
`;

export const Bold12Text = styled(BoldText)`
  font-size: ${ratioPx(12)};
  line-height: 18px;
`;

export const Semibold18Text = styled(SemiBoldText)`
  font-size: ${ratioPx(18)};
  line-height: 27px;
`;

export const Semibold12Text = styled(SemiBoldText)`
  font-size: ${ratioPx(12)};
  line-height: 18px;
`;

export const Medium16Text = styled(MediumText)`
  font-size: ${ratioPx(16)};
  line-height: 24px;
`;

export const Regular18Text = styled(RegularText)`
  font-size: ${ratioPx(18)};
  line-height: 28px;
`;

export const Regular14Text = styled(RegularText)`
  font-size: ${ratioPx(14)};
  line-height: 20px;
`;
