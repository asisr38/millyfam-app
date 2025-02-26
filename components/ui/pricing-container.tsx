"use client"
import React, { useRef, useState, useEffect } from 'react'
import { motion, useMotionValue, useSpring, useTransform, animate } from 'framer-motion'
import { cn } from '@/lib/utils';
import Link from 'next/link';

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
    const nodeRef = useRef(null);

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
            className="absolute inset-0 bg-gradient-to-t from-background to-transparent"
            style={{ mixBlendMode: "multiply" }}
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
                    "relative h-full rounded-2xl border bg-card p-6 shadow-lg transition-shadow hover:shadow-xl",
                    isPopular && "border-primary/50 shadow-primary/10"
                )}
                style={{
                    transform: `rotate(${rotation}deg)`,
                }}
            >
                {isPopular && (
                    <motion.div
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="absolute -top-5 left-0 right-0 mx-auto w-fit rounded-full bg-primary px-4 py-1.5 text-sm font-semibold text-black shadow-lg"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Popular
                    </motion.div>
                )}

                <div className="space-y-4">
                    <h3 className="text-xl font-bold">{name}</h3>
                    <div className="text-3xl font-bold">
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

                    <ul className="space-y-2.5">
                        {features.map((feature, i) => (
                            <li key={i} className="flex items-center gap-2">
                                <div
                                    className={cn(
                                        "h-1.5 w-1.5 rounded-full",
                                        accent ? accent : "bg-foreground"
                                    )}
                                />
                                <span className="text-muted-foreground">{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="mt-6">
                    <Link
                        href={link || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                            "inline-flex w-full items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold transition-colors",
                            accent
                                ? cn(accent, "bg-opacity-10 hover:bg-opacity-20 text-foreground")
                                : "bg-primary/10 hover:bg-primary/20 text-foreground"
                        )}
                    >
                        Buy Now
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

// Main Container Component
export const PricingContainer = ({ title = "Pricing Plans", plans, className = "" }: PricingProps) => {
    return (
        <section className={cn("relative overflow-hidden py-16", className)}>
            <BackgroundEffects />
            <div className="container relative space-y-8 px-4 md:px-6">
                <PricingHeader title={title} />
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {plans.map((plan, i) => (
                        <PricingCard
                            key={i}
                            plan={plan}
                            index={i}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};