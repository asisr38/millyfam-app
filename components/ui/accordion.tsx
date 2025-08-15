'use client';

import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { Check, ChevronRight, LinkIcon } from 'lucide-react';
import { forwardRef, type ComponentPropsWithoutRef, useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

export const Accordions = forwardRef<
  HTMLDivElement,
  AccordionPrimitive.AccordionSingleProps | AccordionPrimitive.AccordionMultipleProps
>(({ type = 'single', className, defaultValue, ...props }, ref) => {
  const [value, setValue] = useState<string | string[]>(
    type === 'single' ? (defaultValue as string ?? '') : (defaultValue as string[] ?? [])
  );

  useEffect(() => {
    const id = window.location.hash.substring(1);
    if (id.length > 0) {
      setValue((prev) => (typeof prev === 'string' ? id : [id, ...prev]));
    }
  }, []);

  if (type === 'single') {
    return (
      <AccordionPrimitive.Root
        ref={ref}
        value={value as string}
        onValueChange={(v: string) => setValue(v)}
        collapsible
        className={cn(
          'divide-y divide-border overflow-hidden rounded-lg border bg-card',
          className
        )}
        {...(props as AccordionPrimitive.AccordionSingleProps)}
      />
    );
  }

  return (
    <AccordionPrimitive.Root
      ref={ref}
      value={value as string[]}
      onValueChange={(v: string[]) => setValue(v)}
      className={cn(
        'divide-y divide-border overflow-hidden rounded-lg border bg-card',
        className
      )}
      {...(props as AccordionPrimitive.AccordionMultipleProps)}
    />
  );
});

Accordions.displayName = 'Accordions';

export const Accordion = forwardRef<
  HTMLDivElement,
  Omit<ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>, 'value'> & {
    title: string;
  }
>(({ title, className, id, children, ...props }, ref) => {
  return (
    <AccordionPrimitive.Item
      ref={ref}
      value={id ?? title}
      className={cn('group/accordion relative scroll-m-20', className)}
      {...props}
    >
      <AccordionPrimitive.Header
        id={id}
        className="not-prose flex flex-row items-center font-medium text-foreground"
      >
        <AccordionPrimitive.Trigger 
          className="flex flex-1 items-center gap-2 p-4 text-start focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring touch-manipulation [-webkit-tap-highlight-color:transparent]"
          onClick={(e) => {
            // Make sure we're toggling the accordion and not navigating to a link
            e.stopPropagation();
          }}
        >
          <ChevronRight 
            className="-ms-1 h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 group-data-[state=open]/accordion:rotate-90" 
          />
          <span className="leading-relaxed">{title}</span>
        </AccordionPrimitive.Trigger>
        {id ? <CopyButton id={id} /> : null}
      </AccordionPrimitive.Header>
      <AccordionPrimitive.Content 
        className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
      >
        <div className="text-muted-foreground p-4 pt-0 prose-no-margin">{children}</div>
      </AccordionPrimitive.Content>
    </AccordionPrimitive.Item>
  );
});

function CopyButton({ id }: { id: string }): React.ReactElement {
  const [copied, setCopied] = useState(false);

  const onClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation(); // Prevent event bubbling
    
    const url = new URL(window.location.href);
    url.hash = id;
    navigator.clipboard.writeText(url.toString());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      type="button"
      aria-label="Copy Link"
      className={cn(
        "inline-flex h-8 w-8 items-center justify-center rounded-md p-2 text-sm font-medium",
        "transition-colors duration-100",
        "hover:bg-accent hover:text-accent-foreground",
        "text-muted-foreground me-2",
        "disabled:pointer-events-none disabled:opacity-50"
      )}
      onClick={onClick}
    >
      {copied ? (
        <Check className="h-3.5 w-3.5" />
      ) : (
        <LinkIcon className="h-3.5 w-3.5" />
      )}
    </button>
  );
}

Accordion.displayName = 'Accordion';