import React from 'react';
import DashboardCard from './DashboardCard';
import ClientOnly from '../components/ClientOnly';
import Container from '../components/Container';
import EmptyState from '../components/EmptyState';
import getCurrentUser from '../actions/getCurrentUser';

const page = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return <EmptyState title="Unauthorized" subtitle="Please login" />;
  }
  return (
    <ClientOnly>
      {currentUser?.role == 'USER' ? (
        <div>
          <EmptyState
            title="OOOPS! ACCESS DENIED"
            subtitle="Your role has to be admin.!"
          />
        </div>
      ) : currentUser?.role == 'ADMIN' ? (
        <>
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
        </>
      ) : (
        <></>
      )}
    </ClientOnly>
  );
};

export default page;
