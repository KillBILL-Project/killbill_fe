import React, { memo, useCallback, useMemo } from 'react';
import BottomSheet, { BottomSheetBackdrop, BottomSheetFooterProps } from '@gorhom/bottom-sheet';
import { BottomSheetBackdropProps } from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheetBackdrop';
import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types';

export type TBottomSheetProps = {
  children: React.ReactNode;
  bottomSheetRef: React.RefObject<BottomSheetMethods>;
  footerBottom?: React.FC<BottomSheetFooterProps>;
  openPoint?: number | string;
  enableContentPanningGesture?: boolean;
  enableHandlePanningGesture?: boolean;
  showBackdrop?: boolean;
  showHandler?: boolean;
  showRadius?: boolean;
};

const WwoossBottomSheet: React.FC<TBottomSheetProps> = ({
  children,
  bottomSheetRef,
  footerBottom = undefined,
  openPoint = '15%',
  enableHandlePanningGesture = true,
  enableContentPanningGesture = true,
  showBackdrop = false,
  showHandler = true,
  showRadius = true,
}) => {
  const snapPoints = useMemo(() => [openPoint, '40%'], []);

  const renderBackdrop = useCallback(
    (props: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop {...props} appearsOnIndex={0} disappearsOnIndex={-1} />
    ),
    [],
  );

  return (
    <BottomSheet
      keyboardBehavior="interactive"
      onClose={() => {}}
      backgroundStyle={{ borderRadius: showRadius ? 15 : 0 }}
      handleIndicatorStyle={{
        backgroundColor: 'grey',
        width: 40,
        marginTop: 5,
      }}
      enablePanDownToClose={false}
      enableContentPanningGesture={enableContentPanningGesture}
      enableHandlePanningGesture={enableHandlePanningGesture}
      ref={bottomSheetRef}
      snapPoints={snapPoints}
      footerComponent={footerBottom}
      backdropComponent={showBackdrop ? renderBackdrop : undefined}
      // onChange={handleSheetPositionChange}
    >
      {children}
    </BottomSheet>
  );
};

export default memo(WwoossBottomSheet);
