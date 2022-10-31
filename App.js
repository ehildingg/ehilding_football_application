import { Text, View, StyleSheet } from 'react-native';

import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import StartScreen from './screens/StartScreen';
import ProfileScreen from './screens/ProfileScreen';

import Colors from './utilities/constants/colors';

import { Ionicons } from '@expo/vector-icons';
import SettingsScreen from './screens/SettingsScreen';
import TeamsListScreen from './screens/TeamsListScreen';
import TeamsOverviewScreen from './screens/TeamOverviewScreen';
import PlayerDetails from './screens/PlayerDetails';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.headerBackgroundColor },
        headerTintColor: '#ffffff',
        tabBarStyle: { backgroundColor: Colors.tabBarColor },
        tabBarActiveTintColor: Colors.primaryText,
        tabBarInactiveTintColor: Colors.secondaryText,
      }}
    >
      <Tab.Screen
        name="Home"
        component={StartScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => <Ionicons name="home" size={size} color={color} />,
        }}
      />

      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: 'Settings',
          tabBarIcon: ({ color, size }) => <Ionicons name="settings" size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, size }) => <Ionicons name="person" size={size} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: Colors.headerBackgroundColor },
          headerTintColor: '#ffffff',
        }}
      >
        <Stack.Screen
          name="Tab"
          component={TabNavigator}
          options={{ headerShown: false, title: 'Home' }}
        />

        <Stack.Screen name="Teams" component={TeamsListScreen} />
        <Stack.Screen name="TeamsOverview" component={TeamsOverviewScreen} />
        <Stack.Screen name="PlayerDetails" component={PlayerDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    margin: 100,
  },
});
