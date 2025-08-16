"use client"
import React, { useRef, useEffect } from 'react'
import { motion, animate } from 'framer-motion'
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

interface PricingPlan {
    name: string;
    monthlyPrice?: number;
    price?: number;
    billingPeriod?: string;
    features: string[];
    isPopular?: boolean;
    accent: string;
    rotation?: number;
    link?: string;
}

interface PricingProps {
    title?: string;
    plans: PricingPlan[];
    className?: string;
}

// Counter Component
const Counter = ({ from, to }: { from: number; to: number }) => {
    const nodeRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const node = nodeRef.current;
        if (node) {
            const controls = animate(from, to, {
                duration: 1,
                onUpdate(value) {
                    node.textContent = value.toFixed(2);
                },
            });
            return () => controls.stop();
        }
    }, [from, to]);

    return <span ref={nodeRef} />;
};

// Header Component
const PricingHeader = ({ title }: { title: string }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
        }}
        className="text-center space-y-4 pb-12"
    >
        <h2 className="text-3xl font-bold sm:text-4xl">{title}</h2>
        <p className="max-w-xl mx-auto text-muted-foreground">
            Choose the plan that best fits your needs and start your journey with us today.
        </p>
    </motion.div>
);

// Background Effects Component
const BackgroundEffects = () => (
    <>
        <div
            className="absolute inset-0 bg-gradient-to-t from-background to-transparent mix-blend-multiply"
        />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </>
);

// Pricing Card Component
const PricingCard = ({
    plan,
    index
}: {
    plan: PricingPlan;
    index: number;
}) => {
    const { name, monthlyPrice, price, billingPeriod, features, isPopular, accent, rotation = 0, link } = plan;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: index * 0.1,
            }}
            whileHover={{ scale: 1.02 }}
            className="relative"
        >
            <div
                className={cn(
                    "relative h-full rounded-2xl border border-border bg-card p-6 md:p-8 flex flex-col shadow-sm transition-shadow hover:shadow-md",
                    isPopular && "ring-1 ring-primary/30"
                )}
                style={{
                    transform: `rotate(${rotation}deg)`,
                }}
            >
                {isPopular && (
                    <motion.div
                        initial={{ y: -8, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="absolute -top-5 left-0 right-0 mx-auto w-fit rounded-full bg-amber-400/90 px-4 py-1.5 text-sm font-semibold text-black shadow"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        Popular
                    </motion.div>
                )}

                <div className="space-y-4 text-center">
                    <h3 className="text-xl md:text-2xl font-semibold tracking-tight">{name}</h3>
                    <div className="text-3xl md:text-4xl font-bold tracking-tight">
                        $<Counter from={0} to={monthlyPrice || price || 0} />
                        <span className="text-base font-normal text-muted-foreground">
                            {monthlyPrice ? "/mo" : billingPeriod ? `/${billingPeriod}` : ""}
                        </span>
                    </div>

                    <div
                        className={cn(
                            "h-px w-full",
                            accent ? accent : "bg-border"
                        )}
                    />

                    <ul className="space-y-2.5 text-left mx-auto max-w-sm">
                        {features.map((feature, i) => (
                            <li key={i} className="flex items-center gap-2">
                                <Check className="h-4 w-4 text-emerald-500" aria-hidden="true" />
                                <span className="text-muted-foreground leading-relaxed">{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="mt-auto pt-3 md:pt-4">
                    <Button asChild className="w-full h-11 text-sm font-semibold">
                        <Link
                            href={link || "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Subscribe to ${name}`}
                        >
                            Subscribe
                        </Link>
                    </Button>
                </div>
            </div>
        </motion.div>
    );
};

// Main Container Component
export const PricingContainer = ({ title = "Pricing Plans", plans, className = "" }: PricingProps) => {
    return (
        <div className={cn("relative w-full", className)}>
            <BackgroundEffects />
            <div className="relative space-y-12 w-full">
                <PricingHeader title={title} />
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 w-full items-stretch">
                    {plans.map((plan, i) => (
                        <PricingCard
                            key={i}
                            plan={plan}
                            index={i}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};