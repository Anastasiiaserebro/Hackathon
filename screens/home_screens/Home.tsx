import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { type RootStackParamList } from "../../App";
import { XStack } from "tamagui";
import { SafeAreaView } from "react-native-safe-area-context";
import { DocList } from "./components/DocList";

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, "Home">;

export function HomeScreen({ navigation }: HomeScreenProps) {
  const getId = (id: string) => {
    navigation.navigate("DocumentDetails", { id });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor:"#fff" }} >
      <XStack flex={1} backgroundColor="#fff" paddingBottom={230}>
        <DocList getId={getId} />
      </XStack>
    </SafeAreaView>
  );
}
