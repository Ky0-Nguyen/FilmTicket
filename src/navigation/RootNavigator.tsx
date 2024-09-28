import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BookingScreen, ListFilmScreen, FavoriteScreen, BookedScreen } from 'modules';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator()

const HomeStack = () => {
    return (
        <Tab.Navigator>
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