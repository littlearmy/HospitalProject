import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import { BottomNavigation, BottomNavigationTab } from '@ui-kitten/components';

const Tap = createBottomTabNavigator();
const faIcon = (name) => (props) => (
  <FAIcon {...props} name={name} size={20} color="gray" />
);

class ButtonTapBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      routeNames: [
        'DashboardTapNavigation',
        'AbsensTapNavigation',
        'CutiTapNavigation',
        'PrestasiTapNavigation',
      ],
    };
  }
  render() {
    return (
      <BottomNavigation
        selectedIndex={this.state.index}
        onSelect={(index) => {
          this.props.navigation.navigate(this.state.routeNames[index]);
          this.setState({ index });
        }}>
        <BottomNavigationTab title="Dashboard" icon={faIcon('dashcube')} />
        <BottomNavigationTab title="Absensi" icon={faIcon('check')} />
        <BottomNavigationTab title="Cuti" icon={faIcon('pagelines')} />
        <BottomNavigationTab title="Prestasi" icon={faIcon('trophy')} />
      </BottomNavigation>
    );
  }
}

export default class MainTapNavigation extends React.Component {
  render() {
    return (
      <Tap.Navigator tabBar={(props) => <ButtonTapBar {...props} />}>
        <Tap.Screen
          name="DashboardTapNavigation"
          component={DashboardTapNavigation}
        />
        <Tap.Screen
          name="AbsensTapNavigation"
          component={AbsensTapNavigation}
        />
        <Tap.Screen name="CutiTapNavigation" component={CutiTapNavigation} />
        <Tap.Screen
          name="PrestasiTapNavigation"
          component={PrestasiTapNavigation}
        />
      </Tap.Navigator>
    );
  }
}
