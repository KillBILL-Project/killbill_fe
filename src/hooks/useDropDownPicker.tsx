import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import DropDownPicker, { ItemType } from 'react-native-dropdown-picker';
import { View } from 'react-native';
import { GREY_3, GREY_4 } from '../common/colors';

type DropDownProps = {
  label: string;
  value: string;
};

type CustomDropDownPickerProps = {
  items: DropDownProps[] | undefined;
  placeholder: string;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  isOpen?: boolean;
  onChangeValue?: (country: string | null) => void;
  onOpen: () => void;
};

const useDropDownPicker = ({
  items,
  placeholder,
  open,
  setOpen,
  onChangeValue,
  onOpen,
}: CustomDropDownPickerProps) => {
  const [selectedValue, setSelectedValue] = useState('');
  const [itemList, setItemList] = useState<ItemType<string>[]>([]);

  const CustomDropDownPicker = (
    <View>
      <DropDownPicker
        closeOnBackPressed
        open={open}
        value={selectedValue}
        items={itemList}
        setOpen={setOpen}
        setValue={setSelectedValue}
        setItems={setItemList}
        onOpen={onOpen}
        onChangeValue={onChangeValue}
        placeholder={placeholder}
        placeholderStyle={{
          color: GREY_4,
        }}
        style={{
          borderColor: GREY_3,
        }}
      />
    </View>
  );

  useEffect(() => {
    if (items != null) setItemList(items);
    setSelectedValue('');
  }, [items]);

  return [CustomDropDownPicker, selectedValue] as const;
};

export default useDropDownPicker;
