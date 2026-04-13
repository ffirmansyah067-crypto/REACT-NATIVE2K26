import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Switch,
  Modal,
  Button,
  StyleSheet,
  Alert,
  Pressable,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  TouchableNativeFeedback,
} from 'react-native';
import FontAwesome from '@react-native-vector-icons/fontawesome';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRemember, setIsRemember] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const background = TouchableNativeFeedback.Ripple('#2196F3', false);


  const handleLogin = () => {
    if (email && password) {
      setModalVisible(true);
    } else {
      Alert.alert('Error', 'Lengkapi form!');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        maxLength={20}
      />
      <View style={styles.switchContainer}>
        <Text>Ingat Saya</Text>
        <Switch
          value={isRemember}
          onValueChange={setIsRemember}
          trackColor={{ true: '#007AFF' }}
        />
      </View>
      <Button title="Login" onPress={handleLogin} color={'#ff7b00ff'} />

      <Pressable
        onPress={handleLogin}
        onLongPress={() => {
          console.log('Button pressed for a long time!');
          Alert.alert('Pesan', 'Anda sudah menyentuh button ini terlalu lama!');
        }}
        delayLongPress={5000}
        style={({ pressed }) => [
          styles.pressable,
          { opacity: pressed ? 0.7 : 1 },
        ]}
      >
        <FontAwesome name="sign-in" size={20} color="white" />
        <Text style={styles.text}>Contoh Pressable!</Text>
      </Pressable>

      <TouchableOpacity
        style={styles.touchable}
        activeOpacity={0.7}
        onPress={handleLogin}
        disabled={false}
      >
        <FontAwesome name="sign-in" size={20} color="white" />
        <Text style={styles.text}>Contoh Touchable Opacity</Text>
      </TouchableOpacity>

      <TouchableHighlight
        style={styles.highlight}
        activeOpacity={0.6}
        underlayColor="#1a09faff"
        onPress={handleLogin}
        onShowUnderlay={() => console.log('Show underlay')}
      >
        <Text style={styles.text}>Highlight Underlay</Text>
      </TouchableHighlight>

      <TouchableWithoutFeedback
        onPress={() => Alert.alert('Pressed!')}
        onLongPress={handleLogin}
        delayLongPress={1000}
        hitSlop={{ top: 20 }}
      >
        <View>
          <Text>No Visual Feedback</Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableNativeFeedback
        background={background}
        useForeground={TouchableNativeFeedback.canUseNativeForeground()}

      >
        <View style={styles.nativeBtn}>
          <Text style={styles.text}>Android Native</Text>
        </View>
      </TouchableNativeFeedback>

      <Modal visible={modalVisible} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text>Login Berhasil!</Text>
            <Button
              title="Tutup"
              color={'#00ff22ff'}
              onPress={() => setModalVisible(false)}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  pressable: {
    flexDirection: 'row',
    backgroundColor: '#0675ecff',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    marginBottom: 10,
    marginTop: 10,
  },
  touchable: {
    flexDirection: 'row',
    backgroundColor: '#06ec19ff',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    marginBottom: 10,
  },
  highlight: {
    flexDirection: 'row',
    backgroundColor: '#06beecff',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    marginBottom: 10,
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'semibold',
    letterSpacing: 1,
  },
  nativeBtn: { backgroundColor: '#0cb8e4ff', padding: 15, borderRadius: 10, justifyContent: 'center', alignItems: 'center' },
});

