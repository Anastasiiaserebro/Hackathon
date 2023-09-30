import { useQuery } from "@tanstack/react-query";
import React from "react";
import { ScrollView, XStack, YStack, Text, Spinner } from "tamagui";
import { API } from "../../../App";


export type ProgressType = {
  title: string,
  level:string,
  category:string,
  id:string,
  percentage:number,
  SVG:any

}

const progressItems: ProgressType[] = [
  {
    title: "Черный список",
    category:'по количеству отклоненных документов',
    level: "Золотой уровень",
    id: "1",
    percentage:1,
    SVG: require("../assets/crow.svg").default,
  },
  {
    title: "Начинающий рукописец",
    category:'по количеству согласований',
    level: "Бронзовый уровень",
    id: "2",
    percentage:30,
    SVG: require("../assets/stats.svg").default,
  },
  // {
  //   title: "Быстрый старт",
  //   description: "Согласование в течение 10 минут после входа в приложение",
  //   id: "3",
  //   SVG: require("../assets/timer.svg").default,
  // },
  // {
  //   title: "Император электронных утверждений",
  //   description: "Император электронных утверждений",
  //   id: "4",
  //   SVG: require("../assets/approve.svg").default,
  // },
];

export const AchievementList = () => {

    
  // const { data: achievement, isLoading } = useQuery({
  //   queryKey: ["achievements"],
  //   queryFn: () =>
  //     API.get('get_achievements/1').then((res) => res.data) as unknown as AchievementType[],
  // });

  // console.log(achievement)
  
  return (

    <ScrollView>
      <YStack space={16} padding={16}>
        {progressItems.map(ach=> {
          
        })}
        <Text></Text>
      </YStack>
    </ScrollView>
  );
};
