const postModules = import.meta.glob('../posts/*.md', { 
  query: '?raw',
  import: 'default',
  eager: true 
});

function parseFrontmatter(content) {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
  const match = content.match(frontmatterRegex);
  
  if (!match) {
    return { data: {}, content };
  }
  
  const frontmatterText = match[1];
  const markdown = match[2];
  
  const data = {};
  frontmatterText.split('\n').forEach(line => {
    const colonIndex = line.indexOf(':');
    if (colonIndex > 0) {
      const key = line.slice(0, colonIndex).trim();
      let value = line.slice(colonIndex + 1).trim();
      
      value = value.replace(/^["']|["']$/g, '');
      
      data[key] = value;
    }
  });
  
  return { data, content: markdown };
}

export function getAllPosts() {
  const posts = Object.entries(postModules).map(([filepath, content]) => {
    const { data, content: markdown } = parseFrontmatter(content);
    
    const filename = filepath.split('/').pop().replace('.md', '');
    
    return {
      slug: data.slug || filename,
      title: data.title || 'Untitled',
      date: data.date || new Date().toISOString().split('T')[0],
      tag: data.tag || 'Article',
      color: data.color || 'bg-cmyk-black',
      excerpt: data.excerpt || '',
      content: markdown,
      frontmatter: data
    };
  });

  return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getPostBySlug(slug) {
  const posts = getAllPosts();
  return posts.find(post => post.slug === slug);
}
