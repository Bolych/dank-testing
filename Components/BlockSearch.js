import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Searchbar, Divider, Button } from 'react-native-paper';

const SearchBar = ({ searchQuery, setSearchQuery, addTag }) => {

    const styles = StyleSheet.create({
container: {
    backgroundColor: 'white',
    paddingBottom: 20
},
        tagRow: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 20,
        },
        divide: {
            marginTop: 20
        }

    })

    return (
        <View style={styles.container}>
            <Searchbar
                placeholder="Search"
                onChangeText={text => setSearchQuery(text)}
                value={searchQuery}
            />

            {searchQuery !== '' && (
                <View style={styles.divide}>
                    <Divider />
                </View>
            )}

            {searchQuery !== '' && (
                <View style={styles.tagRow}>
                    <Text>{searchQuery}</Text>
                    <Button textColor='black' mode='outlined' onPress={addTag}>Add</Button>
                </View>
            )}
        </View>
    );
};

export default SearchBar;
