import tamaguiConfig from "./tamagui.config";
import { TamaguiProvider, Text } from "tamagui";

import Index from "./src/screens/Index";

export default function App() {
  return (
    <TamaguiProvider config={tamaguiConfig}>
      <Index/>
    </TamaguiProvider>
  );
}
