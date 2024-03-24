import { XStack, XGroup, Button, Label, Input } from "tamagui";

export default Counter = ({ label, value, setValue }) => {
  const buttonPress = (isAdd) => {
    if (isAdd) {
      setValue(value + 1);
    } else {
      setValue(value - 1);
    }
  };

  return (
    <XStack gap="$4">
      <Label>{label}</Label>
      <XGroup>
        <XGroup.Item>
          <Button onPress={() => buttonPress(false)}>-</Button>
        </XGroup.Item>
        <XGroup.Item>
          <Input
            value={value}
            onChange={(e) => setValue(Number(e.target.value))}
          />
        </XGroup.Item>
        <XGroup.Item>
          <Button onPress={() => buttonPress(true)}>+</Button>
        </XGroup.Item>
      </XGroup>
    </XStack>
  );
};
