import React, { useCallback, useMemo, useState } from 'react';
import Alert from '../components/Popup/Alert';
import { PopupProps } from '../types/common';
import Confirm from '../components/Popup/Confirm';
import i18n from '../locales/i18n';

const usePopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [props, setProps] = useState<PopupProps>({
    text: '',
    confirmText: i18n.t('use_popup.confirm_text'),
    onPressConfirm: undefined,
  });

  const hidePopup = useCallback(() => {
    setIsVisible(false);
  }, []);

  const showPopup = useCallback(
    ({ text, confirmText, onPressConfirm }: PopupProps) => {
      setProps({ text, confirmText, onPressConfirm: onPressConfirm ?? hidePopup });
      setIsVisible(true);
    },
    [hidePopup],
  );

  const AlertComponent = useMemo(() => {
    return isVisible ? (
      <Alert
        text={props.text}
        confirmText={props.confirmText}
        onPressConfirm={props.onPressConfirm}
      />
    ) : null;
  }, [isVisible, props.confirmText, props.onPressConfirm, props.text]);

  const ConfirmComponent = useMemo(() => {
    return isVisible ? (
      <Confirm
        text={props.text}
        confirmText={props.confirmText}
        onPressConfirm={props.onPressConfirm}
        onPressCancel={hidePopup}
      />
    ) : null;
  }, [isVisible, props.confirmText, props.onPressConfirm, props.text, hidePopup]);
  return { showPopup, hidePopup, AlertComponent, ConfirmComponent };
};

export default usePopup;
