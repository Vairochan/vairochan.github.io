import { useEffect } from 'react';

const useRevealOnScroll = () => {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = 'running';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    reveals.forEach(reveal => {
      reveal.style.animationPlayState = 'paused';
      observer.observe(reveal);
    });

    return () => observer.disconnect();
  }, []);
};

export default useRevealOnScroll;
