import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { cartOutline, listOutline, personOutline } from 'ionicons/icons';
import Tab1 from './pages/tab1/Tab1';
import Tab2 from './pages/tab2/Tab2';
import Tab3 from './pages/tab3/Tab3';
import { WishlistProvider } from './hooks/WishList';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <WishlistProvider>
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/tab1">
              <Tab1 />
            </Route>
            <Route exact path="/tab2">
              <Tab2 />
            </Route>
            <Route path="/tab3">
              <Tab3 />
            </Route>
            <Route exact path="/">
              <Redirect to="/tab1" />
            </Route>
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="tab1" href="/tab1">
              <IonIcon aria-hidden="true" icon={cartOutline} />
              <IonLabel>Productos</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab2" href="/tab2">
              <IonIcon aria-hidden="true" icon={listOutline} />
              <IonLabel>Lista deseos</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab3" href="/tab3">
              <IonIcon aria-hidden="true" icon={personOutline} />
              <IonLabel>Info</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  </WishlistProvider>
);

export default App;
