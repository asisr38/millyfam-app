import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

interface PricingCardProps {
  title: string;
  description?: string;
  price: string;
  features: { title: string; items: string[] }[];
  buttonText: string;
  onButtonClick: () => void;
  disclaimer?: string;
}

const PricingCard: React.FC<PricingCardProps> = ({ title, description, price, features, buttonText, onButtonClick, disclaimer }) => {
  return (
    <Card className="relative flex flex-col overflow-hidden border-2 hover:border-primary/50 transition-colors">
      <CardHeader className="flex flex-col space-y-1.5 p-6">
        <CardTitle className="text-2xl font-bold">{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>

      <div className="px-6 flex flex-col flex-grow">
        <div className="flex items-baseline mb-6">
          <span className="text-4xl font-bold tracking-tight">$</span>
          <span className="text-5xl font-bold tracking-tight">{price}</span>
          <span className="ml-2 text-muted-foreground font-medium">/month</span>
        </div>

        <div className="space-y-6 flex-grow">
          {features.map((feature, featureIndex) => (
            <div key={featureIndex} className="space-y-3">
              <h4 className="text-sm font-medium leading-none">{feature.title}</h4>
              <ul className="space-y-3">
                {feature.items.map((item, index) => (
                  <li key={index} className="flex items-center text-muted-foreground">
                    <Check className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-6 space-y-4 pb-6">
          <Button 
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" 
            size="lg" 
            onClick={onButtonClick}
          >
            {buttonText}
          </Button>
          {disclaimer && (
            <div className="flex justify-center items-center gap-2 text-center">
              <div className="text-xs text-muted-foreground">
                {disclaimer}
              </div>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};

export default PricingCard; 