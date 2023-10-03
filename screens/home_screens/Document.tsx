import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Image, YStack, Text, XStack } from "tamagui";
import { RootStackParamList } from "../../App";

type DocumentProps = NativeStackScreenProps<RootStackParamList, "Document">;

import sber from "../assets/sber.png";

export const Document = ({ navigation, route }: DocumentProps) => {
  return (
    <YStack padding={0} backgroundColor="#fff" height="100%" space='40%'>
      <XStack justifyContent="flex-start" alignItems="center">
        <Image
          source={sber}
          resizeMode="contain"
          maxWidth={120}
          maxHeight={40}
        />
        <Text fontSize={20} color='#8d9092'>|</Text>
        <Text fontSize={10} color='#71777a' marginTop={3}>Накладная на внутреннее перемещение стола</Text>
      </XStack>
      <XStack justifyContent="center" alignItems="center">
        <Text fontWeight='bold' color='#333F48' textTransform='uppercase' >Накладная на внутреннее перемещение стола</Text>
      </XStack>
    </YStack>
  );
};
