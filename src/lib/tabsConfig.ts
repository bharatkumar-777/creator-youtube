import { IconType } from 'react-icons';
import {
  HiArrowsRightLeft,
  HiMiniMinus,
  HiScissors,
  HiSpeakerWave,
  HiDocumentDuplicate,
  HiDocumentText,
  HiPencil,
  HiLanguage,
  HiDocument,
} from 'react-icons/hi2';
import { MdAudioFile } from 'react-icons/md';



export interface TabOption {
  label: string;
  icon: IconType;
}

export interface TabConfig {
  nameKey: string;
  href: string;
  color: string;
  icon: string;
  options: TabOption[];
}

export const tabs: TabConfig[] = [
  {
    nameKey: 'videoConverter',
    href: '/video-converter',
    color: '#8B9FFF',
    icon: '/assets/film.svg',
    options: [
      { label: 'Convert Format', icon: HiArrowsRightLeft },
      { label: 'Compress Video', icon: HiMiniMinus },
      { label: 'Trim Video', icon: HiScissors },
    ],
  },
  {
    nameKey: 'audioConverter',
    href: '/audio-converter',
    color: '#FFC510',
    icon: '/assets/headphone.svg',
    options: [
      { label: 'Convert Format', icon: HiArrowsRightLeft },
      { label: 'Extract Audio', icon: HiSpeakerWave },
      { label: 'Merge Audio', icon: MdAudioFile },
    ],
  },
  {
    nameKey: 'subtitles',
    href: '/subtitles',
    color: '#EE5454',
    icon: '/assets/subs.svg',
    options: [
      { label: 'Generate Subtitles', icon: HiDocumentText },
      { label: 'Edit Subtitles', icon: HiPencil },
      { label: 'Translate', icon: HiLanguage },
    ],
  },
  {
    nameKey: 'fileConverter',
    href: '/file-converter',
    color: '#25D366',
    icon: '/assets/file.svg',
    options: [
      { label: 'Convert Document', icon: HiDocument },
      { label: 'Compress File', icon: HiMiniMinus },
      { label: 'Merge Files', icon: HiDocumentDuplicate },
    ],
  },
];

