import * as React from 'react'
import {FlatList, View, Text, TouchableOpacity} from 'react-native'
import db from '../config'
import firebase from 'firebase'
import {ListItem} from 'react-native-elements'

export default class HomeScreen extends React.Component {
constructor(){
    super()
    this.state = {
        itemrequests : [],
        userId : firebase.auth().currentUser.emailId,

    }
}
componentDidMount(){
    db.collection("Exchange_Screen").onSnapshot((snapshot)=>{
       var requestlist = snapshot.docs.map((doc)=>doc.data())
       this.setState({
           itemrequests : requestlist
       }) 
    })
}

KeyExtractor = (item,index)=>index.toString()
renderItem = ({item,i})=>{
    return(
        <ListItem
        key = {i}
        title = {item.itemname}
        subtitle = {item.itemdescription}
        titleStyle = {{color:'black',fontWeight:'bold'}}
        rightElement = {
            <TouchableOpacity
            >
               <Text>View</Text>
            </TouchableOpacity>
        }
        bottomDivider
        />
    )
}
addnotification = ()=>{

}

    render(){
        return(
            <View>
                <TouchableOpacity
                style ={{width:200,height:30,borderWidth:3}}
                onPress = {()=>{
                  this.addnotification()
                }}>
                </TouchableOpacity>
                <FlatList
                KeyExtractor = {this.KeyExtractor}
                data = {this.state.itemrequests}
                renderItem = {this.renderItem}>

                </FlatList>
            </View>
        )
    }
}