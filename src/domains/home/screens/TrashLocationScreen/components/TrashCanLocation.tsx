import { ITrashCanLocation } from '../../../../../services/api/trashService';
import { TrashCanLocationText, TrashCanLocationWrapper } from './TrashLocation.style';

const TrashCanLocation = ({
  trashInfo,
  onPress,
}: {
  trashInfo: ITrashCanLocation;
  onPress: (trashCan: ITrashCanLocation) => void;
}) => {
  return (
    <TrashCanLocationWrapper onPress={() => onPress(trashInfo)}>
      <TrashCanLocationText>{trashInfo.address}</TrashCanLocationText>
    </TrashCanLocationWrapper>
  );
};

export default TrashCanLocation;
