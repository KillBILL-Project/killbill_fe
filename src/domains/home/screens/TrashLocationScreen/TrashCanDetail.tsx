import { useRecoilValue } from 'recoil';
import { activeTrashCanDetail } from '../../../../states';
import {
  CopyText,
  CopyTextButton,
  PlaceNameWrapper,
  TrashCanAddress,
  TrashCanDetailWrapper,
  TrashCanPlaceName,
} from './components/TrashLocation.style';
import { GREY700, LINK } from '../../../../constants/colors';
import { useRef } from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import WwoossBottomSheet from '../../../../components/common/WwoossBottomSheet';
import Clipboard from '@react-native-clipboard/clipboard';

const TrashCanDetail = () => {
  const trashCan = useRecoilValue(activeTrashCanDetail);
  const bottomSheetRef = useRef<BottomSheet>(null);
  const copyHandler = () => {
    Clipboard.setString(trashCan?.address ?? '');
  };

  return (
    <WwoossBottomSheet bottomSheetRef={bottomSheetRef}>
      <TrashCanDetailWrapper>
        <TrashCanAddress color={GREY700}>{trashCan?.placeName}</TrashCanAddress>
        <PlaceNameWrapper>
          <TrashCanPlaceName color={GREY700}>{trashCan?.address}</TrashCanPlaceName>
          <CopyTextButton onPress={copyHandler}>
            <CopyText color={LINK}>복사</CopyText>
          </CopyTextButton>
        </PlaceNameWrapper>
      </TrashCanDetailWrapper>
    </WwoossBottomSheet>
  );
};

export default TrashCanDetail;
