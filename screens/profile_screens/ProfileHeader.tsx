import React from "react";
import { Avatar, Text, styled, XStack, YStack, View, Image } from "tamagui";

import avatar from "../assets/avatar-1.png";
import { Cookie } from "../components/Cookie/Cookie";
import { useQuery } from "@tanstack/react-query";
import { API } from "../../App";
import { User } from "../../types";

type ProfileHeaderProps = {
  level: number | undefined;
  docCount: {
    all: number;
    toAgree: number;
    archive: number;
  };
};

export const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  level,
  docCount,
}) => {
  const { data: user } = useQuery({
    queryKey: ["user"],
    queryFn: () =>
      API.get("/get_user/1").then((res) => res.data) as unknown as User,
  });

  return (
    <YStack space={30}>
      <Text fontSize={45} fontWeight="700">
        Профиль
      </Text>
      <CentrumYStack>
        <CentrumYStack>
          <CustomAvatar>
            <Image source={avatar} resizeMode="contain" flex={1} />
          </CustomAvatar>
          <Level>
            <Crown>
              <Text fontSize={20}>👑</Text>
            </Crown>
            <Text fontSize={20}>{level}</Text>
          </Level>
          <Cookie count="250" />
          <Text fontSize={20}>
            {user?.name} {user?.surname}
          </Text>
          <Text fontSize={20}>{user?.job}</Text>
        </CentrumYStack>
        <XStack
          space={0}
          backgroundColor="#fff"
          width="100%"
          justifyContent="center"
        >
          <YStack alignItems="center" space={3} width="33%">
            <StyledText>{user?.new}</StyledText>
            <Text color="#333F48">В работе</Text>
          </YStack>
          <YStack alignItems="center" space={3} width="33%">
            <StyledText>{user?.accept}</StyledText>
            <Text color="#333F48" whiteSpace="nowrap">
              Согласовано
            </Text>
          </YStack>
          <YStack alignItems="center" space={3} width="33%">
            <StyledText>{user?.reject}</StyledText>
            <Text color="#333F48">Отклонено</Text>
          </YStack>
        </XStack>
      </CentrumYStack>
    </YStack>
  );
};

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

const CustomAvatar = styled(View, {
  width: 100,
  height: 100,
  borderRadius: 9999,
  backgroundColor: "#F5E5AE",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
