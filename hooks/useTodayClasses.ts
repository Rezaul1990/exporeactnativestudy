import { useMemo } from 'react';
import { useAuthStore } from '@/store/useAuthStore';
import { isToday, parseISO } from 'date-fns';

export const useTodayClasses = () => {
  const combinedData = useAuthStore((state) => state.combinedData);

  const todayClasses = useMemo(() => {
    if (!combinedData?.sevendaysclasses) return [];

    return combinedData.sevendaysclasses.filter((cls: any) =>
      isToday(parseISO(cls.startTime))
    );
  }, [combinedData]);

  return {
    todayClasses,
    count: todayClasses.length,
  };
};