(() => {
  'use strict';

  const cut_hex     = require('cut-hex');
  const is_hex      = require('p-is-hex');
  const format_hex  = require('p-format-hex');

  const hex_to_r = hex => parseInt(hex.substring(0, 2), 16);
  const hex_to_g = hex => parseInt(hex.substring(2, 4), 16);
  const hex_to_b = hex => parseInt(hex.substring(4, 6), 16);

  /**
   * p-hex2rgb
   * 
   * Converts a hex color code in a rgb code
   * 
   * @param {String} hex_color_code
   * @return {Promise<Array>} rgb
   */
  module.exports = hex_color_code => {
    let err = null,
      rgb   = []; 

    if (typeof hex_color_code !== 'string') err = new Error('Given color code is not a string.');
    if (err !== null) return Promise.reject(err);

    return is_hex(hex_color_code)
      .then(result => (result) ? format_hex(hex_color_code) : Promise.reject(new Error('String is not a valid hex code.')))
      .then(cut_hex)
      .then(hex => {
        rgb.push(hex_to_r(hex));
        rgb.push(hex_to_g(hex));
        rgb.push(hex_to_b(hex));
        return rgb;
      });
  };

})();
