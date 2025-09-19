import {
  createLocalizedPathnamesNavigation,
  Pathnames,
  useRouter,
  usePathname,
} from 'next-intl/navigation';

export const locales = ['en', 'ar'] as const;
export const localePrefix = 'always';

// The `pathnames` object holds pairs of internal
// and external paths, separated by locale.
export const pathnames = {
  // If all locales use the same pathname, a single
  // external path can be used for all locales.
  '/': '/',

  // If locales use different paths, you can
  // specify each external path per locale.
  '/planets': {
    en: '/planets',
    ar: '/planets',
  },
  '/palestine-and-space': {
    en: '/palestine-and-space',
    ar: '/palestine-and-space',
  },
} satisfies Pathnames<typeof locales>;

export const { Link, redirect } = createLocalizedPathnamesNavigation({
  locales,
  localePrefix,
  pathnames,
});

export { useRouter, usePathname };
