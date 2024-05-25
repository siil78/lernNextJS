## Next.js App Router Course - Starter

This is the starter template for the Next.js App Router Course. It contains the starting code for the dashboard application.

For more information, see the [course curriculum](https://nextjs.org/learn) on the Next.js Website.

### Fonts

- nextjs fonty přidá do aplikace při jejím buildu

1. konfigurace v "./app/ui/fonts.ts"
2. použití pomocí import a definice třídy v body dokumentu v "./app/layout.tsx"

### Images

- <https://nextjs.org/docs/app/building-your-application/optimizing/images>

### Data Fetching

#### Parallel data fetching

- pomocí `Promise.all()`

### Static vs Dynamic Rendering

- data získaná z databáze jsou ve výchozím nastavení kešována.
- cache můžeme zakázat pomocí fce `unstable_noStore` z `next/cache`
