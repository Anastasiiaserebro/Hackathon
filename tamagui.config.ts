import { shorthands } from '@tamagui/shorthands'
import { createTamagui, createFont,createTokens} from 'tamagui';

const interFont = createFont({
    family: 'Arial, sans-serif',
    size: {
      1: 12,
      2: 14,
      3: 15,
    },
    lineHeight: {
      2: 22,
    },
    weight: {
      1: '300',
      3: '600',
    },
    letterSpacing: {
      1: 0,
      2: -1,
    },
    face: {
      300: { normal: 'InterLight', italic: 'InterItalic' },
      600: { normal: 'InterBold' },
    },
  })

  const size = {
    0: 0,
    1: 5,
    2: 10,
    true: 10,
  }

  export const tokens = createTokens({
    size,
    space: { ...size, '-1': -5, '-2': -10 },
    radius: { 0: 0, 1: 3 },
    zIndex: { 0: 0, 1: 100, 2: 200 },
    color: {
      white: '#fff',
      black: '#000',
    },
  })

  
const appConfig = createTamagui({
    themes: {
        light: {
          bg: '#f2f2f2',
          color: tokens.color.black,
        },
        dark: {
          bg: '#111',
          color: tokens.color.white,
        },
    },
  tokens,
  shorthands,
  fonts: {
    heading: interFont,
    body: interFont,
  },
})

export type AppConfig = typeof appConfig

declare module '@tamagui/core' {
  interface TamaguiCustomConfig extends AppConfig {}
}

export default appConfig