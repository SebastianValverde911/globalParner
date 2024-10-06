import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../../components/exploreContainer/ExploreContainer';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Desarrollador</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Sebastian Valverde</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className='data-dev'>
          <p>Juan Sebastian Valverde Hernandez</p>
          <p>juansebas_9711@hotmail.com</p>
          <p>315-927-3467</p>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
