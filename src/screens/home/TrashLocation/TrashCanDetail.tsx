import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { scale } from '@utils/platform';
import { ITrashCanLocation } from '@services/api/trashService';
import { TrashCanDetailWrapper, TrashImage } from './TrashLocation.style';

const TrashCanDetail = ({ selectedLocation }: { selectedLocation: ITrashCanLocation }) => {
  return (
    <TrashCanDetailWrapper>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {selectedLocation?.trashImages.map(imagePath => {
          return (
            <TrashImage
              source={{ uri: imagePath }}
              key={imagePath}
              width={scale(62)}
              height={scale(62)}
              resizeMode="contain"
            />
          );
        })}
      </ScrollView>
    </TrashCanDetailWrapper>
  );
};

export default TrashCanDetail;
