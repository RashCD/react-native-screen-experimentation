import { Navigation } from 'react-native-navigation';

import gridIcon from './screens/Grid_Icon';
import Screen2 from './screens/Screen2';
import Screen3 from './screens/Screen3';
import Screen4 from './screens/Screen4';
import Screen5 from './screens/Screen5';
import Screen6 from './screens/Screen6';
import Screen7 from './screens/ScreenTest';
import Screen8 from './screens/ScreenDeviceID';
import Screen9 from './screens/ScreenCardUI';
import Screen10 from './screens/ProfileList';
import Screen11 from './screens/ScreenUserProfileStraight';
import Screen12 from './screens/ScreenCamera';

const iconNormal = require('./images/icon1.png');
const iconHighlight = require('./images/icon1_selected.png');
const icon2Normal = require('./images/icon2.png');
const icon2Highlight = require('./images/icon2_selected.png');

export default () => {
  Navigation.registerComponent('Screen1', () => gridIcon);
  Navigation.registerComponent('Screen2', () => Screen2);
  Navigation.registerComponent('Screen3', () => Screen3);
  Navigation.registerComponent('Screen4', () => Screen4);
  Navigation.registerComponent('Screen5', () => Screen5);
  Navigation.registerComponent('Screen6', () => Screen6);
  Navigation.registerComponent('Screen7', () => Screen7);
  Navigation.registerComponent('Screen8', () => Screen8);
  Navigation.registerComponent('Screen9', () => Screen9);
  Navigation.registerComponent('Screen10', () => Screen10);
  Navigation.registerComponent('Screen11', () => Screen11);
  Navigation.registerComponent('Screen12', () => Screen12);

  Navigation.startTabBasedApp({
    tabs: [
      {
        label: 'One',
        screen: 'Screen11',
        icon: iconNormal,
        selectedIcon: iconHighlight,
        title: 'Screen One'
      },
    ]
  });
};
