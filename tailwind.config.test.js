import { describe, it, expect } from 'vitest';
import tailwindConfig from './tailwind.config.js';

describe('Tailwind CSS Configuration', () => {
  it('should have darkMode defined', () => {
    expect(tailwindConfig).toHaveProperty('darkMode');
  });

  it('should have content paths defined', () => {
    expect(tailwindConfig).toHaveProperty('content');
    expect(tailwindConfig.content).toContain('./index.html');
    expect(tailwindConfig.content).toContain('./src/**/*.{ts,tsx,js,jsx}');
  });

  it('should have theme extend defined', () => {
    expect(tailwindConfig).toHaveProperty('theme.extend');
  });

  it('should have borderRadius defined in theme extend', () => {
    expect(tailwindConfig.theme.extend).toHaveProperty('borderRadius');
    expect(tailwindConfig.theme.extend.borderRadius).toHaveProperty('lg');
    expect(tailwindConfig.theme.extend.borderRadius).toHaveProperty('md');
    expect(tailwindConfig.theme.extend.borderRadius).toHaveProperty('sm');
  });

  it('should have colors defined in theme extend', () => {
    expect(tailwindConfig.theme.extend).toHaveProperty('colors');
    expect(tailwindConfig.theme.extend.colors).toHaveProperty('background');
    expect(tailwindConfig.theme.extend.colors).toHaveProperty('foreground');
    expect(tailwindConfig.theme.extend.colors).toHaveProperty('card');
    expect(tailwindConfig.theme.extend.colors).toHaveProperty('popover');
    expect(tailwindConfig.theme.extend.colors).toHaveProperty('primary');
    expect(tailwindConfig.theme.extend.colors).toHaveProperty('secondary');
    expect(tailwindConfig.theme.extend.colors).toHaveProperty('muted');
    expect(tailwindConfig.theme.extend.colors).toHaveProperty('accent');
    expect(tailwindConfig.theme.extend.colors).toHaveProperty('destructive');
    expect(tailwindConfig.theme.extend.colors).toHaveProperty('border');
    expect(tailwindConfig.theme.extend.colors).toHaveProperty('input');
    expect(tailwindConfig.theme.extend.colors).toHaveProperty('ring');
    expect(tailwindConfig.theme.extend.colors).toHaveProperty('chart');
  });

  it('should have plugins defined', () => {
    expect(tailwindConfig).toHaveProperty('plugins');
    expect(tailwindConfig.plugins).toContain(require("tailwindcss-animate"));
  });
});