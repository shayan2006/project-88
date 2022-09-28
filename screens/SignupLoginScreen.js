import React from 'react';
import {Text, TextInput, TouchableOpacity, View, Modal} from 'react-native';
import firebase from 'firebase'
import db from '../config'

export default class SignupLoginScreen extends React.Component {
    constructor(){
        super();
        this.state={
            emailId : '',
            password : '',
            isModalVisible : false,
            firstName : '',
            lastName : '',
            address : '',
            contact : '',
            confirmPassword : '',
        }
    }
    userLogin = ()=>{
         firebase.auth().signInWithEmailAndPassword(this.state.emailId,this.state.password).then(()=>{
              alert("successful Login")
         })
         .catch((error)=>{
              alert(error.message)
         })
 
         
     }
     userSignUp = (username,password,confirmPassword)=>{
         if (password !== confirmPassword) {
             alert("password does not match")
         }
         else {
          firebase.auth().createUserWithEmailAndPassword(this.state.emailId,this.state.password).then((responce)=>{
         db.collection("users").add({
            firstName : this.state.firstName,
            lastName : this.state.lastName,
            address : this.state.address,
            emailId : this.state.emailId,
            password : this.state.password,
            contact : this.state.contact
        })
        alert("user added successfully")
             
         }).catch(function(error){
             console.log("error")
         })
     }
    }
    showModal = ()=>{
        return(
            <Modal
            animationType = "fade"
            transparent = {false}
            visible = {this.state.isModalVisible}>
              <View>
                  <Text>
                      Registeration
                  </Text>
                  <TextInput
                  style = {{width:200,height:30,borderWidth:3}}
                  placeholder = {"First Name"}
                  maxLength = {8}
                  onChangeText = {(text)=>{
                     this.setState({
                         firstName : text
                     }
                     )
                  }}
                  value = {this.state.firstName}>

                  </TextInput>

                  <TextInput
                  style = {{width:200,height:30,borderWidth:3}}
                  placeholder = {"Last Name"}
                  maxLength = {8}
                  onChangeText = {(text)=>{
                    this.setState({
                        lastName : text
                     })
                  }}
                  value = {this.state.lastName}>

                  </TextInput>

                  <TextInput
                  style = {{width:200,height:30,borderWidth:3}}
                  placeholder = {"address"}
                  maxLength = {8}
                  onChangeText = {(text)=>{
                      this.setState({
                          address : text
                      })
                  }}
                  value = {this.state.address}>

                  </TextInput>

                  <TextInput
                  style = {{width:200,height:30,borderWidth:3}}
                  placeholder = {"contact"}
                  maxLength = {10}
                  onChangeText = {(text)=>{
                      this.setState({
                          contact : text
                      })
                  }}
                  value = {this.state.contact}>

                  </TextInput>

                  <TextInput
                  style = {{width:200,height:30,borderWidth:3}}
                  placeholder = {"emailid"}
                  onChangeText = {(text)=>{
                      this.setState({
                          emailId : text
                      })
                  }}
                  value = {this.state.emailId}>

                  </TextInput>

                  <TextInput
                  style = {{width:200,height:30,borderWidth:3}}
                  placeholder = {"password"}
                  onChangeText = {(text)=>{
                      this.setState({
                          password : text
                      })
                  }}
                  value = {this.state.password}>

                  </TextInput>


                  <TextInput
                  style = {{width:200,height:30,borderWidth:3}}
                  placeholder = {"confirmPassword"}
                  maxLength = {8}
                  onChangeText = {(text)=>{
                     this.setState({
                         confirmPassword : text
                     })
                  }}
                  value = {this.state.confirmPassword}
                  secureTextEntry = {true}>

                  </TextInput>

                  <TouchableOpacity
                  style = {{width:200,height:30,borderWidth:3,backgroundColor:'blue'}}
                  onPress = {()=>{
                      this.userSignUp(this.state.emailId,this.state.password,this.state.confirmPassword)
                  }}>
                 <Text>Register</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                  style = {{width:200,height:30,borderWidth:3,backgroundColor:'purple'}}
                  onPress = {()=>{
                      this.setState({
                          isModalVisible : false
                      })
                  }}>
                    <Text>Cancel</Text>
                  </TouchableOpacity>

              </View>
            </Modal>
        )
    }
    render(){
        return(
            <View>
                {this.showModal()}
                <Text>Login</Text>
                <TextInput
                style={{width:200,height:30,borderWidth:3}}
                keyboardType = 'email-address'
                onChangeText = {(text)=>{
                    this.setState({
                        emailId : text
                    })
                }}
                value = {this.state.emailId}>
                
                </TextInput>

              <TextInput
              style={{width:200,height:30,borderWidth:3}}
              secureTextEntry = {true}
              onChangeText = {(text)=>{
                  this.setState({password : text})
              }}
              value = {this.state.password}>

              </TextInput>
              <TouchableOpacity
              style={{width:200,height:30,borderWidth:3}}
              onPress = {()=>{
                  this.userLogin()
                  this.props.navigation.navigate("bottomTab")
              }}>
               <Text>Login</Text>
              </TouchableOpacity>

              <TouchableOpacity
               style={{width:200,height:30,borderWidth:3,backgroundColor:'red'}}
               onPress = {()=>{
                   this.setState({
                       isModalVisible : true
                   })
               }}>
              <Text>Sign up</Text>
               </TouchableOpacity>

               

            </View>
        )
    }
}