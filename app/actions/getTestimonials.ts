import prisma from '@/app/libs/prismadb';

export default async function getTestimonials() {
  try {
    let query: any = {};

    const testimonials = await prisma.testimonial.findMany({
      where: query,
      orderBy: {
        createdAt: 'desc',
      },
    });

    const safeTestimonials = testimonials.map((testimonial) => ({
      ...testimonial,
      createdAt: testimonial.createdAt.toISOString(),
      updatedAt: testimonial.createdAt.toISOString(),
    }));

    return safeTestimonials;
  } catch (error: any) {
    throw new Error(error);
  }
}
