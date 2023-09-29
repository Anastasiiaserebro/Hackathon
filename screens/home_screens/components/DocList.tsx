import React from 'react';
import { ScrollView, Stack, YStack } from 'tamagui'
import { DocItem } from './DocItem';
import { DocsType } from './MainScreen';

type DockListProps = {
    docs:DocsType[]
}

export const DocList: React.FC<DockListProps> = ({docs}) => {
  return (
    <ScrollView>
    <YStack flex={1} space={16} padding={16}>
      {docs.map((doc) => (
        <DocItem key={doc.id} doc={doc} />
      ))}
    </YStack>
    </ScrollView>
  );
};


