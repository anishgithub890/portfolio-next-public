import getCurrentUser from '@/app/actions/getCurrentUser';
import ClientOnly from '@/app/components/ClientOnly';
import EmptyState from '@/app/components/EmptyState';
import getSkills, { ISkillsParams } from '../actions/getSkills';
import Container from '../components/Container';
import TransitionEffect from '../components/TransitionEffect';
import SkillCard from './SkillCard';
import ExperienceCard from './ExperienceCard';
import getExperiences from '../actions/getExperiences';
import { Widget } from '../feedbackwidget/Widget';
import getTestimonials from '../actions/getTestimonials';
import TestimonialCard from './TestimonialCard';
import Footer from '../components/Footer';

interface SkillProps {
  searchParams: ISkillsParams;
}

const SkillClient = async ({ searchParams }: SkillProps) => {
  const skills = await getSkills(searchParams);
  const experiences = await getExperiences();
  const testimonials = await getTestimonials();
  const currentUser = await getCurrentUser();

  if (skills.length === 0) {
    return (
      <ClientOnly>
        <EmptyState showReset />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <TransitionEffect />
      <Container>
        <h2 className="font-bold text-3xl text-center pt-2 underline underline-offset-8">
          Skills
        </h2>
        <div
          className="
            pt-8
            grid 
            grid-cols-3 
            sm:grid-cols-4 
            md:grid-cols-6 
            lg:grid-cols-7
            xl:grid-cols-8
            2xl:grid-cols-8
            gap-4
          "
        >
          {skills.map((skill: any) => {
            return (
              <SkillCard
                currentUser={currentUser}
                key={skill.id}
                data={skill}
              />
            );
          })}
        </div>
        <div className="pt-8">
          <hr />
        </div>
        <h2 className="font-bold text-3xl text-center pt-8 underline underline-offset-8">
          Experiences
        </h2>
        <div
          className="
            pt-8
            grid 
            grid-cols-1 
            sm:grid-cols-1 
            md:grid-cols-2 
            lg:grid-cols-3
            xl:grid-cols-3
            2xl:grid-cols-4
            gap-4
          "
        >
          {experiences.length === 0 ? (
            <ClientOnly>
              <div className="md:flex-row bg-slate-100 rounded-xl p-8 md:p-6 justify-center">
                <p className="font-bold text-center underline underline-offset-2 text-2xl">
                  OOOPS! It's Empty
                </p>
                <p className="font-semibold text-center underline underline-offset-2">
                  Looks like you haven't added any data yet...!!!
                </p>
              </div>
            </ClientOnly>
          ) : (
            experiences.map((experience: any) => {
              return (
                <ExperienceCard
                  currentUser={currentUser}
                  key={experience.id}
                  data={experience}
                />
              );
            })
          )}
        </div>
        <div className="pt-8">
          <hr />
        </div>
        <h2 className="font-bold text-3xl text-center pt-8 underline underline-offset-8">
          Testimonials
        </h2>
        <div
          className="
            pt-8
            grid 
            grid-cols-1 
            sm:grid-cols-1 
            md:grid-cols-1 
            lg:grid-cols-1
            xl:grid-cols-1
            2xl:grid-cols-1
            gap-4
          "
        >
          {testimonials.length === 0 ? (
            <ClientOnly>
              <div className="md:flex-row bg-slate-100 rounded-xl p-8 md:p-6 justify-center">
                <p className="font-bold text-center underline underline-offset-2 text-2xl">
                  OOOPS! It's Empty
                </p>
                <p className="font-semibold text-center underline underline-offset-2">
                  Looks like you haven't added any data yet...!!!
                </p>
              </div>
            </ClientOnly>
          ) : (
            testimonials.map((testimonial: any) => {
              return (
                <TestimonialCard
                  currentUser={currentUser}
                  key={testimonial.id}
                  data={testimonial}
                />
              );
            })
          )}
        </div>
        <Footer />
      </Container>
      <Widget />
    </ClientOnly>
  );
};

export default SkillClient;
