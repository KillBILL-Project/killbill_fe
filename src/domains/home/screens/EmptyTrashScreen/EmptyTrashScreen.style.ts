import styled from 'styled-components/native';
import { BLACK, GREY200, WHITE } from '../../../../constants/colors';
import { ratioPx } from '../../../../utils/platform';
import { trashMeta } from '../../../../constants/data';

export const Container = styled.View`
  flex: 1;
  padding: ${ratioPx(24)};
`;

export const TopBlackArea = styled.View`
  position: absolute;
  top: ${ratioPx(-400)};
  height: ${ratioPx(590)};
  background-color: ${BLACK};
  width: 100%;
`;

export const CompleteTextContainer = styled.View`
  align-items: center;
  padding: ${ratioPx(24)};
`;

export const Contents = styled.View`
  flex: 1;
`;

export const CompleteText = styled.Text`
  font-size: ${ratioPx(24)};
  font-weight: bold;
  color: ${WHITE};
`;

export const BottomArea = styled.View`
  flex: 1;
`;

export const CarbonSavingRateContainer = styled.View`
  border-radius: 15px;
  background-color: ${WHITE};
  padding: ${ratioPx(20)} ${ratioPx(15)};
  margin-bottom: ${ratioPx(24)};
`;

export const TotalCarbonSavingContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${ratioPx(24)};
`;

export const TrashRateContainer = styled.View`
  flex-direction: row;
`;

export const TrashRateChartContainer = styled.View`
  justify-content: center;
  margin-right: ${ratioPx(20)};
`;

export const TrashCategoryContainer = styled.View`
  gap: ${ratioPx(6)};
`;

export const TrashContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TrashColorIndicator = styled.View<{ trashCategoryName: string }>`
  width: ${ratioPx(12)};
  height: ${ratioPx(12)};
  border-radius: 6px;
  margin-right: ${ratioPx(8)};
  background-color: ${({ trashCategoryName }) => trashMeta[trashCategoryName].color};
`;

export const RefundInfo = styled.View`
  border-radius: 15px;
  background-color: ${WHITE};
  gap: ${ratioPx(8)};
`;

export const RefundContainer = styled.View`
  padding: ${ratioPx(16)};
`;

export const RefundTitleContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: ${ratioPx(16)};
`;

export const RefundContents = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const NavigateLocationButton = styled.TouchableOpacity`
  border-top-width: 1px;
  border-top-color: ${GREY200};
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: ${ratioPx(8)} 0;
  margin-top: ${ratioPx(16)};
`;
