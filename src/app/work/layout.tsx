import { ContactButton } from '@/components/global/contact-button';
import Footer from '@/components/global/footer';
import { Contact } from 'lucide-react';
import React from 'react'

type Props = {
  children: React.ReactNode
}

export default function layout({children}: Props) {
  return (
      <main>
          {children}
      <Footer />
      </main>
  );
}