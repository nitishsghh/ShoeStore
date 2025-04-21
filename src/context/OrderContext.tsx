'use client';

import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { CartItem } from '@/context/CartContext';

export interface OrderItem extends Omit<CartItem, 'id'> {
  id: string;
  orderId: string;
}

export interface Order {
  id: string;
  items: OrderItem[];
  total: number;
  date: string;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  shippingAddress?: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
  trackingNumber?: string;
}

interface OrderContextType {
  orders: Order[];
  addOrder: (items: CartItem[], total: number) => Promise<Order>;
  getOrder: (orderId: string) => Order | undefined;
  cancelOrder: (orderId: string) => void;
  updateOrderStatus: (orderId: string, status: Order['status']) => void;
  clearOrders: () => void;
}

const ORDERS_STORAGE_KEY = 'shoestore_orders';

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export function OrderProvider({ children }: { children: React.ReactNode }) {
  const [orders, setOrders] = useState<Order[]>(() => {
    if (typeof window !== 'undefined') {
      const savedOrders = localStorage.getItem(ORDERS_STORAGE_KEY);
      return savedOrders ? JSON.parse(savedOrders) : [];
    }
    return [];
  });

  // Save orders to localStorage whenever they change
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify(orders));
    }
  }, [orders]);

  const addOrder = useCallback(async (items: CartItem[], total: number): Promise<Order> => {
    const newOrder: Order = {
      id: `ORD-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      items: items.map(item => ({
        ...item,
        orderId: `ORD-${Date.now()}`,
        id: `${item.id}-${Date.now()}`
      })),
      total,
      date: new Date().toISOString(),
      status: 'pending'
    };

    setOrders(currentOrders => [newOrder, ...currentOrders]);
    return newOrder;
  }, []);

  const getOrder = useCallback((orderId: string) => {
    return orders.find(order => order.id === orderId);
  }, [orders]);

  const cancelOrder = useCallback((orderId: string) => {
    setOrders(currentOrders =>
      currentOrders.map(order =>
        order.id === orderId
          ? { ...order, status: 'cancelled' }
          : order
      )
    );
  }, []);

  const updateOrderStatus = useCallback((orderId: string, status: Order['status']) => {
    setOrders(currentOrders =>
      currentOrders.map(order =>
        order.id === orderId
          ? { ...order, status }
          : order
      )
    );
  }, []);

  const clearOrders = useCallback(() => {
    setOrders([]);
  }, []);

  return (
    <OrderContext.Provider
      value={{
        orders,
        addOrder,
        getOrder,
        cancelOrder,
        updateOrderStatus,
        clearOrders,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}

export function useOrders() {
  const context = useContext(OrderContext);
  if (context === undefined) {
    throw new Error('useOrders must be used within an OrderProvider');
  }
  return context;
} 