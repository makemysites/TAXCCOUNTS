import type { ServiceProcess } from "@/lib/services-data";

interface ProcessTimelineProps {
  steps: ServiceProcess[];
}

export default function ProcessTimeline({ steps }: ProcessTimelineProps) {
  return (
    <ol className="relative" aria-label="Process steps">
      {steps.map((step, index) => {
        const isLast = index === steps.length - 1;

        return (
          <li
            key={step.step}
            className={`relative flex gap-6 sm:gap-8 ${isLast ? "" : "pb-12 sm:pb-16"}`}
          >
            {/* Vertical connector line */}
            {!isLast && (
              <div
                className="absolute left-5 sm:left-6 top-12 sm:top-14 bottom-0 w-0.5 bg-gold-light"
                aria-hidden="true"
              />
            )}

            {/* Step number circle */}
            <div
              className="relative z-10 flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full bg-gold text-navy font-serif font-bold text-lg sm:text-xl shadow-md"
              aria-hidden="true"
            >
              {step.step}
            </div>

            {/* Step content */}
            <div className="pt-1 sm:pt-2">
              <h3 className="font-serif text-navy text-lg sm:text-xl font-bold leading-snug">
                {step.title}
              </h3>
              <p className="mt-2 text-muted text-base leading-relaxed max-w-xl">
                {step.description}
              </p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
