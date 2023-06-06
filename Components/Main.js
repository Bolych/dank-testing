import React, {useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import {Chip, Divider} from 'react-native-paper';
import {StyleSheet} from 'react-native';
import SaveButton from "./SaveButton";
import Header from "./Header";
import BlockSearch from "./BlockSearch";

export default function Main() {
    const [searchQuery, setSearchQuery] = useState('');
    const [tags, setTags] = useState([]);


    const addTag = () => {
        setTags((prevTags) => [...prevTags, searchQuery]);
        setSearchQuery('');
    };

    const styles = StyleSheet.create({

        bottomBlock: {
            backgroundColor: 'white',
            paddingBottom: 20,
        },
        addedTagsBlock: {
            marginTop: 20,
            marginBottom: 10,
            padding: 5
        }
    });

    const initialPresetTags = [
        'Tag 1',
        'Tag 2',
        'Tag 3',
        'Tag 4',
        'Tag 5',
        'Tag 6',
        'Tag 7',
        'Tag 8',
        'Tag 9',
        'Tag 10',
        'Tag 11',
        'Tag 12',
    ];

    const [presetTags, setPresetTags] = useState([...initialPresetTags]);

    const addPresetTag = (tag) => {
        setTags((prevTags) => [...prevTags, tag]);
        setPresetTags((prevPresetTags) => prevPresetTags.filter((presetTag) => presetTag !== tag));
    };

    const handleReset = () => {
        setTags([]);
        setPresetTags([...initialPresetTags]);
    };

    return (
        <View style={styles.body}>

            <View style={{marginBottom: 15, backgroundColor: 'white'}}>
                <Header onPress={handleReset} hasAddedTag={tags.length} text='Add skills'/>
                <BlockSearch searchQuery={searchQuery} setSearchQuery={setSearchQuery} addTag={addTag}/>
            </View>

            <View>
                <View style={styles.bottomBlock}>
                    <View style={styles.addedTagsBlock}>
                        {tags.length > 0 && (
                            <View style={{marginBottom: 10}}>
                                <Text style={{fontWeight: 'normal'}}>
                                    You can drag and drop to rearrange the order of display
                                </Text>
                            </View>
                        )}
                        <FlatList
                            data={tags}
                            numColumns={3}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({item}) => (
                                <Chip
                                    style={{
                                        margin: 4,
                                        backgroundColor: 'rgba(218,227,243,0.76)',
                                    }}
                                    mode="outlined"
                                    closeIcon="close"
                                    onClose={() =>
                                        setTags((prevTags) =>
                                            prevTags.filter((tag) => tag !== item)
                                        )
                                    }
                                    onPress={() => {
                                    }}
                                >
                                    {item}
                                </Chip>
                            )}
                        />
                    </View>
                    {tags.length > 0 && (
                        <View>
                            <Divider/>
                        </View>
                    )}
                    <Text style={{fontWeight: 'bold', padding: 15}}>Add suggested tags</Text>
                    <FlatList
                        data={presetTags}
                        numColumns={3}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({item}) => (
                            <Chip
                                style={{margin: 4}}
                                mode="outlined"
                                closeIcon="close"
                                onClose={() => {
                                }}
                                onPress={() => addPresetTag(item)}
                            >
                                {item}
                            </Chip>
                        )}
                    />
                    <SaveButton onPress={handleReset} active={tags.length > 0}/>
                </View>
            </View>
        </View>
    );
}
