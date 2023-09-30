import { YStack, ScrollView} from 'tamagui';
import { useState } from 'react';
import { docs } from './docs';
import { FilterButtons } from './FilterButtons';
import { DocItem } from './DocItem';
import { Header } from './Header';
export type StatusType = 'accept' | 'reject' | 'new';

export type DocsType = {
    title: string,
    category: string,
    id: string,
    date: string,
    status: StatusType,
    statusDate: string,
}

export const filterOptions = {
    all: "Всего",
    toAgree: "Согласовать",
    archive: 'Архив'
} as const;

const filters = Object.values(filterOptions);
export type FiltersType = typeof filters[number];

type DocListProps = {
    getId: (id: string) => void
}

export type SortingType = 'ABC' | 'DEC';

export const DocList: React.FC<DocListProps> = ({ getId }) => {
    const [filter, setFilter] = useState<FiltersType>(filterOptions.all);
    const [searchValue, setSearchValue] = useState<string>('')
    const [sortButton, setSortButton] = useState<SortingType>('ABC')


    const sortFn  = () => {
        if(sortButton === 'ABC'){
            setSortButton('DEC')
        }
        else{
            setSortButton('ABC')
        }
    }

    const filteredList: DocsType[] = docs.filter(doc => {
        if (filter === filterOptions.toAgree) {
            return doc.status === 'new'
        }
        else if (filter === filterOptions.archive) {
            return doc.status !== 'new'
        }
        return true
    })

   
    const sortedList = filteredList.sort(((a, b) =>{
        if(sortButton === "ABC"){
          return  Date.parse(a.date) - Date.parse(b.date)
        }
        return Date.parse(b.date) - Date.parse(a.date)
       
    } ))

    const searchResults = sortedList.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))

    const onSearch = (text:string) => {
        setSearchValue(text.trimStart())
    }

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

        counts.all = docs.length
        return counts
    };

    const docCount = getCount(docs)

    return (
        <YStack marginBottom={30}>
            <Header onSearch={onSearch}/>
           <FilterButtons docCount={docCount} filter={filter} setFilter={setFilter} sortButton={sortButton} sortFn={sortFn}/>
           <ScrollView>
            <YStack flex={1} space={16} padding={16}>
            {searchResults.map((doc) => (
                <DocItem key={doc.id} doc={doc} getId={getId}/>
            ))}
            </YStack>
        </ScrollView>
        </YStack>
    );
}

