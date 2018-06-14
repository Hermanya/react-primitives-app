import React from 'react';
import { Text, View } from 'react-primitives';
export default class App extends React.Component {
  render() {
    return (
      <View style={{
        marginTop: 64,
        display: 'flex',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}
