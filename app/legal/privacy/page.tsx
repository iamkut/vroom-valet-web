import type { Metadata } from 'next';
import { readFileSync } from 'fs';
import path from 'path';
import { MDXRemote } from 'next-mdx-remote/rsc';

export const metadata: Metadata = {
  title: 'Privacy policy',
  description: 'How Vroom Valet collects, uses and protects your personal information under POPIA.',
};

export default function PrivacyPage() {
  const raw = readFileSync(
    path.join(process.cwd(), '..', 'docs', 'privacy-policy.md'),
    'utf8',
  );

  return (
    <div className="pt-28 pb-20 bg-white">
      <div className="container max-w-3xl prose">
        <MDXRemote source={raw} />
      </div>
    </div>
  );
}
