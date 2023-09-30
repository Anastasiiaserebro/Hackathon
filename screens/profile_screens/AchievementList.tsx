import { ScrollView, YStack } from 'tamagui'
import { Achievement } from './Achivment'
import { SafeAreaView } from 'react-native';

export type AchievementType = {
  title: string,
  subTitle: string,
  id:string,
  SVG: any
}

console.log(require('../assets/diamond.svg'))

const achievement:AchievementType[] = [
  {
    title: 'Мастер многосторонних согласований',
    subTitle: '50 документов согласовано за неделю',
    id:'1',
    SVG: require('../assets/diamond.svg').default
  },
  {
    title: 'Забытый герой',
    subTitle: '3 дня - самый долгий срок без согласования документов',
    id:'2',
    SVG: require('../assets/book.svg').default
  },
  {
    title: 'Быстрый старт',
    subTitle: 'Согласование в течение 10 минут после входа в приложение',
    id:'3',
    SVG: require('../assets/timer.svg').default
  },
  {
    title: 'Император электронных утверждений',
    subTitle: 'Император электронных утверждений',
    id:'4',
    SVG: require('../assets/approve.svg').default
  }
]

export function AchievementList() {
  return (
    <SafeAreaView >
      <ScrollView paddingBottom={250} flex={1}>
        <YStack space marginVertical={20} >
          {achievement.map(el => (
            <Achievement key={el.id} achievement={el}/>
          ))}
        </YStack>
      </ScrollView>
    </SafeAreaView>
  )
}