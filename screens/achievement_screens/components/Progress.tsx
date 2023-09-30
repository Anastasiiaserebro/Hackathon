import { ProgressType } from "./AchievementList"
import {Text, XStack} from 'tamagui';

type ProgressItemProps={
    ach:ProgressType
}

export const ProgressItem:React.FC<ProgressItemProps> = ({ach}) => {

    const {category, title, level, percentage, SVG } = ach
    return (
        <Text>{category}</Text>
    )
}