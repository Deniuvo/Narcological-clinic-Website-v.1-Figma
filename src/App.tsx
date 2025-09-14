import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { FamilySupport } from './components/FamilySupport';
import { DoctorsTeam } from './components/DoctorsTeam';
import { SocialProof } from './components/SocialProof';
import { ClinicMap } from './components/ClinicMap';
import { ChatBot } from './components/ChatBot';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <FamilySupport />
      <DoctorsTeam />
      <SocialProof />
      <ClinicMap />
      <Footer />
      <ChatBot />
    </div>
  );
}