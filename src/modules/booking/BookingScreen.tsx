import { Button, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from 'store';
import { addBooked, saveBookedToStorage } from 'store/reducer/film.reducer';

type Props = {}

const BookingScreen = (props: Props) => {
  const { navigation, route } = props
  const { film } = route.params;
  const dispatch = useDispatch<AppDispatch>();
  const bookedFilms = useSelector((state: RootState) => state.films.booked) ?? [];
  return (
    <View style={styles.container}>
      <Image source={{ uri: film.imageUrl }} style={styles.coverImage} />
      <Text style={styles.title}>{film.title}</Text>
      <Text style={styles.description}>{film.description}</Text>
      <Button
        title="Đặt Vé"
        onPress={() => {
          dispatch(addBooked(film));
          saveBookedToStorage([...bookedFilms, film])
          navigation.navigate('Booked');
        }}
      />
    </View>
  );
}

export default BookingScreen

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
  },
  coverImage: {
    width: '100%',
    height: 300,
    marginBottom: 20,
  },
})