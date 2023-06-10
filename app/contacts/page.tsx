'use client';

import ClientOnly from '@/app/components/ClientOnly';
import TransitionEffect from '../components/TransitionEffect';
import ContactModal from './ContactModal';
import { Widget } from '../feedbackwidget/Widget';
import Footer from '../components/Footer';
import Container from '../components/Container';

const ContactPage = () => {
  return (
    <ClientOnly>
      <TransitionEffect />
      <Container>
        <ContactModal />
        <Footer />
      </Container>
      <Widget />
    </ClientOnly>
  );
};

export default ContactPage;
