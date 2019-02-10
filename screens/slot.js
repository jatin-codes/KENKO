import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar
} from "react-native";
// import * as firebase from "firebase";
// import Animbutton from "../../components/Animbutton";
// import Commonstyle from "../components/commonstyle";
const jsonData = {
  slots: {
    slot1: "9:00am",
    slot2: "9:30am",
    slot3: "10:00am",
    slot4: "10:30am",
    slot5: "11:00am",
    slot6: "11:30am"
  }
};
export default class Slot extends Component {
  render() {
    return (
      <View>
        <Text> hello</Text>
      </View>
    );
  }
}
// export default class Slot extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       bookingDate: this.props.navigation.state.params.bookingDate
//     };
//   }
//   _onPressBack() {
//     const { goBack } = this.props.navigation;
//     goBack();
//   }
//   _bookSlot(status, key, value) {
//     const month = this.state.bookingDate.month;
//     const date = this.state.bookingDate.day;
//     // const user = firebase.auth().currentUser;
//     const uid = user.uid;
//     let userDataJson = {};
//     if (status) userDataJson[key] = uid;
//     else userDataJson[key] = null;

//     // firebase
//     //   .database()
//     //   .ref("users")
//     //   .child(uid)
//     //   .child("appointments")
//     //   .child(month)
//     //   .child(date)
//     //   .update(userDataJson);
//   }
//   render() {
//     let _this = this;
//     const slots = jsonData.slots;
//     const slotsarr = Object.keys(slots).map(function(k) {
//       return (
//         <View key={k} style={{ margin: 5 }}>
//           {/* <Animbutton
//             countCheck={0}
//             onColor={"green"}
//             effect={"pulse"}
//             _onPress={status => _this._bookSlot(status, k, slots[k])}
//             text={slots[k]}
//           /> */}
//         </View>
//       );
//     });
//     return (
//       <View style={styles.container}>
//         <StatusBar barStyle="light-content" />
//         <View>
//           <TouchableOpacity onPress={() => this._onPressBack()}>
//             <Text>Back</Text>
//           </TouchableOpacity>
//           <Text />
//           <Text />
//         </View>
//         {slotsarr}
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1
//   }
// });
