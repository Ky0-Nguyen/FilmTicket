import { NavigationProp } from "@react-navigation/native";

export type FilmType = {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    isBooked: boolean;
    isFavorited: boolean;
}

export type RootStackParamList = {
    Booking: any;
    Booked: undefined
};