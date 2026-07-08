const postModules = import.meta.glob('../posts/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
});

const METADATA_LINE = /^(title|slug|date|tag|color|excerpt)\s*:/i;

function normalizeMarkdownSource(content) {
  if (typeof content !== 'string') return '';

  if (content.includes('\u0000')) {
    const bytes = Uint8Array.from(content, (char) => char.charCodeAt(0));
    const even = bytes.filter((_, index) => index % 2 === 0);
    return new TextDecoder('utf-16le').decode(even);
  }

  return content.replace(/^\uFEFF/, '');
}

function parseFrontmatter(content) {
  const normalized = normalizeMarkdownSource(content).replace(/\r\n/g, '\n');
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
  const match = normalized.match(frontmatterRegex);

  if (!match) {
    return { data: {}, content: normalized };
  }

  const data = {};
  match[1].split('\n').forEach((line) => {
    const colonIndex = line.indexOf(':');
    if (colonIndex > 0) {
      const key = line.slice(0, colonIndex).trim();
      let value = line.slice(colonIndex + 1).trim();
      value = value.replace(/^["']|["']$/g, '');
      data[key] = value;
    }
  });

  return { data, content: match[2] };
}

export function humanizeSlug(slug) {
  return slug
    .split('-')
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export function stripMarkdown(text) {
  return text
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/\*([^*]+)\*/g, '$1')
    .replace(/_{1,2}([^_]+)_{1,2}/g, '$1');
}

function isMetadataParagraph(paragraph) {
  const trimmed = paragraph.trim();
  if (!trimmed || trimmed === '---') return true;

  const lines = trimmed.split('\n').map((line) => line.trim()).filter(Boolean);
  return lines.length > 0 && lines.every((line) => line === '---' || METADATA_LINE.test(line));
}

export function getPostPreviewParagraphs(post, max = 2) {
  const paragraphs = [];
  const excerptPlain = post.excerpt ? stripMarkdown(post.excerpt) : '';

  const contentParagraphs = post.content
    .split(/\n\n+/)
    .map((paragraph) => paragraph.trim())
    .filter((paragraph) => paragraph && !paragraph.startsWith('#') && !paragraph.startsWith('***'))
    .filter((paragraph) => !isMetadataParagraph(paragraph));

  for (const paragraph of contentParagraphs) {
    if (paragraphs.length >= max) break;
    const plain = stripMarkdown(paragraph);
    if (!plain || plain === excerptPlain || paragraphs.includes(plain)) continue;
    paragraphs.push(plain);
  }

  return paragraphs.slice(0, max);
}

export function getAllPosts() {
  const posts = Object.entries(postModules).map(([filepath, content]) => {
    const { data, content: markdown } = parseFrontmatter(content);
    const filename = filepath.split('/').pop().replace('.md', '');
    const slug = data.slug || filename;

    return {
      slug,
      title: data.title || humanizeSlug(slug),
      date: data.date || new Date().toISOString().split('T')[0],
      tag: data.tag || 'Article',
      color: data.color || 'bg-cmyk-black',
      excerpt: data.excerpt || '',
      content: markdown,
      frontmatter: data,
    };
  });

  return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getPostBySlug(slug) {
  return getAllPosts().find((post) => post.slug === slug);
}
