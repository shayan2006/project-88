import React from 'react'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import db from '../config'
import firebase from 'firebase'

export default class Settings extends React.Component {
    constructor(){
        super()
        this.state = {
            emailID:'',
            password:'',
            firstname:'',
            lastname:'',
            address:'',
            contact:'',
            docID:''
    }
}

getdata=async()=>{
    var email = firebase.auth().currentUser.email
 await   db.collection("users").where('emailId','==',email).get()
    .then((snapshot)=>{
      snapshot.forEach((doc)=>{
         var data = doc.data()
         this.setState({
             emailID:data.emailId,
             firstname:data.firstName,
             lastname:data.lastName,
             address:data.address,
             contact:data.contact,
             docID:doc.id
         })
         console.log(this.state.firstname)
      })
    })
}

updateData=()=>{ db.collection('users').doc(this.state.docID) .update({ "firstName": this.state.firstname, "lastName" : this.state.lastname, "address" : this.state.address, "contact" : this.state.contact, });
    alert("Profile Updated Successfully") }

    componentDidMount(){
        this.getdata()
    }

    render(){
        return(
            <View>
                <TextInput
               style={{width:200,height:30,borderWidth:3}}
               maxLength={8}
               onChangeText={(text)=>{
                 this.setState({
                     firstname:text
                 })
               }}
               value = {this.state.firstname}>

               </TextInput>

               <TextInput
               style={{width:200,height:30,borderWidth:3}}
               maxLength={8}
               onChangeText={(text)=>{
                   this.setState({
                    lastname:text
                   })
               }}
               value = {this.state.lastname}>

               </TextInput>

               <TextInput
               style={{width:200,height:30,borderWidth:3}}
               maxLength={8}
               onChangeText={(text)=>{
                   this.setState({
                       contact:text
                   })
               }}
               value = {this.state.contact}>

               </TextInput>

               <TextInput
               style={{width:200,height:30,borderWidth:3}}
               maxLength={8}
               onChangeText={(text)=>{
                   this.setState({
                       address:text
                   })
               }}
               value = {this.state.address}>

               </TextInput>

               <TextInput
               style={{width:200,height:30,borderWidth:3}}
               maxLength={8}
               onChangeText={(text)=>{
                   this.setState({
                       contact:text
                   })
               }}
               value = {this.state.contact}>

               </TextInput>

               <TouchableOpacity
               style={{width:200,height:30,borderWidth:3,backgroundColor:"orange"}}
               onPress={()=>{
                   this.updateData()
               }}>
               <Text>update</Text>
               </TouchableOpacity>

            </View>
        )
    }
}