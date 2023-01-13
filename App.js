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
const FancyMathEventEmitter = new NativeEventEmitter(NativeModules.NetInfo);
const App = () => {
//  const [netInfo, setNetInfo] = useState('');
//  useEffect(() => {
   
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
//  }, []);

  const getNetInfo = () => {

    NativeModules.NetInfo.getNetInfo(
      /* callback */ function (result) {
        Alert.alert(
          'Netinfo',
          `Net INfo Syas  is net work connect ${result}`,
          [{ text: 'OK' }],
          {cancelable: false});
      });
  
//    NetInfo.fetch().then((state) => {
//      setNetInfo(
//        `Connection type: ${state.type === 'cellular' && state.details ? `${state.type} (${state.details.cellularGeneration && ''})` : (state.type !== '' ? state.type : 'N/A')}
//        \nConnection Status: ${state.isConnected ? `Connected` : `Disconnected`}
//        \nInternet Reachable: ${state.isInternetReachable ? `Yes` : `No`}`
//      );
//    });
  };


 return (
   <SafeAreaView style={{ flex: 1 }}>
     <View style={styles.container}>
       <Text style={styles.header}>
         Network Information
       </Text>
       <Text style={styles.textStyle}>
         {/*Here is NetInfo to get device type*/}
         
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