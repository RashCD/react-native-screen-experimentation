import { Navigation } from 'react-native-navigation';

import gridIcon from './screens/Grid_Icon';
import Screen2 from './screens/Screen2';
import Screen3 from './screens/Screen3';
import Screen4 from './screens/Screen4';
import Screen5 from './screens/Screen5';

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

  Navigation.startTabBasedApp({
    tabs: [
      {
        label: 'One',
        screen: 'Screen5',
        icon: iconNormal,
        selectedIcon: iconHighlight,
        title: 'Screen One'
      },
      {
        label: 'Two',
        screen: 'Screen4',
        icon: icon2Normal,
        selectedIcon: icon2Highlight,
        title: 'Screen Two'
      }
    ]
  });
};
