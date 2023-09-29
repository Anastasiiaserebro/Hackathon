import { Button, XStack, YStack, styled, Text} from 'tamagui';
import { DocList } from './DocList';
import { useState } from 'react';

export type StatusType = 'accept' | 'reject' | 'new';

export type DocsType = {
    title: string,
    category: string,
    id: string,
    date: string,
    status: StatusType,
    statusDate: string,
}

const filterOptions = {
    all: "Всего",
    toAgree: "Согласовать",
    archive: 'Архив'
} as const;

const filters = Object.values(filterOptions);
type FiltersType = typeof filters[number];

export default function MainScreen() {
    const [filter, setFilter] = useState<FiltersType>(filterOptions.all);

    const filteredList: DocsType[] = docs.filter(doc => {
        if (filter === filterOptions.toAgree) {
            return doc.status === 'new'
        }
        else if (filter === filterOptions.archive) {
            return doc.status !== 'new'
        }
        return true
    })

    const getCount = (docs: DocsType[]) => {
        const counts = { all: 0, toAgree: 0, archive: 0 };
        docs.forEach(doc => {
            if (doc.status === 'new') {
                counts.toAgree = counts.toAgree + 1
            }
            else {
                counts.archive = counts.archive + 1
            }
        })

        return counts
    };

    const count = getCount(docs)

    return (
        <YStack>
            <XStack space={0} justifyContent='center'  backgroundColor='#fff'>
                <StyledButton  onPress={() => setFilter(filterOptions.all)}>
                    <YStack alignItems="center" space={3}>
                        <Text color={filter === filterOptions.all ? '#000' : '#949494'} marginTop='$space.3'  fontSize="$4" >{docs.length}</Text>
                        <Text color={filter === filterOptions.all ? '#000' : '#949494'}>Всего</Text>
                        </YStack>
                </StyledButton>
                <StyledButton  pressStyle={{borderBlockColor:'$color.accept'}} onPress={() => setFilter(filterOptions.toAgree)}>
                    <YStack alignItems="center" space={3}>
                        <Text color={filter === filterOptions.toAgree ? '#000' : '#949494'} marginTop='$space.3'  fontSize="$4" >{count.toAgree}</Text>
                        <Text color={filter === filterOptions.toAgree ? '#000' : '#949494'} whiteSpace='nowrap'>Согласовать</Text>
                        </YStack>
                </StyledButton>
                <StyledButton  onPress={() => setFilter(filterOptions.archive)}>
                    <YStack  alignItems="center" space={3}>
                    <Text color={filter === filterOptions.archive ? '#000' : '#949494'} marginTop='$space.3'  fontSize="$4" >{count.archive}</Text>
                    <Text color={filter === filterOptions.archive ? '#000' : '#949494'}>Архив</Text>
                </YStack>
                </StyledButton>
            </XStack>
            <DocList docs={filteredList} />
        </YStack>
    );
}

const StyledButton = styled(Button, {
    backgroundColor: '#fff',
    color: '#000',
    width:'33%',
    height: '$8',
})

const docs: DocsType[] = [
    {
        title: "Документ",
        category: 'OC-2',
        id: '#1',
        date: '01.02.23',
        status: 'new',
        statusDate: 'Контрольный срок 23.09.23'
    },
    {
        title: "Документ",
        category: 'OC-2',
        id: '#2',
        date: '01.02.23',
        status: 'accept',
        statusDate: 'Согласовано 09.09.23'
    },
    {
        title: "Документ",
        category: 'OC-2',
        id: '#3',
        date: '01.02.23',
        status: 'reject',
        statusDate: 'Отклонено 24.07.22'
    },
    {
        title: "Документ",
        category: 'OC-2',
        id: '#4',
        date: '01.02.23',
        status: 'accept',
        statusDate: 'Отклонено 24.07.22'
    }
    ,
    {
        title: "Документ",
        category: 'OC-2',
        id: '#5',
        date: '01.02.23',
        status: 'new',
        statusDate: 'Отклонено 24.07.22'
    },
    {
        title: "Документ",
        category: 'OC-2',
        id: '#6',
        date: '01.02.23',
        status: 'reject',
        statusDate: 'Отклонено 24.07.22'
    },
    {
        title: "Документ",
        category: 'OC-2',
        id: '#7',
        date: '01.02.23',
        status: 'reject',
        statusDate: 'Отклонено 24.07.22'
    },
    {
        title: "Документ",
        category: 'OC-2',
        id: '#8',
        date: '01.02.23',
        status: 'new',
        statusDate: 'Отклонено 24.07.22'
    },
    {
        title: "Документ",
        category: 'OC-2',
        id: '#9',
        date: '01.02.23',
        status: 'reject',
        statusDate: 'Отклонено 24.07.22'
    },
    {
        title: "Документ",
        category: 'OC-2',
        id: '#10',
        date: '01.02.23',
        status: 'accept',
        statusDate: 'Отклонено 24.07.22'
    }
]