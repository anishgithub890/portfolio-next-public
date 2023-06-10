import { NextResponse } from 'next/server';

import prisma from '@/app/libs/prismadb';

export async function POST(request: Request) {
  const body = await request.json();
  const { email, name, message } = body;

  const contact = await prisma.contact.create({
    data: {
      email,
      name,
      message,
    },
  });

  return NextResponse.json(contact);
}
