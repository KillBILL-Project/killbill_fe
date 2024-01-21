import React, { useRef, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';

const array = Array.from({ length: 59 }, (_, i) => i + 1).map(item => {
  return item < 10 ? `0${item}` : `${item}`;
});
const data = ['59', ...array, '01'];

const Scroll = () => {
  const ref = useRef<ScrollView>(null);
  const [selectedIndex, setSelectedIndex] = useState(1);

  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 234,
        overflow: 'hidden',
        backgroundColor: 'grey',
      }}
    >
      <ScrollView
        ref={ref}
        onScrollAnimationEnd={() => {
          console.log(selectedIndex);
          ref.current?.scrollTo({ y: selectedIndex * 78 });
        }}
        onScroll={event => {
          const a = Math.ceil(event.nativeEvent.contentOffset.y / 78);
          const b = event.nativeEvent.contentOffset.y % 78;
          if (b > 34) setSelectedIndex(a);
          if (b < 34) setSelectedIndex(a - 1);
        }}
        scrollEventThrottle={24}
      >
        {data.map((item, index) => (
          <View
            key={index.toString()}
            style={{ height: 78, justifyContent: 'center', alignItems: 'center', flex: 1 }}
          >
            <Text style={{ fontSize: 40, fontWeight: '500' }}>{item}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Scroll;
