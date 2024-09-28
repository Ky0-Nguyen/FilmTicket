import { device, element, by, expect } from 'detox';


describe('FilmCard', () => {
  beforeAll(async () => {
    await device.launchApp();
  });
  
  it('displays film information correctly', async () => {
    await expect(element(by.id('filmImage')).atIndex(0)).toBeVisible();
    await expect(element(by.id('filmTitle')).atIndex(0)).toBeVisible();
    await expect(element(by.id('filmDescription')).atIndex(0)).toBeVisible();
  });
  
  it('Favorite button works correctly', async () => {
    await element(by.text('Like')).atIndex(0).tap();
    await expect(element(by.text('Liked'))).toBeVisible();
  });

  it('Book button works correctly', async () => {
    await element(by.text('Book')).atIndex(0).tap();
    await expect(element(by.text('Book Now'))).toBeVisible();
    await expect(element(by.text('Back'))).toBeVisible();

    await element(by.text('Back')).tap();
    await expect(element(by.id('filmList'))).toBeVisible();
  });
  
  it('hides buttons when haveButton is false', async () => {
    await expect(element(by.id('buttonContainer'))).not.toBeVisible();
  });
  
});