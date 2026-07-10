import { getDictionary } from '@/i18n';
import ShowroomGallery from '@/components/ShowroomGallery';

export default async function Showroom({ params }: { params: Promise<{ lng: string }> }) {
  const { lng } = await params;
  const dict = await getDictionary(lng);

  return (
    <div className="min-h-screen bg-[#f4f4f4] pt-5 pb-20">
      <div className="container mx-auto px-4 max-w-7xl">


        <ShowroomGallery 
          lng={lng}
          dict={dict.showroom_ui}
        />
      </div>
    </div>
  );
}
