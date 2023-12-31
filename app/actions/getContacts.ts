import prisma from '@/app/libs/prismadb';

export default async function getContacts() {
  try {
    let query: any = {};

    const contacts = await prisma.contact.findMany({
      where: query,
      orderBy: {
        createdAt: 'desc',
      },
    });

    const safeContacts = contacts.map((contact) => ({
      ...contact,
      createdAt: contact.createdAt.toISOString(),
      updatedAt: contact.createdAt.toISOString(),
    }));

    return safeContacts;
  } catch (error: any) {
    throw new Error(error);
  }
}
