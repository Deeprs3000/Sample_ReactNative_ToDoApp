import React, { Component } from "react";
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  Alert,
  StyleSheet
} from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { deleteTodo, changeStatus } from "./../actions/ListActions";
class Completed extends Component {
  // Component for Completed tab
  constructor(props) {
    super(props);
    this.state = {};
  }
  deleteTodo = id => {
    // function to delete a task
    Alert.alert(
      "Delete",
      "Are you sure, You want to delete this item ?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "destructive"
        },
        { text: "OK", onPress: () => this.props.deleteTodo(id) }
      ],
      { cancelable: true }
    );
  };
  _renderItem = ({ item, index }) => {
    item.id = index + item.task;
    return (
      <View style={styles.itemContainer}>
        <View style={styles.itemLeft}>
          <TouchableOpacity onPress={() => this.props.changeStatus(item.id)}>
            {item.status ? (
              <Image
                source={require("./../assets/success.png")}
                style={styles.icon}
              />
            ) : (
              <Image
                source={require("./../assets/empty.png")}
                style={[styles.icon, { tintColor: "#fdfdfd" }]}
              />
            )}
          </TouchableOpacity>
        </View>
        <View style={styles.itemMiddle}>
          <Text style={{ color: "grey", textDecorationLine: "line-through" }}>
            {item.task}
          </Text>
          <Text style={styles.dateTime}>{item.dateTime}</Text>
        </View>
        <View style={styles.itemRight}>
          <TouchableOpacity onPress={() => this.deleteTodo(item.id)}>
            <Image
              source={require("./../assets/delete.png")}
              style={styles.deleteIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  render() {
    let completedList = [];
    this.props.listData.list.map((item, index) => {
      if (item.status) {
        completedList.push(item);
      }
    });
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          extraData={this.props.listData}
          data={completedList}
          renderItem={this._renderItem}
        />
      </View>
    );
  }
}
function mapStateToProps(state) {
  return { listData: state.ListReducer };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ deleteTodo, changeStatus }, dispatch);
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Completed);

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    flexDirection: "row",
    margin: 10,
    padding: 20,
    borderRadius: 5,
    backgroundColor: "white",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.5,
    justifyContent: "space-between",
    elevation: 4
  },
  itemLeft: {
    flex: 0.1,
    alignItems: "center",
    justifyContent: "center"
  },
  icon: { height: 25, width: 25 },
  itemMiddle: { flex: 0.8, justifyContent: "center", paddingLeft: "2%" },
  dateTime: { color: "grey", fontSize: 10, marginTop: "2%" },
  itemRight: {
    flex: 0.1,
    alignItems: "center",
    justifyContent: "center"
  },
  deleteIcon: { height: 20, width: 20 }
});
