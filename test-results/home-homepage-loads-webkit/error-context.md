# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: home.spec.ts >> homepage loads
- Location: tests\e2e\home.spec.ts:3:1

# Error details

```
Error: expect(page).toHaveTitle(expected) failed

Expected pattern: /vvasa/i
Received string:  "Blog Post Editor"
Timeout: 5000ms

Call log:
  - Expect "toHaveTitle" with timeout 5000ms
    8 × unexpected value "Blog Post Editor"

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
          - heading "Blog Post Editor" [level=1] [ref=e11]
        - generic [ref=e12]:
          - generic [ref=e13]:
            - img [ref=e14]
            - text: Saved 4:34 PM
          - button "Preview" [ref=e16] [cursor=pointer]:
            - img [ref=e17]
            - text: Preview
          - button "Download .md" [ref=e20] [cursor=pointer]:
            - img [ref=e21]
            - text: Download .md
    - generic [ref=e25]:
      - generic [ref=e27]:
        - heading "Post Metadata" [level=2] [ref=e28]
        - generic [ref=e29]:
          - generic [ref=e30]:
            - generic [ref=e31]: Title
            - textbox "Enter post title..." [ref=e32]
          - generic [ref=e33]:
            - generic [ref=e34]: Slug
            - textbox "url-friendly-slug" [ref=e35]
            - paragraph [ref=e36]: Auto-generated from title
          - generic [ref=e37]:
            - generic [ref=e38]: Date
            - textbox [ref=e39]: 2026-06-08
          - generic [ref=e40]:
            - generic [ref=e41]: Tag
            - combobox [ref=e42]:
              - option "Article" [selected]
              - option "Startups"
              - option "Security"
              - option "IoT"
              - option "Development"
              - option "Tutorial"
              - option "Analysis"
              - option "Research"
          - generic [ref=e43]:
            - generic [ref=e44]: Color Theme
            - generic [ref=e45]:
              - button "Black" [ref=e46] [cursor=pointer]:
                - generic [ref=e47]: Black
              - button "Cyan" [ref=e48] [cursor=pointer]:
                - generic [ref=e49]: Cyan
              - button "Magenta" [ref=e50] [cursor=pointer]:
                - generic [ref=e51]: Magenta
              - button "Yellow" [ref=e52] [cursor=pointer]:
                - generic [ref=e53]: Yellow
              - button "Green" [ref=e54] [cursor=pointer]:
                - generic [ref=e55]: Green
              - button "Pink" [ref=e56] [cursor=pointer]:
                - generic [ref=e57]: Pink
            - paragraph [ref=e58]: "Selected: Black"
          - generic [ref=e59]:
            - generic [ref=e60]: Excerpt
            - textbox "Brief description of the post..." [ref=e61]
            - paragraph [ref=e62]: 0 characters
      - generic [ref=e64]:
        - generic [ref=e66]:
          - button "H1" [ref=e67] [cursor=pointer]:
            - img [ref=e68]
            - generic [ref=e70]: H1
          - button "H2" [ref=e71] [cursor=pointer]:
            - img [ref=e72]
            - generic [ref=e74]: H2
          - button "H3" [ref=e75] [cursor=pointer]:
            - img [ref=e76]
            - generic [ref=e79]: H3
          - button "Bold" [ref=e80] [cursor=pointer]:
            - img [ref=e81]
            - generic [ref=e83]: Bold
          - button "Italic" [ref=e84] [cursor=pointer]:
            - img [ref=e85]
            - generic [ref=e87]: Italic
          - button "Code" [ref=e88] [cursor=pointer]:
            - img [ref=e89]
            - generic [ref=e92]: Code
          - button "Quote" [ref=e93] [cursor=pointer]:
            - img [ref=e94]
            - generic [ref=e97]: Quote
          - button "List" [ref=e98] [cursor=pointer]:
            - img [ref=e99]
            - generic [ref=e100]: List
          - button "Ordered" [ref=e101] [cursor=pointer]:
            - img [ref=e102]
            - generic [ref=e105]: Ordered
          - button "Link" [ref=e106] [cursor=pointer]:
            - img [ref=e107]
            - generic [ref=e110]: Link
          - button "Image" [ref=e111] [cursor=pointer]:
            - img [ref=e112]
            - generic [ref=e116]: Image
        - 'textbox "Start writing your blog post in markdown... # Example Heading This is a paragraph with **bold** and *italic* text. ## Code Example ```javascript const example = ''code block''; ``` - Bullet point 1 - Bullet point 2 > This is a blockquote" [ref=e118]':
          - /placeholder: "Start writing your blog post in markdown...\r\n\r\n# Example Heading\r\n\r\nThis is a paragraph with **bold** and *italic* text.\r\n\r\n## Code Example\r\n\r\n```javascript\r\nconst example = 'code block';\r\n```\r\n\r\n- Bullet point 1\r\n- Bullet point 2\r\n\r\n> This is a blockquote"
        - generic [ref=e120]:
          - generic [ref=e121]: 0 characters
          - generic [ref=e122]: 0 words
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('homepage loads', async ({ page }) => {
  4  |   await page.goto('/');
> 5  |   await expect(page).toHaveTitle(/vvasa/i);
     |                      ^ Error: expect(page).toHaveTitle(expected) failed
  6  | });
  7  | 
  8  | test('navigation links are present', async ({ page }) => {
  9  |   await page.goto('/');
  10 |   await expect(page.locator('nav')).toBeVisible();
  11 | });
  12 | 
```