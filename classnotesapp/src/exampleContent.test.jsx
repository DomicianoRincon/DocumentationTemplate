import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import fs from 'node:fs';
import path from 'node:path';
import { ThemeProvider } from '@/theme/ThemeContext';

vi.mock('@/components/BeanVisualizer/BeanVisualizer', () => ({
  default: ({ initialCode }) => <div data-testid="bean-visualizer">{initialCode}</div>,
}));
vi.mock('@/components/lesson/MermaidBlock', () => ({
  default: ({ chart }) => <div data-testid="mermaid-block">{chart}</div>,
}));

import LessonParser from '@/components/lesson/LessonParser';

const CONTENT_DIR = path.resolve(__dirname, '../../content');
const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith('.md'));

describe('Template example course renders without errors', () => {
  it('found the 3 example lesson files', () => {
    expect(files.length).toBe(3);
  });

  for (const file of files) {
    it(`renders ${file}`, () => {
      const content = fs.readFileSync(path.join(CONTENT_DIR, file), 'utf8');
      const { elements, lessonTitle, subtitles } = LessonParser({ content });
      expect(lessonTitle).toBeTruthy();
      let consoleErrors = [];
      const originalError = console.error;
      console.error = (...args) => { consoleErrors.push(args.join(' ')); };
      try {
        render(<ThemeProvider>{elements}</ThemeProvider>);
      } finally {
        console.error = originalError;
      }
      if (consoleErrors.length) {
        throw new Error(`${file} (title: ${lessonTitle}) produced console errors:\n${consoleErrors.join('\n')}`);
      }
      // sanity: every heading became a real subtitle entry with a matching id in the DOM
      subtitles.forEach((s) => {
        expect(document.getElementById(s.id)).toBeTruthy();
      });
    });
  }

  it('renders the trycode DartPad tab from the interactive-code lesson', () => {
    const content = fs.readFileSync(path.join(CONTENT_DIR, '01-codigo-interactivo.md'), 'utf8');
    const { elements } = LessonParser({ content });
    render(<ThemeProvider>{elements}</ThemeProvider>);
    expect(screen.getByText('Fire it up!')).toBeTruthy();
  });
});
