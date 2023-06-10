import { NextResponse } from 'next/server';

import getCurrentUser from '@/app/actions/getCurrentUser';
import prisma from '@/app/libs/prismadb';

interface IParams {
  skillId?: string;
}

export async function DELETE(
  request: Request,
  { params }: { params: IParams }
) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const { skillId } = params;

  if (!skillId || typeof skillId !== 'string') {
    throw new Error('Invalid ID');
  }

  const skill = await prisma.skill.deleteMany({
    where: {
      id: skillId,
      userId: currentUser.id,
    },
  });

  return NextResponse.json(skill);
}
