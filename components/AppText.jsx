import { StyleSheet, Text } from "react-native"; // Import TextProps for better typing (optional if using TypeScript)
import { Colors } from "../util/Colors";

const defaultStyles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: Colors.light.text,
  },
});

export default function AppText({ children, style, onPress, selectable }) {
  const combinedStyles = [defaultStyles.text, style];
  return (
    <Text style={combinedStyles} onPress={onPress} selectable={selectable}>
      {children}
    </Text>
  );
}
