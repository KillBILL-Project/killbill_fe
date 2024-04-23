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
    setSelected(trashType);
  }, []);

  return (
    <TrashTypeButton isSelected={selected === trashType} onPress={onPress}>
      <TrashTypeText>{name}</TrashTypeText>
    </TrashTypeButton>
  );
};

export default TrashType;
