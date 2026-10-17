import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resume & CV | Sreerag P P',
  description:
    'Interactive digital resume and engineering profile of Sreerag P P — Chief Technology Officer @ Infocyle, Full-Stack Engineer, and Distributed Systems Architect.',
};

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
