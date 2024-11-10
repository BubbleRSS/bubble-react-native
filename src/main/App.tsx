import { Router } from "@/presentation/components/Router";
import { PaperProvider } from "react-native-paper";

export default function App(): JSX.Element {
  return (
    <PaperProvider>
      <Router />
    </PaperProvider>
  )
}
