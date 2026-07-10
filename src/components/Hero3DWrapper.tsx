'use client';
import dynamic from 'next/dynamic';

const Hero3DDynamic = dynamic(() => import('@/components/Hero3D'), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 bg-slate-900 flex items-center justify-center text-slate-500 z-0">
      Loading 3D Experience...
    </div>
  )
});

export default function Hero3DWrapper() {
  return <Hero3DDynamic />;
}
