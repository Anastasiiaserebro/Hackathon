import React from "react";
import { ScrollView, YStack, Text } from "tamagui";


export type ProgressType = {
  title: string,
  level:string,
  category:string,
  id:string,
  percentage:number,
  SVG:any

}
import { ProgressItem } from "./ProgressItem";

const progressItems: ProgressType[] = [
  {
    title: "Черный список",
    category:'по количеству отклоненных документов',
    level: "Золотой",
    id: "1",
    percentage:1,
    SVG: require("../../assets/crown.svg").default,
  },
  {
    title: "Начинающий рукописец",
    category:'по количеству согласований',
    level: "Бронзовый",
    id: "2",
    percentage:30,
    SVG: require("../../assets/stats.svg").default,
  },
];

export const ProgressList = () => {

  return (
    <ScrollView>
      <YStack space={16} padding={10}>
        {progressItems.map(ach => (
          <ProgressItem key={ach.id} ach={ach}/>
        )

        )}
        <Text></Text>
      </YStack>
    </ScrollView>
  );
};
