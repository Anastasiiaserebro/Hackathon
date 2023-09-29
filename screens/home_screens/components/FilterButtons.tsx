import { Button, XStack, YStack, styled, Text } from 'tamagui';
import { FiltersType, filterOptions } from './DocList';
export type StatusType = 'accept' | 'reject' | 'new';

type FilterButtonsProps = {
    docCount: {
        all:number, 
        toAgree: number,
        archive: number 
    },
    setFilter:React.Dispatch<React.SetStateAction<FiltersType>>,
    filter:FiltersType,
}

export const FilterButtons: React.FC<FilterButtonsProps> = ({ docCount, setFilter, filter }) => {
    return (
        <XStack space={0} justifyContent='center' backgroundColor='#fff'>
            <StyledButton onPress={() => setFilter(filterOptions.all)}>
                <YStack alignItems="center" space={3}>
                    <Text color={filter === filterOptions.all ? '#000' : '#949494'} marginTop='$space.3' fontSize="$4" >{docCount.all}</Text>
                    <Text color={filter === filterOptions.all ? '#000' : '#949494'}>Всего</Text>
                </YStack>
            </StyledButton>
            <StyledButton pressStyle={{ borderBlockColor: '$color.accept' }} onPress={() => setFilter(filterOptions.toAgree)}>
                <YStack alignItems="center" space={3}>
                    <Text color={filter === filterOptions.toAgree ? '#000' : '#949494'} marginTop='$space.3' fontSize="$4" >{docCount.toAgree}</Text>
                    <Text color={filter === filterOptions.toAgree ? '#000' : '#949494'} whiteSpace='nowrap'>Согласовать</Text>
                </YStack>
            </StyledButton>
            <StyledButton onPress={() => setFilter(filterOptions.archive)}>
                <YStack alignItems="center" space={3}>
                    <Text color={filter === filterOptions.archive ? '#000' : '#949494'} marginTop='$space.3' fontSize="$4" >{docCount.archive}</Text>
                    <Text color={filter === filterOptions.archive ? '#000' : '#949494'}>Архив</Text>
                </YStack>
            </StyledButton>
        </XStack>
    );
}

const StyledButton = styled(Button, {
    backgroundColor: '#fff',
    color: '#000',
    width: '33%',
    height: '$8',
})
