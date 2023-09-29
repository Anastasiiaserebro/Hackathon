import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import { TamaguiProvider } from "tamagui";
import { ButtonGroup } from "./components/ButtonGroup";
import config from "./tamagui.config";
import { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";

const styles = StyleSheet.create({
  main: {
    display: "flex",
    flexDirection: "column",
    padding: 30,
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    top: 30,
    left: 10,
    right: 10,
    bottom: 10,
  },
});

export default function App() {
  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });

  useEffect(() => {
    if (loaded) {
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <TamaguiProvider config={config}>
        <View style={styles.main}>
          <View>
            <Text>Hackathon App</Text>
          </View>
          <ButtonGroup />
        </View>
      </TamaguiProvider>
    </NavigationContainer>
  );
}
