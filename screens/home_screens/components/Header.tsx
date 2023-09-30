import { Avatar, Input, XStack, Button, styled, View, Image } from "tamagui";
import { Bell, Menu } from "@tamagui/lucide-icons";
import avatar from "../../assets/avatar.png";

type HeaderProps = {
  onSearch: (text: string) => void;
};

export const Header: React.FC<HeaderProps> = ({ onSearch }) => {
  return (
    <XStack padding={16} space={2} alignItems="center">
      <CustomAvatar>
        <Image
          source={avatar}
          resizeMode="contain"
          maxWidth={24}
          maxHeight={24}
        />
      </CustomAvatar>
      <Input
        size="$4"
        marginLeft={25}
        borderColor="#fff"
        backgroundColor="#7676801F"
        width={225}
        fontWeight="100"
        placeholder="Найти..."
        color="#000"
        onChangeText={onSearch}
      />
      <Button
        icon={<Bell size="$2" />}
        backgroundColor="#fff"
        color="#000"
        size="$2"
      />
      <Button
        icon={<Menu size="$2" />}
        backgroundColor="#fff"
        color="#000"
        size="$2"
      />
    </XStack>
  );
};

const CustomAvatar = styled(View, {
  width: 36,
  height: 36,
  borderRadius: 9999,
  backgroundColor: "#F5E5AE",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
