import { XStack, YStack, Text, styled, ListItem, View } from "tamagui";
import { DocsType } from "../../../types";

export type StatusType = "accept" | "reject" | "new";
type DocItemProps = {
  doc: DocsType;
  getId: (id: string) => void;
};

const getStatusStyle = (status: StatusType) => {
  if (status === "accept") {
    return "#45AB1B";
  } else if (status === "reject") {
    return "#E61C1C";
  }
  return "#949494";
};

const formatter = new Intl.DateTimeFormat("ru");

export const DocItem: React.FC<DocItemProps> = ({ doc, getId }) => {
  const { title, category, id, date, status, statusDate } = doc;

  const DateText = styled(Text, {
    variants: {
      variableColor: (status: StatusType) => ({
        color: getStatusStyle(status),
      }),
    } as const,
  });

  const LineView = styled(View, {
    variants: {
      variableColor: (status: StatusType) => ({
        backgroundColor: getStatusStyle(status),
      }),
    } as const,
    width: 6,
    height: 101,
    borderRadius: 3,
    position: "relative",
    right: 20,
  });

  const formatterDate = formatter.format(new Date(date));

  return (
    <ListItem
      backgroundColor="#fff"
      borderRadius={15}
      onPress={() => getId(id)}
    >
      <XStack>
        <LineView variableColor={status as StatusType}></LineView>
        <YStack space={8}>
          <Text>{id}</Text>
          <Text>{category}</Text>
          <Text>{title}</Text>
          <DateText variableColor={status as StatusType}>{statusDate}</DateText>
        </YStack>
      </XStack>
      <YStack justifyContent="flex-start" height="100%">
        <Text>{formatterDate}</Text>
      </YStack>
    </ListItem>
  );
};
