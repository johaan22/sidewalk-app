import * as Haptics from "expo-haptics";
import { Pressable, StyleSheet } from "react-native";
import { Colors } from "../util/Colors";
import AppText from "./AppText";

const defaultStyles = StyleSheet.create({
  button: {
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 10,
    backgroundColor: Colors.light.text,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default function AppButton({ children, onPress, disabled, style }) {
  const combinedStyles = [defaultStyles.button, style];
  return (
    <Pressable
      onPress={async () => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Soft);
        await onPress();
      }}
      style={combinedStyles}
      disabled={disabled}
    >
      <AppText
        style={{
          fontSize: 16,
          textAlign: "center",
          color: Colors.light.background,
        }}
      >
        {children}
      </AppText>
    </Pressable>
  );
}
