import { cn } from "@/app/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";

export function FeaturesSection() {
  const features = [
  {
    title: "Global Artist Discovery",
    description:
      "Easily explore talented artists from around the world and connect instantly.",
    icon: <IconTerminal2 />,
  },
  {
    title: "Book Calls via Cal.com",
    description:
      "Seamlessly schedule 1-on-1 meetings or consultations with artists through Cal.com.",
    icon: <IconEaseInOut />,
  },
  {
    title: "Secure Razorpay Payments",
    description:
      "Fast, safe, and reliable payments powered by Razorpay for a smooth checkout.",
    icon: <IconCurrencyDollar />,
  },
  {
    title: "Easy Artist Interaction",
    description:
      "Connect with your favorite artists effortlessly using our intuitive platform.",
    icon: <IconCloud />,
  },
  {
    title: "Multi-artist Support",
    description:
      "Whether you're a fan or a manager, access and manage multiple artist profiles easily.",
    icon: <IconRouteAltLeft />,
  },
  {
    title: "24/7 Customer Support",
    description:
      "We are available 100% of the time. At least our AI agents are.",
    icon: <IconHelp />,
  },
  {
    title: "Money-back Promise",
    description:
      "Not satisfied? We’ll make it right—or your money back.",
    icon: <IconAdjustmentsBolt />,
  },
  {
    title: "Always Growing",
    description:
      "We keep adding new features, artists, and magic—stay tuned.",
    icon: <IconHeart />,
  },
];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 pl-4 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
