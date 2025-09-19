import { SafeAreaView, StyleSheet, View } from "react-native";
import { Colors } from "../util/Colors";

const defaultStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

const AppView = ({ children, style }) => {
  const combinedStyles = [defaultStyles.container, style];
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.light.background }}>
      <View style={combinedStyles}>{children}</View>
    </SafeAreaView>
  );
};

export default AppView;
