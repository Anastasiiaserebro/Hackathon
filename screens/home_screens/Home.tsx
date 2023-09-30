import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { RootStackParamList } from "../../App";
import { View } from "tamagui";
import { SafeAreaView } from "react-native-safe-area-context";
import { DocList } from "./components/DocList";

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, "Home">;

export function HomeScreen({ navigation }: HomeScreenProps) {
  const getId = (id: string) => {
    navigation.navigate("DocumentDetails", { id });
  };

  return (
    <SafeAreaView>
      <View backgroundColor="#fff">
        <DocList getId={getId} />
      </View>
    </SafeAreaView>
  );
}
