import { Buttons } from "./ButtonGroup.style";
import { Button } from 'tamagui';

export const ButtonGroup = () => {
    return(
    <Buttons>
        <Button size="$5">Setting</Button>
        <Button size="$5">Home</Button>
        <Button size="$5">Profile</Button>
    </Buttons>
    )
}