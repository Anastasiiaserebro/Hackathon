import { XStack, Image, YStack, Button } from 'tamagui'
import cat from '../../assets/kit.png'
import { Cookie } from '../../components/Cookie/Cookie'
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../../App';

type CatProps = {
    money:number
}

export const Cat:React.FC<CatProps> = ( {money} ) => {

    const { navigate } = useNavigation<NavigationProp<RootStackParamList>>();

    return (
        <XStack justifyContent="center" space={15}>
             <Image source={cat} />
             <YStack justifyContent='center' alignItems='center' space={2}>
                <Cookie count={`${money}`}/>
                <Button color='#0087CD' height={20} onPress={() => navigate("Shop")}>Порадовать Мурчика</Button>
             </YStack>   
        </XStack>
      
    )

}