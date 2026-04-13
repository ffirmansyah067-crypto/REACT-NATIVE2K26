/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar,useColorScheme } from 'react-native';
import { SafeAreaProvider} from 'react-native-safe-area-context';
import  ProfilCard  from './src/components/ProfilCard';
import  LoginForm from './src/components/FormLogin';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ProfilCard />
      <LoginForm />
    </SafeAreaProvider>
    
  );
}

export default App;