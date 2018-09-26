---
title: Counter
description: 
---

`<smore-counter>` is a simple component that animates itself, counting from a starting number to a final number.

---
```html
<smore-counter> 100 </smore-counter>
```
---

### Animation
Although there is a sensible animation enabled by default, the counting animation can be adjusted just as any CSS `animation` would.

---
```css
smore-counter {
    animation: 5s reverse cubic-bezier(0.23, 1, 0.320, 1);
}
```
```html
<smore-counter> 100 </smore-counter>
```
---

### Formatting
> What you put in is what you get out.

You won't have to manually adjust any number formatting (like prefixes or suffixes), because Counter elements can handle any number-like input.

That means that all of the following examples will work as you expect them to—keeping prefixes and suffixes intact, counting each number to the same decimal place, and respecting comma-separation.

For semantic reasons, it is still recommended to only include the 

---
```html
<smore-counter> $20 </smore-counter>
<smore-counter> 100% </smore-counter>
<smore-counter> 9.99 </smore-counter>
<smore-counter> 123,456 </smore-counter>
```
---