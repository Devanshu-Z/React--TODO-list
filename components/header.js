import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function header() {
    return(
        <View style = {styles.container}>
            <Text style={styles.title}>Toddle Todos</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height:50,
        padding : 40,
        backgroundColor: 'cyan',
    },
    title:{
        textAlign:'center',
        textAlignVertical:'center',
        fontSize:20,
        color: 'white',
        fontWeight: 'bold',
    
    },
});

