import React, { useEffect, useState } from "react";
import { Animated } from "react-native";

import { Small, Original } from "./styles";

const OriginalAnimated = Animated.createAnimatedComponent(Original);

const LazyImage = ({ smallSource, source, aspectRatio, shouldLoad }) => {
  const opacity = new Animated.Value(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (shouldLoad) {
      setLoaded(true);
    }
  }, [shouldLoad]);

  function handleAnimate() {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true
    }).start();
  }

  return (
    <Small
      blurRadius={3}
      source={smallSource}
      ratio={aspectRatio}
      resizeMode="contain"
    >
      {loaded && (
        <OriginalAnimated
          style={{ opacity }}
          onLoadEnd={handleAnimate}
          source={source}
          ratio={aspectRatio}
          resizeMode="contain"
        />
      )}
    </Small>
  );
};

export default LazyImage;
