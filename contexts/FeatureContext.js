import { useRealtimeKitClient } from "@cloudflare/realtimekit-react-native";
import { createContext, useContext, useEffect } from "react";

const FeatureContext = createContext(undefined);

export const FeatureProvider = ({ children }) => {
  const [meeting, initMeeting] = useRealtimeKitClient();

  useEffect(() => {
    const init = async () => {
      initMeeting({
        authToken:
          "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJvcmdJZCI6Ijk3NDdjNmI0LWEzNTktNGU3Ny04MGY0LTMzODA2NTQzNGI5NCIsIm1lZXRpbmdJZCI6ImJiYjA0MjFlLWIyZTQtNDllOC1iZjYxLTk2OWZhNWQ2YjgyNiIsInBhcnRpY2lwYW50SWQiOiJhYWFlZDgzMS1lMmQ0LTQ2NGYtOTYyYS03ZDQzMDc4ZWEyNzkiLCJwcmVzZXRJZCI6ImFmZmEwZDI5LTllOTUtNGQ1ZC1hNWNjLTk0Mzc1Y2U4ODUyZiIsImlhdCI6MTc1ODI5NTQxNywiZXhwIjoxNzY2OTM1NDE3fQ.BHr9m4QyfTrrd6sIxeph9W8NbJ5AGwhUKmusau4NyttenRd3U7zrd7WajtOZ3cXPTJUiiknKR40W16oZr4ohxDDl5OGgdWvvAg40t0I-6p8YZ-qzBl5mga6fnt3vLzMNtFslyjxCF__65wk7wGVLhGZn8JFLh0HnH9YNigfuVY1zp-pXhZCeG4ZwQ7rEp-fqZts6Kx0Zau6GYcmppFqxdau_gz4lukMHrrbIVxQhjI6gSflCIbJ1bk4gMZZp8vuX16vma1g0-5zLJXDphoSHmVQ6_fjkAGomTREqO4oS7Qj0iKY8v2AXChy2vP8AhORcrroWLcZPBD6yGz0H8g4UFw",
        defaults: {
          audio: true,
          video: false,
        },
      });
    };
    init();
  }, []);

  const toggleMic = async () => {
    try {
      if (meeting.self.audioEnabled) await meeting.self.disableAudio();
      else await meeting.self.enableAudio();
    } catch (error) {
      console.log("toggleMic error: ", error);
    }
  };
  const joinRoom = async () => {
    try {
      if (meeting) await meeting.joinRoom();
    } catch (error) {
      console.log("joinRoom error: ", error);
    }
  };
  const leaveRoom = async () => {
    try {
      if (meeting) await meeting.leaveRoom();
    } catch (error) {
      console.log("leaveRoom error: ", error);
    }
  };

  const value = {
    meeting,
    toggleMic,
    joinRoom,
    leaveRoom,
  };

  return (
    <FeatureContext.Provider value={value}>{children}</FeatureContext.Provider>
  );
};

export const useFeature = () => {
  const context = useContext(FeatureContext);
  if (context === undefined) {
    throw new Error("useFeature must be used within a FeatureProvider");
  }
  return context;
};
