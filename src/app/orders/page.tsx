'use client';

import React from 'react';
import { useOrders } from '@/context/OrderContext';
import { formatPrice } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ShoppingBag } from 'lucide-react';
import Link from 'next/link';

const statusColors = {
  pending: 'bg-yellow-500',
  processing: 'bg-blue-500',
  shipped: 'bg-purple-500',
  delivered: 'bg-green-500',
  cancelled: 'bg-red-500',
};

export default function OrdersPage() {
  const { orders, cancelOrder } = useOrders();

  if (orders.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
        <ShoppingBag className="w-16 h-16 text-gray-400" />
        <h1 className="text-2xl font-semibold text-gray-900">No orders yet</h1>
        <p className="text-gray-500">Start shopping to create your first order!</p>
        <div className="w-fit">
          <Link href="/" className="block">
            <Button>Browse Products</Button>
          </Link>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">Your Orders</h1>
      <div className="grid gap-6">
        {orders.map((order) => (
          <Card key={order.id} className="w-full">
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle>Order #{order.id}</CardTitle>
                  <CardDescription>{formatDate(order.date)}</CardDescription>
                </div>
                <Badge className={statusColors[order.status]}>
                  {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[200px] rounded-md border p-4">
                {order.items.map((item, index) => (
                  <div key={item.id}>
                    <div className="flex justify-between py-2">
                      <div className="flex gap-4">
                        <div className="w-16 h-16">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover rounded"
                          />
                        </div>
                        <div>
                          <p className="font-medium">{item.name}</p>
                          <p className="text-sm text-gray-500">
                            Quantity: {item.quantity}
                          </p>
                        </div>
                      </div>
                      <p className="font-medium">
                        {formatPrice(item.price * item.quantity)}
                      </p>
                    </div>
                    {index < order.items.length - 1 && <Separator className="my-2" />}
                  </div>
                ))}
              </ScrollArea>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
              <div className="text-lg font-semibold">
                Total: {formatPrice(order.total)}
              </div>
              {order.status === 'pending' && (
                <Button
                  variant="destructive"
                  onClick={() => cancelOrder(order.id)}
                >
                  Cancel Order
                </Button>
              )}
              {order.trackingNumber && (
                <div className="text-sm text-gray-500">
                  Tracking: {order.trackingNumber}
                </div>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
} 