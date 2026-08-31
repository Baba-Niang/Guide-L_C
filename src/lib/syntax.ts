// Simple C syntax highlighter that returns HTML
export function highlightC(code: string): string {
  const keywords = new Set([
    'auto','break','case','char','const','continue','default','do',
    'double','else','enum','extern','float','for','goto','if',
    'int','long','register','return','short','signed','sizeof',
    'static','struct','switch','typedef','union','unsigned','void',
    'volatile','while'
  ]);
  const types = new Set(['int','float','double','char','void','long','short','unsigned','signed','FILE','size_t']);
  const builtins = new Set(['printf','scanf','fprintf','fscanf','fgets','fopen','fclose','malloc','calloc','realloc','free','strlen','strcpy','strcat','strcmp','assert','exit','sizeof','NULL','main']);

  const lines = code.split('\n');
  return lines.map(line => {
    let result = escapeHtml(line);

    // Comments
    if (result.includes('//')) {
      const idx = result.indexOf('//');
      result = result.substring(0, idx) + '<span class="syn-cm">' + result.substring(idx) + '</span>';
    }

    // Preprocessor
    if (/^\s*#/.test(result)) {
      result = '<span class="syn-prep">' + result + '</span>';
      return result;
    }

    // Strings
    result = result.replace(/"([^"]*)"/g, '<span class="syn-str">"$1"</span>');

    // Numbers
    result = result.replace(/\b(\d+\.?\d*[fFlL]?)\b/g, '<span class="syn-num">$1</span>');

    // Types
    types.forEach(t => {
      result = result.replace(new RegExp('\\b' + t + '\\b', 'g'), '<span class="syn-type">$&</span>');
    });

    // Keywords
    keywords.forEach(kw => {
      result = result.replace(new RegExp('\\b' + kw + '\\b', 'g'), '<span class="syn-kw">$&</span>');
    });

    // Builtins
    builtins.forEach(fn => {
      result = result.replace(new RegExp('\\b' + fn + '\\b', 'g'), '<span class="syn-fn">$&</span>');
    });

    // Include angle brackets
    result = result.replace(/(&lt;[^&]*&gt;)/g, '<span class="syn-inc">$1</span>');

    return result;
  }).join('\n');
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
