import * as Burnt from "burnt";
import * as AppleAuthentication from "expo-apple-authentication";
import * as Haptics from "expo-haptics";
import { useState } from "react";
import { View } from "react-native";
import { useAuth } from "../contexts/AuthContext";

const AppleLoginButton = () => {
  const { signInWithApple } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const onPress = async () => {
    try {
      if (isLoading) return;
      setIsLoading(true);
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Soft);
      const credential = await AppleAuthentication.signInAsync({
        requestedScopes: [
          AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
          AppleAuthentication.AppleAuthenticationScope.EMAIL,
        ],
      });
      console.log("Apple credential: ", credential);
      if (credential.identityToken) {
        console.log(credential.identityToken);
        await signInWithApple(credential.identityToken, credential.fullName);
      }
    } catch (error) {
      if (error.code === "ERR_FAILED") {
        // An error occurred
        Burnt.toast({
          title: "Login Error",
          preset: "error",
          message: "Apple login failed.",
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View
      style={{
        alignItems: "center",
      }}
    >
      <AppleAuthentication.AppleAuthenticationButton
        buttonType={AppleAuthentication.AppleAuthenticationButtonType.CONTINUE} // Or SIGN_IN
        buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.WHITE}
        cornerRadius={10}
        style={{
          width: 250,
          height: 48,
        }}
        onPress={onPress}
      />
    </View>
  );
};

export default AppleLoginButton;
