import { lazy } from 'react';

export const MainPageAsync = lazy(() => new Promise(resolve => {
  // @ts-ignore
  // ТОЛЬКО ДЛЯ ТЕСТА, А НЕ ДЛЯ РЕАЛЬНЫХ ПРОЕКТОВ
  setTimeout(() => resolve(import('./MainPage')), 1500);
}));
