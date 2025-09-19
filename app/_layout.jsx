import { FeatureProvider } from "../contexts/FeatureContext";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <FeatureProvider>
      <Stack />
    </FeatureProvider>
  );
}
