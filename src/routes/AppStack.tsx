import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Landing from '../pages/Landing';
import GivingClasses from '../pages/GiveClasses';
import StudyTabs from './StudyTabs';


const { Navigator, Screen } = createStackNavigator();

function AppStack() {
    return(
        <NavigationContainer>
            <Navigator screenOptions={{headerShown: false}}>
                <Screen name="Landing" component={Landing} />
                <Screen name="GivingClasses" component={GivingClasses} />
                <Screen name="Study" component={StudyTabs} />
            </Navigator>
        </NavigationContainer>
    )
}

export default AppStack;