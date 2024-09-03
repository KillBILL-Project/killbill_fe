import { BottomTabBarProps } from '@react-navigation/bottom-tabs/src/types';
import React, { useMemo } from 'react';
import { ParamListBase, RouteProp } from '@react-navigation/native';
import homeIconFocused from '@assets/icon/bottomTab/home_focused.png';
import homeIcon from '@assets/icon/bottomTab/home.png';
import locationIconFocused from '@assets/icon/bottomTab/location_focused.png';
import locationIcon from '@assets/icon/bottomTab/location.png';
import myPageIconFocused from '@assets/icon/bottomTab/mypage_focused.png';
import myPageIcon from '@assets/icon/bottomTab/mypage.png';
import quizIconFocused from '@assets/icon/bottomTab/quiz_focused.png';
import quizIcon from '@assets/icon/bottomTab/quiz.png';
import walletIconFocused from '@assets/icon/bottomTab/wallet_focused.png';
import walletIcon from '@assets/icon/bottomTab/wallet.png';
import { TabBar, TabContainer, TabIconStyle, TabNameText } from './styles';

interface IconProps {
  route: RouteProp<ParamListBase>;
  isFocused: boolean;
}

const TabIcon = ({ route, isFocused }: IconProps) => {
  const iconName = useMemo(() => {
    if (route.name === 'Home') {
      return isFocused ? homeIconFocused : homeIcon;
    }
    if (route.name === 'Location') {
      return isFocused ? locationIconFocused : locationIcon;
    }
    if (route.name === 'MyPage') {
      return isFocused ? myPageIconFocused : myPageIcon;
    }
    if (route.name === 'Wallet') {
      return isFocused ? walletIconFocused : walletIcon;
    }
    if (route.name === 'Quiz') {
      return isFocused ? quizIconFocused : quizIcon;
    }
    return homeIcon;
  }, [isFocused, route.name]);

  return <TabIconStyle source={iconName} />;
};

const CustomTabBar = ({ state, descriptors, navigation, insets }: BottomTabBarProps) => {
  return (
    <TabBar bottomSafeArea={insets.bottom}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.title ?? route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TabContainer
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
          >
            <TabIcon route={route} isFocused={isFocused} />
            <TabNameText isFocused={isFocused}>{label}</TabNameText>
          </TabContainer>
        );
      })}
    </TabBar>
  );
};

export default CustomTabBar;
