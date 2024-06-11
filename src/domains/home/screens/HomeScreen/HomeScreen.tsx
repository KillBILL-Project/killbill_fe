import React, { useRef, useState } from 'react';
import LottieView from 'lottie-react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import Screen from '../../../../components/Screen/Screen';
import {
  CategoryContainer,
  Container,
  EmptyContainer,
  FilterContainer,
  MotionContainer,
  TrashContainer,
} from './HomeScreen.style';

import Motion from './components/Motion';
import TrashSizeFilter, { trashSizeMeta } from './components/TrashSizeFilter/TrashSizeFilter';
import WwoossBottomSheet from '../../../../components/common/WwoossBottomSheet';
import MyTrashLogList from './components/MyTrashLogList';
import ScrollLoopPicker from '../../../../components/ScrollLoopPicker';
import {
  CategoryImage,
  CenteredLine,
  FirstCircle,
  SecondCircle,
  ThirdCircle,
  UnselectedCircle,
} from './components/Category/Category.style';
import {
  TrashInfoType,
  useTrashInfoQuery,
} from '../../../../hooks/queries/trash/useTrashInfoQuery';
import { ratio } from '../../../../utils/platform';

const HomeScreen = () => {
  const [trashSize, setTrashSize] = useState(1);
  const [value, setValue] = useState(2);
  const bottomSheetRef = useRef<BottomSheet>(null);

  const { data: result, isSuccess } = useTrashInfoQuery();

  const scrollBarContainerHeight = 32;
  const trashHistoryHeaderHeight = 52;
  const inactiveTrashHistoryHeight = scrollBarContainerHeight + trashHistoryHeaderHeight;

  const motionRef = useRef<LottieView>(null);

  const itemComponent = (item: TrashInfoType, index: number, selected: boolean) => {
    if (!item) return null;
    return selected ? (
      <>
        <ThirdCircle>
          <SecondCircle>
            <FirstCircle>
              <CategoryImage
                source={{ uri: item?.trashImagePath }}
                resizeMode="contain"
                imageSize={ratio * 80}
              />
            </FirstCircle>
          </SecondCircle>
        </ThirdCircle>
        <CenteredLine />
      </>
    ) : (
      <>
        <UnselectedCircle>
          <CategoryImage
            source={{ uri: item?.trashImagePath }}
            resizeMode="contain"
            imageSize={trashSizeMeta[trashSize].size}
          />
        </UnselectedCircle>
        <CenteredLine />
      </>
    );
  };

  return (
    <Screen title="홈" isHeaderShown={false} isTopSafeArea={false}>
      <Container>
        <MotionContainer>
          <Motion motionRef={motionRef} />
        </MotionContainer>
        <FilterContainer>
          <TrashSizeFilter trashSize={trashSize} setTrashSize={setTrashSize} />
        </FilterContainer>
        <TrashContainer>
          <CategoryContainer>
            {/* <CategorySwiper motionRef={motionRef} /> */}
            {isSuccess && (
              <ScrollLoopPicker
                horizontal
                items={result?.filter(item => trashSizeMeta[trashSize].id === item.size)}
                visibleItemCount={3}
                value={value}
                setValue={setValue}
                itemComponent={itemComponent}
              />
            )}
          </CategoryContainer>
          <EmptyContainer inactiveTrashHistoryHeight={inactiveTrashHistoryHeight} />
        </TrashContainer>
      </Container>

      <WwoossBottomSheet bottomSheetRef={bottomSheetRef} openPoint="10%" maxOpenPoint="90%">
        <MyTrashLogList />
      </WwoossBottomSheet>
    </Screen>
  );
};

export default HomeScreen;
