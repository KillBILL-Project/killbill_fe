import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { requestTrashCanLocation } from '@services/api/trashService';
import { useRecoilValue } from 'recoil';
import { distanceState, currentCoordinatesState, selectedTrashTypeState } from '@states/trash';
import { useEffect } from 'react';

export interface CurrentCoordinates {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  locationChanged: boolean;
}

export const useTrashCanLocationQuery = () => {
  const { latitude, longitude } = useRecoilValue(currentCoordinatesState);
  const selectedTrashType = useRecoilValue(selectedTrashTypeState);
  const distance = useRecoilValue(distanceState);

  const { data, refetch } = useQuery({
    queryKey: ['trash-can-location', latitude, longitude, distance, selectedTrashType],
    queryFn: () => {
      if (!latitude) return null;
      return requestTrashCanLocation(latitude, longitude, distance, selectedTrashType);
    },
    retry: 0,
    enabled: false,
    placeholderData: keepPreviousData,
  });

  useEffect(() => {
    refetch();
  }, [selectedTrashType]);

  return { data, refetch };
};
