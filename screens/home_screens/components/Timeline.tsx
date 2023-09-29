import React, { useState } from "react";
import { Button, Text, View, XStack, YStack, styled } from "tamagui";
import { Ionicons } from "@expo/vector-icons";
import Collapsible from "react-native-collapsible";

const сurrentUsername = "Сергеев Сергей Сергеевич";

interface TimelineEntry {
  id: number;
  name: string;
  tableNumber: number;
  date: string;
}

interface TimelineProps {
  timelineData: TimelineEntry[];
}
export const Timeline = ({ timelineData }: TimelineProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <>
      <Button unstyled onPress={() => setIsCollapsed((c) => !c)}>
        <XStack space="$2">
          <LinkText>Маршрут согласования</LinkText>
          {isCollapsed ? (
            <Ionicons name="chevron-up" size={16} />
          ) : (
            <Ionicons name="chevron-down" size={16} />
          )}
        </XStack>
      </Button>
      <Collapsible collapsed={isCollapsed}>
        <YStack space={24}>
          {timelineData.map((coordinator) => (
            <TimelineWrapper key={coordinator.id}>
              <XStack space={12} justifyContent="flex-start">
                <BlueCircle />
                <YStack space={3} marginTop={-4}>
                  <TimelineName>{coordinator.name}</TimelineName>
                  <XStack space={6}>
                    <PersonnelNumber>{coordinator.tableNumber}</PersonnelNumber>
                    <TimelineDate>{coordinator.date}</TimelineDate>
                  </XStack>
                </YStack>
              </XStack>
              <TimelineLine />
            </TimelineWrapper>
          ))}
          <XStack space={12} alignItems="center">
            <BlueCircle>
              <WhiteCircle />
            </BlueCircle>
            <TimelineName>{сurrentUsername}</TimelineName>
          </XStack>
        </YStack>
      </Collapsible>
    </>
  );
};

const BlueCircle = styled(View, {
  width: 12,
  height: 12,
  borderRadius: 9999,
  backgroundColor: "#0087CD",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const WhiteCircle = styled(View, {
  width: 6,
  height: 6,
  borderRadius: 9999,
  backgroundColor: "white",
});

const TimelineWrapper = styled(View, {
  position: "relative",
});
const TimelineName = styled(Text, {
  fontSize: 12,
  color: "#333F48",
});

const PersonnelNumber = styled(Text, {
  color: "#949494",
  fontSize: 11,
});

const TimelineDate = styled(Text, {
  fontSize: 11,
  color: "#333F48",
});

const TimelineLine = styled(View, {
  width: 1,
  height: 24,
  backgroundColor: "#949494",
  position: "absolute",
  top: 20,
  left: 6,
});

const LinkText = styled(Text, {
  color: "#0087CD",
  fontSize: 14,
});
