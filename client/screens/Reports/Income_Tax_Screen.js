import React, { useRef, useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

import { List, Chip } from 'react-native-paper';
import TabContainer from '../../components/TabContainer';
import { COLORS } from '../../core/theme';
import Constants from 'expo-constants';

const Income_Tax_Screen = () => {
  return (
    <TabContainer>
      <View style={styles.container}>
        <ScrollView>
          <List.Section>
            <List.Accordion
              titleStyle={{ color: 'black', fontWeight: 'bold' }}
              title="ינואר - פברואר"
              left={(props) => (
                <Chip
                  style={{
                    borderColor: `lightblue`,
                    backgroundColor: `lightblue`,
                    alignSelf: 'center',
                  }}
                >
                  ₪603
                </Chip>
              )}
            >
              <List.Item
                title="סך הכנסות חייבות במס -"
                titleStyle={{ marginLeft: 20, fontWeight: 'bold' }}
                right={() => (
                  <Text
                    style={{
                      color: '#274c77',
                      textAlignVertical: 'center',
                      marginRight: 15,
                      fontWeight: 'bold',
                      fontSize: 15,
                    }}
                  >
                    ₪7,500
                  </Text>
                )}
              />
              <List.Item
                title="סך הוצאות מוכרות למס -"
                titleStyle={{ marginLeft: 20, fontWeight: 'bold' }}
                right={() => (
                  <Text
                    style={{
                      color: '#274c77',
                      textAlignVertical: 'center',
                      marginRight: 15,
                      fontWeight: 'bold',
                      fontSize: 15,
                    }}
                  >
                    ₪7,500
                  </Text>
                )}
              />
              <List.Item
                title="סך קיזוז למס -"
                titleStyle={{ marginLeft: 20, fontWeight: 'bold' }}
                right={() => (
                  <Text
                    style={{
                      color: '#274c77',
                      textAlignVertical: 'center',
                      marginRight: 15,
                      fontWeight: 'bold',
                      fontSize: 15,
                    }}
                  >
                    ₪3,950
                  </Text>
                )}
              />
              <List.Item
                title="סך הפרשים למס -"
                titleStyle={{ marginLeft: 20, fontWeight: 'bold' }}
                right={() => (
                  <Text
                    style={{
                      color: '#274c77',
                      textAlignVertical: 'center',
                      marginRight: 15,
                      fontWeight: 'bold',
                      fontSize: 15,
                    }}
                  >
                    ₪3,550
                  </Text>
                )}
              />
            </List.Accordion>
            <List.Accordion
              title="מרץ - אפריל"
              titleStyle={{ color: 'black', fontWeight: 'bold' }}
              left={(props) => (
                <Chip
                  style={{
                    borderColor: `lightblue`,
                    backgroundColor: `lightblue`,
                    alignSelf: 'center',
                  }}
                >
                  ₪4,124
                </Chip>
              )}
            >
              <List.Item title="First item" />
              <List.Item title="Second item" />
            </List.Accordion>
            <List.Accordion
              title="מאי - יוני"
              titleStyle={{ color: 'black', fontWeight: 'bold' }}
              left={(props) => (
                <Chip
                  style={{
                    borderColor: `lightblue`,
                    backgroundColor: `lightblue`,
                    alignSelf: 'center',
                  }}
                >
                  ₪1,277
                </Chip>
              )}
            >
              <List.Item title="First item" />
              <List.Item title="Second item" />
            </List.Accordion>
            <List.Accordion
              title="יולי - אוגוסט"
              titleStyle={{ color: 'black', fontWeight: 'bold' }}
              left={(props) => (
                <Chip
                  style={{
                    borderColor: `lightblue`,
                    backgroundColor: `lightblue`,
                    alignSelf: 'center',
                  }}
                >
                  ₪6,123
                </Chip>
              )}
            >
              <List.Item title="First item" />
              <List.Item title="Second item" />
            </List.Accordion>
            <List.Accordion
              title="ספטמבר - אוקטובר"
              titleStyle={{ color: 'black', fontWeight: 'bold' }}
              left={(props) => (
                <Chip
                  style={{
                    borderColor: `lightblue`,
                    backgroundColor: `lightblue`,
                    alignSelf: 'center',
                  }}
                >
                  ₪9,134
                </Chip>
              )}
            >
              <List.Item title="First item" />
              <List.Item title="Second item" />
            </List.Accordion>
            <List.Accordion
              title="נובמבר - דצמבר"
              titleStyle={{ color: 'black', fontWeight: 'bold' }}
              left={(props) => (
                <Chip
                  style={{
                    borderColor: `lightblue`,
                    backgroundColor: `lightblue`,
                    alignSelf: 'center',
                  }}
                >
                  ₪3,954
                </Chip>
              )}
            >
              <List.Item title="First item" />
              <List.Item title="Second item" />
            </List.Accordion>
          </List.Section>
        </ScrollView>
      </View>
    </TabContainer>
  );
};
const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#efefef',
    padding: 20,
  },
  overflow: {
    overflow: 'hidden',
    backgroundColor: 'white',
    borderRadius: 6,
  },
  button: {
    padding: 10,
    textAlign: 'center',
  },
  buttonText: {
    fontSize: 20,
  },
  textContainer: {
    padding: 15,
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.bg,
    marginBottom: 60,
  },
});
export default Income_Tax_Screen;
