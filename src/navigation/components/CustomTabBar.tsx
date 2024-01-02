import { BottomTabBarProps } from '@react-navigation/bottom-tabs/src/types';
import React, { useMemo } from 'react';
import { ParamListBase, RouteProp } from '@react-navigation/native';
import { Medium14 } from '../../components/Typography/Typography';
import { GREY700, GREY800 } from '../../constants/colors';
import { TabBar, TabContainer, TabIconStyle } from './CustomTabBar.style';
import homeIconFocused from '../../assets/icon/home_focused.png';
import homeIcon from '../../assets/icon/home.png';
import locationIconFocused from '../../assets/icon/location_focused.png';
import locationIcon from '../../assets/icon/location.png';
import reportIconFocused from '../../assets/icon/report_focused.png';
import reportIcon from '../../assets/icon/report.png';
import myPageIconFocused from '../../assets/icon/mypage_focused.png';
import myPageIcon from '../../assets/icon/mypage.png';

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
    if (route.name === 'Report') {
      return isFocused ? reportIconFocused : reportIcon;
    }
    if (route.name === 'MyPage') {
      return isFocused ? myPageIconFocused : myPageIcon;
    }
    return homeIcon;
  }, [isFocused, route.name]);

  return <TabIconStyle source={iconName} />;
};

const CustomTabBar = ({ state, descriptors, navigation }: BottomTabBarProps) => {
  return (
    <TabBar>
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
            <Medium14 color={isFocused ? GREY800 : GREY700}>{label}</Medium14>
          </TabContainer>
        );
      })}
    </TabBar>
  );
};

export default CustomTabBar;
