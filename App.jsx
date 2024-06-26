import tamaguiConfig from "./tamagui.config";
import { TamaguiProvider } from "tamagui";

import Index from "./src/screens/Index";

export default function App() {
  return (
    <TamaguiProvider config={tamaguiConfig}>
      <Index />
    </TamaguiProvider>
  );
}
