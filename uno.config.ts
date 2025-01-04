import presetAttributify from '@unocss/preset-attributify'
import presetWebFonts from '@unocss/preset-web-fonts'

import { presetWind } from '@unocss/preset-wind'
import { defineConfig } from 'unocss'

export default defineConfig({
  presets: [
    presetWind(),
    presetAttributify(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        sans: 'Roboto',
      },
    }),
  ],
})
