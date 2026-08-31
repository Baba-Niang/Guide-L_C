export interface ThemeConfig {
  name: string;
  emoji: string;
  color: 'green' | 'blue' | 'purple' | 'orange' | 'coral';
  h: number;
  s: string;
}

export const themes: ThemeConfig[] = [
  { name: 'Vert C', emoji: '\u{1f7e2}', color: 'green', h: 142, s: '71%' },
  { name: 'Bleu', emoji: '\u{1f535}', color: 'blue', h: 217, s: '91%' },
  { name: 'Violet', emoji: '\u{1f7e3}', color: 'purple', h: 270, s: '76%' },
  { name: 'Orange', emoji: '\u{1f7e0}', color: 'orange', h: 32, s: '95%' },
  { name: 'Corail', emoji: '\u{1f534}', color: 'coral', h: 6, s: '78%' },
];
