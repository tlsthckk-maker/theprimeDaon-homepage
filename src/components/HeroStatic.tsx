export default function HeroStatic() {
  return (
    <div 
      className="absolute inset-0 w-full h-full z-0 bg-cover bg-center"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=2000&auto=format&fit=crop')", // 고화질 가죽 공예 텍스처 임시 이미지
      }}
    >
      {/* 텍스트 가독성을 위한 네이비 톤 오버레이 */}
      <div className="absolute inset-0 bg-slate-900/80 mix-blend-multiply"></div>
    </div>
  );
}
