import BottomSheet from '@gorhom/bottom-sheet';
import { useCallback, useRef } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import WwoossBottomSheet from '../../../../components/common/WwoossBottomSheet';
import { ITrashCanLocation } from '../../../../services/api/trashService';
import TrashCanTotalCount from './components/TrashCanTotalCount';
import { TrashCanListWrapper } from './components/TrashLocation.style';
import TrashCanLocation from './components/TrashCanLocation';
import { useSetRecoilState } from 'recoil';
import { activeTrashCanDetail } from '../../../../states';

const TrashList = ({ trashInfoList }: { trashInfoList?: ITrashCanLocation[] }) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const setTrashCanDetail = useSetRecoilState(activeTrashCanDetail);

  const pressAddress = useCallback((trashCan: ITrashCanLocation) => {
    setTrashCanDetail(trashCan);
  }, []);

  return (
    <WwoossBottomSheet bottomSheetRef={bottomSheetRef}>
      <TrashCanListWrapper>
        <TrashCanTotalCount count={trashInfoList?.length} />

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 40 }}
        >
          {trashInfoList?.map(trash => {
            return (
              <TrashCanLocation trashInfo={trash} key={trash.trashCanId} onPress={pressAddress} />
            );
          })}
        </ScrollView>
      </TrashCanListWrapper>
    </WwoossBottomSheet>
  );
};

export default TrashList;
