import React, { useState } from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { BLACK, GREY500, WHITE } from '@constants/colors';
import { styles, weekly } from '@constants/constants';
import { HomeStackParamList } from '@type/navigation';
import { AlarmParams } from '@type/notifications';
import Switch from '@components/Switch';
import seeMore from '@assets/icon/see-more.png';
import { scale } from '@utils/platform';
import Separator from '@components/Separator';
import DropdownFrame from '@components/DropdownFrame';
import useDeleteAlarmMutation from '@hooks/mutation/alram/useDeleteAlarmMutation';
import useSwitchAlarmMutation from '@hooks/mutation/alram/useSwitchAlarmMutation';
import {
  BottomRow,
  Container,
  DayContainer,
  EachWeekText,
  MeridiemText,
  SeeMoreButton,
  SeeMoreButtonImage,
  SelectButton,
  SelectButtonText,
  SettingRow,
  SingleDay,
  SingleDayText,
  TimeRow,
  TimeText,
  TopRow,
} from './styles';

const Alarm = ({ alarmId, hour, minute, meridiem, dayOfWeek, isOn }: AlarmParams) => {
  const { navigate } = useNavigation<NavigationProp<HomeStackParamList>>();
  const [isActiveDropDown, setIsActiveDropDown] = useState(false);
  const [isSwitchOn, setIsSwitchOn] = useState(!!isOn);
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);

  const { mutate: deleteAlarmMutate } = useDeleteAlarmMutation();
  const { mutate: switchAlarmMutate } = useSwitchAlarmMutation();

  const navigateToAlarmSetting = () => {
    navigate('AlarmSetting', { alarmId, hour, minute, meridiem, dayOfWeek });
  };

  const onPressSwitchAlarmButton = () => {
    setIsSwitchOn(prevState => {
      if (alarmId) switchAlarmMutate({ alarmId, isOn: !prevState });
      return !prevState;
    });
  };
  const onPressUpdate = () => {
    setIsActiveDropDown(false);
    navigateToAlarmSetting();
  };

  const onPressDelete = () => {
    setIsActiveDropDown(false);
    if (alarmId) deleteAlarmMutate(alarmId);
  };

  return (
    <>
      <Container style={styles.shadow} onPress={navigateToAlarmSetting}>
        <TopRow>
          <TimeRow>
            {/* eslint-disable-next-line eqeqeq */}
            <TimeText>{`${hour == '0' ? '12' : hour}:${minute}`}</TimeText>
            <MeridiemText>{meridiem}</MeridiemText>
          </TimeRow>
          <SettingRow>
            <Switch
              value={isSwitchOn}
              onValueChange={onPressSwitchAlarmButton}
              width={46}
              height={24}
              knobMargin={3}
              knobColor={WHITE}
              activeColor={BLACK}
              inactiveColor={GREY500}
            />
            <SeeMoreButton
              onPress={() => setIsActiveDropDown(true)}
              onPressIn={event => {
                setOffsetX(event.nativeEvent.pageX - event.nativeEvent.locationX - scale(24));
                setOffsetY(event.nativeEvent.pageY - event.nativeEvent.locationY + scale(28));
              }}
            >
              <SeeMoreButtonImage source={seeMore} />
            </SeeMoreButton>
          </SettingRow>
        </TopRow>
        <BottomRow>
          <EachWeekText>매주</EachWeekText>
          <DayContainer>
            {weekly.map(item => {
              return (
                <SingleDay key={item.value} selected={dayOfWeek.includes(item.value)}>
                  <SingleDayText selected={dayOfWeek.includes(item.value)}>
                    {item.text}
                  </SingleDayText>
                </SingleDay>
              );
            })}
          </DayContainer>
        </BottomRow>
      </Container>

      <DropdownFrame
        dropDownWidth={82}
        dropDownHeight={36 * 2}
        isActiveModal={isActiveDropDown}
        setIsActiveModal={setIsActiveDropDown}
        offsetX={offsetX}
        offsetY={offsetY}
        containerStyle={{ borderRadius: 5, borderWidth: 2, borderColor: '#eee' }}
      >
        <SelectButton style={{ flex: 1 }} onPress={onPressUpdate}>
          <SelectButtonText>수정</SelectButtonText>
        </SelectButton>
        <Separator length="100%" color="#eee" horizontal />
        <SelectButton style={{ flex: 1 }} onPress={onPressDelete}>
          <SelectButtonText>삭제</SelectButtonText>
        </SelectButton>
      </DropdownFrame>
    </>
  );
};

export default Alarm;
