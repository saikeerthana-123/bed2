import * as React from 'react';
import {Text,View,StyleSheet,TextInput,TouchableOpacity, ToastAndroid, KeyboardAvoidingView} from 'react-native';
import { Header } from 'react-native-elements';
import db from '../config.js';

export default class App extends React.Component {
  constructor(props){
        super(props);
        this.state = {
            title: '',
            author: '',
            storyText: '',
        }
    }

    submitStory = ()=>{
        db.collection("Story").add({
            title: this.state.title,
            author: this.state.author,
            storyText: this.state.storyText,
        })
        this.setState({
            title: '',
            author: '',
            storyText: ''
        })
       ToastAndroid.show("Your story has been submitted.");
    }

  render() {
    return (
      <KeyboardAvoidingView style={styles.allText} behavior = "padding" enabled>
        <TouchableOpacity style={styles.header}>
          <Text style={styles.headerText}>Story Hub App</Text>
        </TouchableOpacity>

        <TextInput
          style={styles.titleBox}
          placeholder="Write the title of the story here"
        />

        <TextInput
          style={styles.authorBox}
          placeholder="Write the name of the author here"
        />

        <TextInput
          style={styles.storyBox}
          multiline={true}
          placeholder="Write your story here"
        />

        <TouchableOpacity style={styles.submitButton} onPress = {this.submitStory}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}
const styles = StyleSheet.create({
  allText: {
    flex: 1,
  },
  header: {
    backgroundColor: '#BBDABB',
    
  },
  headerText: {
    fontFamily: 'britannic',
    fontSize: 35,
    textAlign: 'center',
    padding: 5,
  },
  titleBox: {
    width: '90%',
    height: 20,
    border: 'solid',
    padding: 17,
    marginLeft: 20,
    marginTop: 10,
    color: 'black',
    fontSize: 15,
  },
  authorBox: {
    width: '90%',
    height: 20,
    border: 'solid',
    padding: 17,
    marginLeft: 20,
    marginTop: 10,
    color: 'black',
    fontSize: 15,
  },
  storyBox: {
    width: '90%',
    height: '55%',
    border:'solid',
    padding: 17,
    marginLeft: 20,
    marginTop: 10,
    color: 'black',
    fontSize: 15,
  },
  submitButton: {
    backgroundColor: '#BBDABB',
    width: '50%',
    height: 40,
    marginTop: 20,
    padding: 5,
    marginLeft: 80,
  },
  buttonText: {
    fontFamily: 'britannic',
    textAlign: 'center',
    fontSize: 25,
  },
});
