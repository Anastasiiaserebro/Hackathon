import { Avatar, Input, XStack, Button} from 'tamagui'
import { Bell, Menu } from '@tamagui/lucide-icons'
import avatar from "../../assets/avatar.png";

type HeaderProps = {
    onSearch:(text: string) => void
}

export const Header:React.FC<HeaderProps> = ({ onSearch }) => {
    return(
        <XStack width={95} padding={16} space={2} alignItems='center'>
            <Avatar circular size="$3"  display='flex' justifyContent='center'
        alignItems='center'>
                <Avatar.Image src={avatar} height='100%' width='auto'/>
                <Avatar.Fallback bc="#F49300" />
              </Avatar>
            <Input size="$4" marginLeft={15} borderColor='#fff' backgroundColor='#7676801F' width={220} fontWeight='100' placeholder="Найти..." color='#000' onChangeText={onSearch}/>
            <Button icon={<Bell size="$2" />} backgroundColor='#fff' color='#000' size="$2"  />
            <Button icon={<Menu size="$2" />} backgroundColor='#fff' color='#000' size="$2"/>
        </XStack>
    )
   
}