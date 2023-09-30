
import { Paragraph,YStack, XStack, Circle,  styled, Image} from 'tamagui'

import Diamond from '../assets/diamond.svg';
import Timer from '../assets/timer.svg';
import Book from '../assets/book.svg';
import Approve from '../assets/approve.svg';

import { AchievementType } from './AchievementList';

type AchievementProps = {
   achievement: AchievementType,
}

export const Achievement:React.FC<AchievementProps> = ({ achievement }) => {

  const {title, subTitle, SVG} = achievement

  return (
    <XStack space={10} alignItems='center'>
        <Circle  backgroundColor='#78D498' size={50}>
          <SVG/>
        </Circle>
        <TextContainer>
          <Paragraph fontSize={16}>{title}</Paragraph>
          <Paragraph color='#949494'>{subTitle}</Paragraph>
        </TextContainer>
      </XStack>

  )
}

const TextContainer = styled(YStack,{
  flex:1,
})