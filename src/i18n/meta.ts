import { useT } from './utils';

export type PageKey = 'home' | 'histocooling' | 'about' | 'vision' | 'technology' | 'ip' | 'contact';

export function pageMeta(currentLocale: string | undefined, key: PageKey) {
  const s = useT(currentLocale);
  const name = s.site.name;
  switch (key) {
    case 'home':
      return { title: `${name} · ${s.site.sub}`, description: s.company.lede };
    case 'histocooling':
      return { title: `Histo-Cooling · ${name}`, description: s.home.lede };
    case 'about':
      return { title: `${s.nav.about} · ${name}`, description: s.about.lede };
    case 'vision':
      return { title: `${s.nav.vision} · ${name}`, description: s.vision.lede };
    case 'technology':
      return { title: `${s.nav.technology} · ${name}`, description: s.technology.lede };
    case 'ip':
      return { title: `${s.nav.ip} · ${name}`, description: s.ip.lede };
    case 'contact':
      return { title: `${s.nav.contact} · ${name}`, description: s.contact.lede };
  }
}
