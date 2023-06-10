import { NextResponse } from 'next/server';

import prisma from '@/app/libs/prismadb';

export async function POST(request: Request) {
  const body = await request.json();
  const { type, comment, screenshot } = body;

  const feedback = await prisma.feedback.create({
    data: {
      type,
      comment,
      screenshot,
    },
  });

  return NextResponse.json(feedback);
}
