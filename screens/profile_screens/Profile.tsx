import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { YStack } from "tamagui";
import { getDocCount } from "../getDocCount";
import { ProgressLine } from "./ProgressLine";
import { AchievementList } from "./AchievementList";
import { ProfileHeader } from "./ProfileHeader";

import { useQuery } from "@tanstack/react-query";
import { API } from "../../App";
import { DocsType } from "../../types";

export const ProfileScreen = () => {
  const [level, setLevel] = useState<number>(4);
  const { data: docs } = useQuery({
    queryKey: ["docs"],
    queryFn: () =>
      API.get("docs").then((res) => res.data) as unknown as DocsType[],
  });
  const docCount = getDocCount(docs);

  return (
    <SafeAreaView>
      <YStack backgroundColor="#fff" height="120%" padding={28} space={40}>
        <ProfileHeader level={level} docCount={docCount} />
        <ProgressLine level={level} />
        <AchievementList />
      </YStack>
    </SafeAreaView>
  );
};
