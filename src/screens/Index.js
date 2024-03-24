import { useState, useEffect } from "react";

import { YStack } from "tamagui";

import Counter from "../components/Counter";

export default Index = () => {
  const [damacana, setDamacana] = useState(() => {
    const saved = localStorage.getItem("damacana");
    const initialValue = JSON.parse(saved);
    return initialValue || 0;
  });
  const [surahi, setSurahi] = useState(() => {
    const saved = localStorage.getItem("surahi");
    const initialValue = JSON.parse(saved);
    return initialValue || 0;
  });

  useEffect(() => {
    localStorage.setItem("damacana", JSON.stringify(damacana));
  }, [damacana]);

  useEffect(() => {
    if (surahi >= 10) {
      setDamacana(damacana + 1);
      setSurahi(0);
    }
    localStorage.setItem("surahi", JSON.stringify(surahi));
  }, [surahi]);

  return (
    <YStack flex={1} gap="$3" alignItems="center" alignSelf="center">
      <Counter label="Damacana" value={damacana} setValue={setDamacana} />
      <Counter label="Sürahi" value={surahi} setValue={setSurahi} />
    </YStack>
  );
};
