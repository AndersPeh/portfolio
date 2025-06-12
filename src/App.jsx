import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experiences,
  Hero,
  Navbar,
  Tech,
  StarsCanvas,
  Footer,
} from "./components";
import Projects from "./components/Projects";
import Education from "./components/Education";
import { useState } from "react";
import ImageModal from "./components/ImageModal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageUrl, setSelectedImageUrl] = useState("");

  const handleOpenModal = (imageUrl) => {
    setSelectedImageUrl(imageUrl);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedImageUrl("");
  };
  return (
    <BrowserRouter basename="/portfolio">
      <div className="relative z-0 bg-primary">
        <StarsCanvas />
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
        </div>

        <About />
        <Tech />

        <Experiences onImageClick={handleOpenModal} />
        <Projects />
        <Education onImageClick={handleOpenModal} />
        <Contact />
        <Footer />
      </div>
      <ImageModal
        src={selectedImageUrl}
        alt="Zoomed Image"
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </BrowserRouter>
  );
}

export default App;
