import React from "react";
import { StyleSheet, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

interface DotProps {
  index: number;
  activeDotIndex: Animated.SharedValue<number>;
}

const Dot: React.FC<DotProps> = ({ index, activeDotIndex }) => {
  const rDotStyle = useAnimatedStyle(() => {
    const isActive = activeDotIndex.value === index;
    console.log(isActive, index);
    return {
      backgroundColor: !!isActive ? "black" : "white",
    };
  });

  return <Animated.View style={[styles.dot, rDotStyle]} />;
};

const styles = StyleSheet.create({
  dot: {
    width: 20,
    height: 20,
    marginHorizontal: 5,
    borderRadius: 10,
    borderWidth: 1,
  },
});
export default Dot;
