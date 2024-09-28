import { by, device, expect, element } from 'detox';

describe('Màn hình Home', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should display the list of films', async () => {
    await expect(element(by.id('filmList'))).toBeVisible();
    
    const firstFilmCard = element(by.id('filmList')).atIndex(0);
    await expect(firstFilmCard).toBeVisible();
  });
});