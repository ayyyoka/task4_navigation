//Student: Aiya Talpkaliyeva
//ID: 20MD0254
import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { FriendsContext } from './FriendsContext';
import HomeScreen from './HomeScreen';
import FriendsScreen from './FriendsScreen';

const Stack = createStackNavigator();

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      possibleFriends: [
        'Alice',
        'Bob',
        'Sammy',
      ],
      currentFriends: [],
    }
  }

  addFriend = (index) => {
    const {
      currentFriends,
      possibleFriends,
    } = this.state

    const addedFriend = possibleFriends.splice(index, 1)

    currentFriends.push(addedFriend)

    this.setState({
      currentFriends,
      possibleFriends,
    })
  }

  render() {
    return (
      <FriendsContext.Provider
        value={
          {
            currentFriends: this.state.currentFriends,
            possibleFriends: this.state.possibleFriends,
            addFriend: this.addFriend
          }
        }
      >
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
            />
            <Stack.Screen
              name="Friends"
              component={FriendsScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </FriendsContext.Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;