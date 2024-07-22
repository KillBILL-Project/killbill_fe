import React, { useRef } from 'react';
import { useRecoilValue } from 'recoil';
import Clipboard from '@react-native-clipboard/clipboard';
import BottomSheet from '@gorhom/bottom-sheet';
import { ScrollView } from 'react-native-gesture-handler';
import { GREY700, LINK } from '@constants/colors';
import { activeTrashCanDetail } from '@states/trash';
import { scale } from '@utils/platform';
import WwoossBottomSheet from '@components/common/WwoossBottomSheet';
import {
  CopyText,
  CopyTextButton,
  PlaceNameWrapper,
  TrashCanAddress,
  TrashCanDetailWrapper,
  TrashCanPlaceName,
  TrashImage,
} from './TrashLocation.style';

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
                width={scale(62)}
                height={scale(62)}
                resizeMode="contain"
              />
            );
          })}
        </ScrollView>
      </TrashCanDetailWrapper>
    </WwoossBottomSheet>
  );
};

export default TrashCanDetail;
