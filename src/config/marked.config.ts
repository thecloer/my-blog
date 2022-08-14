import type { LanguageFn } from 'highlight.js';
import { marked } from 'marked';
import hljs from 'highlight.js/lib/core';

/**
 * - highlightjs API Docs
 * https://highlightjs.readthedocs.io/en/latest/api.html
 *
 * - marked API Docs
 * https://marked.js.org/using_advanced
 * https://marked.js.org/using_pro#extensions
 *
 * - marked markdown spec
 * https://spec.commonmark.org/0.30/
 *
 * - tailwind configuration reference
 * https://tailwindcss.com/docs/theme#configuration-reference
 */

const markedConfig = () => {
  // languages
  const importedLanguages: Record<string, LanguageFn> = {
    json: require('highlight.js/lib/languages/json'),
    javascript: require('highlight.js/lib/languages/javascript'),
    typescript: require('highlight.js/lib/languages/typescript'),
    bash: require('highlight.js/lib/languages/bash'),
    markdown: require('highlight.js/lib/languages/markdown'),
    css: require('highlight.js/lib/languages/css'),
    xml: require('highlight.js/lib/languages/xml'),
    sql: require('highlight.js/lib/languages/sql'),
  };

  const languages = new Map<string, LanguageFn>(
    Object.entries({
      json: importedLanguages.json,
      javascript: importedLanguages.javascript,
      js: importedLanguages.javascript,
      typescript: importedLanguages.typescript,
      ts: importedLanguages.typescript,
      bash: importedLanguages.bash,
      markdown: importedLanguages.markdown,
      md: importedLanguages.markdown,
      css: importedLanguages.css,
      xml: importedLanguages.xml,
      html: importedLanguages.xml,
      sql: importedLanguages.sql,
    })
  );

  for (const [lan, lanFn] of languages) {
    hljs.registerLanguage(lan, lanFn);
  }
  marked.setOptions({
    highlight: function (code, language) {
      return languages.has(language) ? hljs.highlight(code, { language }).value : hljs.highlightAuto(code).value;
    },
  });

  return marked;
};

export const customMarked = markedConfig();
