import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from 'store';
import { addBooked, saveBookedToStorage } from 'store/reducer/film.reducer';
import { SafeAreaView } from 'react-native-safe-area-context';

type BookingScreenProps = {
  navigation: any;
  route: any;
};

const BookingScreen = ({ navigation, route }: BookingScreenProps) => {
  const { film } = route.params;
  const dispatch = useDispatch<AppDispatch>();
  const bookedFilms = useSelector((state: RootState) => state.films.booked) ?? [];

  const handleBooking = () => {
    dispatch(addBooked(film));
    saveBookedToStorage([...bookedFilms, film]);
    navigation.navigate('Booked');
  };
  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={{ uri: film.imageUrl }} style={styles.coverImage} />
        <View style={styles.contentContainer}>
          <Text style={styles.title}>{film.title}</Text>
          <Text style={styles.description}>{film.description}</Text>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.bookingButton} onPress={handleBooking}>
          <Text style={styles.bookingButtonText}>Book Now</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bookingButton} onPress={handleBack}>
          <Text style={styles.bookingButtonText}>Back</Text>
        </TouchableOpacity>
      </View>


    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    flexGrow: 1,
  },
  coverImage: {
    width: '100%',
    height: 300,
  },
  contentContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
  },
  bookingButton: {
    marginTop: 16,
    width: '100%',
    backgroundColor: '#007AFF',
    paddingVertical: 16,
    borderRadius: 10,
    alignItems: 'center',
  },
  bookingButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footer: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 16,
    justifyContent: 'center'
  }
});



export default BookingScreen
