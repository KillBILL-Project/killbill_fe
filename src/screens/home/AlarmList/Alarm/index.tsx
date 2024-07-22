import React, { useState } from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { BLACK, GREY500, WHITE } from '@constants/colors';
import { styles, weekly } from '@constants/constants';
import { Bold12, Regular16, Regular18 } from '@components/Typography';
import { HomeStackParamList } from '@type/navigation';
import { AlarmParams } from '@type/notifications';
import Switch from '@components/Switch';
import seeMore from '@assets/icon/see-more.png';
import { scale } from '@utils/platform';
import Separator from '@components/Separator';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteAlarm, switchAlarm } from '@services/api/alarmService';
import DropdownFrame from '@components/DropdownFrame';
import {
  Container,
  CycleContainer,
  DayContainer,
  NonSelectedDay,
  SeeMoreButton,
  SeeMoreButtonImage,
  SelectButton,
  SelectButtonText,
  SelectedDay,
  SettingRow,
  TimeRow,
  TimeTest,
  TopSection,
} from './styles';

const Alarm = ({ alarmId, hour, minute, meridiem, dayOfWeek, isOn }: AlarmParams) => {
  const { navigate } = useNavigation<NavigationProp<HomeStackParamList>>();
  const [isActiveDropDown, setIsActiveDropDown] = useState(false);
  const [isSwitchOn, setIsSwitchOn] = useState(!!isOn);
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);

  const queryClient = useQueryClient();

  const { mutate: deleteAlarmMutate } = useMutation({
    mutationFn: deleteAlarm,
    mutationKey: ['delete-alarm'],
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: ['alarm'] });
    },
  });

  const { mutate: switchAlarmMutate } = useMutation({
    mutationFn: switchAlarm,
    mutationKey: ['switch-alarm'],
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: ['alarm'] });
    },
  });

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
        <TopSection>
          <TimeRow>
            {/* eslint-disable-next-line eqeqeq */}
            <TimeTest>{`${hour == '0' ? '12' : hour}:${minute}`}</TimeTest>
            <Regular18 color={BLACK}>{meridiem}</Regular18>
          </TimeRow>
          <SettingRow>
            <Switch
              value={isSwitchOn}
              onValueChange={onPressSwitchAlarmButton}
              width={46}
              height={24}
              circleMargin={2.5}
              circleColor={WHITE}
              backgroundActive={BLACK}
              backgroundInactive={GREY500}
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
        </TopSection>
        <CycleContainer>
          <Regular16 color={BLACK}>매주</Regular16>
          <DayContainer>
            {weekly.map(item => {
              return dayOfWeek.includes(item.value) ? (
                <SelectedDay key={item.value}>
                  <Bold12 color={WHITE}>{item.text}</Bold12>
                </SelectedDay>
              ) : (
                <NonSelectedDay key={item.value}>
                  <Bold12 color={GREY500}>{item.text}</Bold12>
                </NonSelectedDay>
              );
            })}
          </DayContainer>
        </CycleContainer>
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
