import React, { useEffect, useState } from 'react';
import {useIonLoading ,IonLoading, useIonToast, IonCardContent, IonCardSubtitle,IonCardTitle,IonCardHeader, IonCard,IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonList, IonItem, IonLabel } from '@ionic/react';
import { useWishlist } from '../../hooks/WishList';
import axios from 'axios';

interface Product {
  id: number;
  title: string;
  price: number;
  images:[''];
  creationAt: string;
  description: string;
}

const Tab1: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const { addToWishlist } = useWishlist();
  const [present] = useIonToast();
  const [noti,setNoti] = useState<boolean>(true);

  useEffect(() => {
    setNoti(true);
    
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://api.escuelajs.co/api/v1/products');
        setProducts(response.data);
        
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setNoti(false);
    }
    };
    fetchProducts();
  }, []);

  const handleClickButtonAdd = (product: Product) => {
    present({
      message: 'Producto agregado a la lista de deseos!',
      duration: 1500,
      position: 'bottom',
    });

    addToWishlist(product);
  }

  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Productos</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {noti ? 
          (
            <IonLoading  isOpen={noti} message="Cargando productos..." duration={3000} />
          ):(
            <IonList>
              {products.map(product => (
                <IonCard key={product.id}>
                  <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
                  {/* <img alt="Silhouette of mountains" src={JSON.parse(product.images[0])[0]} /> */}
                  <IonCardHeader>
                    <IonCardTitle>{product.title}</IonCardTitle>
                    <IonCardSubtitle>{product.description}</IonCardSubtitle>
                  </IonCardHeader>
            
                  <IonCardContent>Precio: {product.price}</IonCardContent>
                  <IonButton expand="block" onClick={() => handleClickButtonAdd(product)}>Añadir a Deseados</IonButton>
                </IonCard>
              ))}
            </IonList>
          )
        }
        
      </IonContent>
    </>
  );
};

export default Tab1;