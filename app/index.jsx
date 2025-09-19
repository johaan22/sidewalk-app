import { useMicrophonePermissions } from "expo-camera";
import { View } from "react-native";
import AppButton from "../components/AppButton";
import AppView from "../components/AppView";
import { useFeature } from "../contexts/FeatureContext";

export default function Index() {
  const { joinRoom, leaveRoom, toggleMic } = useFeature();
  const [status, requestPermission] = useMicrophonePermissions();

  return (
    <AppView>
      <View style={{ gap: 40 }}>
        <AppButton onPress={requestPermission}>1. Request Mic Perms</AppButton>
        <AppButton onPress={joinRoom}>2. Join Room</AppButton>
        <AppButton onPress={leaveRoom}>3. Leave Room</AppButton>
        <AppButton onPress={toggleMic}>4. Toggle Mic</AppButton>
      </View>
    </AppView>
  );
}
