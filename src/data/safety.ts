export type SafetyItem = {
  title: string;
  description: string;
  detail: string;
};

export const safetySections: SafetyItem[] = [
  {
    title: 'Data Control',
    description: 'Review, export, or delete every conversation and memory in a single dashboard.',
    detail: 'We send monthly reminders to check what Leylapp remembers. Bulk delete wipes primary + encrypted backups in 24 hours.',
  },
  {
    title: 'On-device vs Cloud',
    description: 'Voice fingerprinting and quick replies stay on your device. Memories move to the cloud only if you opt in.',
    detail: 'You can toggle per-feature storage plus see exactly which data is cached for faster calls.',
  },
  {
    title: 'Age Policy',
    description: 'Leylapp is 18+ with verification. Ineligible accounts are locked and data removed automatically.',
    detail: 'We work with Yoti for age assurance and automatically redact flagged transcripts.',
  },
  {
    title: 'Guardrails',
    description: 'Crisis keywords trigger grounding prompts and live crisis resources with optional handoff.',
    detail: 'Harassment filters run before Leylapp responds, and block/report is accessible within one tap.',
  },
  {
    title: 'Transparency',
    description: 'We publish quarterly transparency reports and changelogs for every safety update.',
    detail: 'You can subscribe to privacy updates only. Leylapp never sells or shares personal data.',
  },
  {
    title: 'Contact',
    description: 'Need a human? Email privacy@Leylapp.app or submit the encrypted form in-app.',
    detail: 'We respond to urgent privacy requests within 24 hours, product questions within 48 hours.',
  },
];

