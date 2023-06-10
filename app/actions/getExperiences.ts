import prisma from '@/app/libs/prismadb';

export default async function getExperiences() {
  try {
    let query: any = {};

    const experiences = await prisma.experience.findMany({
      where: query,
      orderBy: {
        createdAt: 'desc',
      },
    });

    const safeExperiences = experiences.map(
      (experience: { createdAt: { toISOString: () => any } }) => ({
        ...experience,
        createdAt: experience.createdAt.toISOString(),
      })
    );

    return safeExperiences;
  } catch (error: any) {
    throw new Error(error);
  }
}
