export interface GeoData {
  name: string;
  local_names?: LocalNames | null; // todo delete this and the LocalNames interface
  lat: number;
  lon: number;
  country: string;
  state: string;
}
export interface LocalNames {
  fi: string;
  ht: string;
  ka: string;
  cs: string;
  qu: string;
  st: string;
  bh: string;
  os: string;
  an: string;
  ug: string;
  kn: string;
  lv: string;
  mn: string;
  sk: string;
  ie: string;
  ia: string;
  id: string;
  gv: string;
  ms: string;
  ur: string;
  jv: string;
  ku: string;
  bn: string;
  fo: string;
  da: string;
  sv: string;
  fy: string;
  tw: string;
  lt: string;
  tg: string;
  gl: string;
  lb: string;
  de: string;
  oc: string;
  gd: string;
  gn: string;
  kk: string;
  cy: string;
  ne: string;
  is: string;
  kl: string;
  eo: string;
  ar: string;
  sr: string;
  ha: string;
  ky: string;
  en: string;
  rn: string;
  ja: string;
  ce: string;
  az: string;
  kw: string;
  ml: string;
  ca: string;
  el: string;
  be: string;
  he: string;
  nv: string;
  bi: string;
  th: string;
  sn: string;
  pt: string;
  xh: string;
  nl: string;
  ps: string;
  fj: string;
  wa: string;
  tt: string;
  br: string;
  rm: string;
  fr: string;
  et: string;
  af: string;
  hr: string;
  yo: string;
  tl: string;
  li: string;
  hy: string;
  ga: string;
  mi: string;
  tk: string;
  te: string;
  sg: string;
  uz: string;
  bm: string;
  ta: string;
  se: string;
  mr: string;
  la: string;
  es: string;
  hu: string;
  am: string;
  ro: string;
  ru: string;
  mg: string;
  zu: string;
  yi: string;
  no: string;
  it: string;
  mk: string;
  vo: string;
  my: string;
  ig: string;
  fa: string;
  tr: string;
  co: string;
  bg: string;
  sc: string;
  sq: string;
  sl: string;
  sh: string;
  ak: string;
  hi: string;
  na: string;
  ki: string;
  ko: string;
  eu: string;
  sw: string;
  nn: string;
  pl: string;
  zh: string;
  io: string;
  so: string;
  vi: string;
  bs: string;
  pa: string;
  uk: string;
  iu: string;
}
export interface WeatherData {
  coord: Coord;
  weather: (WeatherEntity)[] ;
  base: string;
  main: Main;
  visibility: number;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  sys: Sys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}
export interface Coord {
  lon: number;
  lat: number;
}
export interface WeatherEntity {
  id: number;
  main: string;
  description: string;
  icon: string;
}
export interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level: number;
  grnd_level: number;
}
export interface Wind {
  speed: number;
  deg: number;
  gust: number;
}
export interface Clouds {
  all: number;
}
export interface Sys {
  country: string;
  sunrise: number;
  sunset: number;
}
