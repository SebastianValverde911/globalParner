import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface Product {
    id: number;
    title: string;
    price: number;
    images:[''];
    creationAt: string;
    description: string;
}

interface WishlistContextType {
  wishlist: Product[];
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (product: Product) => void;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const WishlistProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [wishlist, setWishlist] = useState<Product[]>([]);

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    setWishlist(storedWishlist);
  }, []);

  const addToWishlist = (product: Product) => {
    setWishlist((prev) => {
      const updatedWishlist = [...prev, product];
      localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
      return updatedWishlist;
    });
  };

  const removeFromWishlist = (product: Product) => {
    setWishlist((prev) => {
      const updatedWishlist = prev.filter(item => item.id !== product.id);
      localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
      return updatedWishlist;
    });
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = (): WishlistContextType => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};
