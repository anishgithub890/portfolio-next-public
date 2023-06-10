import { NextResponse } from 'next/server';

import prisma from '@/app/libs/prismadb';
import getCurrentUser from '@/app/actions/getCurrentUser';

export async function POST(request: Request) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const body = await request.json();
  const { name, role, company, comment, imageSrc } = body;

  Object.keys(body).forEach((value: any) => {
    if (!body[value]) {
      NextResponse.error();
    }
  });

  const testimonial = await prisma.testimonial.create({
    data: {
      name,
      role,
      company,
      comment,
      imageSrc,
      userId: currentUser.id,
    },
  });

  return NextResponse.json(testimonial);
}
