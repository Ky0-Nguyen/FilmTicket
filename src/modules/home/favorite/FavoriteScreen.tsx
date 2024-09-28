import { FlatList, StyleSheet } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { FilmType } from 'core/type';
import { FilmCard } from 'components';

const FavoriteScreen = () => {
    const favorites: FilmType[] = useSelector((state: RootState) => state.films.favorites);
    const renderItem = ({ item }: { item: FilmType }) => (
        <FilmCard haveButton={false} film={item} />
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