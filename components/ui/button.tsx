import { Pressable, Text } from "react-native";

interface PressableProps {
  onPress: () => void;
  text: string;
}

const Button_Component = ({ onPress, text }: PressableProps) => {
  return (
    <Pressable onPress={onPress} className="bg-primary rounded-xl px-5 py-3">
      <Text className="text-white text-sm font-medium">{text}</Text>
    </Pressable>
  );
};

export default Button_Component;
