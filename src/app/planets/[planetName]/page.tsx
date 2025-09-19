import Link from 'next-intl/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Header } from '@/components/layout/header';
import { planets } from '@/lib/planets-data';
import { generatePlanetDescription } from '@/ai/flows/generate-planet-description';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';
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
            <li>لا تزال تتطور وتتجمع مع مجرات صغيرة حولها.</li>
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
  } else {
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
                  {params.locale === 'ar' ? description : "Description available in Arabic only."}
                </div>
                <div className="mt-8">
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
