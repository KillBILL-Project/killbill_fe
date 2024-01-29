import React, { useState } from 'react';
import RNPickerSelect from 'react-native-picker-select';
import Screen from '../../../../components/Screen/Screen';
import { BLACK, MAIN, WHITE } from '../../../../constants/colors';
import { Bold16 } from '../../../../components/Typography';
import {
  Container,
  Header,
  ListContainer,
  ListTitle,
  SelectMonth,
  SelectYear,
} from './ReportScreen.style';
import Item from './components/Item/Item';

const years = [
  { value: 2024, label: '2024년' },
  { value: 2023, label: '2023년' },
  { value: 2022, label: '2022년' },
  { value: 2021, label: '2021년' },
];

const months = [
  { value: 12, label: '12월' },
  { value: 11, label: '11월' },
  { value: 10, label: '10월' },
  { value: 9, label: '9월' },
];

const ReportScreen = () => {
  const [selectedYear, setSelectedYear] = useState(2024);
  const [selectedMonth, setSelectedMonth] = useState(12);

  const onChangeYear = (value: number) => setSelectedYear(value);
  const onChangeMonth = (value: number) => setSelectedMonth(value);

  return (
    <Screen
      title="리포트"
      isHeaderShown
      headerColor={MAIN}
      titleColor={WHITE}
      isBackButtonShown={false}
    >
      <Container>
        <Header>
          <SelectYear>
            <RNPickerSelect
              onValueChange={value => onChangeYear(value)}
              items={years}
              placeholder={{}}
              style={{
                inputIOS: {
                  fontSize: 16,
                  color: WHITE,
                },
                inputAndroid: {
                  fontSize: 16,
                  color: WHITE,
                },
              }}
            />
          </SelectYear>
          <SelectMonth>
            <RNPickerSelect
              onValueChange={value => onChangeMonth(value)}
              items={months}
              placeholder={{}}
              style={{
                inputIOS: {
                  fontSize: 16,
                  color: WHITE,
                },
                inputAndroid: {
                  fontSize: 16,
                  color: WHITE,
                },
              }}
            />
          </SelectMonth>
        </Header>
        <ListContainer>
          <ListTitle>
            <Bold16 color={BLACK}>2023년 9월</Bold16>
          </ListTitle>
          <Item />
        </ListContainer>
      </Container>
    </Screen>
  );
};

export default ReportScreen;
