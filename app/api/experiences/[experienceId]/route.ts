import { NextResponse } from 'next/server';
import getCurrentUser from '@/app/actions/getCurrentUser';
import prisma from '@/app/libs/prismadb';

interface IParams {
  experienceId?: string;
}

interface UpdateData {
  year?: string;
  language?: string;
  company?: string;
  description?: string;
}

export async function PUT(
  request: Request,
  { params, body }: { params: IParams; body: UpdateData }
) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const { experienceId } = params;

  if (!experienceId || typeof experienceId !== 'string') {
    throw new Error('Invalid ID');
  }

  const { year, language, company, description } = body;

  const updatedExperience = await prisma.experience.updateMany({
    where: {
      id: experienceId,
      userId: currentUser.id,
    },
    data: {
      year,
      language,
      company,
      description,
    },
  });

  return NextResponse.json(updatedExperience);
}

export async function DELETE(
  request: Request,
  { params }: { params: IParams }
) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const { experienceId } = params;

  if (!experienceId || typeof experienceId !== 'string') {
    throw new Error('Invalid ID');
  }

  const deletedExperience = await prisma.experience.deleteMany({
    where: {
      id: experienceId,
      userId: currentUser.id,
    },
  });

  return NextResponse.json(deletedExperience);
}
