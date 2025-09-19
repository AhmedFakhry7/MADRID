export type Planet = {
  name: string;
  slug: string;
  image: {
    id: string;
    hint: string;
  };
};

export const planets: Planet[] = [
  { name: 'عطارد', slug: 'mercury', image: { id: 'mercury', hint: 'planet mercury' } },
  { name: 'الزهرة', slug: 'venus', image: { id: 'venus', hint: 'planet venus' } },
  { name: 'الأرض', slug: 'earth', image: { id: 'earth', hint: 'planet earth' } },
  { name: 'المريخ', slug: 'mars', image: { id: 'mars', hint: 'planet mars' } },
  { name: 'المشتري', slug: 'jupiter', image: { id: 'jupiter', hint: 'planet jupiter' } },
  { name: 'زحل', slug: 'saturn', image: { id: 'saturn', hint: 'planet saturn' } },
  { name: 'أورانوس', slug: 'uranus', image: { id: 'uranus', hint: 'planet uranus' } },
  { name: 'نبتون', slug: 'neptune', image: { id: 'neptune', hint: 'planet neptune' } },
  { name: 'الشمس', slug: 'sun', image: { id: 'sun', hint: 'sun star' } },
  { name: 'مجرة درب التبانة', slug: 'milky-way', image: { id: 'milky-way', hint: 'milky way galaxy' } },
  { name: 'الثقوب السوداء', slug: 'black-holes', image: { id: 'black-holes', hint: 'black hole' } },
];
