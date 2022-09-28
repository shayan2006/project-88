import React from 'react'
import { View, Text, TextInput } from 'react-native'
import db from '../config'
import firebase from 'firebase'

export default class Settings extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            userID : firebase.auth().currentUser.email,
             userName : "",
             recieverID : this.props.navigation.getParam("details")["userId"],
             requestID : this.props.navigation.getParam("details")["requestId"],
             bookName : this.props.navigation.getParam("details")["itemname"],
             reason : this.props.navigation.getParam("details")["itemdescription"],
             recievename : '',
             recievecontact : '',
             recieveaddress : '',
    }
  }
  componentDidMount(){
    this.getUserDetails()
}
getUserDetails(){
    db.collection("users").where("emailID","==",this.state.recieverID).get()
    .then((snapshot)=>{
       snapshot.forEach((doc)=>{
          this.setState({
              recievename : doc.data().firstname,
              recieveContact : doc.data().contact,
              recieveAddress : doc.data().address,
          })
       })
    })
}
render(){
    return(
        <View>
          <Text>{this.state.recievename}</Text>
          <Text>{this.state.recievecontact}</Text>
          <Text>{this.state.recieveaddress}</Text>
        </View>
    )
  }
}