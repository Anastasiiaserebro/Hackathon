import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { RootStackParamList } from "../../App";
import { Text, Button, View, Image } from "tamagui";
import { SafeAreaView } from "react-native-safe-area-context";

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, "Home">;

export function HomeScreen({ navigation }: HomeScreenProps) {
  return (
    <SafeAreaView>
      <View>
        <Text>Home Screen</Text>
        <Button
          onPress={() => navigation.navigate("DocumentDetails", { id: "5" })}
        >
          Go to Details
        </Button>
      </View>
    </SafeAreaView>
  );
}
