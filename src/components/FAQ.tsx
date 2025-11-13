import { Disclosure } from '@headlessui/react';
import { ChevronDown } from 'lucide-react';
import clsx from 'clsx';
import type { FaqItem } from '../data/faq';

type FAQProps = {
  items: FaqItem[];
};

const FAQ = ({ items }: FAQProps) => (
  <div className="space-y-4">
    {items.map((item) => (
      <Disclosure key={item.question}>
        {({ open }) => (
          <div className="rounded-2xl border border-neutral-200 bg-white">
            <Disclosure.Button className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left">
              <span className="text-base font-semibold text-neutral-900">{item.question}</span>
              <ChevronDown className={clsx('h-5 w-5 text-neutral-500 transition-transform', open && 'rotate-180')} aria-hidden />
            </Disclosure.Button>
            <Disclosure.Panel className="px-6 pb-5 text-sm text-neutral-600">
              {item.answer}
            </Disclosure.Panel>
          </div>
        )}
      </Disclosure>
    ))}
  </div>
);

export default FAQ;
