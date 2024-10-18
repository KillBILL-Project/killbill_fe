import React from 'react';
import {
  CopyButton,
  CopyButtonText,
  TrashCanLocationAddressRow,
  TrashCanAddressWrapper,
  TrashCanLocationAddressText,
  TrashCanLocationTitle,
} from '@screens/home/TrashLocation/TrashLocation.style';
import { ITrashCanLocation } from '@services/api/trashService';
import Clipboard from '@react-native-clipboard/clipboard';
import { useSetRecoilState } from 'recoil';
import { isShowToastState, toastMessageState } from '@states/notification';

const TrashCanAddress = ({ selectedLocation }: { selectedLocation: ITrashCanLocation }) => {
  const setToastMessage = useSetRecoilState(toastMessageState);
  const setIsShowToast = useSetRecoilState(isShowToastState);

  const handleCopyButton = () => {
    setToastMessage('주소가 복사되었습니다.');
    setIsShowToast(true);
    Clipboard.setString(selectedLocation?.address ?? '');
  };

  return (
    <TrashCanAddressWrapper>
      <TrashCanLocationTitle>{selectedLocation?.placeName}</TrashCanLocationTitle>
      <TrashCanLocationAddressRow>
        <TrashCanLocationAddressText>{selectedLocation?.address}</TrashCanLocationAddressText>
        <CopyButton onPress={handleCopyButton}>
          <CopyButtonText>복사</CopyButtonText>
        </CopyButton>
      </TrashCanLocationAddressRow>
    </TrashCanAddressWrapper>
  );
};

export default TrashCanAddress;
