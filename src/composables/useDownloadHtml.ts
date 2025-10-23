import { cleanString } from '@/utils/cleanString';

export function useDownloadHtml() {
  function downloadHtml(title: string, description: string, h1Text: string, paragraph: string) {
    const htmlContent = `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="description" content="${cleanString(description)}">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${cleanString(title)}</title>
</head>
<body>
  <h1>${cleanString(h1Text)}</h1>
  <p>${cleanString(paragraph)}</p>
</body>
</html>`;

    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${cleanString(title || 'page')}.html`;
    a.click();
    URL.revokeObjectURL(url);
  }

  return { downloadHtml };
}
