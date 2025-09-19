import { Link } from '@/navigation';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Header } from '@/components/layout/header';
import { planets } from '@/lib/planets-data';
import { generatePlanetDescription } from '@/ai/flows/generate-planet-description';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, Youtube } from 'lucide-react';
import { getPlaceholderImage } from '@/lib/placeholder-images';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import type { ReactNode } from 'react';
import { SpaceAudioPlayer } from '@/components/space-audio-player';
import { getTranslations } from 'next-intl/server';
import { locales } from '@/navigation';

export default async function PlanetDetailsPage({
  params,
}: {
  params: { planetName: string; locale: string };
}) {
  const planet = planets.find(p => p.slug === params.planetName);
  const t = await getTranslations({
    locale: params.locale,
    namespace: 'PlanetDetailsPage',
  });
  const tPlanets = await getTranslations({
    locale: params.locale,
    namespace: 'Planets',
  });

  if (!planet) {
    notFound();
  }

  let description: ReactNode;
  // This is a temporary solution to show static content for some planets
  // We'll replace this with dynamic content from the AI flow soon.
  if (params.locale === 'ar') {
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
    } else if (planet.slug === 'saturn') {
      description = (
        <div className="space-y-4">
          <div>
            <h3 className="font-bold text-xl mb-2">القياسات والتركيب</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>ثاني أكبر الكواكب</li>
              <li>كوكب غازي بلا سطح صلب</li>
              <li>يتكون بشكل اساسي من الهيدروجين</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-2">الحلقات والأقمار</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>حلقات ضخمة رقيقة السماكة وتمتد مئات آلاف الكيلومترات</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-2">أبرز الاقمار</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>عددها 140 قمر</li>
              <li>تيتان: غلاف كثيف وبحيرات من الميثان وهو اكبر اقمار زحل</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-2">خصائص إضافية</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>كثافة أقل من الماء</li>
              <li>اليوم نحو 10 ساعات ونصف، السنة نحو 29.5 سنة</li>
              <li>مجال مغناطيسي قوي وشفق قطبي</li>
            </ul>
          </div>
        </div>
      );
    } else if (planet.slug === 'uranus') {
      description = (
        <div className="space-y-4">
          <div>
            <h3 className="font-bold text-xl mb-2">الموقع والخصائص</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>الكوكب السابع</li>
              <li>عملاق جليدي من ماء وأمونيا وميثان</li>
              <li>ميل محوري يقارب 98 درجة فيدور كأنه على جانبه</li>
              <li>اليوم نحو 17 ساعة و14 دقيقة، السنة نحو 84 سنة</li>
              <li>غلبة اللون الازرق بسبب وجود غاز الميثان</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-2">الحلقات</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>ليست كثيرة كحلقات زحل وعددها حوالي 13 حلقة</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-2">الاقمار</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>عددها 27 قمر</li>
            </ul>
          </div>
        </div>
      );
    } else if (planet.slug === 'neptune') {
      description = (
        <div className="space-y-4">
          <div>
            <h3 className="font-bold text-xl mb-2">القياسات والتركيب والطقس</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>عملاق جليدي بلون أزرق بسبب الميثان</li>
              <li>أسرع رياح كوكبية تتجاوز 2,100 كم/ساعة</li>
              <li>اليوم نحو 16 ساعة، السنة نحو 165 سنة</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-2">الظواهر والحلقات والأقمار</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>البقعة المظلمة العظيمة: عاصفة رُصدت في أواخر القرن العشرين</li>
              <li>حلقات ضعيفة</li>
              <li>عدد اقماره 14 قمر</li>
            </ul>
          </div>
        </div>
      );
    } else if (planet.slug === 'sun') {
      description = (
        <div className="space-y-4">
          <div>
            <h3 className="font-bold text-xl mb-2">نجم في قلب نظامنا</h3>
            <p>
              الشمس هي النجم المركزي للمجموعة الشمسية، وهي عبارة عن كرة ضخمة من
              الغاز الساخن المتوهج، وتتكون أساسًا من الهيدروجين (حوالي 74%)
              والهيليوم (حوالي 24%).
            </p>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-2">مصدر الطاقة والحياة</h3>
            <p>
              تنتج الشمس طاقتها من خلال الاندماج النووي في نواتها، حيث تتحول ذرات
              الهيدروجين إلى هيليوم، مُطلقةً كميات هائلة من الطاقة على شكل ضوء
              وحرارة، وهي أساس الحياة على الأرض.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-2">حقائق مذهلة</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>يبلغ قطر الشمس حوالي 1.4 مليون كيلومتر، أي ما يعادل 109 أضعاف قطر الأرض.</li>
              <li>تصل درجة الحرارة في نواتها إلى حوالي 15 مليون درجة مئوية.</li>
              <li>يستغرق ضوء الشمس حوالي 8 دقائق و 20 ثانية للوصول إلى الأرض.</li>
            </ul>
          </div>
        </div>
      );
    } else if (planet.slug === 'milky-way') {
      description = (
        <div className="space-y-4">
          <div>
            <h3 className="font-bold text-xl mb-2">تعريف عام</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>
                درب التبانة هي المجرة التي ننتمي إليها نحن وكوكب الأرض وكل الكواكب
                والنجوم التي نراها في السماء تقريبًا.
              </li>
              <li>
                هي عبارة عن نظام ضخم جدًا من النجوم، الغاز، الغبار الكوني، والمادة
                المظلمة.
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-2">الشكل والحجم</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>شكلها حلزوني (Spiral Galaxy) وبه أذرع لولبية.</li>
              <li>يتراوح قطرها ما بين 100,000 – 120,000 سنة ضوئية.</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-2">مكونات مجرة درب التبانة</h3>
            <p className="font-semibold">1. النواة:</p>
            <ul className="list-disc list-inside space-y-1 pr-4">
              <li>
                في مركز المجرة يوجد جسم ضخم جدًا يُعتقد أنه ثقب أسود فائق الكتلة.
              </li>
              <li>كتلته حوالي 4 مليون مرة كتلة الشمس.</li>
            </ul>
            <p className="font-semibold mt-2">2. الأذرع الحلزونية:</p>
            <ul className="list-disc list-inside space-y-1 pr-4">
              <li>الأذرع الرئيسية: ذراع الجبار ← نحن موجودون فيه.</li>
              <li>هذه الأذرع مليئة بالنجوم الجديدة التي تتولد والسُدم المضيئة.</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-2">عدد النجوم والكواكب</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>التقديرات تقول إن المجرة فيها ما بين 100 – 400 مليار نجم.</li>
              <li>الدراسات الحديثة تقول أنه قد يكون هناك أكثر من 100 مليار كوكب.</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-2">الظواهر المهمة في المجرة</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>السدم (Nebulae): أماكن لتكوّن النجوم (مثل سديم الجبار).</li>
              <li>الثقوب السوداء والنجوم النيوترونية: ناتجة عن موت نجوم ضخمة.</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-2">العمر والتطور</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>
                عمر مجرة درب التبانة حوالي 13.6 مليار سنة (أي قريبة جدًا من عمر
                الكون الذي هو 13.8 مليار سنة).
              </li>
              <li>لا تزال تتطور وتجمع مع مجرات صغيرة حولها.</li>
              <li>
                في المستقبل (بعد حوالي 4 مليار سنة) ستصطدم مع مجرة أندروميدا
                (Andromeda Galaxy) وسيندمجون معًا ليشكلوا مجرة جديدة عملاقة.
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-2">الرؤية من الأرض</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>
                عندما تنظر في سماء صافية بعيدًا عن التلوث الضوئي، سترى شريطًا
                أبيض لامعًا ممتدًا عبر السماء ← هذا هو درب التبانة.
              </li>
              <li>جاء الاسم من شكله الذي يشبه اللبن المسكوب أو التبن المنتشر.</li>
            </ul>
          </div>
        </div>
      );
    } else if (planet.slug === 'black-holes') {
      description = (
        <div className="space-y-4">
          <div>
            <h3 className="font-bold text-xl mb-2">أولاً: ما هو الثقب الأسود؟</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>
                الثقب الأسود هو منطقة في الفضاء ذات جاذبية هائلة لدرجة أن أي شيء
                يقترب منها لا يستطيع الهروب، حتى الضوء نفسه.
              </li>
              <li>
                يتكوّن عادةً نتيجة انهيار نجم ضخم جدًا بعد أن ينهي وقوده النووي
                ← ينفجر في صورة مستعر أعظم ← ثم ينهار على نفسه ليكوّن ثقبًا أسود.
              </li>
              <li>
                أهم أجزائه هي:
                <ul className="list-disc list-inside space-y-1 pr-4 mt-1">
                  <li>
                    <strong>الأفق الحدثي:</strong> الحد الفاصل الذي إذا تجاوزه أي
                    شيء، لا يمكنه العودة.
                  </li>
                  <li>
                    <strong>التفرد:</strong> نقطة الكثافة اللامتناهية في المركز،
                    حيث تفشل قوانين الفيزياء كما نعرفها.
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-2">
              ثانياً: تاريخ التنبؤ بالثقوب السوداء
            </h3>
            <p className="font-semibold">1. القرن 18:</p>
            <ul className="list-disc list-inside space-y-1 pr-4">
              <li>
                اقترح العالمان جون ميتشيل وبيير لابلاس فكرة "نجوم مظلمة" ضخمة
                لديها جاذبية تمنع الضوء من الخروج منها.
              </li>
            </ul>
            <p className="font-semibold mt-2">2. النظرية النسبية العامة (1915):</p>
            <ul className="list-disc list-inside space-y-1 pr-4">
              <li>
                نشر ألبرت أينشتاين نظريته التي فسرت الجاذبية كانحناء في نسيج
                الزمكان.
              </li>
              <li>
                بعد ذلك مباشرةً، قدم كارل شوارزشيلد أول حل رياضي لمعادلات
                أينشتاين يصف "الثقب الأسود".
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-2">ثالثاً: تصوير الثقوب السوداء</h3>
            <p className="font-semibold">1. الصورة الأولى في التاريخ (2019):</p>
            <ul className="list-disc list-inside space-y-1 pr-4">
              <li>
                أعلن فريق تلسكوب أفق الحدث (Event Horizon Telescope) عن أول صورة
                لثقب أسود.
              </li>
              <li>هذا الثقب موجود في مجرة M87، ويبعد عنا 55 مليون سنة ضوئية.</li>
              <li>أظهرت الصورة "حلقة مضيئة" حول ظل الثقب الأسود.</li>
            </ul>
            <p className="font-semibold mt-2">2. الصورة الثانية (2022):</p>
            <ul className="list-disc list-inside space-y-1 pr-4">
              <li>
                نشر نفس الفريق صورة للثقب الأسود الموجود في مركز مجرتنا، درب
                التبانة.
              </li>
              <li>تم التأكيد أن كتلته تعادل حوالي 4 مليون مرة كتلة الشمس.</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-2">أنواع الثقوب السوداء</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <strong>ثقوب سوداء نجمية:</strong> ناتجة عن موت نجم ضخم. كتلتها
                من 3 إلى عشرات المرات أكبر من كتلة الشمس.
              </li>
              <li>
                <strong>ثقوب سوداء فائقة الكتلة:</strong> موجودة في مراكز
                المجرات. كتلتها ملايين أو مليارات أضعاف كتلة الشمس.
              </li>
              <li>
                <strong>ثقوب سوداء متوسطة الكتلة:</strong> نادرة ويصعب رصدها،
                وتقع كتلتها بين النوعين الآخرين.
              </li>
            </ul>
          </div>
        </div>
      );
    }
  } else if (params.locale === 'en') {
    if (planet.slug === 'mercury') {
      description = (
        <div className="space-y-4">
          <div>
            <h3 className="font-bold text-xl mb-2">Definition and Measurements</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Closest planet to the Sun and the smallest planet</li>
              <li>Gravity is 0.38 of Earth's gravity</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-2">Orbit and Rotation</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Year is 88 days</li>
              <li>Axial day is 59 days</li>
              <li>Solar day is about 176 days</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-2">Surface and Environment</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Surface full of craters like the Moon</li>
              <li>No effective atmosphere, no currently active volcanoes</li>
              <li>Presence of ice in deep polar craters</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-2">Atmosphere and Temperature</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>It has a weak atmosphere</li>
              <li>Daytime temperature reaches about +430°C</li>
              <li>Nighttime temperature drops to about -180°C</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-2">Moons</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>No moons</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-2">Amazing Facts</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>The Sun appears three times larger than we see it from Earth</li>
              <li>Surface impacts remain for millions of years</li>
              <li>The Sun may rise, set, and rise again at dawn due to its special motion</li>
            </ul>
          </div>
        </div>
      );
    } else if (planet.slug === 'venus') {
      description = (
        <div className="space-y-4">
          <div>
            <h3 className="font-bold text-xl mb-2">Definition and Measurements</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Second planet, and Earth's twin in size and mass, approximately</li>
              <li>The brightest planet, seen as the morning or evening star</li>
              <li>Gravity is 0.9 of Earth's gravity</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-2">Orbit and Rotation</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Year is 225 days</li>
              <li>Day is 243 days, which is longer than its year</li>
              <li>Rotates from East to West (opposite to other planets)</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-2">Surface, Atmosphere, and Temperature</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Thick clouds of carbon dioxide and sulfuric acid</li>
              <li>Atmosphere is about 90 times denser than Earth's</li>
              <li>Composition: 96% carbon dioxide, 3% nitrogen</li>
              <li>Surface temperature is nearly constant at about 465°C</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-2">Phenomena, Moons, Exploration</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Upper winds circle the planet in about 4 days</li>
              <li>Acid rain that evaporates before reaching the surface</li>
              <li>No moons</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-2">Amazing Facts</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>The Sun rises from the west and sets in the east</li>
              <li>Pressure is equivalent to a depth of 900 meters under water on Earth</li>
            </ul>
          </div>
        </div>
      );
    } else if (planet.slug === 'earth') {
      description = (
        <div className="space-y-4">
          <div>
            <h3 className="font-bold text-xl mb-2">Structure</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Structure: Solid inner core, liquid outer core, mantle, crust</li>
              <li>150 million kilometers away from the Sun</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-2">Climate and Atmosphere</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>78% nitrogen, 21% oxygen, 1% other gases</li>
              <li>Protects from ultraviolet rays, regulates temperature, and allows life</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-2">Surface and Time</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>71% water, 29% land</li>
              <li>Diverse terrain and active tectonic plates</li>
              <li>Day is about 24 hours, year is about 365.25 days</li>
              <li>Axial tilt of 23.5° causes seasons</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-2">The Moon</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Has one moon</li>
              <li>Gravity is one-sixth of Earth's gravity</li>
              <li>No effective atmosphere and large temperature variations</li>
              <li>Synchronous rotation, so we always see the near side</li>
              <li>Responsible for tides</li>
              <li>Likely formation: a giant impact</li>
              <li>Exploration: human landing and projects for return</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-2">Special Features</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>The only known planet with life</li>
              <li>Liquid water and a suitable atmosphere</li>
            </ul>
          </div>
        </div>
      );
    } else if (planet.slug === 'mars') {
      description = (
        <div className="space-y-4">
          <div>
            <h3 className="font-bold text-xl mb-2">Atmosphere and Temperature</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Thin: 95% carbon dioxide, 3% nitrogen, 1.6% argon</li>
              <li>Average temperature is about -63°C</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-2">Surface and Time</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>The red color is due to iron oxide</li>
              <li>Largest volcano: Olympus Mons (three times the height of Mount Everest)</li>
              <li>Day is about 24 hours and 39 minutes, and the year is about 687 days</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-2">Moons, Weather, and Exploration</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Two small moons: Phobos and Deimos</li>
              <li>Phobos: diameter about 22 km, very close orbit, heading for breakup or fall in the future</li>
              <li>Deimos: diameter about 12 km, more distant orbit and moving away over time</li>
              <li>Planetary dust storms and polar ice caps of water and carbon dioxide</li>
              <li>Rovers and research on traces of ancient life and future habitability</li>
            </ul>
          </div>
        </div>
      );
    } else if (planet.slug === 'jupiter') {
      description = (
        <div className="space-y-4">
          <div>
            <h3 className="font-bold text-xl mb-2">Measurements, Composition, and Weather</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>The largest planet in the solar system</li>
              <li>Mostly hydrogen and helium, with no solid surface</li>
              <li>Colored clouds and continuous storms</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-2">The Great Red Spot</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>A giant storm with a radius larger than half of Earth's radius</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-2">Rings, Moons, and Magnetism</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Thin rings</li>
              <li>Strongest planetary magnetic field</li>
              <li>Short day of about 10 hours, year is about 12 years</li>
              <li>Number of moons is 95, most notably</li>
              <li>Ganymede: The largest moon and has a magnetic field</li>
            </ul>
          </div>
        </div>
      );
    } else if (planet.slug === 'saturn') {
      description = (
        <div className="space-y-4">
          <div>
            <h3 className="font-bold text-xl mb-2">Measurements and Composition</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Second largest planet</li>
              <li>Gas giant with no solid surface</li>
              <li>Mainly composed of hydrogen</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-2">Rings and Moons</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Huge, thin rings that extend for hundreds of thousands of kilometers</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-2">Most Notable Moons</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Has 140 moons</li>
              <li>Titan: Dense atmosphere and lakes of methane, it is Saturn's largest moon</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-2">Additional Features</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Density less than water</li>
              <li>Day is about 10.5 hours, year is about 29.5 years</li>
              <li>Strong magnetic field and auroras</li>
            </ul>
          </div>
        </div>
      );
    } else if (planet.slug === 'uranus') {
      description = (
        <div className="space-y-4">
          <div>
            <h3 className="font-bold text-xl mb-2">Location and Characteristics</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>The seventh planet</li>
              <li>Ice giant made of water, ammonia, and methane</li>
              <li>Axial tilt of nearly 98 degrees, so it rotates as if on its side</li>
              <li>Day is about 17 hours and 14 minutes, year is about 84 years</li>
              <li>The blue color is due to the presence of methane gas</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-2">Rings</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Not as extensive as Saturn's rings, with about 13 rings</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-2">Moons</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Has 27 moons</li>
            </ul>
          </div>
        </div>
      );
    } else if (planet.slug === 'neptune') {
      description = (
        <div className="space-y-4">
          <div>
            <h3 className="font-bold text-xl mb-2">Measurements, Composition, and Weather</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Ice giant with a blue color due to methane</li>
              <li>Fastest planetary winds, exceeding 2,100 km/h</li>
              <li>Day is about 16 hours, year is about 165 years</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-2">Phenomena, Rings, and Moons</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>The Great Dark Spot: a storm observed in the late 20th century</li>
              <li>Faint rings</li>
              <li>Has 14 moons</li>
            </ul>
          </div>
        </div>
      );
    } else if (planet.slug === 'sun') {
      description = (
        <div className="space-y-4">
          <div>
            <h3 className="font-bold text-xl mb-2">A Star at the Heart of Our System</h3>
            <p>
              The Sun is the central star of the solar system, a massive ball of hot, glowing gas, primarily composed of hydrogen (about 74%) and helium (about 24%).
            </p>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-2">Source of Energy and Life</h3>
            <p>
              The Sun produces its energy through nuclear fusion in its core, where hydrogen atoms are converted into helium, releasing enormous amounts of energy as light and heat, which is the basis of life on Earth.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-2">Amazing Facts</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>The Sun's diameter is about 1.4 million kilometers, equivalent to 109 times the diameter of Earth.</li>
              <li>The temperature in its core reaches about 15 million degrees Celsius.</li>
              <li>It takes sunlight about 8 minutes and 20 seconds to reach Earth.</li>
            </ul>
          </div>
        </div>
      );
    } else if (planet.slug === 'milky-way') {
      description = (
        <div className="space-y-4">
          <div>
            <h3 className="font-bold text-xl mb-2">General Definition</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>
                The Milky Way is the galaxy to which we, planet Earth, and almost all the planets and stars we see in the sky belong.
              </li>
              <li>
                It is a very large system of stars, gas, cosmic dust, and dark matter.
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-2">Shape and Size</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Its shape is a Spiral Galaxy with spiral arms.</li>
              <li>Its diameter ranges between 100,000 - 120,000 light-years.</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-2">Components of the Milky Way Galaxy</h3>
            <p className="font-semibold">1. The Core:</p>
            <ul className="list-disc list-inside space-y-1 pr-4">
              <li>
                At the center of the galaxy, there is a very massive object believed to be a supermassive black hole.
              </li>
              <li>Its mass is about 4 million times the mass of the Sun.</li>
            </ul>
            <p className="font-semibold mt-2">2. The Spiral Arms:</p>
            <ul className="list-disc list-inside space-y-1 pr-4">
              <li>Main Arms: Orion Arm → We are located in it.</li>
              <li>These arms are filled with new stars being born and bright nebulae.</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-2">Number of Stars and Planets</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Estimates say the galaxy has between 100 - 400 billion stars.</li>
              <li>Recent studies suggest there may be more than 100 billion planets.</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-2">Important Phenomena in the Galaxy</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Nebulae: Places of star formation (like the Orion Nebula).</li>
              <li>Black holes and neutron stars: Resulting from the death of massive stars.</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-2">Age and Evolution</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>
                The age of the Milky Way galaxy is about 13.6 billion years (very close to the age of the universe, which is 13.8 billion years).
              </li>
              <li>It is still evolving and merging with small galaxies around it.</li>
              <li>
                In the future (in about 4 billion years) it will collide with the Andromeda Galaxy, and they will merge to form a new giant galaxy.
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-2">View from Earth</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>
                When you look at a clear sky far from light pollution, you will see a bright white band stretching across the sky → this is the Milky Way.
              </li>
              <li>The name comes from its appearance, resembling spilled milk or scattered straw.</li>
            </ul>
          </div>
        </div>
      );
    } else if (planet.slug === 'black-holes') {
      description = (
        <div className="space-y-4">
          <div>
            <h3 className="font-bold text-xl mb-2">First: What is a Black Hole?</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>
                A black hole is a region in space with such immense gravity that nothing that gets close to it can escape, not even light itself.
              </li>
              <li>
                It is usually formed from the collapse of a very massive star after it exhausts its nuclear fuel → it explodes as a supernova → then collapses on itself to form a black hole.
              </li>
              <li>
                Its most important parts are:
                <ul className="list-disc list-inside space-y-1 pr-4 mt-1">
                  <li>
                    <strong>Event Horizon:</strong> The boundary beyond which nothing can return.
                  </li>
                  <li>
                    <strong>Singularity:</strong> The point of infinite density at the center, where the laws of physics as we know them break down.
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-2">
              Second: History of Predicting Black Holes
            </h3>
            <p className="font-semibold">1. 18th Century:</p>
            <ul className="list-disc list-inside space-y-1 pr-4">
              <li>
                Scientists John Michell and Pierre-Simon Laplace proposed the idea of "dark stars" so massive that their gravity prevents light from escaping.
              </li>
            </ul>
            <p className="font-semibold mt-2">2. General Theory of Relativity (1915):</p>
            <ul className="list-disc list-inside space-y-1 pr-4">
              <li>
                Albert Einstein published his theory, which explained gravity as a curvature in the fabric of spacetime.
              </li>
              <li>
                Immediately after, Karl Schwarzschild provided the first mathematical solution to Einstein's equations describing a "black hole."
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-2">Third: Imaging Black Holes</h3>
            <p className="font-semibold">1. The First Image in History (2019):</p>
            <ul className="list-disc list-inside space-y-1 pr-4">
              <li>
                The Event Horizon Telescope team announced the first-ever image of a black hole.
              </li>
              <li>This black hole is in the M87 galaxy, 55 million light-years away from us.</li>
              <li>The image showed a "bright ring" around the shadow of the black hole.</li>
            </ul>
            <p className="font-semibold mt-2">2. The Second Image (2022):</p>
            <ul className="list-disc list-inside space-y-1 pr-4">
              <li>
                The same team published an image of the black hole at the center of our galaxy, the Milky Way.
              </li>
              <li>It was confirmed that its mass is equivalent to about 4 million times the mass of the Sun.</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-2">Types of Black Holes</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <strong>Stellar Black Holes:</strong> Result from the death of a massive star. Their mass is 3 to tens of times greater than the Sun's mass.
              </li>
              <li>
                <strong>Supermassive Black Holes:</strong> Found at the centers of galaxies. Their mass is millions or billions of times the mass of the Sun.
              </li>
              <li>
                <strong>Intermediate-Mass Black Holes:</strong> Rare and difficult to detect, their mass falls between the other two types.
              </li>
            </ul>
          </div>
        </div>
      );
    }
  }

  if (!description) {
    try {
      const result = await generatePlanetDescription({
        planetName: planet.name,
      });
      description = (
        <p className="text-lg md:text-xl leading-relaxed text-gray-200 whitespace-pre-wrap">
          {result.description}
        </p>
      );
    } catch (error) {
      console.error('Failed to generate planet description:', error);
      description = (
        <p className="text-lg md:text-xl leading-relaxed text-yellow-300">
          {t('loadingError')}
        </p>
      );
    }
  }

  const placeholder = getPlaceholderImage(planet.image.id);
  const planetName = tPlanets(planet.slug as any);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <SpaceAudioPlayer src="/space-music.mp3" />
      <main className="flex-1 container mx-auto px-4 py-12 flex items-center justify-center">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 w-full">
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:w-1/3 flex-shrink-0">
            <Image
              src={placeholder.imageUrl}
              alt={planetName}
              width={500}
              height={500}
              className="rounded-full object-cover aspect-square planet-spin"
              data-ai-hint={planet.image.hint}
            />
          </div>
          <div className="w-full lg:w-2/3">
            <Card className="bg-card/60 backdrop-blur-sm border-white/20 rtl:text-right ltr:text-left">
              <CardHeader>
                <CardTitle
                  className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text"
                  style={{
                    backgroundImage: `url(${placeholder.imageUrl})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'brightness(1.5)',
                  }}
                >
                  {planetName}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-lg md:text-xl leading-relaxed text-gray-200">
                  {description}
                </div>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Button
                    asChild
                    variant="outline"
                    className="text-white border-white/30 hover:bg-white/10 hover:text-white"
                  >
                    <Link href="/planets" className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 rtl:hidden" />
                      {t('backToPlanets')}
                      <ArrowLeft className="h-4 w-4 ltr:hidden" />
                    </Link>
                  </Button>
                  {planet.slug === 'mercury' && (
                    <Button
                      asChild
                      variant="outline"
                      className="text-white border-white/30 hover:bg-white/10 hover:text-white bg-red-600/50 hover:bg-red-600/70 border-red-500/50"
                    >
                      <a href="https://youtu.be/0KBjnNuhRHs?si=EuSqLYUeZihhI02n" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <Youtube className="h-5 w-5" />
                        {params.locale === 'ar' ? 'شاهد فيديو' : 'Watch Video'}
                      </a>
                    </Button>
                  )}
                  {planet.slug === 'venus' && (
                    <Button
                      asChild
                      variant="outline"
                      className="text-white border-white/30 hover:bg-white/10 hover:text-white bg-red-600/50 hover:bg-red-600/70 border-red-500/50"
                    >
                      <a href="https://youtu.be/BvXa1n9fjow?si=sPBuB0Hox1MTQMuE" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <Youtube className="h-5 w-5" />
                        {params.locale === 'ar' ? 'شاهد فيديو' : 'Watch Video'}
                      </a>
                    </Button>
                  )}
                  {planet.slug === 'earth' && (
                    <Button
                      asChild
                      variant="outline"
                      className="text-white border-white/30 hover:bg-white/10 hover:text-white bg-red-600/50 hover:bg-red-600/70 border-red-500/50"
                    >
                      <a href="https://youtu.be/HCDVN7DCzYE?si=CUZ1DEElh4VWs42Y" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <Youtube className="h-5 w-5" />
                        {params.locale === 'ar' ? 'شاهد فيديو' : 'Watch Video'}
                      </a>
                    </Button>
                  )}
                  {planet.slug === 'mars' && (
                    <Button
                      asChild
                      variant="outline"
                      className="text-white border-white/30 hover:bg-white/10 hover:text-white bg-red-600/50 hover:bg-red-600/70 border-red-500/50"
                    >
                      <a href="https://youtu.be/E-PuUs25rJA?si=RZBhxWxkotgAVzwz" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <Youtube className="h-5 w-5" />
                        {params.locale === 'ar' ? 'شاهد فيديو' : 'Watch Video'}
                      </a>
                    </Button>
                  )}
                  {planet.slug === 'jupiter' && (
                    <Button
                      asChild
                      variant="outline"
                      className="text-white border-white/30 hover:bg-white/10 hover:text-white bg-red-600/50 hover:bg-red-600/70 border-red-500/50"
                    >
                      <a href="https://youtu.be/PtkqwslbLY8?si=ydnILmzS8UBQDuM-" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <Youtube className="h-5 w-5" />
                        {params.locale === 'ar' ? 'شاهد فيديو' : 'Watch Video'}
                      </a>
                    </Button>
                  )}
                  {planet.slug === 'saturn' && (
                    <Button
                      asChild
                      variant="outline"
                      className="text-white border-white/30 hover:bg-white/10 hover:text-white bg-red-600/50 hover:bg-red-600/70 border-red-500/50"
                    >
                      <a href="https://youtu.be/epZdZaEQhS0?si=T56Fyz_GmAIX2z7V" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <Youtube className="h-5 w-5" />
                        {params.locale === 'ar' ? 'شاهد فيديو' : 'Watch Video'}
                      </a>
                    </Button>
                  )}
                  {planet.slug === 'uranus' && (
                    <Button
                      asChild
                      variant="outline"
                      className="text-white border-white/30 hover:bg-white/10 hover:text-white bg-red-600/50 hover:bg-red-600/70 border-red-500/50"
                    >
                      <a href="https://youtu.be/m4NXbFOiOGk?si=mYCWU02zZstkBv91" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <Youtube className="h-5 w-5" />
                        {params.locale === 'ar' ? 'شاهد فيديو' : 'Watch Video'}
                      </a>
                    </Button>
                  )}
                  {planet.slug === 'neptune' && (
                    <Button
                      asChild
                      variant="outline"
                      className="text-white border-white/30 hover:bg-white/10 hover:text-white bg-red-600/50 hover:bg-red-600/70 border-red-500/50"
                    >
                      <a href="https://youtu.be/NStn7zZKXfE?si=PWLfJXKd7-WAA7Ak" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <Youtube className="h-5 w-5" />
                        {params.locale === 'ar' ? 'شاهد فيديو' : 'Watch Video'}
                      </a>
                    </Button>
                  )}
                  {planet.slug === 'sun' && (
                    <Button
                      asChild
                      variant="outline"
                      className="text-white border-white/30 hover:bg-white/10 hover:text-white bg-red-600/50 hover:bg-red-600/70 border-red-500/50"
                    >
                      <a href="https://youtu.be/2HoTK_Gqi2Q?si=R0R9Sc10Ed6taKJs" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <Youtube className="h-5 w-5" />
                        {params.locale === 'ar' ? 'شاهد فيديو' : 'Watch Video'}
                      </a>
                    </Button>
                  )}
                  {planet.slug === 'milky-way' && (
                    <Button
                      asChild
                      variant="outline"
                      className="text-white border-white/30 hover:bg-white/10 hover:text-white bg-red-600/50 hover:bg-red-600/70 border-red-500/50"
                    >
                      <a href="https://youtu.be/wsCedw3iBU0?si=R0qn2G06qWylfU_g" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <Youtube className="h-5 w-5" />
                        {params.locale === 'ar' ? 'شاهد فيديو' : 'Watch Video'}
                      </a>
                    </Button>
                  )}
                  {planet.slug === 'black-holes' && (
                    <Button
                      asChild
                      variant="outline"
                      className="text-white border-white/30 hover:bg-white/10 hover:text-white bg-red-600/50 hover:bg-red-600/70 border-red-500/50"
                    >
                      <a href="https://youtu.be/kOEDG3j1bjs?si=c1n-U0DcpSNu_0Hh" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <Youtube className="h-5 w-5" />
                        {params.locale === 'ar' ? 'شاهد فيديو' : 'Watch Video'}
                      </a>
                    </Button>
                  )}
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
  return locales.flatMap(locale =>
    planets.map(planet => ({
      locale,
      planetName: planet.slug,
    }))
  );
}
