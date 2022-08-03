import React from 'react';
import { Text, Image, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import Logo from '../components/Logo';
import { COLORS } from '../core/theme';

export default function about({ navigation }) {
    return(
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' , }}>
             <ScrollView
        style={styles.container}
        contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}
        showsVerticalScrollIndicator={false}
      >
    <Logo/>
    <Text style={styles.userName}>האפליקציה נוצרה לצורך פרויקט הגמר במכללה למנהל</Text>
    <Text style={styles.userName}>נוצר על ידי :</Text>
    <Text style={styles.userName}>אלון בביצקי</Text>
    <Text style={styles.userName}> שירן פקדו</Text>
    <Text style={styles.userName}>ברק אלהרר</Text>
    <Text style={styles.userName}> בלה וייזבורג</Text>
  </ScrollView>
  </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.bg,
      padding: 20,
    },
    userName: {
      fontSize: 16,
      marginTop: 10,
      marginBottom: 10,
    },
  });
  