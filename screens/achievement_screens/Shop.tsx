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

export const Shop = ({ navigation, route }: ShopProps) => {
    const [buy, setBuy] = useState<boolean>(false);

  return (
    <YStack height="120%" backgroundColor="#fff" paddingTop={50}>
      <YStack padding={16} space={40}>
        <Text fontSize={36} fontWeight="700">
          Порадовать Мурчика
        </Text>
        <XStack justifyContent="center" alignItems="center" space={15}>
          <Image source={buy? catDug : cat} />
          <Cookie count={buy? '800' : "1000"} />
        </XStack>
      </YStack>
      <YStack>
        <XStack>
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
                <Button  backgroundColor="#44a362" width={24} height={24} onPress={() => setBuy(true)} paddingRight={24}> <Image source={dug} width={24} height={24} /></Button> 
            </XStack>
            {buy ? <Text>Куплено</Text> : <Cookie count={"200"} />} 
          </YStack>
        </XStack>
        <XStack padding={20}>
          <YStack space={15}>
            <XStack
              backgroundColor="#000"
              borderRadius={12}
            //   width={70}
            //   height={70}
              justifyContent="center"
              alignItems="center"
            >
              <Image source={Icon} width={24} height={24} />
            </XStack>
            <Cookie count={"130"} />
          </YStack>
        </XStack>
        <XStack padding={20}>
          <YStack space={15}>
            <XStack
              backgroundColor="#000"
              borderRadius={12}
            //   width={70}
            //   height={70}
              justifyContent="center"
              alignItems="center"
            >
              <Image source={Icon} width={24} height={24} />
            </XStack>
            <Cookie count={"70"} />
          </YStack>
        </XStack>
        <XStack padding={20}>
          <YStack space={15}>
            <XStack
              backgroundColor="#000"
              borderRadius={12}
            //   width={70}
            //   height={70}
              justifyContent="center"
              alignItems="center"
            >
              <Image source={Icon} width={24} height={24} />
            </XStack>
            <Cookie count={"180"} />
          </YStack>
        </XStack>
        </XStack>
       
       <XStack>
       <XStack padding={20}>
          <YStack space={15}>
            <XStack
              backgroundColor="#000"
              borderRadius={12}
              justifyContent="center"
              alignItems="center"
            >
              <Image source={Icon} width={24} height={24} />
            </XStack>
            <Cookie count={"200"} />
          </YStack>
        </XStack>
        <XStack padding={20}>
          <YStack space={15}>
            <XStack
              backgroundColor="#000"
              borderRadius={12}
              justifyContent="center"
              alignItems="center"
            >
              <Image source={Icon} width={24} height={24} />
            </XStack>
            <Cookie count={"300"} />
          </YStack>
        </XStack>
        <XStack padding={20}>
          <YStack space={15}>
            <XStack
              backgroundColor="#000"
              borderRadius={12}
            //   width={70}
            //   height={70}
              justifyContent="center"
              alignItems="center"
            >
              <Image source={Icon} width={24} height={24} />
            </XStack>
            <Cookie count={"200"} />
          </YStack>
        </XStack>
        <XStack padding={20}>
          <YStack space={15}>
            <XStack
              backgroundColor="#000"
              borderRadius={12}
            //   width={70}
            //   height={70}
              justifyContent="center"
              alignItems="center"
            >
              <Image source={Icon} width={24} height={24} />
            </XStack>
            <Cookie count={"500"} />
          </YStack>
        </XStack>
       </XStack>
        
      </YStack>
    </YStack>
  );
};
