import { useQuery } from "@tanstack/react-query";
import React from "react";
import { ScrollView, XStack, YStack, Text, Spinner } from "tamagui";
import { API } from "../../../App";


type AchievementType = {
  title: string,
  description:string,
  percentage:string,

}
export const AchievementList = () => {

    
  const { data: achievement, isLoading } = useQuery({
    queryKey: ["achievements"],
    queryFn: () =>
      API.get('get_achievements/1').then((res) => res.data) as unknown as AchievementType[],
  });

  console.log(achievement)
  
  return (
    <ScrollView>
      <YStack space={16} padding={16}>
      {isLoading && <Spinner />}
        <Text color="#000">ttttt</Text>
        <Text>ttttt</Text>
        <Text>ttttt</Text>
        <Text>ttttt</Text>
        <Text>ttttt</Text>
        <Text>ttttt</Text>
        <Text>ttttt</Text>
      </YStack>
    </ScrollView>
  );
};
