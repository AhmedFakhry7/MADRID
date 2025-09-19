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

export function SignupForm() {
  const t = useTranslations('SignupForm');

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
            <Label htmlFor="full-name">{t('fullNameLabel')}</Label>
            <Input id="full-name" placeholder={t('fullNamePlaceholder')} required />
          </div>
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
            <Label htmlFor="password">{t('passwordLabel')}</Label>
            <Input id="password" type="password" required dir="ltr" className="text-left"/>
          </div>
          <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
            {t('createButton')}
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          {t('loginPrompt')}{" "}
          <Link href="/login" className="underline text-accent">
            {t('loginLink')}
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
