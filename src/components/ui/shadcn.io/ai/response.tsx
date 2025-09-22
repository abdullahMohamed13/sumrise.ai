'use client';

import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

export function Response({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <div className={cn("rounded-lg border bg-muted/30 p-4 text-sm", className)}>
      {children}
    </div>
  );
}
