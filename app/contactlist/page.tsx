import EmptyState from '@/app/components/EmptyState';
import ClientOnly from '@/app/components/ClientOnly';

import getCurrentUser from '../actions/getCurrentUser';

import ContactListClient from './ContactListClient';
import getContacts from '../actions/getContacts';

const page = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return <EmptyState title="Unauthorized" subtitle="Please login" />;
  }

  const contacts = await getContacts();

  if (contacts.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="No contact found"
          subtitle="Looks like you have no contact sended yet!!."
        />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <ContactListClient contacts={contacts} currentUser={currentUser} />
    </ClientOnly>
  );
};

export default page;
