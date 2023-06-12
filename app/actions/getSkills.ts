import prisma from '@/app/libs/prismadb';

// export interface ISkillsParams {
//   userId?: string;
// }

export default async function getSkills() {
  try {
    // const { userId } = params;

    let query: any = {};

    // if (userId) {
    //   query.userId = userId;
    // }

    const skills = await prisma.skill.findMany({
      where: query,
      orderBy: {
        createdAt: 'desc',
      },
    });

    const safeSkills = skills.map((skill) => ({
      ...skill,
      createdAt: skill.createdAt.toISOString(),
      updatedAt: skill.createdAt.toISOString(),
    }));

    return safeSkills;
  } catch (error: any) {
    throw new Error(error);
  }
}
