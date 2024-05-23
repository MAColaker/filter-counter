import { View, ZStack, styled } from "tamagui";
import Wave from "react-wavify";

export default WaveBackground = ({ children, level }) => {
  const StyledWave = styled(Wave, {
    bottom: 0,
    maxHeight: "100vh",
    height: `${level}vh`,
    position: "absolute",
  });

  return (
    <View fullscreen flex={1}>
      <ZStack fullscreen position="fixed" flex={1}>
        <StyledWave
          fill="#74ccf4"
          opacity="0.30"
          options={{
            height: 1,
            amplitude: 10,
            speed: 0.2,
            points: 3,
          }}
        />
        <StyledWave
          fill="#1ca3ec"
          opacity="0.80"
          options={{
            height: 3,
            amplitude: 15,
            speed: 0.3,
            points: 2,
          }}
        />
        <StyledWave
          fill="#2389da"
          opacity="0.5"
          options={{
            height: 5,
            amplitude: 20,
            speed: 0.1,
            points: 4,
          }}
        />
      </ZStack>
      <View
        flex={1}
        justifyContent="center"
        alignSelf="center"
        alignItems="flex-end"
        gap="$3"
      >
        {children}
      </View>
    </View>
  );
};
