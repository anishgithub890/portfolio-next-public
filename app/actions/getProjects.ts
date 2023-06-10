import prisma from '@/app/libs/prismadb';

export interface IProjectsParams {
  userId?: string;
}

export default async function getProjects(params: IProjectsParams) {
  try {
    const { userId } = params;

    let query: any = {};

    if (userId) {
      query.userId = userId;
    }

    const projects = await prisma.project.findMany({
      where: query,
      orderBy: {
        createdAt: 'desc',
      },
    });

    const safeProjects = projects.map(
      (project: { createdAt: { toISOString: () => any } }) => ({
        ...project,
        createdAt: project.createdAt.toISOString(),
      })
    );

    return safeProjects;
  } catch (error: any) {
    throw new Error(error);
  }
}
