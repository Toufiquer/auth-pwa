import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Next.js PWA',
    short_name: 'NextPWA',
    description: 'A Progressive Web App built with Next.js',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: '/logo-192-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/badge-512-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ], "screenshots": [ 
    {
     "src": "/screenshot-desktop.png",
      "sizes": "640x320",
      "type": "image/png",
      "form_factor": "wide",
      "label": "Wonder Widgets"
    },
    {
     "src": "/screenshot-mobile.png",
      "sizes": "640x320",
      "type": "image/png",
      "form_factor": "narrow",
      "label": "Wonder Widgets"
    }
]
  }
}