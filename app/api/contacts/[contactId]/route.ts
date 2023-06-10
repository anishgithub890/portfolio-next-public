import { NextResponse } from 'next/server';

import prisma from '@/app/libs/prismadb';

interface IParams {
  contactId?: string;
}

export async function DELETE(
  request: Request,
  { params }: { params: IParams }
) {
  const { contactId } = params;

  if (!contactId || typeof contactId !== 'string') {
    throw new Error('Invalid ID');
  }

  const contact = await prisma.contact.deleteMany({
    where: {
      id: contactId,
    },
  });

  return NextResponse.json(contact);
}
