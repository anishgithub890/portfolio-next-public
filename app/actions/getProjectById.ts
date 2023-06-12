import prisma from '@/app/libs/prismadb';

interface IParams {
  projectId?: string;
}

export default async function getProjectById(params: IParams) {
  try {
    const { projectId } = params;

    const project = await prisma.project.findUnique({
      where: {
        id: projectId,
      },
      include: {
        user: true,
      },
    });

    if (!project) {
      return null;
    }

    return {
      ...project,
      createdAt: project.createdAt.toISOString(),
      updatedAt: project.createdAt.toISOString(),
      user: {
        ...project.user,
        createdAt: project.user.createdAt.toISOString(),
        emailVerified: project.user.emailVerified?.toISOString() || null,
      },
    };
  } catch (error: any) {
    throw new Error(error);
  }
}
