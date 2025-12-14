export const ROUTES = {
  HOME: '/',
  VIDEO: '/video',
  VIDEO_CONVERT_FORMAT: '/video/convert-format',
  VIDEO_COMPRESS: '/video/compress-video',
  VIDEO_TRIM: '/video/trim-video',
  AUDIO: '/audio',
  AUDIO_CONVERT_FORMAT: '/audio/convert-format',
  AUDIO_EXTRACT: '/audio/extract-audio',
  AUDIO_MERGE: '/audio/merge-audio',
  SUBTITLES: '/subtitles',
  SUBTITLES_GENERATE: '/subtitles/generate-subtitles',
  SUBTITLES_EDIT: '/subtitles/edit-subtitles',
  SUBTITLES_TRANSLATE: '/subtitles/translate',
  FILE: '/file',
  FILE_CONVERT_DOCUMENT: '/file/convert-document',
  FILE_COMPRESS: '/file/compress-file',
  FILE_MERGE: '/file/merge-files',
} as const;

export type Route = (typeof ROUTES)[keyof typeof ROUTES];

