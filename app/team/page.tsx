import { MemberCard } from '../components/Card';
import Footer from "../components/Footer";
import { HomeIcon } from '../components/Buttons';

export default function Team() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-24 sm:p-20 font-[family-name:var(--font-space-mono)]">
      <main className="flex flex-col gap-24 row-start-2 items-center sm:items-start">
        <HomeIcon />
        <div className="-mt-28">
          Our team
        </div>
        <div className="grid grid-cols-1 gap-12 row-start-2 items-center sm:items-start lg:grid-cols-2">
          <MemberCard name='ethan' />
          <MemberCard name='tom' />
          <MemberCard name='léni' />
          <MemberCard name='clément' />
        </div>
      </main>
      <Footer />
    </div>
  );
}
