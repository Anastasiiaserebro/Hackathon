import { useState } from 'react'
import {  Paragraph, Progress, SizeTokens, Text,Slider, XStack, YStack } from 'tamagui'

export function ProgressLine() {
  const level = 100;
  const [progress, setProgress] = useState(level/20)

  return (
    <>
      <YStack height={60} space>
        <Paragraph height={30} fontSize={20}>
          Мой прогресс
        </Paragraph>
        <Progress size='$4' value={progress} backgroundColor='#D9D9D9' borderColor='#F49300'>
         
          <Progress.Indicator animation="bouncy" />
         
      </Progress>
      <Text>{progress} из {level} опыта</Text>
      </YStack>
    </>
  )
}