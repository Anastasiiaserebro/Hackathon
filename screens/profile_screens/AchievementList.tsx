import { useState } from 'react'
import { YStack, XStack, Circle} from 'tamagui'
import { Achievement } from './Achivments'

export function AchievementList() {


  return (
    <>
      <YStack space>
        <Achievement/>
      </YStack>
    </>
  )
}