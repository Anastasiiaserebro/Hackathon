import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { RootStackParamList } from "../../App";
import { Button, Text, View } from "tamagui";
import { SafeAreaView } from "react-native-safe-area-context";

type DetailsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "DocumentDetails"
>;

export function DetailsScreen({ navigation, route }: DetailsScreenProps) {
  return (
    <SafeAreaView>
      <View>
        <Text>Details Screen</Text>
        <Button onPress={() => navigation.navigate("Home")}>
          details id:{route.params.id} Go to Home
        </Button>
      </View>
    </SafeAreaView>
  );
}
