import {XStack, YStack, Text, styled, ListItem, View } from 'tamagui';
import { DocsType, StatusType } from './DocList';

type DocItemProps = {
  doc: DocsType,
  getId: (id:string) => void
}

export const DocItem: React.FC<DocItemProps> = ({ doc, getId }) => {

  const { title, category, id, date, status, statusDate } = doc;

  const getStatusStyle = (status: StatusType) => {
    if (status === 'accept') {
      return '#45AB1B'
    }
    else if (status === 'reject') {
      return  '#E61C1C'
    }
    return   '#949494' 
  }

  const DateText = styled(Text,{
    variants: {
      variableColor:(status:StatusType) => ({
       color: getStatusStyle(status)
      })
    } as const,
  })

  const LineView = styled( View,{
    variants: {
      variableColor:(status:StatusType) => ({
       backgroundColor: getStatusStyle(status)
      })
    } as const,
    width: 6,
    height: 101,
    borderRadius: 3,
    position: 'relative',
    right:20,
  })

  const formatter = new Intl.DateTimeFormat('ru-Ru');
  const formatterDate = formatter.format(new Date(date))

  return (
    <ListItem  backgroundColor="#fff" borderRadius={15} onPress={() => getId(id)}>
      <XStack>
      <LineView variableColor={status}></LineView>
        <YStack space={8}>
          <Text >{id}</Text>
          <Text >{category}</Text>
          <Text >{title}</Text>
          <DateText variableColor={status}>{statusDate}</DateText>
        </YStack>
      </XStack>
      <YStack justifyContent='flex-start' height='100%'>
        <Text>{formatterDate}</Text>
      </YStack>
    </ListItem>

  );
}
