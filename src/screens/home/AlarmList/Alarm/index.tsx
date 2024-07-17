import React, { useCallback, useState } from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { BLACK, GREY500, WHITE } from '@constants/colors';
import { styles, weekly } from '@constants/constants';
import { Bold12, Regular16, Regular18 } from '@components/Typography';
import { HomeStackParamList } from '@type/navigation';
import { AlarmParams } from '@type/notifications';
import Switch from '@components/Switch';
import seeMore from '@assets/icon/see-more.png';
import { Modal, Pressable, View } from 'react-native';
import Animated, {
  Easing,
  ReduceMotion,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { ratio, scale } from '@utils/platform';
import Separator from '@components/Separator';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteAlarm, switchAlarm } from '@services/api/alarmService';
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
  const [active, setActive] = useState(false);
  const [isSwitchOn, setIsSwitchOn] = useState(!!isOn);

  const selectBoxWidth = 82;
  const itemHeight = 36;

  const width = useSharedValue(0);
  const height = useSharedValue(0);
  const offsetX = useSharedValue(0);
  const offsetY = useSharedValue(0);

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

  const animatedDropDownStyle = useAnimatedStyle(() => ({
    width: width.value * ratio,
    height: height.value * ratio,
  }));

  const animatedLayoutStyle = useAnimatedStyle(() => ({
    top: offsetY.value,
    left: offsetX.value,
  }));

  const toggleDropDown = useCallback(() => {
    const itemCount = 2;

    width.value = withTiming(active ? 0 : selectBoxWidth, {
      duration: 200,
      easing: Easing.inOut(Easing.linear),
      reduceMotion: ReduceMotion.System,
    });
    height.value = withTiming(active ? 0 : itemHeight * itemCount, {
      duration: 200,
      easing: Easing.inOut(Easing.cubic),
      reduceMotion: ReduceMotion.System,
    });
    setActive(prevState => !prevState);
  }, [active, height, itemHeight, selectBoxWidth, width]);

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
    toggleDropDown();
    navigateToAlarmSetting();
  };

  const onPressDelete = () => {
    toggleDropDown();
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
              onPress={toggleDropDown}
              onPressIn={event => {
                offsetX.value = event.nativeEvent.pageX - event.nativeEvent.locationX - scale(24);
                offsetY.value = event.nativeEvent.pageY - event.nativeEvent.locationY + scale(28);
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
      <Modal visible={active} transparent statusBarTranslucent>
        <Pressable style={{ height: '100%', width: '100%', opacity: 100 }} onPress={toggleDropDown}>
          <Animated.View
            style={[
              {
                position: 'absolute',
                width: scale(selectBoxWidth),
                alignItems: 'center',
                zIndex: 100,
              },
              animatedLayoutStyle,
            ]}
          >
            <Animated.View style={[{ overflow: 'hidden' }, animatedDropDownStyle]}>
              <View
                style={[
                  {
                    flex: 1,
                    width: scale(selectBoxWidth),
                    backgroundColor: WHITE,
                    borderRadius: 5,
                    borderWidth: 2,
                    borderColor: '#eee',
                  },
                ]}
              >
                <SelectButton width={selectBoxWidth} style={{ flex: 1 }} onPress={onPressUpdate}>
                  <SelectButtonText>수정</SelectButtonText>
                </SelectButton>
                <Separator length="100%" color="#eee" horizontal />
                <SelectButton width={selectBoxWidth} style={{ flex: 1 }} onPress={onPressDelete}>
                  <SelectButtonText>삭제</SelectButtonText>
                </SelectButton>
              </View>
            </Animated.View>
          </Animated.View>
        </Pressable>
      </Modal>
    </>
  );
};

export default Alarm;
