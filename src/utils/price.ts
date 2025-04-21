// Convert USD to INR (using an approximate conversion rate)
const USD_TO_INR_RATE = 83;

export const formatPrice = (priceInUSD: number): string => {
  const priceInINR = priceInUSD * USD_TO_INR_RATE;
  
  // Format in Indian numbering system (with commas)
  const formattedPrice = priceInINR.toLocaleString('en-IN', {
    maximumFractionDigits: 0,
    style: 'currency',
    currency: 'INR'
  });

  return formattedPrice;
}; 