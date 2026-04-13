/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { ScrollView, RefreshControl, Text } from 'react-native';
import SimpleList from './src/components/SimpleList';
import FlatListExample from './src/components/FlatListExample';
import SectionListExample from './src/components/SelectionListExample';


function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppContent />
    </SafeAreaProvider>
  );
}

function AppContent() {
  const safeAreaInsets = useSafeAreaInsets();
return (
    <ScrollView
      contentContainerStyle={{
        paddingTop: safeAreaInsets.top,
        paddingBottom: safeAreaInsets.bottom,
      }}
    >
      {/* <SimpleList /> */}
      {/* <FlatListExample /> */}
      <SectionListExample />
    </ScrollView>

  );
};

export default App;
