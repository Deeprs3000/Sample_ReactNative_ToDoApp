import {
  ScrollableTabBar,
  ScrollableTabView
} from "@valdio/react-native-scrollable-tabview";
import { Textarea } from "native-base";
import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Active from "../Active";
import All from "../All";
import Completed from "../Completed";
import moment from "moment";
import { addTodo } from "./../../actions/ListActions";
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // initial state
      list: [], // state for list of all tasks
      task: "" // state for current task to be added in the list
    };
  }
  addTodo = () => {
    // function used to add a new Task with time and date.
    let date = new Date();

    let task = this.state.task;
    let data = {};
    data.task = task;
    data.status = false;
    data.dateTime = moment(date).format("MMMM Do YYYY, h:mm:ss a");
    this.props.addTodo(data);
    this.setState({
      task: ""
    });
  };

  render() {
    let allLabel = "All (" + this.props.listData.list.length + ")"; // label for All tab

    let activeList = [];
    this.props.listData.list.map((item, index) => {
      if (!item.status) {
        activeList.push(item);
      }
    });
    let activeLabel = "Active (" + activeList.length + ")"; // label for Active tab
    let completedList = [];
    this.props.listData.list.map((item, index) => {
      if (item.status) {
        completedList.push(item);
      }
    });
    let completedLabel = "Completed (" + completedList.length + ")"; // label for Completed tab
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Chat")}
          style={[styles.addButton]}
        >
          <Text>Chat</Text>
        </TouchableOpacity>
        <View style={styles.topView}>
          <View style={styles.textAreaContainer}>
            <Textarea
              value={this.state.task}
              onChangeText={task => this.setState({ task: task })}
              rowSpan={3}
              placeholder="Type here to add task"
            />
          </View>
          <View style={styles.addButtonContainer}>
            {this.state.task ? (
              <TouchableOpacity
                onPress={() => this.addTodo()}
                style={styles.addButton}
              >
                <Text>Add Todo</Text>
              </TouchableOpacity>
            ) : null}
          </View>
        </View>
        {this.props.listData.list.length ? (
          <ScrollableTabView
            tabBarActiveTextColor={"black"}
            tabBarInactiveTextColor={"grey"}
            tabBarUnderlineStyle={{ backgroundColor: "black" }}
            renderTabBar={() => <ScrollableTabBar />}
          >
            <All tabLabel={allLabel} />
            <Active tabLabel={activeLabel} />
            <Completed tabLabel={completedLabel} />
          </ScrollableTabView>
        ) : (
          <View style={styles.noTodoContainer}>
            <Text style={styles.noTodoText}>"List your Todos here."</Text>
          </View>
        )}
      </View>
    );
  }
}
function mapStateToProps(state) {
  return {
    listData: state.ListReducer
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addTodo }, dispatch);
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

const styles = StyleSheet.create({
  container: { flex: 1 },
  topView: {
    flex: 0.2,
    flexDirection: "row",
    backgroundColor: "#f2f2f2"
  },
  textAreaContainer: { flex: 0.8 },
  addButtonContainer: { flex: 0.2, justifyContent: "center" },
  addButton: {
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 5,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.5
  },
  noTodoContainer: { flex: 1, alignItems: "center", justifyContent: "center" },
  noTodoText: { fontSize: 22, fontStyle: "italic", color: "grey" }
});
