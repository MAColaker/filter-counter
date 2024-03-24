import { useState, useEffect } from "react";

import { XStack, YStack, XGroup, Button, Label, Input } from "tamagui";

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
    <YStack fullscreen gap="$3" alignItems="center" alignSelf="center">
      <XStack gap="$4">
        <Label>Damacana</Label>
        <XGroup>
          <XGroup.Item>
            <Button
              onPress={() => {
                setDamacana(damacana - 1);
              }}
            >
              -
            </Button>
          </XGroup.Item>
          <XGroup.Item>
            <Input
              value={damacana}
              onChange={(e) => setDamacana(e.target.value)}
            />
          </XGroup.Item>
          <XGroup.Item>
            <Button
              onPress={() => {
                setDamacana(damacana + 1);
              }}
            >
              +
            </Button>
          </XGroup.Item>
        </XGroup>
      </XStack>
      <XStack gap="$4">
        <Label>Sürahi</Label>
        <XGroup>
          <XGroup.Item>
            <Button
              onPress={() => {
                setSurahi(surahi - 1);
              }}
            >
              -
            </Button>
          </XGroup.Item>
          <XGroup.Item>
            <Input value={surahi} onChange={(e) => setSurahi(e.target.value)} />
          </XGroup.Item>
          <XGroup.Item>
            <Button
              onPress={() => {
                setSurahi(surahi + 1);
              }}
            >
              +
            </Button>
          </XGroup.Item>
        </XGroup>
      </XStack>
    </YStack>
  );
};
