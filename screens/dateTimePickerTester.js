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
  KeyboardAvoidingView,
  Picker,
  Alert,
  Platform,
  Button
} from "react-native";

import DateTimePicker from "react-native-modal-datetime-picker";

export default class DateTimePickerTester extends Component {
  state = {
    startDateTimePickerVisible: false,
    endDateTimePickerVisible: false,
    timePickerVisible: false,
    PickerSelectedVal: ""
  };

  // _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

  // _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  // _handleDatePicked = date => {
  //   console.log("A date has been picked: ", date);
  //   this._hideDateTimePicker();
  // };

  showStartDateTimePicker = () =>
    this.setState({ startDateTimePickerVisible: true });

  showEndDateTimePicker = () =>
    this.setState({ endDateTimePickerVisible: true });

  hideStartDateTimePicker = () =>
    this.setState({ startDateTimePickerVisible: false });

  hideEndDateTimePicker = () =>
    this.setState({ endDateTimePickerVisible: false });

  showTimePicker = () => this.setState({ timePickerVisible: true });

  hideTimePicker = () => this.setState({ timePickerVisible: false });

  handleStartDatePicked = date => {
    alert("Start Date is: " + date.toDateString());
    this.hideStartDateTimePicker();
  };

  handleEndDatePicked = date => {
    alert("End Date is: " + date.toDateString());
    this.hideEndDateTimePicker();
  };

  handleTimePicked = time => {
    alert("End Date is: " + time.toTimeString());
    this.hideStartDateTimePicker();
  };

  getSelectedPickerValue = () => {
    Alert.alert("Selected country is : " + this.state.PickerSelectedVal);
  };

  navigate = () => {
    this.props.navigation.navigate("Screen2");
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
              <View style={styles.dropdownContainer}>
                <Picker
                  selectedValue={this.state.PickerSelectedVal}
                  onValueChange={(itemValue, itemIndex) =>
                    this.setState({ PickerSelectedVal: itemValue })
                  }
                >
                  <Picker.Item label="Infliximab" value="Infliximab" />
                  <Picker.Item label="Adalimumab" value="Adalimumab" />
                  <Picker.Item label="Etanercept" value="Etanercept" />
                  <Picker.Item label="Anakinra" value="Anakinra" />
                </Picker>

                <Button
                  title="Select start date"
                  onPress={this.showStartDateTimePicker}
                />
                <DateTimePicker
                  isVisible={this.state.startDateTimePickerVisible}
                  onConfirm={this.handleStartDatePicked}
                  onCancel={this.hideStartDateTimePicker}
                  datePickerModeAndroid="spinner"
                />
                <Button
                  title="Select end date"
                  onPress={this.showEndDateTimePicker}
                />
                <DateTimePicker
                  isVisible={this.state.endDateTimePickerVisible}
                  onConfirm={this.handleEndDatePicked}
                  onCancel={this.hideEndDateTimePicker}
                  datePickerModeAndroid="spinner"
                />
                <Button title="Select time" onPress={this.showTimePicker} />
                <DateTimePicker
                  isVisible={this.state.timePickerVisible}
                  onConfirm={this.handleTimePicked}
                  onCancel={this.hideTimePicker}
                  datePickerModeAndroid="spinner"
                  mode="time"
                />
                <Button
                  title="Back to Screen2"
                  onPress={() => this.navigate()}
                />
              </View>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </SafeAreaView>

      // <View style={{ flex: 1 }}>
      //   <TouchableOpacity onPress={this.showStartDateTimePicker}>
      //     <Text>Select Start Date</Text>
      //   </TouchableOpacity>
      //   <DateTimePicker
      //     isVisible={this.state.startDateTimePickerVisible}
      //     onConfirm={this.handleStartDatePicked}
      //     onCancel={this.hideStartDateTimePicker}
      //   />

      //   <TouchableOpacity onPress={this.showEndDateTimePicker}>
      //     <Text>Select End Date</Text>
      //   </TouchableOpacity>
      //   <DateTimePicker
      //     isVisible={this.state.endDateTimePickerVisible}
      //     onConfirm={this.handleEndDatePicked}
      //     onCancel={this.hideEndDateTimePicker}
      //   />
      // </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(32, 53, 70)",
    flexDirection: "column"
  },
  dropdownContainer: {
    flex: 1,
    justifyContent: "center",
    margin: 10
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
