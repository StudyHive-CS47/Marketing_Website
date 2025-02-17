import { useState, useEffect } from 'react'
import logo from './assets/logo.png'
import noteSharing from './assets/note-sharing.png'
import groupChat from './assets/group-chat.png'
import qaBoard from './assets/qa-board.png'
import shortNotes from './assets/short-notes.png'
import chatbot from './assets/chatbot.png'
import calendar from './assets/calendar.png'
import tharana from './assets/tharana.jpg'
import senuri from './assets/senuri.jpg'
import chamith from './assets/chamith.jpg'
import dilshan from './assets/dilshan.jpg'
import tharindu from './assets/tharindu.jpg'
import BackgroundPattern from './components/BackgroundPattern'
import styled from 'styled-components'
import StudyHiveImpactChart from './components/StudyHiveImpactChart'
import SocialButtons from './components/SocialButtons'
import TestimonialCard from './components/TestimonialCard'
import TeamCard from './components/TeamCard'
import yasara from './assets/yasara.png'
import rashmina from './assets/rashmina.png'
import thisakya from './assets/thisakya.png'
import miuni from './assets/miuni.png'
import nirasha from './assets/nirasha.png'
import thevindu from './assets/thevindu.png'
import ContactForm from './components/ContactForm'
import emailjs from '@emailjs/browser'
import DonatePopup from './components/DonatePopup'
import PrivacyPolicyPopup from './components/PrivacyPolicyPopup'
import TermsOfServicePopup from './components/TermsOfServicePopup'
import CookiePolicyPopup from './components/CookiePolicyPopup'
import ContactPattern from './components/ContactPattern'
import MobileNav from './components/MobileNav'
import BackToTopButton from './components/BackToTopButton'
import CountdownTimer from './components/CountdownTimer'
import InDepthAnalysis from './components/InDepthAnalysis'
import YoutubeButton from './components/YoutubeButton'

// Initialize EmailJS with your public key
emailjs.init("JNclWd0Not-_7lGaz")

const StyledCard = styled.div`
  .card {
    width: 100%;
    height: 100%;
    background: rgb(255, 255, 255);
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, 
                rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, 
                rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    padding: 2rem;
    border-radius: 1rem;
    transition: transform 0.2s ease;

    &:hover {
      transform: translateY(-5px);
    }
  }
`;

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [showCookieConsent, setShowCookieConsent] = useState(false);
  const [showDonatePopup, setShowDonatePopup] = useState(false);
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const [showTermsOfService, setShowTermsOfService] = useState(false);
  const [showCookiePolicy, setShowCookiePolicy] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;

        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen font-sans text-gray-800 relative">
      <BackgroundPattern />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/60 backdrop-blur-lg border-b border-gray-100/50 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-4">
              <img src={logo} alt="StudyHive Logo" className="h-10 w-auto" />
              <h1 className="text-2xl md:text-4xl font-bold text-studyhive-dark">StudyHive</h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex space-x-8">
              {[
                'home',
                'features', 
                'product-overview',
                'impact',
                'testimonials',
                'connect',
                'team',
              ].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-all duration-200 ${
                    activeSection === section
                      ? 'text-studyhive-accent font-semibold'
                      : 'text-gray-600 hover:text-studyhive-accent'
                  }`}
                >
                  {section.toUpperCase()}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-4">
              <button 
                onClick={() => scrollToSection('contact')} 
                className="bg-studyhive-accent text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-opacity-90 transition-colors hidden sm:block"
              >
                Contact Us
              </button>
              <button
                className="lg:hidden text-gray-600 hover:text-studyhive-accent"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <i className="fas fa-bars text-xl"></i>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <MobileNav 
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-studyhive-light/50 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <img 
                src={logo} 
                alt="StudyHive Logo" 
                className="w-32 h-32 md:w-40 md:h-40 object-contain animate-float"
              />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-studyhive-dark">
              Collaborate, Learn, Succeed...<br/>
            </h1>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              The ultimate study companion that helps you organize notes, track deadlines, and collaborate with peers effortlessly<br/>From students, for students.
            </p>
            <div className="flex justify-center gap-4">
              <button 
                onClick={() => scrollToSection('features')}
                className="bg-studyhive-accent text-white px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-colors flex items-center gap-2"
              >
                <i className="fas fa-star"></i>
                Key Features
              </button>
              <button 
                onClick={() => scrollToSection('product-overview')}
                className="border-2 border-studyhive-accent text-studyhive-accent px-8 py-3 rounded-full font-medium hover:bg-studyhive-light transition-colors flex items-center gap-2"
              >
                <i className="fas fa-play"></i>
                Product Overview
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* After Hero Section and before Features Section */}
      <section id="timer" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-studyhive-light/30 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <CountdownTimer />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 relative">
        <div className="absolute inset-0 bg-white/40 backdrop-blur-sm"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-studyhive-dark">
              Amazing features to revolutionize<br/>your study journey
            </h2>
            <p className="text-gray-600">
              All the tools you need to excel in your academic journey
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: noteSharing,
                title: "Seamless Note Sharing",
                description: "Your perfect tool to collaborate together! Share and access notes instantly."
              },
              {
                icon: groupChat,
                title: "Group Chat for Study Sessions",
                description: "Connect with your classmates in real-time! Create study groups effortlessly."
              },
              {
                icon: qaBoard,
                title: "Interactive Q&A Board",
                description: "Ask questions, get answers, and learn together with your peers."
              },
              {
                icon: shortNotes,
                title: "Automated Short Notes",
                description: "Let AI help you create concise and effective study materials."
              },
              {
                icon: chatbot,
                title: "24/7 Smart Chatbot",
                description: "Your personal study assistant, always ready to help."
              },
              {
                icon: calendar,
                title: "Smart Deadline Calendar",
                description: "Stay organized and never miss important deadlines."
              }
            ].map((feature, index) => (
              <StyledCard key={index}>
                <div className="card">
                  <div className="flex flex-col items-center text-center">
                    <img 
                      src={feature.icon} 
                      alt={feature.title}
                      className="w-16 h-16 mb-4 object-contain"
                    />
                    <h3 className="text-xl font-semibold mb-3 text-studyhive-dark">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </StyledCard>
            ))}
          </div>
        </div>
      </section>

      {/* Product Overview */}
      <section id="product-overview" className="py-20 bg-studyhive-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-studyhive-dark">
              Product Overview
            </h2>
            <p className="text-gray-600">
              Watch how StudyHive can transform your academic journey
            </p>
          </div>
          <div className="aspect-w-16 aspect-h-9 max-w-4xl mx-auto">
            <iframe 
              className="w-full h-[600px] rounded-2xl shadow-xl"
              src="https://www.youtube.com/embed/VAntOiVztIw?si=rWxGEcgV611SIjib" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
            ></iframe>
          </div>
          <YoutubeButton />
        </div>
      </section>

      {/* After the Product Overview section and before the CTA section */}
      <section id="impact" className="bg-studyhive-light">
        <StudyHiveImpactChart />
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-studyhive-dark">
            Testimonials of students
            </h2>
            <p className="text-gray-600">
              Hear from students who wants to improve their study experience with StudyHive
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center max-w-lg md:max-w-none mx-auto">
            <TestimonialCard
              name="Tharana Bopearachchi"
              date="2 days ago"
              description="Managing study materials and deadlines is chaotic with scattered resources. StudyHive would be a game-changer—everything in one place, easy collaboration, and no more missed deadlines!"
              image={tharana}
            />
            <TestimonialCard
              name="Senuri Hansamini"
              date="1 week ago"
              description="Finding notes and keeping track of assignments is a struggle. StudyHive would simplify everything, making studying more organized and stress-free. We need this!"
              image={senuri}
            />
            <TestimonialCard
              name="Chamith Sandeepa"
              date="3 days ago"
              description="Group projects and deadlines become a mess without proper organization. StudyHive would make teamwork and studying so much easier!"
              image={chamith}
            />
            <TestimonialCard
              name="Dilshan Manohara"
              date="5 days ago"
              description="We waste so much time searching for notes. A centralized platform like StudyHive would save time and boost productivity!"
              image={dilshan}
            />
            <TestimonialCard
              name="Tharindu Madushanka"
              date="1 week ago"
              description="Having all study materials in one place with reminders and collaboration tools would be a lifesaver. StudyHive is exactly what students need!"
              image={tharindu}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="connect" className="py-20 bg-studyhive-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Connect With Us
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Follow us on social media to stay updated with the latest features, updates, and study tips. Join our growing community of successful students!
          </p>
          <SocialButtons />
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-studyhive-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-studyhive-dark">
              Meet the Team Behind StudyHive
            </h2>
            <p className="text-gray-600 mb-12">
              Our dedicated team of developers working to make your study experience better
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            <TeamCard
              name="Yasara Madana"
              role="Leader/Full Stack Developer"
              image={yasara}
              linkedIn="https://www.linkedin.com/in/yasara-madana-93263b269/"
            />
            <TeamCard
              name="Rashmina Fernando"
              role="Full Stack Developer"
              image={rashmina}
              linkedIn="https://rashminafdo.github.io/Portfolio/"
            />
            <TeamCard
              name="Thisakya Pathirathne"
              role="Full Stack Developer"
              image={thisakya}
              linkedIn="https://www.linkedin.com/in/thisakya-pathirathne-a61720273/"
            />
            <TeamCard
              name="Miuni Weerasinghe"
              role="Full Stack Developer"
              image={miuni}
              linkedIn="https://www.linkedin.com/in/miuni-weerasinghe-1b922b270/"
            />
            <TeamCard
              name="Nirasha Thilakarathna"
              role="Full Stack Developer"
              image={nirasha}
              linkedIn="https://www.linkedin.com/in/nirasha-thilakarathna-8753a2296/"
            />
            <TeamCard
              name="Thevindu Jayakody"
              role="Full Stack Developer"
              image={thevindu}
              linkedIn="https://www.linkedin.com/in/thevindu-jayakody-828311334/"
            />
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 relative overflow-hidden bg-gradient-to-br from-studyhive-light/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <ContactForm />
        </div>
      </section>

      {/* In-Depth Analysis Section */}
      <section id="analysis" className="py-20 bg-gradient-to-br from-white to-studyhive-light/30">
        <InDepthAnalysis />
      </section>

      {/* Footer */}
      <footer className="bg-studyhive-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <img src={logo} alt="StudyHive Logo" className="h-10 w-auto bg-white rounded-full p-1" />
                <h3 className="text-xl font-bold">StudyHive</h3>
              </div>
              <p className="text-gray-300">
                Empowering students to achieve academic excellence through innovative study tools and collaborative learning.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-3">
                {[
                  { name: 'Home', href: '#home' },
                  { name: 'Features', href: '#features' },
                  { name: 'Product Overview', href: '#product-overview' },
                  { name: 'Impact', href: '#impact' },
                  { name: 'Team', href: '#team' },
                  { name: 'Contact Us', href: '#contact' },
                ].map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link.href.substring(1));
                      }}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect With Us */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
              <div className="space-y-3">
                <a
                  href="https://www.linkedin.com/company/studyhive/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200"
                >
                  <i className="fab fa-linkedin"></i>
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://www.instagram.com/studyhive_edu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200"
                >
                  <i className="fab fa-instagram"></i>
                  <span>Instagram</span>
                </a>
                <a
                  href="https://github.com/StudyHive-CS47"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200"
                >
                  <i className="fab fa-github"></i>
                  <span>GitHub</span>
                </a>
              </div>
            </div>

            {/* Donate Section */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Support Our Cause</h4>
              <button
                onClick={() => {
                  setShowCookieConsent(true);
                  scrollToSection('contact');
                }}
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200 group"
              >
                <i className="fas fa-heart text-red-400 group-hover:text-red-500"></i>
                <span>Donate to Cause</span>
              </button>
              <p className="text-sm text-gray-400 mt-2">
                Help us make education accessible to more students
              </p>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-gray-300">
                  <i className="fas fa-envelope"></i>
                  <span>studyhive47@gmail.com</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <i className="fas fa-phone"></i>
                  <span>+94 72 132 7316</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>Colombo, Sri Lanka</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-gray-700">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © 2024 StudyHive. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-white text-sm"
                  onClick={(e) => {
                    e.preventDefault();
                    setShowPrivacyPolicy(true);
                  }}
                >
                  Privacy Policy
                </a>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-white text-sm"
                  onClick={(e) => {
                    e.preventDefault();
                    setShowTermsOfService(true);
                  }}
                >
                  Terms of Service
                </a>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-white text-sm"
                  onClick={(e) => {
                    e.preventDefault();
                    setShowCookiePolicy(true);
                  }}
                >
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <DonatePopup 
        isOpen={showCookieConsent} 
        onClose={() => setShowCookieConsent(false)} 
      />

      <PrivacyPolicyPopup 
        isOpen={showPrivacyPolicy} 
        onClose={() => setShowPrivacyPolicy(false)} 
      />

      <TermsOfServicePopup 
        isOpen={showTermsOfService} 
        onClose={() => setShowTermsOfService(false)} 
      />

      <CookiePolicyPopup 
        isOpen={showCookiePolicy} 
        onClose={() => setShowCookiePolicy(false)} 
      />

      <BackToTopButton />
    </div>
  )
}

export default App
