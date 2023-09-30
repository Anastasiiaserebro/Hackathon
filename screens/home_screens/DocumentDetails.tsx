import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { RootStackParamList } from "../../App";
import {
  Button,
  Text,
  View,
  XStack,
  YStack,
  Image,
  styled,
} from "tamagui";
import PdfLogo from "../assets/pdf.svg";
import Checkbox from "../assets/checkbox.svg";
import { useState } from "react";
import cookie from "../assets/cookie.png";
import { Timeline } from "./components/Timeline";
import { Cookie } from "../Cookie/Cookie";

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

export function DetailsScreen({ navigation, route }: DetailsScreenProps) {
  const [documentOpeneded, setDocumentOpened] = useState(false);

  return (
    <Wrapper flex={1} backgroundColor='#fff'>
      <YStack
        flex={1}
        space="$5"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <HeaderWrapper>
          <YStack flex={1}>
            <HeaderText>ОС-2</HeaderText>
            <HeaderText>
              Накладная на внутреннее перемещение основных средств
            </HeaderText>
          </YStack>

          <Cookie count='+20'/>
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

        <Timeline timelineData={timelineData} />
      </YStack>

      <XStack space={12} alignSelf="flex-end">
        <RejectButton unstyled>Отклонить</RejectButton>
        <SignButton unstyled>Подписать</SignButton>
      </XStack>
    </Wrapper>
  );
}

const Wrapper = styled(View, {
  name: "Wrapper",
  padding: 16,
});

const HeaderWrapper = styled(View, {
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

const RejectButton = styled(Button, {
  color: "#DB0D60",
  padding: 13,
  paddingLeft: 20,
  paddingRight: 20,
  borderRadius: 10,
});

const SignButton = styled(Button, {
  padding: 13,
  paddingLeft: 20,
  paddingRight: 20,
  color: "white",
  backgroundColor: "#007AFF",
  borderRadius: 10,
});
