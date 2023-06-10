import { NextResponse } from 'next/server';

import getCurrentUser from '@/app/actions/getCurrentUser';
import prisma from '@/app/libs/prismadb';

interface IParams {
  testimonialId?: string;
}

export async function DELETE(
  request: Request,
  { params }: { params: IParams }
) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const { testimonialId } = params;

  if (!testimonialId || typeof testimonialId !== 'string') {
    throw new Error('Invalid ID');
  }

  const testimonial = await prisma.testimonial.deleteMany({
    where: {
      id: testimonialId,
      userId: currentUser.id,
    },
  });

  return NextResponse.json(testimonial);
}
