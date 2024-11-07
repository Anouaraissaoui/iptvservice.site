import { getCLS, getFID, getLCP } from 'web-vitals';

export const reportWebVitals = () => {
  getCLS(console.log);
  getFID(console.log);
  getLCP(console.log);
};

export const measureTTFB = () => {
  const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
  return navigation.responseStart - navigation.requestStart;
};

export const measureFCP = () => {
  const paint = performance.getEntriesByType('paint')
    .find(entry => entry.name === 'first-contentful-paint');
  return paint ? paint.startTime : null;
};