export type FilmType = {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    isBooked: boolean;
    isFavorited: boolean;
}

export type RootStackParamList = {
    Booking: { film: FilmType };
    Booked: undefined
};