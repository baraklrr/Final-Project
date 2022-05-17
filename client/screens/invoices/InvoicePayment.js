import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { Button } from "@rneui/base";
import InvoiceAddPayment from "./InvoicePayments/InvoiceAddPayment";
import InvoiceApp from "./InvoicePayments/InvoiceApp";
import InvoiceBank from "./InvoicePayments/InvoiceBank";
import InvoiceCheckBook from "./InvoicePayments/InvoiceCheckBook";
import InvoiceCreditCard from "./InvoicePayments/InvoiceCreditCard";

const InvoicePayment = ({ navigation, route }) => {
  const [openModal, setOpenModal] = useState(false);
  const [payment, setPayment] = useState({
    addPayment: true,
    creditCard: false,
    checkBook: false,
    bank: false,
    app: false,
  });

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          containerStyle={{
            width: 80,
            marginVertical: 10,
          }}
          onPress={() => navigation.navigate("חשבונית מס/קבלה", { id: 123 })}
          title="הוספה"
          type="clear"
          titleStyle={{ color: "rgba(78, 116, 289, 1)" }}
        />
      ),
    });
  }, [navigation]);

  return (
    <View style={{ backgroundColor: openModal ? "#a9a9a9" : "white" }}>
      <View
        style={{
          backgroundColor: "#CCCCFF",
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 20,
        }}
      >
        <Text style={{ textAlign: "left", lineHeight: 40, fontSize: 20 }}>
          יתרה לתשלום
        </Text>
        <Text style={{ textAlign: "left", lineHeight: 40, fontSize: 20 }}>
          {route.params.sumPrice}
        </Text>
      </View>
      {payment.addPayment && <InvoiceAddPayment setPayment={setPayment}/>}
      {payment.app && <InvoiceApp setPayment={setPayment} />}
      {payment.bank && <InvoiceBank setPayment={setPayment}/>}
      {payment.checkBook && <InvoiceCheckBook setPayment={setPayment} />}
      {payment.creditCard && <InvoiceCreditCard setPayment={setPayment}/>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 130,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },

    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    height: "50%",
    width: "90%",
  },
  text: {
    textAlign: "left",
  },
});

export default InvoicePayment;

// <NavigationContainer independent={true}>
// <View style={{ backgroundColor: '#CCCCFF', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20 }}>
//   <Text style={{textAlign: 'left', lineHeight: 40, fontSize: 20}} >
//     יתרה לתשלום
//   </Text>
//   <Text style={{textAlign: 'left', lineHeight: 40, fontSize: 20}} >
//     {route.params.sumPrice}
//   </Text>

// </View>

// <Tab.Navigator
//   screenOptions={{
//     tabBarScrollEnabled: true,
//     tabBarLabelStyle: { fontSize: 14 },
//     tabBarItemStyle: { width: 100 },
//     // tabBarStyle: { backgroundColor: "powderblue" },
//   }}
// >
//   <Tab.Screen name="העברה בנקאית" component={InvoicePaymentBank} initialParams={route.params} />
//   <Tab.Screen name="כ.אשראי" component={SettingsScreen} />
//   <Tab.Screen name="שיק" component={SettingsScreen} />
//   <Tab.Screen name="אפליקציית תשלום" component={SettingsScreen} />
//   <Tab.Screen name="אחר" component={SettingsScreen} />
// </Tab.Navigator>

// </NavigationContainer>
