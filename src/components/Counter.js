import { XStack, XGroup, Button, Label, Input } from "tamagui";
import { Plus, Minus } from "@tamagui/lucide-icons";

export default Counter = ({ label, value, setValue }) => {
  const buttonPress = (isAdd) => {
    if (isAdd) {
      setValue(value + 1);
    } else {
      setValue(value - 1);
    }
  };

  return (
    <XStack alignItems="center" gap="$4">
      <Label
        style={{
          fontFamily: "sans-serif",
          fontWeight: 700,
          fontSize: 20,
        }}
      >
        {label}
      </Label>
      <XGroup>
        <XGroup.Item>
          <Button icon={Minus} onPress={() => buttonPress(false)} />
        </XGroup.Item>
        <XGroup.Item>
          <Input
            width={"$5"}
            value={value}
            onChange={(e) => setValue(Number(e.target.value))}
          />
        </XGroup.Item>
        <XGroup.Item>
          <Button icon={Plus} onPress={() => buttonPress(true)} />
        </XGroup.Item>
      </XGroup>
    </XStack>
  );
};
