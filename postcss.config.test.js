import { describe, it, expect } from 'vitest';
import postcssConfig from './postcss.config.js';

describe('PostCSS Configuration', () => {
  it('should have plugins defined', () => {
    expect(postcssConfig).toHaveProperty('plugins');
  });

  it('should include tailwindcss plugin', () => {
    expect(postcssConfig.plugins).toHaveProperty('tailwindcss');
  });

  it('should include autoprefixer plugin', () => {
    expect(postcssConfig.plugins).toHaveProperty('autoprefixer');
  });
});