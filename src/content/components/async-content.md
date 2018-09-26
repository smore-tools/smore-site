---
title: Async Content
description: 
---

Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Ut non eros auctor, tristique metus vel, suscipit nisl. Suspendisse tortor nunc, blandit nec faucibus a, consectetur vel ex. Praesent nec nisi dolor. Aliquam eu felis a arcu tempor dapibus non eu purus. Cras vestibulum arcu eget erat placerat dapibus. Integer quis metus feugiat ante pharetra efficitur vitae quis est. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam erat volutpat.

```shell
npm install @smore/async-content
```

```typescript
let awesome: string = 'Value';

// A comment goes here
@Component({
    tag: 'page-docs',
    styleUrls: ['page-docs.css', 'menu.css'],
})
export class Docs {

    private menu: { title: string, items: MenuItem[] }[] = []

    hostData() {
        return {
            class: {
                [`language-${this.language}`]: this.language
            }
        }
    }

}
```

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultricies ut orci id ultricies. Maecenas accumsan, arcu non elementum egestas, dui turpis vehicula felis, ac euismod velit justo at ex. In eleifend, ipsum sed consequat malesuada, sapien ligula aliquet ligula, vitae hendrerit elit diam vitae odio. Ut vel est tempor, bibendum ante aliquam, molestie diam. Quisque tincidunt interdum rhoncus. Donec mattis erat sodales leo vestibulum ornare. Phasellus luctus suscipit semper. Fusce ut dolor rutrum, semper mauris nec, laoreet ipsum. Suspendisse sed felis eu urna tincidunt hendrerit sit amet et neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce viverra tellus ac ornare volutpat. Sed in mauris sed tellus pellentesque viverra quis ac tortor.