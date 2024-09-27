import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { memo } from 'react'
import { findIndex } from 'lodash'
import { FilmType } from 'core/type'

type Props = {
    onPressLike: () => void,
    onPressBooking: () => void,
    isFavorited: boolean,
    isBooked: boolean,
    film: FilmType,
}

const FilmCard = (props: Props) => {
    const { onPressLike, onPressBooking, isFavorited, isBooked, film } = props
    return (
        <View style={styles.itemContainer}>
            <Image source={{ uri: film.imageUrl }} style={styles.image} />
            <View style={styles.textContainer}>
                <Text style={styles.title}>{film.title}</Text>
                <Text style={styles.description}>{film.description}</Text>
                <TouchableOpacity
                    onPress={onPressLike}
                    style={isFavorited ? styles.favButtonActive : styles.favButton}
                >
                    <Text>{isFavorited ? 'Yêu Thích' : 'Thêm Yêu Thích'}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={onPressBooking}
                    style={styles.bookButton}
                >
                    <Text>{isBooked ? 'Đã Xem' : 'Đặt Vé'}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default memo(FilmCard)

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        marginVertical: 10,
        paddingHorizontal: 10,
    },
    image: {
        width: 100,
        height: 150,
        marginRight: 10,
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    description: {
        fontSize: 14,
        color: '#666',
    },
    bookButton: {
        backgroundColor: 'blue',
        padding: 10,
        marginVertical: 5,
        borderRadius: 5,
    },
    favButton: {
        backgroundColor: 'gray',
        padding: 10,
        marginVertical: 5,
        borderRadius: 5,
    },
    favButtonActive: {
        backgroundColor: 'orange',
        padding: 10,
        marginVertical: 5,
        borderRadius: 5,
    },
})