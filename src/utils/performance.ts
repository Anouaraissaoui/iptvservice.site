import { onCLS, onFID, onLCP } from 'web-vitals';

export const reportWebVitals = () => {
  onCLS(console.log);
  onFID(console.log);
  onLCP(console.log);
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