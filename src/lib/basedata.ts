import type { Metadata } from 'next';

const url: string = 'http://localhost:3000';

export const baseMetadata: Metadata = {
  title: {
    default: 'Streamify - Collaborative Music Streaming',
    template: '%s | Streamify',
  },
  description:
    'Transform music into a shared social experience with Streamify. Create virtual rooms, listen together in real-time with friends, and enjoy synchronized playback across all devices.',
  keywords: [
    'music streaming',
    'collaborative listening',
    'synchronized playback',
    'virtual music rooms',
    'social music',
    'group listening',
    'real-time music',
    'music chat',
    'shared playlists',
    'music together',
    'streaming platform',
    'music social network',
  ],
  authors: [{ name: 'Streamify Team' }],
  creator: 'Streamify',
  publisher: 'Streamify',
  applicationName: 'Streamify',
  category: 'Music & Entertainment',
  classification: 'Music Streaming Platform',
  appleWebApp: { capable: true, statusBarStyle: 'default', title: 'Streamify' },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: { canonical: url },
  other: {
    'mobile-web-app-capable': 'yes',
    'theme-color': '#000000',
    'msapplication-TileColor': '#000000',
  },
};
