import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { saveFavoritesToStorage, addFavorite } from 'store/reducer/film.reducer';
import { FilmType, RootStackParamList } from 'core/type';
import { useListFilmFunctions } from './useFunctions';
import { FilmCard } from 'components';
import { NavigationProp } from '@react-navigation/native';

type Props = {
  navigation: NavigationProp<RootStackParamList>;
};

const ListFilmScreen = (props: Props) => {
  const { navigation } = props;
  const { dispatch, films, favoriteFilms, checkBooked, checkFavorited,
    error, loading,

   } = useListFilmFunctions();

  const renderItem = ({ item }: { item: FilmType }) => {
    const onLike = () => {
      if (checkFavorited(item)) {
        return
      } else {
        saveFavoritesToStorage([...favoriteFilms, item])
        dispatch(addFavorite(item));
      }

    }
    const onBook = () => {
      checkBooked(item)
        ? null
        : navigation.navigate('Booking', { film: item })
    }
    return <FilmCard
      onPressLike={onLike}
      onPressBooking={onBook}
      isBooked={checkBooked(item)}
      isFavorited={checkFavorited(item)}
      film={item}
    />
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Đang tải...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text>Lỗi: {error}</Text>
      </View>
    );
  }
  return (
    <FlatList
      data={films}
      testID='filmList'
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      initialNumToRender={10}
      maxToRenderPerBatch={10}
      windowSize={5}
    />
  )
}

export default ListFilmScreen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
