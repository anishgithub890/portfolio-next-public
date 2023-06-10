import prisma from '@/app/libs/prismadb';

export interface ISkillsParams {
  userId?: string;
}

export default async function getSkills(params: ISkillsParams) {
  try {
    const { userId } = params;

    let query: any = {};

    if (userId) {
      query.userId = userId;
    }

    const skills = await prisma.skill.findMany({
      where: query,
      orderBy: {
        createdAt: 'desc',
      },
    });

    const safeSkills = skills.map(
      (skill: { createdAt: { toISOString: () => any } }) => ({
        ...skill,
        createdAt: skill.createdAt.toISOString(),
      })
    );

    return safeSkills;
  } catch (error: any) {
    throw new Error(error);
  }
}
