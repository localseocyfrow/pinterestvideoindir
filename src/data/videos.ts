// Tutorial videos (YouTube). Single source of truth so the visible
// <VideoTutorial> embed and the VideoObject JSON-LD always match — schema is
// only ever emitted for a video that is actually embedded on the page.
export type Tutorial = {
  /** YouTube video id (used for nocookie embed + thumbnail + schema). */
  id: string;
  /** Short device label shown on the homepage grid. */
  device: string;
  /** Human title of the video (used in VideoObject.name). */
  title: string;
  /** Turkish description (used in VideoObject.description). */
  description: string;
  /** Canonical page this video is embedded on. */
  path: string;
  /** Accessible <iframe> title. */
  iframeTitle: string;
};

export const TUTORIALS = {
  ios: {
    id: 'hbm2qOnuITk',
    device: 'iPhone · iOS',
    title: 'iPhone’da Pinterest videosu nasıl indirilir? (Safari)',
    description:
      'iPhone ve iPad’de Safari ile Pinterest videosunu MP4 olarak indirip ' +
      'Fotoğraflar (galeri) uygulamasına kaydetmeyi adım adım gösteren video anlatım.',
    path: '/iphone-pinterest-video-indir/',
    iframeTitle: 'iPhone’da Pinterest videosu indirme anlatımı (video)',
  },
  android: {
    id: 'pF1bbA0UNZc',
    device: 'Android',
    title: 'Android’de Pinterest videosu nasıl indirilir?',
    description:
      'Android telefon ve tabletlerde tarayıcıyla Pinterest videosunu MP4 ' +
      'olarak doğrudan galeriye indirmeyi gösteren video anlatım.',
    path: '/android-pinterest-video-indir/',
    iframeTitle: 'Android’de Pinterest videosu indirme anlatımı (video)',
  },
  macos: {
    id: 'FV9Cv96rVuw',
    device: 'Mac · macOS',
    title: 'Mac’te Pinterest videosu nasıl indirilir? (Safari / Chrome)',
    description:
      'macOS’ta Safari veya Chrome ile Pinterest videosunu MP4 olarak ' +
      'bilgisayara indirmeyi adım adım gösteren video anlatım.',
    path: '/mac-pinterest-video-indir/',
    iframeTitle: 'Mac’te Pinterest videosu indirme anlatımı (video)',
  },
  windows: {
    id: 'tQMBXb4iozw',
    device: 'Windows',
    title: 'Windows’ta Pinterest videosu nasıl indirilir?',
    description:
      'Windows bilgisayarda tarayıcıyla Pinterest videosunu MP4 olarak ' +
      'İndirilenler klasörüne kaydetmeyi gösteren video anlatım.',
    path: '/windows-pinterest-video-indir/',
    iframeTitle: 'Windows’ta Pinterest videosu indirme anlatımı (video)',
  },
} satisfies Record<string, Tutorial>;

// Order shown in the homepage "video tutorials" grid.
export const HOME_TUTORIALS: Tutorial[] = [
  TUTORIALS.ios,
  TUTORIALS.android,
  TUTORIALS.macos,
  TUTORIALS.windows,
];
