import { useRef, useState } from 'react';
import {
  KeyboardAvoidingView,
  Modal,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

type Props = {
  visible: boolean;
  email: string;
  onClose: () => void;
};

export default function VerificationModal({ visible, email, onClose }: Props) {
  const router = useRouter();
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef<Array<TextInput | null>>(new Array(6).fill(null));

  const handleChange = (text: string, index: number) => {
    const digit = text.replace(/[^0-9]/g, '').slice(-1);
    const newCode = [...code];
    newCode[index] = digit;
    setCode(newCode);

    if (digit && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }

    if (digit && newCode.every((d) => d !== '')) {
      setTimeout(() => {
        onClose();
        router.replace('/');
      }, 300);
    }
  };

  const handleKeyPress = (key: string, index: number) => {
    if (key === 'Backspace' && !code[index] && index > 0) {
      const newCode = [...code];
      newCode[index - 1] = '';
      setCode(newCode);
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleClose = () => {
    setCode(['', '', '', '', '', '']);
    onClose();
  };

  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={handleClose}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View style={styles.overlay}>
          <Pressable style={StyleSheet.absoluteFillObject} onPress={handleClose} />

          <View style={styles.card}>
            {/* Close button */}
            <TouchableOpacity onPress={handleClose} style={styles.closeButton} activeOpacity={0.7}>
              <Ionicons name="close" size={22} color="#6B7280" />
            </TouchableOpacity>

            {/* Icon */}
            <View style={styles.iconContainer}>
              <Ionicons name="mail" size={28} color="#6C4EF5" />
            </View>

            {/* Heading */}
            <Text className="type-h3 text-text-primary text-center mt-4">Check your email</Text>
            <Text className="type-body-md text-text-secondary text-center mt-2">
              We sent a 6-digit code to
            </Text>
            <Text
              className="font-poppins-semibold text-[14px] text-text-primary text-center mt-0.5"
              numberOfLines={1}
            >
              {email}
            </Text>

            {/* Code inputs */}
            <View style={styles.codeRow}>
              {code.map((digit, i) => (
                <TextInput
                  key={i}
                  ref={(ref) => { inputRefs.current[i] = ref; }}
                  style={[styles.codeBox, digit ? styles.codeBoxFilled : null]}
                  value={digit}
                  onChangeText={(text) => handleChange(text, i)}
                  onKeyPress={({ nativeEvent }) => handleKeyPress(nativeEvent.key, i)}
                  keyboardType="number-pad"
                  maxLength={1}
                  textContentType="oneTimeCode"
                  selectTextOnFocus
                />
              ))}
            </View>

            {/* Resend */}
            <TouchableOpacity activeOpacity={0.7} className="mt-5 mb-2">
              <Text className="type-body-sm text-text-secondary text-center">
                Didn't receive it?{' '}
                <Text style={styles.resendText}>Resend code</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 40,
    alignItems: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    width: 64,
    height: 64,
    borderRadius: 20,
    backgroundColor: '#EEE9FE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  codeRow: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 28,
  },
  codeBox: {
    width: 46,
    height: 56,
    borderRadius: 14,
    borderWidth: 1.5,
    borderColor: '#E5E7EB',
    backgroundColor: '#F6F7FB',
    textAlign: 'center',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 22,
    color: '#001132',
  },
  codeBoxFilled: {
    borderColor: '#6C4EF5',
    backgroundColor: '#EEE9FE',
  },
  resendText: {
    fontFamily: 'Poppins-SemiBold',
    color: '#6C4EF5',
  },
});
