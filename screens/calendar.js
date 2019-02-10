import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar
} from "react-native";
// import Commonstyle from "../../components/commonstyle";
import { Calendar } from "react-native-calendars";

export default class Cal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onPress = this.onPress.bind(this);
  }
  onPress(day) {
    this.props.navigation.navigate("Slot");
  }
  _onPressBack() {
    const { goBack } = this.props.navigation;
    goBack();
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View>
          <TouchableOpacity onPress={() => this._onPressBack()}>
            <Text>Back</Text>
          </TouchableOpacity>
          <Text />
          <Text />
        </View>
        <Calendar
          onDayPress={() => this.onPress()}
          style={styles.calendar}
          hideExtraDays
          markedDates={{ [this.state.selected]: { selected: true } }}
          theme={{
            selectedDayBackgroundColor: "green",
            todayTextColor: "green",
            arrowColor: "green"
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  calendar: {
    borderTopWidth: 1,
    paddingTop: 5,
    borderBottomWidth: 1,
    borderColor: "#eee",
    height: 350
  }
});
