import React,{useState} from 'react';
import { IonSelectOption, IonSelect, IonItemDivider, IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonButton } from '@ionic/react';
import { useWishlist } from '../../hooks/WishList';
import './Tab2.css';

interface Product {
  id: number;
  title: string;
  price: number;
  images:[''];
  creationAt: string;
  description: string;
}

const Tab2: React.FC = () => {
  const { wishlist, removeFromWishlist } = useWishlist();
  const [sortCriteria, setSortCriteria] = useState<string>('name');

  const sortedWishlist = [...wishlist].sort((a: Product, b: Product) => {
    switch (sortCriteria) {
      case 'name':
        return a.title.localeCompare(b.title);
      case 'price':
        return a.price - b.price;
      case 'date':
        return new Date(b.creationAt).getTime() - new Date(a.creationAt).getTime(); 
      default:
        return 0;
    }
  });

  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Lista de Deseados</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      <IonItemDivider>Ordenar por</IonItemDivider>
        <IonItem>
          <IonLabel>Ordenar por:</IonLabel>
          <IonSelect
            value={sortCriteria}
            placeholder="Selecciona una opción"
            onIonChange={e => setSortCriteria(e.detail.value!)}
          >
            <IonSelectOption value="name">Nombre</IonSelectOption>
            <IonSelectOption value="price">Precio</IonSelectOption>
            <IonSelectOption value="date">Fecha Agregada</IonSelectOption>
          </IonSelect>
        </IonItem>
        {wishlist.length === 0 ? 
          (
            <>
              <div className='msg-no-products'>
                <p>No tiene productos en la lista</p>
              </div>
            </>
          ): 
          (
            <IonList>
            {sortedWishlist.map(product => (
                <IonCard key={product.id}>
                <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
                {/* <img alt="Silhouette of mountains" src={JSON.parse(product.images[0])[0]} /> */}
                <IonCardHeader>
                  <IonCardTitle>{product.title}</IonCardTitle>
                  <IonCardSubtitle>{new Date(product.creationAt).toLocaleDateString()}</IonCardSubtitle>
                </IonCardHeader>
          
                <IonCardContent>Precio: {product.price}</IonCardContent>
                <IonButton expand="block" onClick={() => removeFromWishlist(product)}>Eliminar</IonButton>
              </IonCard>
              ))
            }
            </IonList>
          )
        }
      </IonContent>
    </>
  );
};

export default Tab2;