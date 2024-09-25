import React, { useState } from 'react';
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { scale } from '@utils/platform';
import { PRIMARY, WHITE } from '@constants/colors';

interface ShowAlertParams {
  content: string;
  confirmText?: string;
  confirmAction?: () => void;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.60)',
    paddingHorizontal: scale(24),
    justifyContent: 'center',
  },
  wrapper: { borderRadius: scale(10), overflow: 'hidden' },
  contentSection: {
    width: '100%',
    paddingVertical: scale(40),
    alignItems: 'center',
    backgroundColor: WHITE,
  },
  text: { fontSize: scale(16), fontWeight: '400', lineHeight: scale(24) },
  button: { paddingVertical: scale(12), alignItems: 'center', backgroundColor: PRIMARY },
});

const useAlert = () => {
  const [visible, setVisible] = useState(false);
  const [content, setContent] = useState('');
  const [confirmText, setConfirmText] = useState('확인');
  const [confirmAction, setConfirmAction] = useState<() => void>();

  const showAlert = (params: ShowAlertParams) => {
    setContent(params.content);
    if (params.confirmText) setConfirmText(params.confirmText);
    if (params.confirmAction) setConfirmAction(() => params.confirmAction);
    setVisible(true);
  };

  const Alert = () => {
    return (
      <Modal visible={visible} statusBarTranslucent transparent>
        <View style={styles.container}>
          <View style={styles.wrapper}>
            <View style={styles.contentSection}>
              <Text style={styles.text}>{content}</Text>
            </View>
            <TouchableOpacity
              activeOpacity={0.85}
              onPress={() => {
                setVisible(false);
                if (confirmAction) confirmAction();
              }}
              style={styles.button}
            >
              <Text style={styles.text}>{confirmText}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  };

  return { showAlert, Alert };
};
export default useAlert;
