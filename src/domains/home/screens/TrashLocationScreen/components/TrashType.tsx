import React, { useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { TTrashType } from './TrashTypeList';
import { TrashTypeButton, TrashTypeText } from './TrashLocation.style';
import { selectedTrashType } from '../../../../../states';

interface ITrashType {
  trashType: TTrashType;
  name: string;
}

const TrashType = ({ trashType, name }: ITrashType) => {
  const [selected, setSelected] = useRecoilState(selectedTrashType);
  const onPress = useCallback(() => {
    if (trashType === null) {
      setSelected(null);
      return;
    }
    if (selected === null) {
      setSelected([trashType]);
      return;
    }

    const alreadySelected = selected.find(type => type === trashType);
    const newList = alreadySelected
      ? selected.filter(type => type !== trashType)
      : [...selected, trashType];
    setSelected(newList.length === 0 ? null : newList);
  }, [selected, trashType]);

  const isSelected =
    trashType === null ? selected === null : !!selected?.find(trash => trash === trashType);

  return (
    <TrashTypeButton isSelected={isSelected} onPress={onPress}>
      <TrashTypeText>{name}</TrashTypeText>
    </TrashTypeButton>
  );
};

export default TrashType;
