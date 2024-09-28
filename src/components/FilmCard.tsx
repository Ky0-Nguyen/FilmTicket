import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { memo } from 'react'
import { FilmType } from 'core/type'

type Props = {
    onPressLike?: () => void,
    onPressBooking?: () => void,
    isFavorited?: boolean,
    isBooked?: boolean,
    film: FilmType,
    haveButton?: boolean
}

const FilmCard = (props: Props) => {
    const { onPressLike, onPressBooking, isFavorited, isBooked, film, haveButton = true } = props
    return (
        <View style={styles.itemContainer}>
            <Image testID='filmImage' source={{ uri: film.imageUrl }} style={styles.image} />
            <Text testID='filmTitle' style={styles.title}>{film.title}</Text>
            <Text testID='filmDescription' style={styles.description} numberOfLines={2}>{film.description}</Text>
            {
                haveButton
                    ? <View style={styles.textContainer}>
                        <TouchableOpacity
                            onPress={onPressBooking}
                            style={[styles.bookCoreButton, isBooked && styles.bookedButton]}
                        >
                            <Text style={styles.buttonText}>{isBooked ? 'Seen' : 'Book'}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={onPressLike}
                            style={[styles.favCoreButton, isFavorited ? styles.favButtonActive : styles.favButton]}
                        >
                            <Text style={styles.buttonText}>{isFavorited ? 'Liked' : 'Like'}</Text>
                        </TouchableOpacity>

                    </View>
                    : <View />
            }
        </View>
    )
}

export default memo(FilmCard)

const styles = StyleSheet.create({
    itemContainer: {
        padding: 16,
        marginTop: 16,
        borderWidth: 1,
        borderRadius: 16,
        marginHorizontal: 16,
        paddingHorizontal: 10,
        borderColor: '#c3c3c3',
    },
    image: {
        height: 180,
        width: '100%',
        borderRadius: 16,
    },
    textContainer: {
        flex: 1,
        marginTop: 16,
        flexDirection: 'row',
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
    bookCoreButton: {
        flex: 1,
        padding: 8,
        borderRadius: 8,
        marginVertical: 4,
        alignItems: 'center',
        backgroundColor: '#00BFFF',
        justifyContent: 'center',
    },
    bookedButton: {
        backgroundColor: '#c3c3c3'
    },
    favCoreButton: {
        padding: 8,
        marginLeft: 8,
        borderRadius: 8,
        marginVertical: 4,
        alignItems: 'center',
        justifyContent: 'center'
    },
    favButton: {
        backgroundColor: '#FFC0CB',
    },
    favButtonActive: {
        backgroundColor: 'orange',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    }
})