import { getDictionary } from '@/i18n';
import CinematicCapabilities from '@/components/CinematicCapabilities';

export default async function Capabilities({ params }: { params: Promise<{ lng: string }> }) {
  const { lng } = await params;
  const dict = await getDictionary(lng);

  return (
    <main className="bg-[#f5f5f7] text-[#1d1d1f] min-h-screen">
      <CinematicCapabilities dict={dict.capabilities_cinematic} />
    </main>
  );
}
