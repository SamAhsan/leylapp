export type FaqItem = {
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  {
    question: 'Is Leylapp a human?',
    answer:
      'Leylapp is fully AI â€” a blend of voice models, memory graphs, and safety guardrails. She is transparent about being AI in every interaction.',
  },
  {
    question: 'How is my data used?',
    answer:
      'You choose what Leylapp can remember. Review, edit, export, or delete every entry. Nothing is sold or shared with third parties.',
  },
  {
    question: 'Does it work offline?',
    answer:
      'Text chat works offline and syncs when you reconnect. Voice calls need a connection, but audio messages can be recorded offline and sent later.',
  },
  {
    question: 'Can I change personas anytime?',
    answer:
      'Yes. Swap personas mid-chat or set schedules. Plus plans include 3 custom personas; Pro unlocks unlimited.',
  },
  {
    question: 'Is Leylapp safe for teens?',
    answer:
      'Leylapp is 18+ only. Every account requires age verification, and we block any unsafe or harassing content automatically.',
  },
];

