import { find } from 'lodash';
import { trashMeta } from '@constants/data';
import { TrashCategoryKrType, TrashCategoryEnType } from '@type/trash';
import { trashCategory, TrashCategoryEn, TrashCategoryKr } from '@constants/trash';
import { ImageSourcePropType } from 'react-native';

const isEnglishOnly = (value: string): boolean => {
  const englishRegex = /^[A-Za-z]+$/;
  return englishRegex.test(value);
};

export const getColorOfTrashCategory = (category: TrashCategoryKrType | TrashCategoryEnType) => {
  if (isEnglishOnly(category)) {
    return trashMeta[category].color;
  }

  return find(trashMeta, { name: category }).color;
};

export const convertTrashCategory = (name: TrashCategoryKrType | TrashCategoryEnType) => {
  const indexOfKr = TrashCategoryKr.indexOf(name as any);
  const indexOfEn = TrashCategoryEn.indexOf(name as any);

  if (indexOfKr > -1) return TrashCategoryEn[indexOfKr];
  return TrashCategoryKr[indexOfEn];
};

export const getTrashCategoryImage = (
  name: TrashCategoryKrType | TrashCategoryEnType,
): ImageSourcePropType | undefined => {
  let searchName = name;
  if (TrashCategoryKr.includes(name as any)) {
    searchName = convertTrashCategory(name);
  }

  return find(trashCategory, { name: searchName })?.image;
};
