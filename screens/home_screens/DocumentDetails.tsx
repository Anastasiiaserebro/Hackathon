import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { RootStackParamList } from "../../App";
import {
  Accordion,
  Button,
  Image as TamaImage,
  Paragraph,
  Square,
  Text,
  View,
  XStack,
  YStack,
  styled,
} from "tamagui";
import PdfLogo from "./assets/pdf.svg";
import Checkbox from "./assets/checkbox.svg";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import Collapsible from "react-native-collapsible";
import Cookie from "./assets/cookie.png";


type DetailsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "DocumentDetails"
>;

const timelineData = [
  {
    id: 1,
    name: "Иванов Иван Иванович",
    tableNumber: 12345678,
    date: "12.08.23 16:23:34",
  },
  {
    id: 2,
    name: "Иванов Иван Иванович",
    tableNumber: 12345678,
    date: "12.08.23 16:23:34",
  },
];

const сurrentUsername = "Сергеев Сергей Сергеевич";

export function DetailsScreen({ navigation, route }: DetailsScreenProps) {
  const [documentOpeneded, setDocumentOpened] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <Wrapper flex={1}>
      <YStack
        flex={1}
        space="$5"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <HeaderWrapper>
          <YStack>
            <HeaderText>ОС-2</HeaderText>
            <HeaderText>
              Накладная на внутреннее перемещение основных средств
            </HeaderText>
          </YStack>

          <XStack space={6}>
            {/* <TamaImage
              width={32}
              height={32}
              source={{ width: 32, height: 32, uri: Cookie }}
            /> */}
            <CookieText>+20</CookieText>
          </XStack>
        </HeaderWrapper>

        <Button unstyled onPress={() => setDocumentOpened(true)}>
          <XStack space="$3" alignItems="center">
            <PdfLogo width={28} height={32} />
            <LinkText>Открыть документ</LinkText>
            {documentOpeneded && <Checkbox width={16} height={16} />}
          </XStack>
        </Button>

        <XStack
          width={"100%"}
          flexDirection="row"
          justifyContent="space-between"
        >
          <YStack space="$2">
            <SubHeader>Номер документа</SubHeader>
            <Value>#4567890</Value>
          </YStack>
          <YStack space="$2">
            <SubHeader>Статус</SubHeader>
            <Value>В работе</Value>
          </YStack>
          <YStack space="$2">
            <SubHeader>Дата создания</SubHeader>
            <Value>19.09.23</Value>
          </YStack>
        </XStack>

        <YStack space="$2">
          <SubHeader>Дата выполнения</SubHeader>
          <Value>--</Value>
        </YStack>

        <YStack space="$2">
          <SubHeader>Автор</SubHeader>
          <Value>Невменько А.Г</Value>
        </YStack>

        <TamaImage
          width={32}
          height={32}
          source={{ width: 32, height: 32, uri: "./assets/cookie.png" }}
        />

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
                      <PersonnelNumber>
                        {coordinator.tableNumber}
                      </PersonnelNumber>
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
      </YStack>
    </Wrapper>
  );
}

const Wrapper = styled(View, {
  name: "Wrapper",
  padding: 16,
});

const HeaderWrapper = styled(View, {
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "flex-start",
  gap: 16,
});

const CookieText = styled(Text, {
  color: "#333F48",
  fontSize: 14,
});

const HeaderText = styled(Text, {
  name: "Header Text",
  color: "black",
  fontSize: 16,
  fontWeight: "700",
});

const LinkText = styled(Text, {
  color: "#0087CD",
  fontSize: 14,
});

const SubHeader = styled(Text, {
  fontSize: 14,
  color: "#333F48",
});

const Value = styled(Text, {
  fontSize: 14,
  fontWeight: "600",
  color: "#333F48",
});

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
