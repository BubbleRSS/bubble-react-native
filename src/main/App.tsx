import { ReactElement } from "react";
import { PaperProvider } from "react-native-paper";
import { Router } from "@/presentation/components/Router";
import '../../gesture-handler';

export default function App(): ReactElement {
  return (
    <PaperProvider>
      <Router />
    </PaperProvider>
  )
}
