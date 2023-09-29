import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import { DocItem } from './DocItem';

export const DocList = () => {
  return (
    <View style={styles.list}>
      <FlatList
        data={docs}
        renderItem={({item}) => <DocItem key={item.id} doc={item} />}
      />
    </View>
  );
};


const styles = StyleSheet.create({
    list: {
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        flex: 1,
    }
});

export type StatusType = 'accept' | 'reject' | 'new';

export type DocsType = {
    title: string,
    category: string,
    id: string,
    date: string,
    status: StatusType,
    statusDate: string,
}

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