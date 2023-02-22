import {StyleSheet, Text, View, Button} from 'react-native';
import React from "react";
import {Navigation} from '../type'

type Props = {
    navigation: Navigation;
};

const Home = ({navigation}:Props) => {

    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <Text style={styles.title}>This is the Home!</Text>

            <View style={{flex: 1, flexDirection:"row"}}>
                <View style={{padding:10}}>
                    <Button  title={'Magic here'}  onPress={() => navigation.navigate('Notifications')}/>
                </View>
                <View style={{padding:10}}>
                    <Button title={'Show list'}  onPress={() => navigation.navigate('Cafes')}/>
                </View>
                <View style={{padding:10}}>
                    <Button title={'Setting here'}  onPress={() => navigation.navigate('Settings')}/>
                </View>
            </View>
        </View>


);
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontSize: 40,
        marginBottom:20
    },
});
export default Home;
