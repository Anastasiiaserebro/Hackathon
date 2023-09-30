import React  from "react";
import { Avatar, Text, styled, XStack, YStack } from "tamagui";

import avatar from "../assets/avatar-1.png";
import { Cookie } from "../components/Cookie/Cookie";


type ProfileHeaderProps={
    level:number,
    docCount: {
        all: number;
        toAgree: number;
        archive: number;
    }
}

export const ProfileHeader:React.FC<ProfileHeaderProps> = ({level, docCount}) => {
    return (
        <YStack space={30}>
        <Text fontSize={45} fontWeight="700">
          Профиль
        </Text>
        <CentrumYStack>
          <CentrumYStack>
            <Avatar
              circular
              size="$10"
              position="relative"
              backgroundColor="#F5E5AE"
            >
              <Avatar.Image src={avatar} resizeMode="contain" flex={1} />
              <Avatar.Fallback bc="#F49300" />
            </Avatar>
            <Level>
              <Crown>
                <Text fontSize={20}>👑</Text>
              </Crown>
              <Text fontSize={20}>{level}</Text>
            </Level>
            <Cookie count="250" />
            <Text fontSize={20}>Имя Фамилия</Text>
            <Text fontSize={20}>Должность</Text>
          </CentrumYStack>
          <XStack
            space={0}
            backgroundColor="#fff"
            width="100%"
            justifyContent="center"
          >
            <YStack alignItems="center" space={3} width="33%">
              <StyledText>{docCount.all}</StyledText>
              <Text color="#333F48">Всего</Text>
            </YStack>
            <YStack alignItems="center" space={3} width="33%">
              <StyledText>{docCount.toAgree}</StyledText>
              <Text color="#333F48" whiteSpace="nowrap">
                Согласовать
              </Text>
            </YStack>
            <YStack alignItems="center" space={3} width="33%">
              <StyledText>{docCount.archive}</StyledText>
              <Text color="#333F48">Архив</Text>
            </YStack>
          </XStack>
        </CentrumYStack>
      </YStack>
    )
}


const StyledText = styled(Text, {
    color: "#333F48",
    marginTop: "$space.3",
    fontSize: 40,
    fontWeight: "700",
  });
  
  const CentrumYStack = styled(YStack, {
    alignItems: "center",
  });
  
  const Level = styled(XStack, {
    position: "absolute",
    alignItems: "center",
    zIndex: 1,
    padding: 3,
    right: -3,
  });
  
  const Crown = styled(XStack, {
    position: "absolute",
    zIndex: -1,
    top: -2,
    padding: 3,
    right: 13,
    backgroundColor: "#fff",
    borderColor: "#fff",
    borderRadius: 25,
  });
  
  const CookieText = styled(Text, {
    color: "#333F48",
    fontSize: 14,
  });