"use client";

import Link from "next/link";
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

export function LoginForm() {
  return (
    <Card className="mx-auto max-w-sm bg-card/70 backdrop-blur-sm border-white/20 text-right">
      <CardHeader>
        <CardTitle className="text-2xl text-accent">تسجيل الدخول</CardTitle>
        <CardDescription>
          أدخل بريدك الإلكتروني وكلمة المرور للدخول إلى حسابك
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
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
            <div className="flex items-center">
              <Label htmlFor="password">كلمة المرور</Label>
            </div>
            <Input id="password" type="password" required dir="ltr" className="text-left"/>
          </div>
          <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
            تسجيل الدخول
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          ليس لديك حساب؟{" "}
          <Link href="#" className="underline text-accent">
            إنشاء حساب
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
