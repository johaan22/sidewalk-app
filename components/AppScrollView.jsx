import { SafeAreaView, ScrollView, StyleSheet } from "react-native"; // Import TextProps for better typing (optional if using TypeScript)
import { Colors } from "../util/Colors";

const defaultStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default function AppScrollView({ children, style }) {
  const combinedStyles = [defaultStyles.container, style];
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.light.background }}>
      <ScrollView style={combinedStyles}>{children}</ScrollView>
    </SafeAreaView>
  );
}
