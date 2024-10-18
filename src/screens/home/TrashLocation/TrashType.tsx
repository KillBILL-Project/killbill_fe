import React, { useCallback, useMemo } from 'react';
import { useRecoilState } from 'recoil';
import { selectedTrashTypeState } from '@states/trash';
import { TTrashType } from '@type/trash';
import { includes, isEmpty, without } from 'lodash';
import { TrashTypeButton, TrashTypeText } from './TrashLocation.style';

interface ITrashType {
  trashType: TTrashType;
  name: string;
}

const TrashType = ({ trashType, name }: ITrashType) => {
  const [selectedType, setSelectedType] = useRecoilState(selectedTrashTypeState);

  const handleTrashTypeButton = useCallback(() => {
    setSelectedType(prev => {
      if (trashType === null) return [];

      return includes(prev, trashType) ? without(prev, trashType) : [...prev, trashType];
    });
  }, [trashType]);

  const isSelected = useMemo(() => {
    if (trashType === null && isEmpty(selectedType)) {
      return true;
    }
    return includes(selectedType, trashType);
  }, [trashType, selectedType]);

  return (
    <TrashTypeButton isSelected={isSelected} onPress={handleTrashTypeButton}>
      <TrashTypeText isSelected={isSelected}>{name}</TrashTypeText>
    </TrashTypeButton>
  );
};

export default TrashType;
