
import Featured from "@/components/Featured";
import ContactUs from "@/components/ContactUs";
import Slider from "@/components/Slider";
import { Suspense } from "react";
import LFeatured from "@/components/LoadingComponents/LFeatured";
//export const dynamic = 'force-dynamic'

export default function Home() {
  return (
    <main>
      <Slider />
      <Suspense  fallback={<LFeatured />}>
      <Featured />
      </Suspense>
      <ContactUs />
    </main>
      
  );
}
