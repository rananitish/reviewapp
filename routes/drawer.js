import { createAppContainer } from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import HomeStack from './homeStack';
import aboutStack from './aboutStack';

const Drawer=createDrawerNavigator({
    Home:{
        screen:HomeStack,
    },
    About:{
        screen:aboutStack,
    }

});

export default createAppContainer(Drawer);