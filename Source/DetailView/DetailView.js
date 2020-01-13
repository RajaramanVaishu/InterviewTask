import React, { Component } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

export default class DetailsView extends Component {

    constructor(props) {
        super(props)
        this.state = {
            albumID: '',
            title: '',
            imageURL: ''
        }
    }
    componentDidMount() {
        let selectedAlbumDetails = this.props.navigation.getParam('albumDetails', null)
        console.log(selectedAlbumDetails)

        if (selectedAlbumDetails) {
            this.setState({
                albumID: selectedAlbumDetails.albumId,
                title: selectedAlbumDetails.title,
                imageURL: selectedAlbumDetails.url
            })
        }

    }
    render() {
        const { albumID, title, imageURL } = this.state
        return (
            <View style={{ flex: 1 }}>
                <Image style={styles.flexHalf} source={{ uri: imageURL }} />
                <View style={[styles.flexHalf, { justifyContent: 'flex-start', alignItems: 'center', marginTop: 30, padding: 10 }]}>
                    <Text style={styles.bold}>Title:<Text style={styles.subtitle}>{title}</Text></Text>
                    <Text style={styles.bold}>Album ID:<Text style={styles.subtitle}>{albumID}</Text></Text>
                </View>
            </View>
        )

    }
}

const styles = StyleSheet.create({
    flexHalf: {
        flex: 0.5
    },
    bold: {
        fontWeight: 'bold',
        textAlign: 'center'
    },
    subtitle: {
        fontWeight: 'normal'
    }
})