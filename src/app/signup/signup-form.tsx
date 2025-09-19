"use client";

import { Link } from "@/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function SignupForm() {
  return (
    <Card className="mx-auto max-w-sm bg-card/70 backdrop-blur-sm border-white/20 text-right">
      <CardHeader>
        <CardTitle className="text-2xl text-accent">إنشاء حساب</CardTitle>
        <CardDescription>
          أدخل معلوماتك لإنشاء حساب جديد
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2 text-right">
            <Label htmlFor="full-name">الاسم الكامل</Label>
            <Input id="full-name" placeholder="الاسم الكامل" required />
          </div>
          <div className="grid gap-2 text-right">
            <Label htmlFor="email">البريد الإلكتروني</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
              dir="ltr"
              className="text-left"
            />
          </div>
          <div className="grid gap-2 text-right">
            <Label htmlFor="password">كلمة المرور</Label>
            <Input id="password" type="password" required dir="ltr" className="text-left"/>
          </div>
          <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
            إنشاء حساب
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          لديك حساب بالفعل؟{" "}
          <Link href="/login" className="underline text-accent">
            تسجيل الدخول
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
