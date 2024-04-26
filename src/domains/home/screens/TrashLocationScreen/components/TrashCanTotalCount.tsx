import { TrashCanCount, TrashCanCountWrapper } from './TrashLocation.style';

const TrashCanTotalCount = ({ count }: { count?: number }) => {
  return (
    <TrashCanCountWrapper>
      <TrashCanCount>내 근처 분리수거 {count ?? 0}곳</TrashCanCount>
    </TrashCanCountWrapper>
  );
};

export default TrashCanTotalCount;
