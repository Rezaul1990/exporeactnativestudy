import { useMemo } from 'react';
import { useAuthStore } from '@/store/useAuthStore';
import { isToday, parseISO } from 'date-fns';

export const useTodayClasses = () => {
  const sevenDaysClasses = useAuthStore((state) => state.sevenDaysClasses) || [];

  const { todayClasses, courseCount } = useMemo(() => {
    const todayList = [];
    let courseCount = 0;

    for (const cls of sevenDaysClasses) {
      const dateStr = cls.ClassDate1 || cls.ClassStart;
      if (dateStr && isToday(parseISO(dateStr))) {
        todayList.push(cls);
      }

      if (cls.Course === true) {
        courseCount++;
      }
    }

    return {
      todayClasses: todayList,
      courseCount,
    };
  }, [sevenDaysClasses]);

  return {
    todayClasses,
    count: todayClasses.length,
    courseCount,
  };
};
