import AnimatedSection from "@/components/animated-section";
import { Download } from "lucide-react";

export default function Resume() {
  const handleDownload = () => {
    // Create a download link for the resume
    const link = document.createElement('a');
    link.href = '/api/resume/download';
    link.download = 'Rahul_Gopi_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="page-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h2 className="section-title font-black text-center mb-16">
            RESUME
          </h2>
        </AnimatedSection>
        
        <div className="max-w-4xl mx-auto">
          <AnimatedSection delay={0.2}>
            <div className="text-center mb-12">
              <button
                onClick={handleDownload}
                className="inline-flex items-center gap-2 bg-black text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
              >
                <Download size={20} />
                Download Resume
              </button>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={0.4}>
            <div className="bg-white p-8 rounded-lg shadow-sm space-y-8">
              
              {/* Header */}
              <div className="text-center border-b pb-6">
                <h1 className="text-3xl font-bold mb-2">Rahul Gopi</h1>
                <div className="text-gray-600 space-y-1">
                  <p>rahul.gopi0604@gmail.com | +91 9677230663</p>
                  <p>linkedin.com/in/rahul-g-639926265 | github.com/rahul-lol</p>
                </div>
              </div>
              
              {/* Education */}
              <div>
                <h2 className="text-2xl font-bold mb-4">Education</h2>
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold">SRM Institute of Science and Technology</h3>
                      <p className="text-gray-600">B.Tech in Computer Science Engineering (AI/ML)</p>
                      <p className="text-gray-600">CGPA: 7.96</p>
                    </div>
                    <span className="text-gray-600">Aug 2022 – May 2026</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold">Vaels International School</h3>
                      <p className="text-gray-600">Higher Secondary Education</p>
                    </div>
                    <span className="text-gray-600">June 2020 – March 2022</span>
                  </div>
                </div>
              </div>
              
              {/* Awards */}
              <div>
                <h2 className="text-2xl font-bold mb-4">Awards</h2>
                <div>
                  <h3 className="font-semibold">Nokia Accelerate Her in Tech Hackathon — Runner-up Award</h3>
                  <p className="text-gray-600">
                    Developed a plagiarism-detection platform tailored for whitepapers and research documents, earning 2nd place.
                  </p>
                </div>
              </div>
              
              {/* Certifications */}
              <div>
                <h2 className="text-2xl font-bold mb-4">Certifications</h2>
                <div className="space-y-3">
                  <div>
                    <h3 className="font-semibold">Oracle Cloud Infrastructure Certification</h3>
                    <p className="text-gray-600">Expertise in cloud computing and infrastructure services</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">NPTEL - Programming in Java and Introduction to IIOT</h3>
                    <p className="text-gray-600">In-depth course on Java programming and Industrial Internet of Things</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Python - From Livewire</h3>
                    <p className="text-gray-600">Certification in Python programming covering core concepts and applications</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">AWS Course in Machine Learning</h3>
                    <p className="text-gray-600">Knowledge of AI/ML services and cloud-based model training</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
