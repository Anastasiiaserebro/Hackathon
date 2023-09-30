import { YStack } from 'tamagui'
import { Achievement } from './Achivments'
import Diamond from '../assets/diamond.svg';

export type AchievementType = {
  title: string,
  subTitle: string,
  id:string,
  SVG: any
}

const achievement:AchievementType[] = [
  {
    title: 'Мастер многосторонних согласований',
    subTitle: '50 документов согласовано за неделю',
    id:'1',
    SVG: require('../assets/diamond.svg')
  },
  {
    title: 'Забытый герой',
    subTitle: '3 дня - самый долгий срок без согласования документов',
    id:'2',
    SVG: require('../assets/book.svg')
  },
  {
    title: 'Быстрый старт',
    subTitle: 'Согласование в течение 10 минут после входа в приложение',
    id:'3',
    SVG: require('../assets/timer.svg')
  },
  {
    title: 'Император электронных утверждений',
    subTitle: 'Император электронных утверждений',
    id:'4',
    SVG: require('../assets/approve.svg')
  }
]

export function AchievementList() {
  return (
    <>
      <YStack space marginVertical={20} >
        {achievement.map(el => (
           <Achievement key={el.id} achievement={el}/>
        ))}
      </YStack>
    </>
  )
}