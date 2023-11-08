import React, { Dispatch, ReactElement, SetStateAction, useMemo } from 'react';
import { Image, ImageSourcePropType } from 'react-native';
import {
  AuthInputContainer,
  LoginInput,
  AuthInputTitle,
  AuthButtonStyled,
  AuthButtonTextContainer,
  AuthButtonText,
  AuthButtonIconContainer,
  DropDownContainer,
  DropDownItem,
  DropDownItemText,
  DropDownList,
  DropDownTitleBox,
  DropDownTitleIcon,
  DropDownTitleText,
} from './Auth.style';
import { GREY_3 } from '../../common/colors';
import dropDownIcon from '../../assets/icon/dropdown_icon.png';
import { EXCLUDED_NUMERIC_PATTERN } from '../../common/constants';
import {
  GenderButton,
  GenderButtonText,
  GenderSelectContainer,
} from '../auth/AuthDetails/AuthDetails.style';
import { Gender } from '../../common/types';

type InputContainersProps = {
  title: string;
  children: ReactElement;
};

type AuthInputTextType = {
  placeholder: string;
  onChangeText: (text: string) => void;
  isSecure?: boolean;
  value: string;
};

type LoginButtonProps = {
  text: string;
  onPress: () => Promise<void> | void;
  backgroundColor: string;
  color: string;
  icon?: ImageSourcePropType;
};

export interface ItemType {
  label: string;
  value: string;
}

export interface DropDownProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  selectedItem: ItemType | undefined;
  setSelectedItem: Dispatch<SetStateAction<ItemType | undefined>>;
  itemList: ItemType[];
}

interface AuthDetailProps extends DropDownProps {
  age: string;
  setAge: Dispatch<SetStateAction<string>>;
  gender: Gender;
  setGender: Dispatch<SetStateAction<Gender>>;
}

const AuthButtonIcon = ({ icon }: { icon: ImageSourcePropType }) => {
  return (
    <AuthButtonIconContainer>
      <Image source={icon} />
    </AuthButtonIconContainer>
  );
};

const AuthButton = ({ text, onPress, backgroundColor, color, icon }: LoginButtonProps) => {
  return (
    <AuthButtonStyled onPress={onPress} backgroundColor={backgroundColor} borderColor={GREY_3}>
      {icon != null && <AuthButtonIcon icon={icon} />}
      <AuthButtonTextContainer>
        <AuthButtonText color={color}>{text}</AuthButtonText>
      </AuthButtonTextContainer>
    </AuthButtonStyled>
  );
};

const AuthInput = ({ title, children }: InputContainersProps) => {
  return (
    <AuthInputContainer>
      <AuthInputTitle>{title}</AuthInputTitle>
      {children}
    </AuthInputContainer>
  );
};

const AuthInputText = ({ placeholder, onChangeText, value, isSecure }: AuthInputTextType) => {
  return (
    <LoginInput
      onChangeText={onChangeText}
      placeholder={placeholder}
      autoCapitalize="none"
      secureTextEntry={isSecure}
      value={value}
    />
  );
};

const DropDown = ({
  isOpen,
  setIsOpen,
  selectedItem,
  setSelectedItem,
  itemList,
}: DropDownProps) => {
  const onPressDropDownContainer = () => {
    setIsOpen(prevState => !prevState);
  };

  const onPressDropDownItem = (item: ItemType) => {
    setIsOpen(false);
    setSelectedItem(item);
  };

  const setDropDownTitleText = useMemo(() => {
    return selectedItem === undefined ? '국가 선택' : selectedItem.label;
  }, [selectedItem]);

  return (
    <>
      <DropDownContainer onPress={onPressDropDownContainer} activeOpacity={1}>
        <DropDownTitleBox isDropDownActive={isOpen}>
          <DropDownTitleText isItemSelected={selectedItem !== undefined}>
            {setDropDownTitleText}
          </DropDownTitleText>
          <DropDownTitleIcon isDropDownActive={isOpen} source={dropDownIcon} />
        </DropDownTitleBox>
      </DropDownContainer>
      {isOpen ? (
        <DropDownList>
          {itemList.map(item => (
            <DropDownItem key={item.value} onPress={() => onPressDropDownItem(item)}>
              <DropDownItemText>{item.label}</DropDownItemText>
            </DropDownItem>
          ))}
        </DropDownList>
      ) : null}
    </>
  );
};

const AuthDetail = ({
  age,
  setAge,
  gender,
  setGender,
  isOpen,
  setIsOpen,
  selectedItem,
  setSelectedItem,
  itemList,
}: AuthDetailProps) => {
  const onPressManButton = () => setGender('M');
  const onPressWomanButton = () => setGender('F');
  const isSelectedMan = useMemo(() => () => gender === 'M', [gender]);
  const isSelectedWoman = useMemo(() => () => gender === 'F', [gender]);

  const onChangeAge = (enteredAge: string) => {
    setAge(prevState => {
      const numericText = enteredAge.replace(EXCLUDED_NUMERIC_PATTERN, '');
      return numericText.length > 3 ? prevState : numericText;
    });
  };

  return (
    <>
      <AuthInput title="나이">
        <AuthInputText placeholder="나이 입력" onChangeText={onChangeAge} value={age} />
      </AuthInput>
      <AuthInput title="성별">
        <GenderSelectContainer>
          <GenderButton onPress={onPressManButton} isSelected={isSelectedMan()}>
            <GenderButtonText isSelected={isSelectedMan()}>남자</GenderButtonText>
          </GenderButton>
          <GenderButton onPress={onPressWomanButton} isSelected={isSelectedWoman()}>
            <GenderButtonText isSelected={isSelectedWoman()}>여자</GenderButtonText>
          </GenderButton>
        </GenderSelectContainer>
      </AuthInput>
      <AuthInput title="국가">
        <DropDown
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
          itemList={itemList}
        />
      </AuthInput>
    </>
  );
};

export { AuthButton, AuthInput, AuthInputText, DropDown, AuthDetail };
