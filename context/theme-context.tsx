'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

export type Theme = 'emerald' | 'glass' | 'neo' | 'neumorph' | 'japandi';

export const THEMES: { id: Theme; label: string }[] = [
  { id: 'emerald', label: 'Emerald' },
  { id: 'glass', label: 'Glassmorphism' },
  { id: 'neo', label: 'Neobrutalism' },
  { id: 'neumorph', label: 'Neumorphism' },
  { id: 'japandi', label: 'Japandi' },
];

interface ThemeContextValue {
  theme: Theme;
  setTheme: (t: Theme) => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('emerald');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('theme') as Theme | null;
    if (stored && THEMES.some((t) => t.id === stored)) {
      setThemeState(stored);
      document.documentElement.setAttribute('data-theme', stored);
    } else {
      document.documentElement.setAttribute('data-theme', 'emerald');
    }
    setMounted(true);
  }, []);

  const setTheme = (t: Theme) => {
    setThemeState(t);
    localStorage.setItem('theme', t);
    document.documentElement.setAttribute('data-theme', t);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {/* Avoid flash of wrong theme on first paint */}
      <div style={{ visibility: mounted ? 'visible' : 'hidden' }}>{children}</div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
}