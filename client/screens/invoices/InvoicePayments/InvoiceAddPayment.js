import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const InvoiceAddPayment = ({ route, navigation, setPayment }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <View>
      <View style={{ height: '100%', justifyContent: 'center', bottom: 90 }}>
        <TouchableOpacity
          style={{ marginHorizontal: 30, alignItems: 'center' }}
          onPress={() => setOpenModal(true)}
        >
          <Text style={{ fontSize: 25 }}>+ הוספת אמצעי תשלום</Text>
        </TouchableOpacity>
      </View>
      {openModal && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={openModal}
          onRequestClose={() => {
            setOpenModal(!openModal);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={{ alignItems: 'flex-end' }}>
                <TouchableOpacity onPress={() => setOpenModal(!openModal)}>
                  <Ionicons name="close-sharp" size={28} color="black" />
                </TouchableOpacity>
              </View>
              <Text style={{ fontSize: 27, textAlign: 'center' }}>בחר אמצעי תשלום</Text>
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 20,
                  justifyContent: 'space-around',
                }}
              >
                <View style={{ flexDirection: 'column' }}>
                  <TouchableOpacity
                    onPress={() =>
                      setPayment({
                        addPayment: false,
                        creditCard: true,
                        checkBook: false,
                        bank: false,
                        app: false,
                      })
                    }
                  >
                    <Text style={styles.text}>כרטיס אשראי</Text>
                    <Image
                      style={{
                        width: 40,
                        height: 40,
                        left: 15,
                        marginTop: 10,
                      }}
                      source={{
                        uri: 'https://www.pngitem.com/pimgs/m/13-130946_bank-cards-icon-black-credit-card-icon-hd.png',
                      }}
                    />
                  </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'column' }}>
                  <TouchableOpacity
                    onPress={() =>
                      setPayment({
                        addPayment: false,
                        creditCard: false,
                        checkBook: false,
                        bank: true,
                        app: false,
                      })
                    }
                  >
                    <Text style={styles.text}>העברה בנקאית</Text>
                    <Image
                      style={{
                        width: 40,
                        height: 40,
                        left: 20,
                        marginTop: 10,
                      }}
                      source={{
                        uri: 'https://p.kindpng.com/picc/s/207-2077691_bank-bank-icon-finance-symbol-money-dollar-bank.png',
                      }}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  marginTop: 20,
                }}
              >
                <View style={{ flexDirection: 'column' }}>
                  <TouchableOpacity
                    onPress={() =>
                      setPayment({
                        addPayment: false,
                        creditCard: false,
                        checkBook: true,
                        bank: false,
                        app: false,
                      })
                    }
                  >
                    <Text style={styles.text}>הפקדת שיק</Text>
                    <Image
                      style={{
                        width: 40,
                        height: 40,
                        left: 10,
                        marginTop: 7,
                      }}
                      source={{
                        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcuW5IEu0szQyPeC-3RtMBuWY2XkMS_VGyVQ&usqp=CAU',
                      }}
                    />
                  </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'column' }}>
                  <TouchableOpacity
                    onPress={() =>
                      setPayment({
                        addPayment: false,
                        creditCard: false,
                        checkBook: false,
                        bank: false,
                        app: true,
                      })
                    }
                  >
                    <Text style={styles.text}>דרך אפליקציה</Text>
                    <Image
                      style={{
                        width: 40,
                        height: 40,
                        left: 20,
                        marginTop: 10,
                      }}
                      source={{
                        uri: 'https://mirrors.creativecommons.org/presskit/icons/share.xlarge.png',
                      }}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
};

export default InvoiceAddPayment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 130,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },

    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    height: '50%',
    width: '90%',
  },
  text: {
    textAlign: 'left',
  },
});
