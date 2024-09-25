import React, { useState } from 'react';
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { scale } from '@utils/platform';
import { GREY100, PRIMARY, WHITE } from '@constants/colors';

interface ShowConfirmParams {
  content: string;
  confirmText?: string;
  cancelText?: string;
  confirmAction?: () => void;
  cancelAction?: () => void;
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
    paddingHorizontal: scale(30),
    alignItems: 'center',
    backgroundColor: WHITE,
  },
  text: { fontSize: scale(16), fontWeight: '400', lineHeight: scale(24) },
  buttonSection: { flexDirection: 'row' },
  button: { flex: 1, paddingVertical: scale(12), alignItems: 'center', backgroundColor: PRIMARY },
});

const useConfirm = () => {
  const [visible, setVisible] = useState(false);
  const [content, setContent] = useState('');
  const [confirmText, setConfirmText] = useState('확인');
  const [cancelText, setCancelText] = useState('취소');
  const [confirmAction, setConfirmAction] = useState<() => void>();
  const [cancelAction, setCancelAction] = useState<() => void>();

  const showConfirm = (params: ShowConfirmParams) => {
    setContent(params.content);
    if (params.confirmText) setConfirmText(params.confirmText);
    if (params.cancelText) setCancelText(params.cancelText);
    if (params.confirmAction) setConfirmAction(() => params.confirmAction);
    if (params.cancelAction) setCancelAction(params.cancelAction);
    setVisible(true);
  };

  const Confirm = () => {
    return (
      <Modal visible={visible} statusBarTranslucent transparent>
        <View style={styles.container}>
          <View style={styles.wrapper}>
            <View style={styles.contentSection}>
              <Text style={styles.text}>{content}</Text>
            </View>
            <View style={styles.buttonSection}>
              <TouchableOpacity
                activeOpacity={0.85}
                onPress={() => {
                  setVisible(false);
                  if (cancelAction) cancelAction();
                }}
                style={[styles.button, { backgroundColor: GREY100 }]}
              >
                <Text style={styles.text}>{cancelText}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.85}
                onPress={() => {
                  setVisible(false);
                  if (confirmAction) confirmAction();
                }}
                style={[styles.button, { backgroundColor: PRIMARY }]}
              >
                <Text style={styles.text}>{confirmText}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    );
  };

  return { showConfirm, Confirm };
};
export default useConfirm;
