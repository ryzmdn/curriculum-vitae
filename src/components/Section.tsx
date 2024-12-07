import React from 'react';

interface SectionProps {
  title: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  children: React.ReactNode;
}

export function Section({ title, icon: Icon, children }: Readonly<SectionProps>) {
  return (
    <section className="w-full">
      <div className="flex items-center space-x-5 py-2">
        <div className="shrink-0 flex justify-center items-center size-7 bg-blue-500 rounded-full">
          <Icon aria-hidden={true} className="size-4 text-gray-100" />
        </div>
        <div className="relative">
          <h3 className="text-lg text-gray-900 font-semibold tracking-wide">{title}</h3>
          <div className="absolute left-0 -bottom-0.5 w-full h-0.5 bg-blue-500 rounded-full" />
        </div>
      </div>
      <div className="space-y-3 py-5">{children}</div>
    </section>
  );
}
