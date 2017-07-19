import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';


const Tabs = TabNavigator({
  Home: {    
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => <Icon type='font-awesome' name="home" size={35} color={tintColor} />,
    }, 
  },
  Search: {    
    navigationOptions: {
      tabBarLabel: 'Search',
      tabBarIcon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />
    },
  },
});

Tabs.navigationOptions = {
  title: 'MY TITLE',
  header: {
    style: {
      backgroundColor: '#42a5f5',
    }
  },
};

export default Tabs;