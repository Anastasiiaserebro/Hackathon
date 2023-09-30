import { useState } from "react";
import {
  Paragraph,
  Progress,
  SizeTokens,
  Text,
  Slider,
  XStack,
  YStack,
} from "tamagui";

type ProgressLineProps = {
  level: number | undefined;
};

export const ProgressLine: React.FC<ProgressLineProps> = ({ level }) => {
  const endPoint = 100;
  const [progress, setProgress] = useState(endPoint / 20);

  return (
    <>
      <YStack height={60} space>
        <Paragraph height={30} fontSize={20}>
          Мой прогресс
        </Paragraph>
        <Progress size="$4" value={50} backgroundColor="#D9D9D9">
          <Progress.Indicator animation="bouncy" backgroundColor="#F49300" />
        </Progress>
        <XStack justifyContent="space-between">
          <Text>
            {50} из {endPoint} опыта
          </Text>
          <Text>{2} уровень</Text>
        </XStack>
      </YStack>
    </>
  );
};
