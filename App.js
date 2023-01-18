/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';

// import all the components we are going to use
import {Alert, SafeAreaView, StyleSheet, View, Text, Button } from 'react-native';
import { NativeModules, NativeEventEmitter } from 'react-native';
// import NetInfo from '@react-native-community/netinfo';


const SvmxNativeModules = NativeModules.NetworkInfo;
const SvmxNativeModulesEventEmitter = new NativeEventEmitter(SvmxNativeModules);


const App = () => {
  const [netInfo, setNetInfo] = useState('');
  eventHandler = async (networkInfo) => {
    try {
      if (networkInfo) {
        const status = networkInfo.isConnected ? 'Connected' : 'Not Connected';
        setNetInfo(status);
      }
   } catch (error) {
      
    }
  }
  useEffect(() => {
   
//    const unsubscribe = NetInfo.addEventListener((state) => {
//      setNetInfo(
//        `Connection type: ${state.type === 'cellular' && state.details ? `${state.type} (${state.details.cellularGeneration && ''})` : (state.type !== '' ? state.type : 'N/A')}
//        \nConnection Status: ${state.isConnected ? `Connected` : `Disconnected`}
//        \nInternet Reachable: ${state.isInternetReachable ? `Yes` : `No`}`
//      );
//    });

//    return () => {
//      unsubscribe();
//    };
handleConnectivitStatus = SvmxNativeModulesEventEmitter.addListener('networkStatusDidChange', eventHandler, this);
    getNetworkStatus();


  }, []);
 
  const getNetInfo = () => {

   
//    NetInfo.fetch().then((state) => {
//      setNetInfo(
//        `Connection type: ${state.type === 'cellular' && state.details ? `${state.type} (${state.details.cellularGeneration && ''})` : (state.type !== '' ? state.type : 'N/A')}
//        \nConnection Status: ${state.isConnected ? `Connected` : `Disconnected`}
//        \nInternet Reachable: ${state.isInternetReachable ? `Yes` : `No`}`
//      );
//    });
  };
  getNetworkStatus = async () => {
    const networkInfo = await SvmxNativeModules.getCurrentState();
    console.log('networkInfo ', networkInfo);
    const status = networkInfo && networkInfo.isConnected ? 'Connected' : 'Not Connected';
    setNetInfo(status);
  }

 return (
   <SafeAreaView style={{ flex: 1 }}>
     <View style={styles.container}>
       <Text style={styles.header}>
         Network Information
       </Text>
       <Text style={styles.textStyle}>
         {/*Here is NetInfo to get device type*/
         netInfo}
         
       </Text>
       <Button title="Refresh"  onPress={getNetInfo} color="#841584" />
     </View>
   </SafeAreaView>
 );
};

const styles = StyleSheet.create({
 container: {
   flex: 1,
   backgroundColor: 'white',
   padding: 10,
   justifyContent: 'center',
 },
 header: {
   fontSize: 22,
   fontWeight: '600',
   color: 'black',
   textAlign: 'center',
   paddingVertical: 20,
 },
 textStyle: {
   marginTop: 30,
   fontSize: 16,
   textAlign: 'center',
   color: 'black',
   paddingVertical: 20,
 },
});

export default App;