## Next.js App Router Course - Starter

This is the starter template for the Next.js App Router Course. It contains the starting code for the dashboard application.

For more information, see the [course curriculum](https://nextjs.org/learn) on the Next.js Website.

### Fonts

- nextjs fonty přidá do aplikace při jejím buildu

1. konfigurace v "./app/ui/fonts.ts"
2. použití pomocí import a definice třídy v body dokumentu v "./app/layout.tsx"

### Images

- <https://nextjs.org/docs/app/building-your-application/optimizing/images>

### Routing

### Route Groups

- <https://nextjs.org/docs/app/building-your-application/routing/route-groups>
- název adresáře dáme kulatých závorek. To se potom neprojeví v konstrukci url, ale můžeme organizovat soubory page.tsx, layout.tsx a loading.tsx do skupin. Definice v layout.tsx nebo loading.tsx potom neovlivní jinou skupinu.

### Data Fetching

#### Parallel data fetching

- pomocí `Promise.all()`

### Static vs Dynamic Rendering

- data získaná z databáze jsou ve výchozím nastavení kešována.
- cache můžeme zakázat pomocí fce `unstable_noStore` z `next/cache`

### Streaming

#### pomocí `loading.tsx`

- statické prvky jsou vykresleny
- obsah loading.tsx je vykreslen než jsou načteny prvky dynamické

##### loading skeletons

- kostra ui definovaná v loading.tsx

#### streaming component

- komponentu, u které chceme vykreslit ui pro loading, obalíme do `<Suspense>`. Suspense potom předáme komponentu s ui pomocí atributu `fallback`
- data potom načítáme přímo v komponentě
- tato konstrukce nám umožní rychleji vykreslit části stránky, pro které data získáme rychle

### Search

#### Debouncing

- metoda, která zabrání dotaz na databázi při každé změně řetězce, které uživatel zadá do vyhledávacího pole
- `npm i use-debounce`

### Pagination

### Mutating Data

#### Server Actions

##### FormData

- `<form action={someServerAction}></form>` - html v atributu action volá funkci
- `async functon someServerAction(formData: FormData) {}` - funkce přijímá objekt s daty z formuláře
  - pro práci s objektem používáme různé metody <https://developer.mozilla.org/en-US/docs/Web/API/FormData/append>
- server actions jsou `use server` fce, mohou proto volat i funkce týkající se cache `revalidateTag` nebo `revalidatePath`
