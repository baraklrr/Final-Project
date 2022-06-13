import React from 'react';
import { StyleSheet, View, Platform } from 'react-native';
import { WebView } from 'react-native-webview';

export default function DocViewer({ route }) {

  return (
    <WebView
      source={{
        uri: 'http://docs.google.com/gview?embedded=true&url=' + route.params.url,
        // url can be a web link or path to your file local ('file:///...')
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
});
