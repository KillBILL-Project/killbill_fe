import { atom, selector } from 'recoil';
import { ITrashCanLocation } from '@services/api/trashService';
import { CurrentCoordinates } from '@hooks/queries/trash/useTrashCanLocationQuery';

export const trashFilterState = atom<any>({
  key: 'trashFilter ',
  default: 'BIG',
});

export const selectedTrashTypeState = atom<string[]>({
  key: 'selectedTrashType',
  default: [],
});

export const currentCoordinatesState = atom<CurrentCoordinates>({
  key: 'currentCoordinates',
  default: { latitude: 0, longitude: 0, latitudeDelta: 0, locationChanged: false },
});

export const selectedLocationState = atom<ITrashCanLocation | null>({
  key: 'selectedLocation',
  default: null,
});

export const distanceState = selector({
  key: 'distance',
  get: ({ get }) => {
    const { latitude, latitudeDelta } = get(currentCoordinatesState);

    const EARTH_RADIUS = 6371;
    const topLatitude = latitude + latitudeDelta / 2;
    const latDifferenceInRadians = (topLatitude - latitude) * (Math.PI / 180);
    return EARTH_RADIUS * latDifferenceInRadians;
  },
});
