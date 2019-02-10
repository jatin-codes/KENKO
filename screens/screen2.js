import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  StatusBar,
  TextInput,
  SafeAreaView,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView
} from "react-native";

export default class screen2 extends Component {
  state = {
    text: {
      recipient: "+16047158724",
      textmessage: "John's Infliximab medication is due in 30 minutes"
    }
  };

  sendText = () => {
    const { text } = this.state;
    //pass text message GET variables via query string
    console.log("WORKS?");
    fetch(
      `https://xdhacks-server.netlify.com/.netlify/functions/sendText?number=${
        text.recipient
      }}&body=${text.textmessage}`
    ).catch(err => console.error(err));
  };

  navigate = () => {
    this.props.navigation.navigate("Cal");
  };

  dateTime = () => {
    this.props.navigation.navigate("DateTimePickerTester");
  };

  render() {
    // const { text } = this.state;
    // const spacer = {
    //   margin: 8
    // }
    // const textArea = {
    //   borderRadius: 4
    // }
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" />
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
          <TouchableWithoutFeedback
            style={styles.container}
            onPress={Keyboard.dismiss}
          >
            <View style={styles.logoContainer}>
              <View style={styles.logoContainer}>
                <Image
                  style={styles.logo}
                  source={require("../images/kenko.png")}
                />
                {/* <Text style={styles.title}>Account Information</Text> */}
              </View>
              <View style={styles.infoContainer}>
                {/* <TextInput style={styles.input}
                  placeholder="Enter username/email"
                  placeholderTextColor='rgba(255,255,255,0.8)'
                  keyboardType='email-address'
                  returnKeyType='next'
                  autoCorrect={false}
                  onSubmitEditing={() => this.refs.txtPassword.focus()}
                />
                <TextInput style={styles.input}
                  placeholder="Enter password"
                  placeholderTextColor='rgba(255,255,255,0.8)'
                  returnKeyType='go'
                  secureTextEntry
                  autoCorrect={false}
                  ref={"txtPassword"}
                /> */}
                <TouchableOpacity
                  onPress={() => this.sendText()}
                  style={styles.buttonContainer}
                >
                  <Text style={styles.buttonText}>Send SMS</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => this.navigate()}
                  style={styles.buttonContainer}
                >
                  <Text style={styles.buttonText}>Go to Calendar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => this.dateTime()}
                  style={styles.buttonContainer}
                >
                  <Text style={styles.buttonText}>Date and Time</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
    // <View className="screen2">
    {
      /* <View style={{ marginTop: 10 }} >
          <Text> Send Text Message </Text>
          <Text> Your Phone Number </Text>
          <input value={text.recipient}
            onChange={e => this.setState({ text: { ...text, recipient: e.target.value } })} />
          <View style={spacer} />
          <Text> Message </Text>
          <textarea rows={3} value={text.textmessage} style={textArea}
            onChange={e => this.setState({ text: { ...text, textmessage: e.target.value } })} />
          <View style={spacer} />
          <button onClick={this.sendText}> Send Text </button>
        </View>
      </View> */
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(32, 53, 70)",
    flexDirection: "column"
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1
  },
  logo: {
    width: 100,
    height: 100
  },
  title: {
    color: "#f7c744",
    fontSize: 18,
    textAlign: "center",
    marginTop: 5,
    opacity: 0.9
  },
  infoContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 200,
    padding: 20
    // backgroundColor: 'red'
  },
  input: {
    height: 40,
    backgroundColor: "rgba(255,255,255,0.2)",
    color: "#FFF",
    marginBottom: 20,
    paddingHorizontal: 10
  },
  buttonContainer: {
    backgroundColor: "#f7c744",
    paddingVertical: 15
  },
  buttonText: {
    textAlign: "center",
    color: "rgb(32, 53, 70)",
    fontWeight: "bold",
    fontSize: 18
  }
});
