import { Colors } from "@/constants/Colors";
import { Pressable, StyleSheet } from "react-native";

const ThemedButton = ({ children, onPress, ...props }) => {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => [styles.button, pressed && styles.pressed]}
    {...props}
    />
  );
};

export default ThemedButton;


const styles = StyleSheet.create({
  button: {
    padding: 18,
    borderRadius: 6,
    marginVertical: 10,
    backgroundColor: Colors.primary,
  },
  pressed: {
    opacity: 0.7,
  },
});