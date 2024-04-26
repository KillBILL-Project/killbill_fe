import BottomSheet from '@gorhom/bottom-sheet';
import { useRef } from 'react';
import WwoossBottomSheet from '../../../../components/common/WwoossBottomSheet';
import { ScrollView, View } from 'react-native';
import { ITrashCanLocation } from '../../../../services/api/trashService';
import TrashCanTotalCount from './components/TrashCanTotalCount';
import { TrashCanListWrapper } from './components/TrashLocation.style';
import TrashCanLocation from './components/TrashCanLocation';

const TrashList = ({ trashInfoList }: { trashInfoList?: ITrashCanLocation[] }) => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  return (
    <WwoossBottomSheet bottomSheetRef={bottomSheetRef}>
      <TrashCanListWrapper>
        <TrashCanTotalCount count={trashInfoList?.length} />
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 40 }}
        >
          {trashInfoList?.map(trash => {
            return <TrashCanLocation trashInfo={trash} key={trash.trashCanId} />;
          })}
        </ScrollView>
      </TrashCanListWrapper>
    </WwoossBottomSheet>
  );
};

export default TrashList;
