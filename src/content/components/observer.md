---
title: Observer
description: 
---

`<smore-observer>` is a utility component that observes its own position in the viewport. It emits events when entering or exiting the viewport, and automatically adds an appropriate CSS class to reflect its status.

It is essentially a simple wrapper around the `IntersectionObserver` API. By leveraging IO, an Observer element utilizes the most performant method of *scroll-spying* without any of the downsides that third-party libraries often introduce.

## Classes
- `entering`
- `exiting`
- `side-top`
- `side-bottom`
- `did-enter`
- `did-exit`