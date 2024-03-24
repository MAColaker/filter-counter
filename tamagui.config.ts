import { config } from '@tamagui/config/v3'

import { createTamagui } from 'tamagui' // or '@tamagui/core'
const tamaguiConfig = createTamagui(config)
export type AppConfig = typeof tamaguiConfig
declare module 'tamagui' {

  interface TamaguiCustomConfig extends AppConfig {}

}
export default tamaguiConfig
