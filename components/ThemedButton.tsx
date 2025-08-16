import { Colors } from "@/constants/Colors";
import { Pressable, StyleSheet } from "react-native";

const ThemedButton = ({...props }) => {
  return (
    <Pressable style={({ pressed }) => [styles.button, pressed && styles.pressed]}
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
    minWidth: 120,
  },
  pressed: {
    opacity: 0.7,
  },
});