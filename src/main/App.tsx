import '../../gesture-handler';
import { Router } from "@/presentation/components";
import { PaperProvider } from "react-native-paper";

export default function App(): JSX.Element {
  return (
    <PaperProvider>
      <Router />
    </PaperProvider>
  )
}
