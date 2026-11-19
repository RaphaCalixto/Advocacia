import { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { StatsAndAuthority } from './components/sections/StatsAndAuthority';
import { PracticeAreas } from './components/sections/PracticeAreas';
import { AboutLawyer } from './components/sections/AboutLawyer';
import { InteractiveAssessment } from './components/sections/InteractiveAssessment';
import { SuccessCases } from './components/sections/SuccessCases';
import { Testimonials } from './components/sections/Testimonials';
import { FaqSection } from './components/sections/FaqSection';
import { ContactSection } from './components/sections/ContactSection';
import { Footer } from './components/layout/Footer';
import { PracticeDetailModal } from './components/modals/PracticeDetailModal';
import { AppointmentModal } from './components/modals/AppointmentModal';
import type { PracticeArea } from './types';

export function App() {
  const [selectedPracticeArea, setSelectedPracticeArea] = useState<PracticeArea | null>(null);
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);
  const [preSelectedAreaForModal, setPreSelectedAreaForModal] = useState<string>('Holding & Sucessão Familiar');

  const handleOpenPracticeDetails = (area: PracticeArea) => {
    setSelectedPracticeArea(area);
  };

  const handleClosePracticeDetails = () => {
    setSelectedPracticeArea(null);
  };

  const handleOpenAppointmentModal = (areaName?: string) => {
    if (areaName) {
      setPreSelectedAreaForModal(areaName);
    }
    setIsAppointmentModalOpen(true);
  };

  const handleCloseAppointmentModal = () => {
    setIsAppointmentModalOpen(false);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#15040f] text-[#E9E8E6] font-sans antialiased selection:bg-[#AD9273] selection:text-[#15040f]">
      {/* Barra de Navegação de Alto Padrão */}
      <Navbar onOpenAppointmentModal={() => handleOpenAppointmentModal()} />

      <main>
        {/* Hero Cinematográfico com Parallax e Tipografia Monumental */}
        <Hero
          onOpenAppointmentModal={() => handleOpenAppointmentModal()}
          onExploreAreas={() => scrollToSection('areas')}
          onStartAssessment={() => scrollToSection('diagnostico')}
        />

        {/* Números Expressivos e Solidez Institucional */}
        <StatsAndAuthority />

        {/* Áreas de Atuação com Cards de Formatos e Animações Diferenciadas */}
        <PracticeAreas onOpenDetails={handleOpenPracticeDetails} />

        {/* Sobre o Jurista e Trajetória de Autoridade */}
        <AboutLawyer onOpenAppointmentModal={() => handleOpenAppointmentModal()} />

        {/* Simulador Interativo de Diagnóstico Jurídico */}
        <InteractiveAssessment />

        {/* Precedentes e Casos Reais de Sucesso */}
        <SuccessCases />

        {/* Depoimentos e Prova Social de Líderes Empresariais */}
        <Testimonials />

        {/* FAQ - Perguntas Frequentes */}
        <FaqSection />

        {/* Seção de Contato e Gabinetes Físicos */}
        <ContactSection />
      </main>

      {/* Rodapé Institucional */}
      <Footer />

      {/* Modal Detalhado de Cada Especialidade */}
      <PracticeDetailModal
        area={selectedPracticeArea}
        onClose={handleClosePracticeDetails}
        onBookConsultation={(areaTitle) => handleOpenAppointmentModal(areaTitle)}
      />

      {/* Modal de Agendamento de Consulta Prioritária */}
      <AppointmentModal
        isOpen={isAppointmentModalOpen}
        onClose={handleCloseAppointmentModal}
        preSelectedArea={preSelectedAreaForModal}
      />
    </div>
  );
}

export default App;
