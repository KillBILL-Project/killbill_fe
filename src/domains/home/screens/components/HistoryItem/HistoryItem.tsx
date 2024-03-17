import React from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Image, View } from 'react-native';
import { HomeStackParamList } from '../../../../../types/navigation';
import { BottomText, Container, Content, LeftIcon, RightIcon, TopText } from './HistoryItem.style';
import { Medium14 } from '../../../../../components/Typography';
import { BLACK } from '../../../../../constants/colors';

// 반드시 icon, text 둘 중 하나만 포함하여야 함.
type IconType =
  | { icon: string; text?: never }
  | { icon?: never; text: { top: string; bottom: string } };

type DateLabelProps = IconType & {
  children: React.ReactNode;
  touchable?: boolean;
};

const HistoryItem = ({ icon, text, children, touchable = false }: DateLabelProps) => {
  const navigation = useNavigation<NavigationProp<HomeStackParamList>>();

  return (
    <Container disabled={!touchable} onPress={() => navigation.navigate('ReportDetail')}>
      <LeftIcon>
        {icon && (
          <View
            style={{
              flex: 1,
              width: '100%',
              height: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Image
              source={{ uri: icon }}
              style={{ width: '70%', height: '70%' }}
              resizeMode="contain"
            />
          </View>
        )}
        {text && (
          <>
            <TopText>{text.top}</TopText>
            <BottomText>{text.bottom}</BottomText>
          </>
        )}
      </LeftIcon>
      <Content>{children}</Content>
      {touchable && (
        <RightIcon>
          <Medium14 color={BLACK}>{'>'}</Medium14>
        </RightIcon>
      )}
    </Container>
  );
};

export default HistoryItem;
