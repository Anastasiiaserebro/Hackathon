import {
  Image,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import React from "react";
import Animated, {
  Extrapolate,
  SharedValue,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import { OnboardingData } from "../data/data";
import LottieView from "lottie-react-native";

type Props = {
  index: number;
  x: SharedValue<number>;
  item: OnboardingData;
};

const RenderItem = ({ index, x, item }: Props) => {
  const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = useWindowDimensions();

  const lottieAnimationStyle = useAnimatedStyle(() => {
    const translateYAnimation = interpolate(
      x.value,
      [
        (index - 1) * SCREEN_WIDTH,
        index * SCREEN_WIDTH,
        (index + 1) * SCREEN_WIDTH,
      ],
      [100, 0, -100],
      Extrapolate.CLAMP
    );

    return {
      transform: [{ translateY: translateYAnimation }],
    };
  });

  const circleAnimation = useAnimatedStyle(() => {
    const scale = interpolate(
      x.value,
      [
        (index - 1) * SCREEN_WIDTH,
        index * SCREEN_WIDTH,
        (index + 1) * SCREEN_WIDTH,
      ],
      [1, 4, 4],
      Extrapolate.CLAMP
    );

    return {
      transform: [{ scale: scale }],
    };
  });

  return (
    <View style={[styles.itemContainer, { width: SCREEN_WIDTH }]}>
      <View style={styles.circleContainer}>
        <Animated.View
          style={[
            {
              width: SCREEN_WIDTH,
              height: SCREEN_WIDTH,
              borderRadius: SCREEN_WIDTH / 2,
              backgroundColor: item.backgroundColor,
            },
            circleAnimation,
          ]}
        />
      </View>
      <Animated.View style={lottieAnimationStyle}>
        <Image
          source={item.animation}
          style={{
            width: SCREEN_WIDTH * 0.8,
            height: SCREEN_HEIGHT * 6, 
            objectFit: 'scale-down', 
          }}
        />
      </Animated.View>
      <Text style={[styles.itemText, { color: item.textColor }]}>
        {item.text}
      </Text>
    </View>
  );
};

export default RenderItem;

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 80,
    paddingTop:60,
    paddingBottom:60,
  },
  itemText: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "400",
    //marginBottom: 10, ////
    marginHorizontal: 20,
  },
  circleContainer: {
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
    justifyContent: "flex-end",
  },
});
