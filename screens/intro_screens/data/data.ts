import { AnimationObject } from "lottie-react-native";

export interface OnboardingData {
  id: number;
  animation: any;
  text: string;
  textColor: string;
  backgroundColor: string;
}

const data: OnboardingData[] = [
  {
    id: 1,
    animation: require("../assets/images/cat1.png"),
    text: "Инструмент согласований теперь в твоем мобильном! Установи приложение и больше не пропускай важные уведомления о согласовании документов!",
    textColor: "white",
    backgroundColor: "#A8C2DC",
  },
  {
    id: 2,
    animation: require("../assets/images/cat2.png"),
    text: "Теперь получить доступ к инструменту согласований документов можно быстро и легко",
    textColor: "white",
    backgroundColor: "#B1C288",
  },
  {
    id: 3,
    animation: require("../assets/images/cat3.png"),
    text: "За каждое выполненное действие добавлена возможность получать новые достижения и соревноваться с сотрудниками за звания",
    textColor: "#333F48",
    backgroundColor: "#EBB6A8",
  },
];

export default data;
