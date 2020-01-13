import React, { Component } from 'react';
import { FlatList, View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native'
import photoList from '../DataProvider/Photos.json'
import { SafeAreaView } from 'react-native-safe-area-context';

export default class ListView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrAlbumList: photoList
        }
    }
    gotoDetailPage = (selectedIndex) => {
        let selectedAlbumDetails = this.state.arrAlbumList[selectedIndex]
        this.props.navigation.navigate('DetailPage', { albumDetails: selectedAlbumDetails })
    }
    renderAlbumCell = (albumdetails, cellIndex) => {
        return (
            <TouchableOpacity style={styles.cellContainer} onPress={() => this.gotoDetailPage(cellIndex)}>
                <View style={styles.contentContainer}>
                    <Image style={styles.albumImage} source={{ uri: albumdetails.thumbnailUrl }} />
                    <Text style={styles.albumTitle}>{albumdetails.title}</Text>
                </View>
            </TouchableOpacity>
        )
    }
    render() {
        return (
            <FlatList
                data={this.state.arrAlbumList}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item, index }) =>
                    this.renderAlbumCell(item, index)
                }

            />
        )
    }
}
const styles = StyleSheet.create({
    cellContainer: {
        flex: 1,
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'black'
    },
    contentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1
    },
    albumImage: {
        width: 150,
        height: 150,
        resizeMode: 'contain'
    },
    albumTitle: {
        paddingLeft: 5,
        textAlign: 'auto',
        fontWeight: 'bold',
        flex: 1
    }
})
