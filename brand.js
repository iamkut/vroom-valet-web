/**
 * Vroom Valet brand palette.
 *
 * IMPORTANT: this file is DUPLICATED across web-portal, mobile, and marketing.
 * All copies MUST be kept identical — a colour changed in one and not the others
 * is how surfaces stop looking like one product.
 *
 * The proper fix is to publish this as a private package (@vroom-valet/brand).
 * Until then, changing a colour means changing it in every copy, deliberately.
 *
 * Values taken from the mark (double-V lockup, curled tail, green stop):
 *   blue  #00AEEF  the "valet" V and its tail; the interactive colour
 *   deep  #0F6FD0  the "vroom" V; headers and hero areas
 *   green #7AC943  the stop dot on the tail; success and loyalty
 */

const brand = {
  50: '#EBF9FE',
  100: '#D0F1FD',
  200: '#A4E4FB',
  300: '#6BD2F7',
  400: '#2ABFF3',
  500: '#00AEEF',
  600: '#0089C4',
  700: '#056D9B',
  800: '#0B5B80',
  900: '#0F4C6A',
  DEFAULT: '#00AEEF',
};

const deep = {
  400: '#3B8FE0',
  500: '#0F6FD0',
  600: '#0C5CAE',
  700: '#0B4C8F',
  DEFAULT: '#0F6FD0',
};

const eco = {
  50: '#F3FAEA',
  100: '#E4F4D2',
  200: '#CBEAA9',
  300: '#A9DC75',
  400: '#8FD253',
  500: '#7AC943',
  600: '#5CA22F',
  700: '#467B26',
  800: '#396224',
  900: '#315221',
  DEFAULT: '#7AC943',
};

const ink = {
  DEFAULT: '#0F2F44',
  muted: '#557286',
  subtle: '#8AA3B4',
  line: '#DCE9F1',
};

const surface = {
  DEFAULT: '#FFFFFF',
  page: '#F4FAFD',
  sunken: '#EAF4FA',
};

const warn = {
  50: '#FFF7EA',
  200: '#FFE0B0',
  500: '#E9962B',
  700: '#9A5F12',
};

const danger = {
  50: '#FDF0EF',
  200: '#F8CFCC',
  500: '#DD5049',
  700: '#98302B',
};

const colors = {
  brand,
  deep,
  eco,
  ink,
  surface,
  warn,
  danger,
  primary: brand.DEFAULT,
  accent: eco.DEFAULT,
  background: surface.page,
};

const radius = {
  xl: '0.875rem',
  '2xl': '1.25rem',
  '3xl': '1.75rem',
};

module.exports = { colors, brand, deep, eco, ink, surface, warn, danger, radius };
