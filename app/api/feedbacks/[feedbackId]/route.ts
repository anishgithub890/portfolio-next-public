import { NextResponse } from 'next/server';

import getCurrentUser from '@/app/actions/getCurrentUser';
import prisma from '@/app/libs/prismadb';

interface IParams {
  feedbackId?: string;
}

export async function DELETE(
  request: Request,
  { params }: { params: IParams }
) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const { feedbackId } = params;

  if (!feedbackId || typeof feedbackId !== 'string') {
    throw new Error('Invalid ID');
  }

  const feedback = await prisma.feedback.deleteMany({
    where: {
      id: feedbackId,
    },
  });

  return NextResponse.json(feedback);
}
