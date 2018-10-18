---
title: Async Content
description: 
---

`<smore-async-content>` is a component that dynamically fetches and renders HTML or Markdown content.

```tsx
@Component({
    tag: 'page-docs',
    styleUrls: 'page-docs.css'
})
export class PageDocs {

    render() {
        return (
            <div>
                <main>
                    <smore-async-content path='../../docs/content.md' />
                </main>
            </div>
        )
    }
}
```
