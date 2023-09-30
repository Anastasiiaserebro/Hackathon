import { ProgressType } from "./ProgressList";
import { Paragraph, Square, Text, View, XStack, YStack, styled } from "tamagui";

type ProgressItemProps = {
  ach: ProgressType;
};

type LevelType = 'Золотой' | 'Бронзовый' | 'Серебрянный' 

const getLevelStyle = (level: string) => {
  if (level === 'Золотой') {
    return "#FFCF40";
  } 
  return "#C8874B";
};

export const ProgressItem: React.FC<ProgressItemProps> = ({ ach }) => {
  const { category, title, level, percentage, SVG } = ach;

  const LevelText = styled(Text, {
    variants: {
      variableColor: (level: LevelType) => ({
        color: getLevelStyle(level),
      }),
    } as const,
  });

  return (
    <YStack space={5}>
      <Text fontSize={15} fontWeight="bold">
        {category}
      </Text>
      <XStack space={10} alignItems="center">
        <Square backgroundColor={getLevelStyle(level)} size={50} borderRadius={10}>
          <SVG />
        </Square>
        <TextContainer>
          <LevelText>{level} уровень</LevelText>
          <Paragraph fontSize={16}>{title}</Paragraph>
          <Paragraph color="#949494">
            {percentage}% пользователей имеют такой результат
          </Paragraph>
        </TextContainer>
      </XStack>
    </YStack>
  );
};

const TextContainer = styled(YStack, {
  flex: 1,
});
