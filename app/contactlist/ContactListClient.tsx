'use client';

import axios from 'axios';
import { useCallback, useState } from 'react';
import { useRouter } from 'next/navigation';

import { toast } from 'react-hot-toast';
import { SafeContact, SafeUser } from '@/app/types';

import Heading from '@/app/components/Heading';
import Container from '@/app/components/Container';
import ContactListingCard from '../components/contactslist/ContactListingCard';

interface ContactListClientProps {
  contacts: SafeContact[];
  currentUser?: SafeUser | null;
}

const ContactListClient: React.FC<ContactListClientProps> = ({
  contacts,
  currentUser,
}) => {
  const router = useRouter();
  const [deletingId, setDeletingId] = useState('');

  const onDelete = useCallback(
    (id: string) => {
      setDeletingId(id);

      axios
        .delete(`/api/contacts/${id}`)
        .then(() => {
          toast.success('Contact deleted');
          router.refresh();
        })
        .catch((error) => {
          toast.error(error?.response?.data?.error);
        })
        .finally(() => {
          setDeletingId('');
        });
    },
    [router]
  );

  return (
    <Container>
      <Heading title="Contact" subtitle="List of your contacts" />
      <div
        className="
        flex flex-wrap justify-between gap-4 pt-8 pl-4 pr-4
          "
      >
        {contacts.map((message: any) => (
          <ContactListingCard
            key={message.id}
            data={message}
            actionId={message.id}
            onAction={onDelete}
            disabled={deletingId === message.id}
            actionLabel="Delete Contact"
          />
        ))}
      </div>
    </Container>
  );
};

export default ContactListClient;
