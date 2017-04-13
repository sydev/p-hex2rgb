(() => {
  'use strict';

  const hex_rgb = require('../p-hex2rgb');

  describe('convert', () => {

    test('#5ad', () => {
      return hex_rgb('#5ad')
        .then(rgb => expect(rgb).toEqual([85, 170, 221]))
        .catch(err => expect(err).toBeNull());
    });

    test('#bada55', () => {
      return hex_rgb('#bada55')
        .then(rgb => expect(rgb).toEqual([186, 218, 85]))
        .catch(err => expect(err).toBeNull());
    });

    test('b00', () => {
      return hex_rgb('b00')
        .then(rgb => expect(rgb).toEqual([187, 0, 0]))
        .catch(err => expect(err).toBeNull());
    });

    test('fa7a55', () => {
      return hex_rgb('fa7a55')
        .then(rgb => expect(rgb).toEqual([250, 122, 85]))
        .catch(err => expect(err).toBeNull());
    });

  });

  describe('throw error: String is not a valid hex code.', () => {

    test('#xyz', () => {
      return hex_rgb('#xyz')
        .catch(err => expect(err).toEqual(new Error('String is not a valid hex code.')));
    });

    test('xyz', () => {
      return hex_rgb('xyz')
        .catch(err => expect(err).toEqual(new Error('String is not a valid hex code.')));
    });

    test('#abcd', () => {
      return hex_rgb('#abcd')
        .catch(err => expect(err).toEqual(new Error('String is not a valid hex code.')));
    });

    test('abcd', () => {
      return hex_rgb('#abcd')
        .catch(err => expect(err).toEqual(new Error('String is not a valid hex code.')));
    });

  });

  describe('throw error: Given color code is not a string.', () => {

    test('array', () => {
      return hex_rgb(['#fff'])
        .then(rgb => expect(rgb).toBeNull())
        .catch(err => expect(err).toEqual(new Error('Given color code is not a string.')));
    });

    test('object', () => {
      return hex_rgb({color_code: '#fff'})
        .then(rgb => expect(rgb).toBeNull())
        .catch(err => expect(err).toEqual(new Error('Given color code is not a string.')));
    });

    test('number', () => {
      return hex_rgb(100100)
        .then(rgb => expect(rgb).toBeNull())
        .catch(err => expect(err).toEqual(new Error('Given color code is not a string.')));
    });

    test('boolean', () => {
      return hex_rgb(true)
        .then(rgb => expect(rgb).toBeNull())
        .catch(err => expect(err).toEqual(new Error('Given color code is not a string.')));
    });

    test('null', () => {
      return hex_rgb(null)
        .then(rgb => expect(rgb).toBeNull())
        .catch(err => expect(err).toEqual(new Error('Given color code is not a string.')));
    });

  });

})();
