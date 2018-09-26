---
title: Observer
description: 
---

`<smore-observer>` is a utility component that observes its own position in the viewport. It emits events when entering or exiting the viewport, and automatically adds appropriate CSS classes reflecting its status.

It is, essentially, a simple wrapper around the `IntersectionObserver` API. By leveraging this built-in browser feature, an Observer element utilizes the most performant method of *scroll-spying*, without any of the downsides that third-party libraries often introduce.

Developers often turn to third-party scrolling libraries to add simple features to their website, such as animating an element when it enters the viewport. These utilities greatly improve and simplify the developer experience, but unforuntately they often impact the performance of a page and lead to negative User Experiences.