import prisma from '@/app/libs/prismadb';

export default async function getFeedbacks() {
  try {
    let query: any = {};

    const feedbacks = await prisma.feedback.findMany({
      where: query,
      orderBy: {
        createdAt: 'desc',
      },
    });

    const safeFeedbacks = feedbacks.map(
      (feedback: { createdAt: { toISOString: () => any } }) => ({
        ...feedback,
        createdAt: feedback.createdAt.toISOString(),
      })
    );

    return safeFeedbacks;
  } catch (error: any) {
    throw new Error(error);
  }
}
