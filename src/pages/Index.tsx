
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Hobbies from "@/components/Hobbies";
import Goals from "@/components/Goals";
import Comments from "@/components/Comments";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-300">
      <Header />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Hobbies />
      <Goals />
      <Comments />
      <Footer />
    </div>
  );
};

export default Index;
