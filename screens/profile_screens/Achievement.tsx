import { Paragraph, YStack, XStack, Square, styled, Image } from "tamagui";

import { AchievementType } from "./AchievementList";

type AchievementProps = {
  achievement: AchievementType;
};

export const Achievement: React.FC<AchievementProps> = ({ achievement }) => {
  const { title, subTitle, SVG } = achievement;

  return (
    <XStack space={10} alignItems="center">
      <Square backgroundColor="#78D498" size={50}>
        <SVG />
      </Square>
      <TextContainer>
        <Paragraph fontSize={16}>{title}</Paragraph>
        <Paragraph color="#949494">{subTitle}</Paragraph>
      </TextContainer>
    </XStack>
  );
};

const TextContainer = styled(YStack, {
  flex: 1,
});
