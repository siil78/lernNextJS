'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

export default function Search({ placeholder }: { placeholder: string }) {
  // vrací query část url, např. "?query=hello"
  const searchParams = useSearchParams();
  // vrací url aplikace bez query
  const pathName = usePathname();
  // metoda přepíše url
  const { replace } = useRouter();

  // useDebouncedCallback s argumentem 300 zajistí, že kod bude volán až po uplynutí 300 s
  const handleSearch = useDebouncedCallback((term: string) => {
    //získáme parametry query do objektu, který nám umožní použít metody set a delete
    const params = new URLSearchParams(searchParams);
    params.set('page', '1');
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    // přepíše url v adresním řádku
    replace(`${pathName}?${params.toString()}`);
  }, 500);

  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
        onChange={(e) => handleSearch(e.target.value)}
        // zajistí synchronizaci mezi url a vstupem formuláře
        defaultValue={searchParams.get('query')?.toString()}
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
    </div>
  );
}
