import { StyleSheet, Text, View } from 'react-native';
import { ButtonGroup } from '../components/ButtonGroup';
import { DocList } from '../components/DocList';

export default function MainScreen() {

    return (
        <View style={styles.main}>
            <View >
                <Text>Hackathon App</Text>
            </View>
            <DocList />
            <ButtonGroup />
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'absolute',
        top: 40,
        left: 10,
        right: 10,
        bottom: 10,
    },
});