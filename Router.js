import {
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator,
  createDrawerNavigator
} from "react-navigation";
import TodoList from "./src/screens/TodoList";
import Chat from "./src/screens/Chat";

const AppStack = createStackNavigator({
  Dashboard: {
    screen: TodoList,
    navigationOptions: ({ navigation }) => ({
      title: "Todos"
    })
  },
  Chat: {
    screen: Chat,
    navigationOptions: ({ navigation }) => ({
      title: "Chat"
    })
  }
});

export default createAppContainer(
  createSwitchNavigator(
    {
      App: AppStack
    },
    {
      initialRouteName: "App"
    }
  )
);
