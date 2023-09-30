import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { YStack } from "tamagui";
import { getDocCount } from "../getDocCount";
import { docs } from "../docs";
import { ProgressLine } from "./ProgressLine";
import { AchievementList } from "./AchievementList";
import { ProfileHeader } from "./ProfileHeader";

const ProfileScreen = () => {
  const [level, setLevel] = useState<number>(4);
  const docCount = getDocCount(docs);

  return (
    <SafeAreaView>
      <YStack backgroundColor="#fff" height="120%" padding={28} space={40}>
        <ProfileHeader level={level} docCount={docCount}/>
        <ProgressLine level={level} />
        <AchievementList />
      </YStack>
    </SafeAreaView>
  );
};


export default ProfileScreen;
