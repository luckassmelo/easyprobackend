import { getNowDateToPostMaterial } from './getNowDateToPostMaterial'


describe('getNowDateToPostMaterial', () => {

  test('should return date in format YYYYMMDD', () => {

    const date = getNowDateToPostMaterial();

    expect(date).toMatch(/^[0-9]{8}$/);
  });


})
