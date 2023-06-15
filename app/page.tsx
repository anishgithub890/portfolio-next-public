import HomeClient from './home/HomeClient';
import ClientOnly from './components/ClientOnly';

export default function Home() {
  return (
    <div>
      <ClientOnly>
        <HomeClient />
      </ClientOnly>
    </div>
  );
}
