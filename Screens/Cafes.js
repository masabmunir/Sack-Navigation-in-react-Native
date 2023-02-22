import { StyleSheet, Text, View ,FlatList} from 'react-native';
import React, {useState} from "react";



const Item = ({name}) => {
    return (
        <View style={styles.item}>
            <Text style={{color: 'black'}}>{name}</Text>
        </View>)
}
const Cafes = () => {

    const countries = [
        {
            id: '1',
            name: 'United States',
        },
        {
            id: '2',
            name: 'United Kingdom',
        },
        {
            id: '3',
            name: 'Israel',
        },
        {
            id: '4',
            name: 'India',
        },
        {
            id: '5',
            name: 'Nigeria',
        },
        {
            id: '6',
            name: 'Uganda',
        },
    ];
    const renderItem = ({item})=>(
        <Item name={item.name}/>
    );


    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <Text>This is the heading!</Text>
            <FlatList
                data={countries}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});



export default Cafes;
