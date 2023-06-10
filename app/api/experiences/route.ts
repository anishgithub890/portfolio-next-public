import { NextResponse } from 'next/server';

import prisma from '@/app/libs/prismadb';
import getCurrentUser from '@/app/actions/getCurrentUser';

export async function POST(request: Request) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const body = await request.json();
  const { year, language, company, description, imageSrc } = body;

  Object.keys(body).forEach((value: any) => {
    if (!body[value]) {
      NextResponse.error();
    }
  });

  const experience = await prisma.experience.create({
    data: {
      year,
      language,
      company,
      description,
      userId: currentUser.id,
    },
  });

  return NextResponse.json(experience);
}
