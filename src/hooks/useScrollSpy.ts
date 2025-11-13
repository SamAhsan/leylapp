import { useEffect, useState } from 'react';

const useScrollSpy = (ids: string[], offset = 0) => {
  const [activeId, setActiveId] = useState(ids[0]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    ids.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveId(id);
          }
        },
        {
          rootMargin: `-${offset}px 0px -60% 0px`,
          threshold: 0.2,
        },
      );
      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [ids, offset]);

  return activeId;
};

export default useScrollSpy;
