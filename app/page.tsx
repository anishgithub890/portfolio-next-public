import HomeClient from './Home/HomeClient';
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
