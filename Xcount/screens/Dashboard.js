import React, { Component } from 'react';
import { StyleSheet,Text, View, TouchableOpacity, Image, Alert, FlatList,} from 'react-native';
import Button from '../components/Button'
import Background from '../components/Background'
import Header from '../components/Header'
import Logo from '../components/Logo'

export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id:1,  title: "הכנסות",image:require("../assets/shekel_in.png")},
        {id:2,  title: "הוצאות",image:require("../assets/shekel_out.png")},
      ]
    };
  }

  clickEventListener(item) {
    Alert.alert(item.title)
  }

  render() {
    return (
      <Background> 
      <View style={styles.container}>
      <Logo />
      <Header> שלום </Header>
        <FlatList style={styles.list}
          contentContainerStyle={styles.listContainer}
          data={this.state.data}
          horizontal={false}
          numColumns={2}
          keyExtractor= {(item) => {
            return item.id;
          }}
          renderItem={({item}) => {
            return (
              <View>
                <TouchableOpacity  style={[styles.card]} onPress={() => {this.clickEventListener(item)}}>
                  <Image style={styles.cardImage} source={item.image}/>
                </TouchableOpacity>
                <View style={styles.cardHeader}>
                  <View style={{alignItems:"center", justifyContent:"center"}}>
                    <Text style={[styles.title, {color:"#000000"}]}>{item.title}</Text>
                  </View>
                </View>
              </View>
            )
          }}/>
           <Button 
     mode="outlined">
     ערוך פרטים לחישוב החזר מס</Button>
      </View>
       </Background>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:0, 
    marginTop:10,
    position: 'absolute',
    alignItems: 'center',
    bottom:190,
    justifyContent: 'center',
    backgroundColor:'#fff',
  },
  list: {
    paddingHorizontal: 5,
    backgroundColor:"#fff",
  },
  listContainer:{
    justifyContent: 'center',
    alignItems:'center'
  },
  /******** card **************/
  card:{
    shadowColor: '#474747',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
    marginVertical: 10,
    marginHorizontal: 20,
    backgroundColor:"#ffff",
    width:120,
    height:120,
    borderRadius:60,
    alignItems:'center',
    justifyContent:'center'
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    alignItems:"center", 
    justifyContent:"center"
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardFooter:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  cardImage:{
    height: 100,
    width: 100,
    alignSelf:'center'
  },
  title:{
    fontSize:24,
    flex:1,
    alignSelf:'center',
    fontWeight:'bold'
  },
});     