import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

// Import Screens
import HomeScreen from '../screens/HomeScreen';
import HistoryScreen from '../screens/HistoryScreen';
import SettingsScreen from '../screens/SettingScreen';
import ProfileEditScreen from '../screens/ProfileEditScreen';

const Tab = createBottomTabNavigator();

// Optional: If you decide to use Stack Navigation within Tabs
const HomeStack = createStackNavigator();
const HistoryStack = createStackNavigator();

const HomeStackNavigator = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Welcome" component={HomeScreen} />
    {/* Add other Home related screens here */}
  </HomeStack.Navigator>
);

const HistoryStackNavigator = () => (
  <HistoryStack.Navigator>
    <HistoryStack.Screen name="History" component={HistoryScreen} />
    {/* Add other History related screens here */}
  </HistoryStack.Navigator>
);

const SettingsStackNavigator = () => (
  <HistoryStack.Navigator>
    <HistoryStack.Screen name="Settings" component={SettingsScreen} />
    <HistoryStack.Screen name="ProfileEdit" component={ProfileEditScreen} />
  </HistoryStack.Navigator>
);

const AppNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#f15454',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator} // Use Stack Navigator here
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesome name="home" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="History"
        component={HistoryStackNavigator} // Use Stack Navigator here
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesome5 name="history" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsStackNavigator} // Use Stack Navigator here
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesome name="gear" size={25} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
