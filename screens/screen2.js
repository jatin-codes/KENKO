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
      recipient: '+16047158724',
      textmessage: 'John’s Infliximab injection is due in 30 minutes.'
    }
  };

  sendText = () => {
    const { text } = this.state;
    //pass text message GET variables via query string
    // fetch(
    //   "https://xdhacks-server.netlify.com/.netlify/functions/sendText?number=+16047158724&body=" + text.textmessage
    // ).catch(err => console.error(err));
  };

  navigate = () => {
    this.props.navigation.navigate("Cal");
  };

  dateTime = () => {
    this.props.navigation.navigate("DateTimePickerTester");
  };

  render() {
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
              </View>
              <View style={styles.infoContainer}>
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
