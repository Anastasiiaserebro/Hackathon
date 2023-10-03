import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { YStack, Text } from "tamagui";
import { ProgressList } from "./components/ProgressList";
import { Cat } from "./components/Cat";

export const AchievementsScreen = () => (
  <SafeAreaView>
    <YStack backgroundColor="#fff" height="120%" padding={16} space={40} >
      <Text fontSize={45} fontWeight="700">
        Достижения
      </Text>
      <Cat money={1000} />
      <ProgressList />
    </YStack>
  </SafeAreaView>
);
