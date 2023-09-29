import { StyleSheet, View } from 'react-native';
import { Button } from 'tamagui';

export const ButtonGroup = () => {
    return(
    <View style={styles.buttons}>
        <Button size="$3">Setting</Button>
        <Button size="$3">Home</Button>
        <Button size="$3">Profile</Button>
    </View>
    )
}

const styles = StyleSheet.create({
  buttons: {
      display:'flex',
      flexDirection: 'row',
      gap:15,
      justifyContent:'space-between',
    }
});