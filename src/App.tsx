import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { Benefits } from "./components/Benefits";
import { Steps } from "./components/Steps";
import { AIInterview } from "./components/AIInterview";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from './components/Footer';
import FAQSection from './components/Faq';


function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-background font-sans antialiased w-full">
        <div className="flex min-h-screen flex-col w-full items-center">
          <Navbar />
          <main className="flex-1 px-8">
            <Hero />
            <Features />
            <Benefits />
            <Steps />
            <AIInterview />
            

<Footer 
  companyName="Your Company Name"
  email="contact@yourcompany.com"
  linkedinUrl="https://linkedin.com/company/yourcompany"
/>
<FAQSection />
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
