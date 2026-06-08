# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: home.spec.ts >> navigation links are present
- Location: tests\e2e\home.spec.ts:8:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('nav')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('nav')

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - complementary:
    - generic:
      - heading [level=2]: Drafts
      - button:
        - img
    - generic:
      - button:
        - img
        - text: New draft
    - generic:
      - list:
        - listitem:
          - generic:
            - button:
              - img
              - generic:
                - paragraph: Untitled draft
                - paragraph: Article · Just now
            - button:
              - img
    - generic:
      - paragraph: 1 draft saved locally
  - generic [ref=e4]:
    - banner [ref=e5]:
      - generic [ref=e7]:
        - generic [ref=e8]:
          - button "Open drafts sidebar" [ref=e9] [cursor=pointer]:
            - img [ref=e10]
          - heading "Blog Post Editor" [level=1] [ref=e14]
        - generic [ref=e15]:
          - generic [ref=e16]:
            - img [ref=e17]
            - text: Saved 4:34 PM
          - button "Preview" [ref=e19] [cursor=pointer]:
            - img [ref=e20]
            - text: Preview
          - button "Download .md" [ref=e23] [cursor=pointer]:
            - img [ref=e24]
            - text: Download .md
    - generic [ref=e29]:
      - generic [ref=e31]:
        - heading "Post Metadata" [level=2] [ref=e32]
        - generic [ref=e33]:
          - generic [ref=e34]:
            - generic [ref=e35]: Title
            - textbox "Enter post title..." [ref=e36]
          - generic [ref=e37]:
            - generic [ref=e38]: Slug
            - textbox "url-friendly-slug" [ref=e39]
            - paragraph [ref=e40]: Auto-generated from title
          - generic [ref=e41]:
            - generic [ref=e42]: Date
            - textbox [ref=e43]: 2026-06-08
          - generic [ref=e44]:
            - generic [ref=e45]: Tag
            - combobox [ref=e46]:
              - option "Article" [selected]
              - option "Startups"
              - option "Security"
              - option "IoT"
              - option "Development"
              - option "Tutorial"
              - option "Analysis"
              - option "Research"
          - generic [ref=e47]:
            - generic [ref=e48]: Color Theme
            - generic [ref=e49]:
              - button "Black" [ref=e50] [cursor=pointer]:
                - generic [ref=e51]: Black
              - button "Cyan" [ref=e52] [cursor=pointer]:
                - generic [ref=e53]: Cyan
              - button "Magenta" [ref=e54] [cursor=pointer]:
                - generic [ref=e55]: Magenta
              - button "Yellow" [ref=e56] [cursor=pointer]:
                - generic [ref=e57]: Yellow
              - button "Green" [ref=e58] [cursor=pointer]:
                - generic [ref=e59]: Green
              - button "Pink" [ref=e60] [cursor=pointer]:
                - generic [ref=e61]: Pink
            - paragraph [ref=e62]: "Selected: Black"
          - generic [ref=e63]:
            - generic [ref=e64]: Excerpt
            - textbox "Brief description of the post..." [ref=e65]
            - paragraph [ref=e66]: 0 characters
      - generic [ref=e68]:
        - generic [ref=e70]:
          - button "H1" [ref=e71] [cursor=pointer]:
            - img [ref=e72]
            - generic [ref=e77]: H1
          - button "H2" [ref=e78] [cursor=pointer]:
            - img [ref=e79]
            - generic [ref=e84]: H2
          - button "H3" [ref=e85] [cursor=pointer]:
            - img [ref=e86]
            - generic [ref=e92]: H3
          - button "Bold" [ref=e93] [cursor=pointer]:
            - img [ref=e94]
            - generic [ref=e96]: Bold
          - button "Italic" [ref=e97] [cursor=pointer]:
            - img [ref=e98]
            - generic [ref=e102]: Italic
          - button "Code" [ref=e103] [cursor=pointer]:
            - img [ref=e104]
            - generic [ref=e107]: Code
          - button "Quote" [ref=e108] [cursor=pointer]:
            - img [ref=e109]
            - generic [ref=e112]: Quote
          - button "List" [ref=e113] [cursor=pointer]:
            - img [ref=e114]
            - generic [ref=e121]: List
          - button "Ordered" [ref=e122] [cursor=pointer]:
            - img [ref=e123]
            - generic [ref=e130]: Ordered
          - button "Link" [ref=e131] [cursor=pointer]:
            - img [ref=e132]
            - generic [ref=e135]: Link
          - button "Image" [ref=e136] [cursor=pointer]:
            - img [ref=e137]
            - generic [ref=e141]: Image
        - 'textbox "Start writing your blog post in markdown... # Example Heading This is a paragraph with **bold** and *italic* text. ## Code Example ```javascript const example = ''code block''; ``` - Bullet point 1 - Bullet point 2 > This is a blockquote" [ref=e143]':
          - /placeholder: "Start writing your blog post in markdown...\r\n\r\n# Example Heading\r\n\r\nThis is a paragraph with **bold** and *italic* text.\r\n\r\n## Code Example\r\n\r\n```javascript\r\nconst example = 'code block';\r\n```\r\n\r\n- Bullet point 1\r\n- Bullet point 2\r\n\r\n> This is a blockquote"
        - generic [ref=e145]:
          - generic [ref=e146]: 0 characters
          - generic [ref=e147]: 0 words
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('homepage loads', async ({ page }) => {
  4  |   await page.goto('/');
  5  |   await expect(page).toHaveTitle(/vvasa/i);
  6  | });
  7  | 
  8  | test('navigation links are present', async ({ page }) => {
  9  |   await page.goto('/');
> 10 |   await expect(page.locator('nav')).toBeVisible();
     |                                     ^ Error: expect(locator).toBeVisible() failed
  11 | });
  12 | 
```