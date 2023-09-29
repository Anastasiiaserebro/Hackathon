import { StyleSheet, Text, View } from 'react-native';
import { DocsType, StatusType } from './DocList';

type DocItemProps = {
  doc: DocsType
}

export const DocItem: React.FC<DocItemProps> = ({ doc }) => {

  const { title, category, id, date, status, statusDate } = doc;

  const getStatusStyle = (status: StatusType) => {
    if (status === 'accept') {
      return { colorText: styles.accept, colorLine: [styles.lineAccept, styles.line] }
    }
    else if (status === 'reject') {
      return { colorText: styles.reject, colorLine: [styles.lineReject, styles.line] }
    }
    return { colorText: styles.new, colorLine: [styles.lineNew, styles.line] }
  }

  return (
    <View style={styles.doc}>
      <View style={styles.content}>
        <View style={getStatusStyle(status).colorLine}></View>
        <View style={styles.block}>
          <Text style={styles.new}>{id}</Text>
          <Text>{category}</Text>
          <Text >{title}</Text>
          <Text style={getStatusStyle(status).colorText}>{statusDate}</Text>
        </View>
      </View>
      <View>
        <Text>{date}</Text>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  doc: {
    width: '100%',
    height: 120,
    padding: 16 ,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  new: {
    color: '#3C3C4399',
  },
  accept: {
    color: '#45AB1B',
  },
  reject: {
    color: '#E61C1C'
  },
  block: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    gap: 8,
  },
  line:{
    width: 5,
    height: 101,
    borderRadius: 3,
  },
  lineAccept: {
    backgroundColor: '#45AB1B',
  },
  lineReject: {
    backgroundColor: '#E61C1C',
  },
  lineNew: {
    backgroundColor: 'rgba(235, 235, 245, 0.60)'
  }
});