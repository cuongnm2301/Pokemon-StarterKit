import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import ScreenManager from './src/app_screens';


const TabNavigator = createBottomTabNavigator({
  Home: ScreenManager.Home,
  Settings: ScreenManager.Setting,
});

export default createAppContainer(TabNavigator);