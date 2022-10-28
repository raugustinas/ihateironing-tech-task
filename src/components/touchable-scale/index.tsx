import React, {FC} from 'react';
import {TouchableOpacityProps} from 'react-native';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import Animated, {
  Easing,
  Extrapolate,
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

export const TouchableScale: FC<TouchableOpacityProps> = ({
  onPress,
  style,
  disabled,
  children,
}) => {
  const progress = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        scale: interpolate(
          progress.value,
          [0, 1],
          [1, 1.22],
          Extrapolate.CLAMP,
        ),
      },
    ],
  }));

  const gesture = Gesture.LongPress()
    .enabled(!disabled)
    .onBegin(() => {
      progress.value = withTiming(1, {
        duration: 300,
        easing: Easing.out(Easing.exp),
      });
    })
    .onStart(() => {
      progress.value = withTiming(1, {
        duration: 300,
        easing: Easing.out(Easing.exp),
      });
    })
    .onFinalize(() => {
      progress.value = withTiming(
        0,
        {
          duration: 300,
          easing: Easing.out(Easing.exp),
        },
        // @ts-ignore
        () => runOnJS(onPress)(),
      );
    });

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={[style, animatedStyle]}>{children}</Animated.View>
    </GestureDetector>
  );
};
