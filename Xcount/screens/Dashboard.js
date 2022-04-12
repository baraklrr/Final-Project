import React from 'react'
import Background from '../components/Background'
import Header from '../components/Header'
import { StyleSheet,View} from 'react-native'
import Button from '../components/Button'


export default function Dashboard({ navigation }) {
  return (
    <Background>
      <Header>שלום וברוך הבא</Header>
        
      <Button
        mode="outlined"
        onPress={console.log("pressed")}>
        הכנסות 
      </Button>
      <Button
        mode="outlined"
        onPress={console.log("pressed")}>
        הוצאות 
      </Button>
   
   <Button 
     mode="outlined">
     ערוך פרטים לחישוב החזר מס</Button>
 
    </Background>
  )
}


const styles = StyleSheet.create({
  container: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
  },
  buttonContainer: {
      flex: 1,
  },
})
