import React from 'react';
import { StyleSheet, View, Platform } from 'react-native';
import { WebView } from 'react-native-webview';

export default function DocViewer({ route }) {
  return (
    <WebView
      source={{
        uri: 'http://docs.google.com/gview?embedded=true&url=https://www.gov.il/BlobFolder/service/refund-for-representatives-class-action/he/Service_Pages_Income_tax_representative-refund_single.pdf',
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
