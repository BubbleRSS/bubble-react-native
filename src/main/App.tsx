import '../../gesture-handler';

import { ReactElement } from "react";
import { registerRootComponent } from 'expo';
import { Router } from '@/presentation/components/Router';

function App(): ReactElement {
  return (
    <Router />
  )
}

registerRootComponent(App);
