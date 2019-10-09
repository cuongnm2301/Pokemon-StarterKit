import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { createSwitchNavigator } from 'react-navigation';
import React from 'react';
import ScreenManager from '../app_screens';
//import TabIconWithBadge from '../components/TabIconWithBadge'
import Ionicons from 'react-native-vector-icons/Ionicons';
Ionicons.loadFont();


/*
 * Enable this component if you want badge
 *
const HomeIconWithBadge = props => {
    // You should pass down the badgeCount in some other ways like react context api, redux, mobx or event emitters.
    // You can add badCount from by badgeCount={3}
    return <TabIconWithBadge {...props} />;
};
*/
const getTabBarIcon = (navigation, focused, tintColor) => {
    const { routeName } = navigation.state;
    let IconComponent = Ionicons;
    let iconName;
    if (routeName === 'Home') {
      iconName = `ios-information-circle${focused ? '' : '-outline'}`;
      // We want to add badges to home tab icon
      // IconComponent = HomeIconWithBadge;
    } else if (routeName === 'Settings') {
      iconName = `ios-options`;
    }
  
    // You can return any component that you like here!
    return <IconComponent name={iconName} size={25} color={tintColor} />;
};

const HomeStack = createStackNavigator({
    Home: ScreenManager.Home,
    Details: ScreenManager.HomeDetail,
});



const TabNavigator = createBottomTabNavigator(
    {
        Home: HomeStack,
        Settings: ScreenManager.Setting,
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => getTabBarIcon(navigation, focused, tintColor),
        }),
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        },
    }
);

const RootSwitch = createSwitchNavigator(
    {
      Loading: ScreenManager.Loading,
      App: TabNavigator,
    },
    {
      initialRouteName: 'Loading',
    }
);



export default RootSwitch;