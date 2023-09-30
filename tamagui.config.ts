import { shorthands } from '@tamagui/shorthands'
import { themes, tokens } from '@tamagui/themes'
import { createTamagui, createFont} from 'tamagui';

const interFont = createFont({
    family: 'Inter',
    size: {
      1: 12,
      2: 14,
      true:12,
      3: 16,
      4: 20,
      5: 30,
      6:100,
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
      600: { normal: 'InterBold' },
    },
  })

const appConfig = createTamagui({
  themes: {
    light: {
      color: '#000',
      background: '#fff',
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