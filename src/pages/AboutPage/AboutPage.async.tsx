import { lazy } from 'react';

export const AboutPageAsync = lazy(() => new Promise(resolve => {
  // @ts-ignore
  // ТОЛЬКО ДЛЯ ТЕСТА, А НЕ ДЛЯ РЕАЛЬНЫХ ПРОЕКТОВ
  setTimeout(() => resolve(import('./AboutPage')), 1500);
}));
