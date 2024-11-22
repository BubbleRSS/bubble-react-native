import '../../gesture-handler';

import { ReactElement } from "react";
import { registerRootComponent } from 'expo';
import { Router } from '@/presentation/components/Router';
import { DatabaseProvider } from '@/presentation/components';

function App(): ReactElement {
  return (
    <DatabaseProvider>
      <Router />
    </DatabaseProvider>
  )
}

registerRootComponent(App);
