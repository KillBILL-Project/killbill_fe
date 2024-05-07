import { useRecoilValue } from 'recoil';
import Clipboard from '@react-native-clipboard/clipboard';
import BottomSheet from '@gorhom/bottom-sheet';
import { useRef } from 'react';
import { Image, ScrollView } from 'react-native';
import { activeTrashCanDetail } from '../../../../states';
import {
  CopyText,
  CopyTextButton,
  PlaceNameWrapper,
  TrashCanAddress,
  TrashCanDetailWrapper,
  TrashCanPlaceName,
  TrashImage,
} from './components/TrashLocation.style';
import { GREY700, LINK } from '../../../../constants/colors';
import WwoossBottomSheet from '../../../../components/common/WwoossBottomSheet';
import { ratio, ratioPx } from '../../../../utils/platform';

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
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ marginTop: 20 }}
        >
          {trashCan?.trashImages.map(imagePath => {
            return (
              <TrashImage
                source={{ uri: imagePath }}
                key={imagePath}
                width={ratio * 62}
                height={ratio * 62}
                resizeMode={'contain'}
              />
            );
          })}
        </ScrollView>
      </TrashCanDetailWrapper>
    </WwoossBottomSheet>
  );
};

export default TrashCanDetail;
