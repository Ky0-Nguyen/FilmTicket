import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BookingScreen, ListFilmScreen, FavoriteScreen, BookedScreen } from 'modules';
import Ionicons from 'react-native-vector-icons/Ionicons'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator()

const HomeStack = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName: string;

                    if (route.name === 'Film') {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'Favorite') {
                        iconName = focused ? 'heart' : 'heart-outline';
                    } else if (route.name === 'Booked') {
                        iconName = focused ? 'calendar' : 'calendar-outline';
                    } else {
                        iconName = 'help-circle-outline';
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
        >
            <Tab.Screen name="Film" component={ListFilmScreen} />
            <Tab.Screen name="Favorite" component={FavoriteScreen} />
            <Tab.Screen name="Booked" component={BookedScreen} />
        </Tab.Navigator>
    )
}

const RootNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={HomeStack} />
            <Stack.Screen name="Booking" component={BookingScreen} />
        </Stack.Navigator>
    )
}

export default RootNavigator