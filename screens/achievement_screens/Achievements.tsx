import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {  View } from "tamagui";
import { AchievementList } from "./AchievementList";

export const AchievementsScreen = () => (
  <SafeAreaView>
    <View backgroundColor='#fff' >
      <AchievementList/>
    </View>
  </SafeAreaView>
);
