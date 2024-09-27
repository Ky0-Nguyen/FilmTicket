import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { FilmType } from 'core/type';


const FavoriteScreen = () => {
    const favorites: FilmType[] = useSelector((state: RootState) => state.films.favorites);
    const renderItem = ({ item }: { item: FilmType }) => (
        <View style={styles.itemContainer}>
            <Image source={{ uri: item.imageUrl }} style={styles.image} />
            <Text>{item.title}</Text>
        </View>
    );

    return (
        <FlatList data={favorites} keyExtractor={(item) => item.id} renderItem={renderItem} />
    );
}

export default FavoriteScreen

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
})