import { onCLS, onFID, onFCP, onLCP, onTTFB, ReportCallback } from 'web-vitals';

const reportWebVitals = (onPerfEntry?: ReportCallback) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    // Llamada directa a las funciones de web-vitals
    onCLS(onPerfEntry);
    onFCP(onPerfEntry);
    onFCP(onPerfEntry);
    onLCP(onPerfEntry);
    onTTFB(onPerfEntry);

  }
};