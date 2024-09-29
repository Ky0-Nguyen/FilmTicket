import { faker } from '@faker-js/faker';
import { FilmType } from 'core/type';

export const generateFilmData = (count: number = 1000): FilmType[] => {
    let films: FilmType[] = [];
    for (let i = 0; i < count; i++) {
      films.push({
        id: faker.string.uuid(),
        title: faker.lorem.sentence(),
        description: faker.lorem.paragraph(),
        imageUrl: faker.image.url(),
        isBooked: false,
        isFavorited: false,
      });
    }
    return films;
  };