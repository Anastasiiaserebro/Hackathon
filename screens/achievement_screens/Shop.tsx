import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Text, XStack, YStack, Image, Button } from "tamagui";
import { RootStackParamList } from "../../App";
import cat from "../assets/kit.png";
import catDug from "../assets/kitDug.png";

import dug from "../assets/dug.png";
import Icon from "../assets/Icon.png";
import { Cookie } from "../components/Cookie/Cookie";
import { useState } from "react";

type ShopProps = NativeStackScreenProps<RootStackParamList, "Shop">;

const shopStuff = [
  { price: "200" },
  { price: "100" },
  { price: "120" },
  { price: "300" },
  { price: "500" },
  { price: "250" },
  { price: "280" },
];

export const Shop = ({ navigation, route }: ShopProps) => {
  const [bought, setBought] = useState<boolean>(false);

  return (
    <YStack height="120%" backgroundColor="#fff" paddingTop={50}>
      <YStack padding={16} space={40}>
        <Text fontSize={36} fontWeight="700">
          Порадовать Мурчика
        </Text>
        <XStack justifyContent="center" alignItems="center" space={15}>
          <Image source={bought ? catDug : cat} />
          <Cookie count={bought ? "800" : "1000"} />
        </XStack>
      </YStack>

      <XStack flexWrap="wrap">
        <XStack padding={20}>
          <YStack space={15}>
            <Button
              backgroundColor="#44a362"
              width={61}
              height={61}
              onPress={() => setBought(true)}
            >
              <Image source={dug} width={24} height={24} />
            </Button>

            {bought ? <Text>Куплено</Text> : <Cookie count={"200"} />}
          </YStack>
        </XStack>

        {shopStuff.map(({ price }) => (
          <XStack padding={20}>
            <YStack space={15}>
              <XStack
                backgroundColor="#44a362"
                borderRadius={12}
                width={61}
                height={61}
                justifyContent="center"
                alignItems="center"
              >
                <Image source={Icon} width={24} height={24} />
              </XStack>
             <Cookie count={`${price}`} />
            </YStack>
          </XStack>
        ))}
      </XStack>
    </YStack>
  );
};
