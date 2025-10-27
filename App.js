import "react-native-gesture-handler";
import * as React from "react";
import { PaperProvider } from "react-native-paper";
import RootNavigator from "./src/navigation/RootNavigation";

export default function App() {
  return (
    <PaperProvider>
      <RootNavigator/>
    </PaperProvider>
  );
}
