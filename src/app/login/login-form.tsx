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
import { useTranslations } from "next-intl";

export function LoginForm() {
  const t = useTranslations('LoginForm');

  return (
    <Card className="mx-auto max-w-sm bg-card/70 backdrop-blur-sm border-white/20">
      <CardHeader>
        <CardTitle className="text-2xl text-accent">{t('title')}</CardTitle>
        <CardDescription>
          {t('description')}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2 text-right">
            <Label htmlFor="email">{t('emailLabel')}</Label>
            <Input
              id="email"
              type="email"
              placeholder={t('emailPlaceholder')}
              required
              dir="ltr"
              className="text-left"
            />
          </div>
          <div className="grid gap-2 text-right">
            <div className="flex items-center">
              <Label htmlFor="password">{t('passwordLabel')}</Label>
            </div>
            <Input id="password" type="password" required dir="ltr" className="text-left"/>
          </div>
          <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
            {t('loginButton')}
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          {t('signupPrompt')}{" "}
          <Link href="/signup" className="underline text-accent">
            {t('signupLink')}
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
