import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { RootStackParamList } from "../../App";
import { Button, View } from "tamagui";
import { SafeAreaView } from "react-native-safe-area-context";
import MainScreen from "./components/MainScreen";

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, "Home">;

export function HomeScreen({ navigation }: HomeScreenProps) {
  return (
    <SafeAreaView>
      <View>
        {/* <Button
          onPress={() => navigation.navigate("DocumentDetails", { id: "5" })}
        >
          Go to Details
        </Button> */}
        <MainScreen />
      </View>
    </SafeAreaView>
  );
}
