export const ROUTES = {
  HOME: '/',
  VIDEO_CONVERTER: '/video-converter',
  VIDEO_CONVERTER_TRIM: '/video-converter/trim',
  AUDIO_CONVERTER: '/audio-converter',
  AUDIO_CONVERTER_TRIM: '/audio-converter/trim',
  SUBTITLES: '/subtitles',
  FILE_CONVERTER: '/file-converter',
} as const;

export type Route = (typeof ROUTES)[keyof typeof ROUTES];

