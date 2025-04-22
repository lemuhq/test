import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Authentication - SustainVersity',
  description: 'Sign in or create an account to access SustainVersity resources',
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="min-h-screen">
      {children}
    </section>
  );
} 