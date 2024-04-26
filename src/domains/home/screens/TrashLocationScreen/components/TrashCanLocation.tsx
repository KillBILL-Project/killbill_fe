import { ITrashCanLocation } from '../../../../../services/api/trashService';
import { TrashCanLocationText, TrashCanLocationWrapper } from './TrashLocation.style';

const TrashCanLocation = ({ trashInfo }: { trashInfo: ITrashCanLocation }) => {
  return (
    <TrashCanLocationWrapper>
      <TrashCanLocationText>{trashInfo.address}</TrashCanLocationText>
    </TrashCanLocationWrapper>
  );
};

export default TrashCanLocation;
