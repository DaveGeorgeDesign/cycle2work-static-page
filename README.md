# SmartPay Cycle to Work page prototype (cycle2work-static-page)

Switchable prototype of the SmartPay Cycle to Work benefit page for comparative testing.

- **Version A** (`?view=a`): the current Cycle to Work pages. It opens on the RG Cycle to Work
  intro, whose buttons go to the savings calculator (`?view=a&page=calculator`) and the Cycle to
  Work homepage (`?view=a&page=home`). The homepage branches off to separate pages, each with its
  own link: `?view=a&page=how-it-works`, `benefits` and `store-locator`.
- **Version B** (default): the proposed single-page redesign.

The switch in the bottom-left corner flips between them and isn't part of either design.
The store locator and both savings calculators are static: fields can be typed in, but nothing searches or recalculates.

Built with Vite + React from the [gymflex-static-page](https://github.com/DaveGeorgeDesign/gymflex-static-page) prototype,
which reuses the header, footer and UI components from
[smartpay-benefits-landing-prototype](https://github.com/DaveGeorgeDesign/smartpay-benefits-landing-prototype).

```sh
npm install
npm run dev
```

Pushing to `main` rebuilds the GitHub Pages site.

Live: https://davegeorgedesign.github.io/cycle2work-static-page/
