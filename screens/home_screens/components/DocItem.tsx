import { XStack, YStack, Text, styled, ListItem, View, Image} from "tamagui";
import { DocsType } from "../../../types";
import LottieView from "lottie-react-native";

export type StatusType = "accept" | "reject" | "new";
type DocItemProps = {
  doc: DocsType;
  getId: (id: string) => void;
};


//import Flame from "../../assets/";
import animation from '../../assets/Animation.gif'
import { Cookie } from "../../components/Cookie/Cookie";

const getStatusStyle = (status: StatusType) => {
  if (status === "accept") {
    return "#45AB1B";
  } else if (status === "reject") {
    return "#E61C1C";
  }
  return "#949494";
};
const formatter = new Intl.DateTimeFormat("ru");

const statusOptions = {
  accept: 'Согласовано',
  reject: 'Отклонено',
  new:'Контрольный срок'
}

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
  const formatterStatusDate = formatter.format(new Date(statusDate));

  return (
    <ListItem
      backgroundColor="#fff"
      borderRadius={15}
      onPress={() => getId(id)}
    >
      <XStack >
        <LineView variableColor={status as StatusType}></LineView>
        <YStack space={8}>
          <XStack space={30} alignItems="center">
            <PersonnelNumber>{id}</PersonnelNumber>
            {status === "new" && <Cookie count="+500" />}
          </XStack>
          <Category>{category}</Category>
          <Text  width={220} >{title}</Text>
          <XStack space={5} alignItems="center">
            <DateText variableColor={status as StatusType}>
            {statusOptions[status as keyof typeof statusOptions]} {formatterStatusDate}
            </DateText>
            {status === "new" && <XStack width={10} height={10} marginBottom={18}><Image source={animation}  resizeMode="contain"
          maxWidth={24}
          maxHeight={24}/></XStack>
            }
          </XStack>
        </YStack>
      </XStack>
      <YStack justifyContent="flex-start" height="100%" >
        <Text>{formatterDate}</Text>
      </YStack>
    </ListItem>
  );
};

const PersonnelNumber = styled(Text, {
  fontSize: 12,
  color: "#949494",
});

const Category = styled(Text, {
  fontSize: 12,
  color: "#333F48",
  fontWeight: "600",
});
