import { createStackNavigator } from '@react-navigation/stack';
import Home from "../Screens/Home";
import Notifications from "../Screens/Notifications";
import Profile from "../Screens/Profile";
import Settings from "../Screens/Settings";
import {NavigationContainer} from "@react-navigation/native";
import Cafes from "../Screens/Cafes";


const Stack = createStackNavigator();

function MyStack() {
    return(<>
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Home} options={{title: 'Awesome app'}}  />
                <Stack.Screen name="Notifications" component={Notifications} options={{title: 'Notifications'}}   />
                <Stack.Screen name="Profile" component={Profile} options={{title: 'Profile'}}   />
                <Stack.Screen name="Cafes" component={Cafes} options={{title: 'Cafes'}}   />
                <Stack.Screen name="Settings" component={Settings} options={{title: 'Settings'}}   />

            </Stack.Navigator>
        </NavigationContainer>
    </> )
}

export default MyStack;
