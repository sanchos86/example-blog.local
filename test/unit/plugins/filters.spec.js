import { cropText } from '~/plugins/filters';

describe('cropText', () => {
  it('should return original value if it is not of a string type', () => {
    expect(cropText(null)).toEqual(null);
    expect(cropText(123)).toEqual(123);
    expect(cropText()).toEqual(undefined);
  });

  it('should return original value if its length is less than length passed as parameter', () => {
    expect(cropText('', 1)).toEqual('');
    expect(cropText('Hello')).toEqual('Hello');
    expect(cropText('Hello', 10)).toEqual('Hello');
    expect(cropText('Hello', 5)).toEqual('Hello');
  });

  it('should return cropped value if its length is more than length passed as parameter', () => {
    const longText = Array.from({ length: 101 }).map(() => 'a').join('');
    const croppedLongText = Array.from({ length: 100 }).map(() => 'a').join('');
    expect(cropText(longText)).toEqual(`${croppedLongText}...`);
  });
});
