import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = () => {
    return (
        <View style={styles.background}>
            <Feather name="search" style={styles.icon} />
            <TextInput
                autoCapitalize='none'
                autoCorrect={false}
                style={styles.input}
                placeholder="Search"
            />
        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
    },
    input: {
        flex: 1,
        fontSize: 20
    },
    icon: {
        fontSize: 36,
        alignSelf: 'center',
        marginHorizontal: 15
    }
})
