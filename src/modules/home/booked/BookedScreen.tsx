import { FlatList, StyleSheet } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { FilmType } from 'core/type';
import { FilmCard } from 'components';

const BookedScreen = () => {
  const booked: FilmType[] = useSelector((state: RootState) => state.films.booked);
  const renderItem = ({ item }: { item: FilmType }) => (
    <FilmCard haveButton={false} film={item} />
  );

  return (
    <FlatList
      data={booked}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
}

export default BookedScreen

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