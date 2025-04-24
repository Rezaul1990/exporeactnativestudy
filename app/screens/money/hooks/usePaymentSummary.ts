// hooks/usePaymentSummary.ts
import { useAuthStore } from '@/store/useAuthStore';

export default function usePaymentSummary() {
  const sevenDaysClasses = useAuthStore((state) => state.sevenDaysClasses) || [];

  const now = new Date();
  const oneMonthAgo = new Date();
  oneMonthAgo.setMonth(now.getMonth() - 1);

  let paid = 0;
  let outstanding = 0;

  sevenDaysClasses.forEach((cls) => {
    const classDate = new Date(cls.ClassDate1);
    const isWithinRange = classDate >= oneMonthAgo && classDate <= now;

    if (isWithinRange) {
      const cost = Number(cls.Cost) || 0;

      if (cls.PaymentStatus === 'Free') {
        paid += cost;
      } else if (cls.PaymentStatus === 'Unpaid') {
        outstanding += cost;
      }
    }
  });

  return { paid, outstanding };
}
