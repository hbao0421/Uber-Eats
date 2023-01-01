import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './src/navigation';
import {Amplify} from 'aws-amplify';
import {withAuthenticator} from 'aws-amplify-react-native';
import config from './src/aws-exports';
import AuthContextProvider from './src/contexts/AuthContext';

Amplify.configure({...config,Analytics:{disabled:true}});


 function App() {
  return (
    <NavigationContainer>
      <AuthContextProvider>
        <RootNavigator/>
      </AuthContextProvider>
      <StatusBar style="Light" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
});
export default withAuthenticator(App);
