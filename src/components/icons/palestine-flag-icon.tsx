import type { SVGProps } from 'react';
import { cn } from '@/lib/utils';

export function PalestineFlagIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 36 24"
      className={cn('rounded-sm', props.className)}
      {...props}
    >
      <path fill="#000" d="M0 0h36v8H0z" />
      <path fill="#FFF" d="M0 8h36v8H0z" />
      <path fill="#007a3d" d="M0 16h36v8H0z" />
      <path fill="red" d="M0 0l18 12L0 24z" />
    </svg>
  );
}
