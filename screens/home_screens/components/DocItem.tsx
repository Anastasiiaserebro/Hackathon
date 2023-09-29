import {XStack, YStack, Text, styled, ListItem, View } from 'tamagui';

import { DocsType, StatusType } from './MainScreen';

type DocItemProps = {
  doc: DocsType
}

export const DocItem: React.FC<DocItemProps> = ({ doc }) => {

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
    width: 5,
    height: 101,
    borderRadius: 3,
    position: 'relative',
    right:20,
  })

  return (
    
    <ListItem  backgroundColor="#fff" borderRadius={15}>
      <XStack>
      <LineView variableColor={status}></LineView>
        <YStack space={8}>
          <Text color='$default'>{id}</Text>
          <Text color='$default'>{category}</Text>
          <Text color='$default'>{title}</Text>
          <DateText variableColor={status}>{statusDate}</DateText>
        </YStack>
      </XStack>
      <YStack justifyContent='flex-start' height='100%'>
        <Text color='$default'>{date}</Text>
      </YStack>
    </ListItem>

  );
}
