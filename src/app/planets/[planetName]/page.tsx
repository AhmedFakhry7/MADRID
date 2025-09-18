import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Header } from '@/components/layout/header';
import { planets } from '@/lib/planets-data';
import { generatePlanetDescription } from '@/ai/flows/generate-planet-description';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { getPlaceholderImage } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { ReactNode } from 'react';

export default async function PlanetDetailsPage({ params }: { params: { planetName: string } }) {
  const planet = planets.find((p) => p.slug === params.planetName);

  if (!planet) {
    notFound();
  }

  let description: ReactNode;
  if (planet.slug === 'mercury') {
    description = (
      <div className="space-y-4">
        <div>
          <h3 className="font-bold text-xl mb-2">التعريف والقياسات</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>أقرب كوكب للشمس وأصغر الكواكب</li>
            <li>الجاذبية 0.38 من جاذبية الأرض</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-xl mb-2">المدار والدوران</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>السنة 88 يومًا</li>
            <li>اليوم المحوري 59 يومًا</li>
            <li>اليوم الشمسي نحو 176 يومًا</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-xl mb-2">السطح والبيئة</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>سطح مليء بالفوهات كالقمر</li>
            <li>لا غلاف جوي فعّال، ولا براكين نشطة حاليًا</li>
            <li>وجود جليد في فوهات الأقطاب العميقة</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-xl mb-2">الغلاف الجوي والحرارة</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>له غلاف ضعيف</li>
            <li>النهار يصل إلى حوالي +430 درجة</li>
            <li>الليل ينخفض إلى نحو −180 درجة</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-xl mb-2">الأقمار</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>بلا أقمار</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-xl mb-2">لقطات مدهشة</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>تبدو الشمس أكبر ثلاث مرات مما نراها من الأرض</li>
            <li>تبقى الآثار السطحية ملايين السنين</li>
            <li>قد تظهر الشمس وتغرب وتشرق ثانية عند الفجر بسبب الحركة الخاصة</li>
          </ul>
        </div>
      </div>
    );
  } else if (planet.slug === 'venus') {
    description = (
      <div className="space-y-4">
        <div>
          <h3 className="font-bold text-xl mb-2">التعريف والقياسات</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>ثاني كوكب، وتوأم الأرض في الحجم والكتلة تقريبًا</li>
            <li>ألمع كوكب يرى كنجمة الصبح أو المساء</li>
            <li>الجاذبية 0.9 من جاذبية الأرض</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-xl mb-2">المدار والدوران</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>السنة 225 يومًا</li>
            <li>اليوم 243 يومًا، وهو أطول من سنته</li>
            <li>يدور من الشرق إلى الغرب (عكس اتجاه باقي الكواكب)</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-xl mb-2">السطح والغلاف الجوي والحرارة</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>سحب كثيفة من ثاني أكسيد الكربون وحمض الكبريتيك</li>
            <li>غلاف جوي أكثف من الأرض بنحو 90 مرة</li>
            <li>التركيب: 96% ثاني أكسيد الكربون، 3% نيتروجين</li>
            <li>حرارة سطح شبه ثابتة نحو 465 درجة</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-xl mb-2">ظواهر، أقمار، استكشاف</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>رياح علوية تجوب الكوكب في نحو 4 أيام</li>
            <li>أمطار حمضية تتبخر قبل الوصول للسطح</li>
            <li>بلا أقمار</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-xl mb-2">لقطات مدهشة</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>تشرق الشمس من الغرب وتغرب من الشرق</li>
            <li>ضغط يعادل عمق 900 متر تحت الماء على الأرض</li>
          </ul>
        </div>
      </div>
    );
  } else if (planet.slug === 'earth') {
    description = (
      <div className="space-y-4">
        <div>
          <h3 className="font-bold text-xl mb-2">البنية</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>البنية: نواة داخلية صلبة، نواة خارجية سائلة، وشاح، قشرة</li>
            <li>تبعد 150 مليون كيلومتر عن الشمس</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-xl mb-2">المناخ والغلاف الجوي</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>78% نيتروجين، 21% أكسجين، 1% غازات أخرى</li>
            <li>يحمي من الأشعة فوق البنفسجية وينظم الحرارة ويسمح بالحياة</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-xl mb-2">السطح والزمن</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>71% مياه، 29% يابسة</li>
            <li>تضاريس متنوعة وصفائح تكتونية نشطة</li>
            <li>اليوم نحو 24 ساعة، السنة نحو 365.25 يومًا</li>
            <li>ميل محوري 23.5° يسبب الفصول المناخية</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-xl mb-2">القمر</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>له قمر واحد</li>
            <li>الجاذبية سدس جاذبية الأرض</li>
            <li>لا غلاف جوي فعّال وتباين حراري كبير</li>
            <li>دوران متزامن فنرى دائمًا الوجه القريب</li>
            <li>مسؤول عن المد والجزر</li>
            <li>التكوين المرجّح: اصطدام عملاق</li>
            <li>الاستكشاف: هبوط بشري ومشروعات للعودة</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-xl mb-2">مميزات خاصة</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>الكوكب الوحيد المعروف بوجود حياة</li>
            <li>مياه سائلة وغلاف ملائم</li>
          </ul>
        </div>
      </div>
    );
  } else if (planet.slug === 'mars') {
    description = (
      <div className="space-y-4">
        <div>
          <h3 className="font-bold text-xl mb-2">الغلاف الجوي والحرارة</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>رقيق: 95% ثاني أكسيد الكربون، 3% نيتروجين، 1.6% أرجون</li>
            <li>متوسط الحرارة نحو −63 درجة</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-xl mb-2">السطح والزمن</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>اللون الأحمر بسبب أكسيد الحديد</li>
            <li>أكبر بركان: أوليمبوس مونز (ثلاث اضعاف جبل ايفريست)</li>
            <li>اليوم نحو 24 ساعة و39 دقيقة، والسنة نحو 687 يومًا</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-xl mb-2">الأقمار والطقس والاستكشاف</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>قمران صغيران: فوبوس وديموس</li>
            <li>فوبوس: قطر نحو 22 كم، مدار قريب جدًا، يتجه للتفكك أو السقوط مستقبلًا</li>
            <li>ديموس: قطر نحو 12 كم، مدار أبعد ويتباعد مع الزمن</li>
            <li>عواصف ترابية كوكبية وأقطاب جليدية من ماء وثاني أكسيد الكربون</li>
            <li>مركبات جوالة وبحوث عن آثار حياة قديمة وإمكان السكن مستقبلًا</li>
          </ul>
        </div>
      </div>
    );
  } else if (planet.slug === 'jupiter') {
    description = (
      <div className="space-y-4">
        <div>
          <h3 className="font-bold text-xl mb-2">القياسات والتركيب والطقس</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>أكبر كواكب المجموعة</li>
            <li>غالبًا هيدروجين وهيليوم وبلا سطح صلب</li>
            <li>غيوم ملوّنة وعواصف مستمرة</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-xl mb-2">البقعة الحمراء العظيمة</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>عاصفة عملاقة نصف قطرها اكبر من نصف قطرالأرض</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-xl mb-2">الحلقات والأقمار والمغناطيسية</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>حلقات رفيعة </li>
            <li>أقوى مجال مغناطيسي كوكبي</li>
            <li>يوم قصير نحو 10 ساعات، سنة نحو 12 سنة</li>
            <li>عدد الاقمار 95 قمر وابرزها</li>
            <li>جانيميد: أكبر الأقمار وله مجال مغناطيسي</li>
          </ul>
        </div>
      </div>
    );
  } else {
    try {
      const result = await generatePlanetDescription({ planetName: planet.name });
      description = <p className="text-lg md:text-xl leading-relaxed text-gray-200 whitespace-pre-wrap">{result.description}</p>;
    } catch (error) {
      console.error("Failed to generate planet description:", error);
      description = <p className="text-lg md:text-xl leading-relaxed text-yellow-300">عذرًا، لم نتمكن من تحميل وصف هذا الكوكب في الوقت الحالي. قد يكون النموذج مشغولاً. يرجى المحاولة مرة أخرى لاحقًا.</p>;
    }
  }
  
  const placeholder = getPlaceholderImage(planet.image.id);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12 flex items-center justify-center">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 w-full">
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:w-1/3 flex-shrink-0">
            <Image
              src={placeholder.imageUrl}
              alt={planet.name}
              width={500}
              height={500}
              className="rounded-full object-cover aspect-square planet-spin"
              data-ai-hint={planet.image.hint}
            />
          </div>
          <div className="w-full lg:w-2/3">
            <Card className="bg-card/60 backdrop-blur-sm border-white/20 text-right">
              <CardHeader>
                <CardTitle className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text" style={{backgroundImage: `url(${placeholder.imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
                  {planet.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-lg md:text-xl leading-relaxed text-gray-200">
                  {description}
                </div>
                <div className="mt-8">
                  <Button asChild variant="outline" className="text-white border-white/30 hover:bg-white/10 hover:text-white">
                    <Link href="/planets" className="flex items-center gap-2">
                       العودة إلى الكواكب
                      <ArrowLeft className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}

export async function generateStaticParams() {
    return planets.map((planet) => ({
      planetName: planet.slug,
    }));
}
