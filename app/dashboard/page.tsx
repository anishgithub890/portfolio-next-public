import React from 'react';
import DashboardCard from './DashboardCard';
import ClientOnly from '../components/ClientOnly';
import Container from '../components/Container';

const page = () => {
  return (
    <ClientOnly>
      <Container>
        <h2 className="font-bold text-3xl text-center pt-2 underline underline-offset-8">
          Manage your data
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
            2xl:grid-cols-3
            gap-4
          "
        >
          <DashboardCard />
        </div>
      </Container>
    </ClientOnly>
  );
};

export default page;
