import React, { useState } from 'react';
import { ArrowRight, FileText, Layout, Users, Star, CheckCircle, ArrowLeft, Download } from 'lucide-react';
import ResumeForm from './components/ResumeForm';
import ResumePreview from './components/ResumePreview';

function App() {
  const [activeTemplate, setActiveTemplate] = useState(0);
  const [currentStep, setCurrentStep] = useState('landing'); // landing, form, preview
  const [resumeData, setResumeData] = useState({
    personalInfo: {
      name: '',
      email: '',
      phone: '',
      address: '',
      linkedin: '',
      website: ''
    },
    education: [{ 
      school: '', 
      degree: '', 
      fieldOfStudy: '', 
      startDate: '', 
      endDate: '', 
      gpa: '',
      description: '' 
    }],
    experience: [{ 
      company: '', 
      position: '', 
      location: '', 
      startDate: '', 
      endDate: '', 
      description: '' 
    }],
    skills: [''],
    projects: [{ 
      title: '', 
      description: '', 
      technologies: '', 
      link: '' 
    }],
    activities: [{ 
      organization: '', 
      position: '', 
      startDate: '', 
      endDate: '', 
      description: '' 
    }]
  });
  
  const templates = [
    {
      id: 0,
      name: "Professional",
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      description: "Clean and minimal design perfect for corporate applications."
    },
    {
      id: 1,
      name: "Creative",
      image: "https://images.unsplash.com/photo-1586282391129-76a6df230234?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      description: "Stand out with a unique layout for creative fields."
    },
    {
      id: 2,
      name: "Academic",
      image: "https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      description: "Structured format ideal for academic and research positions."
    }
  ];

  const features = [
    {
      icon: <FileText className="h-6 w-6 text-indigo-600" />,
      title: "Multiple Templates",
      description: "Choose from professionally designed templates tailored for different industries and roles."
    },
    {
      icon: <Layout className="h-6 w-6 text-indigo-600" />,
      title: "Easy Customization",
      description: "Customize every aspect of your resume with our intuitive editor."
    },
    {
      icon: <Users className="h-6 w-6 text-indigo-600" />,
      title: "ATS Friendly",
      description: "Our resumes are optimized to pass through Applicant Tracking Systems."
    },
    {
      icon: <Star className="h-6 w-6 text-indigo-600" />,
      title: "College Student Focus",
      description: "Specially designed sections for coursework, projects, and campus activities."
    }
  ];

  const testimonials = [
    {
      name: "Piyush Koli",
      role: "Data Science Student",
      content: "This resume builder helped me a lot. The templates are professional and easy to customize!",
      avatar: "C:\Users\HARESH\OneDrive\Desktop\Auto Resume Builder\project-bolt-sb1-zc4qs7na\project\src\piyush k. photo.jpg"
    },
    {
      name: "Maya Patel",
      role: "Business Administration Student",
      content: "I was struggling to highlight my limited experience effectively. This tool made it simple to showcase my skills and academic achievements.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
    }
  ];

  const handleStartBuilding = () => {
    setCurrentStep('form');
    window.scrollTo(0, 0);
  };

  const handleBackToLanding = () => {
    setCurrentStep('landing');
    window.scrollTo(0, 0);
  };

  const handlePreview = () => {
    setCurrentStep('preview');
    window.scrollTo(0, 0);
  };

  const handleUpdateResumeData = (newData) => {
    setResumeData(newData);
  };

  const handleUseSelectedTemplate = () => {
    setCurrentStep('form');
    window.scrollTo(0, 0);
  };

  if (currentStep === 'form') {
    return (
      <div className="min-h-screen bg-gray-50">
        <header className="bg-indigo-600 text-white py-4">
          <div className="container mx-auto px-6 flex justify-between items-center">
            <h1 className="text-2xl font-bold">CollegeResume</h1>
            <button 
              onClick={handleBackToLanding}
              className="flex items-center text-sm font-medium hover:underline"
            >
              <ArrowLeft className="h-4 w-4 mr-1" /> Back to Home
            </button>
          </div>
        </header>

        <div className="container mx-auto px-6 py-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Build Your Resume</h2>
            <div className="flex space-x-4">
              <button 
                onClick={handlePreview}
                className="bg-indigo-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-indigo-700 transition duration-300"
              >
                Preview Resume
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Selected Template: {templates[activeTemplate].name}</h3>
              <div className="flex items-center">
                <img 
                  src={templates[activeTemplate].image} 
                  alt={templates[activeTemplate].name} 
                  className="w-24 h-16 object-cover rounded mr-4" 
                />
                <button 
                  onClick={handleBackToLanding}
                  className="text-indigo-600 text-sm font-medium hover:underline"
                >
                  Change Template
                </button>
              </div>
            </div>

            <ResumeForm 
              resumeData={resumeData} 
              onUpdateResumeData={handleUpdateResumeData} 
              onPreview={handlePreview}
            />
          </div>
        </div>
      </div>
    );
  }

  if (currentStep === 'preview') {
    return (
      <div className="min-h-screen bg-gray-50">
        <header className="bg-indigo-600 text-white py-4">
          <div className="container mx-auto px-6 flex justify-between items-center">
            <h1 className="text-2xl font-bold">CollegeResume</h1>
            <div className="flex space-x-4">
              <button 
                onClick={() => setCurrentStep('form')}
                className="flex items-center text-sm font-medium hover:underline"
              >
                <ArrowLeft className="h-4 w-4 mr-1" /> Back to Editor
              </button>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-6 py-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Resume Preview</h2>
            <div className="flex space-x-4">
              <button 
                onClick={() => setCurrentStep('form')}
                className="bg-indigo-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-indigo-700 transition duration-300"
              >
                Edit Resume
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <ResumePreview 
              resumeData={resumeData} 
              templateId={activeTemplate} 
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="container mx-auto px-6 py-16 md:py-24 md:flex md:items-center md:justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Build Your Perfect College Resume</h1>
            <p className="text-xl mb-8">Create professional resumes that stand out to employers. Designed specifically for college students.</p>
            <button 
              onClick={handleStartBuilding}
              className="bg-white text-indigo-600 font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-gray-100 transition duration-300 flex items-center"
            >
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="College students working on resumes" 
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Resume Builder?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition duration-300">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Templates Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Choose Your Template</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {templates.map((template) => (
              <div 
                key={template.id} 
                className={`bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition duration-300 ${activeTemplate === template.id ? 'ring-2 ring-indigo-600 transform scale-105' : 'hover:shadow-lg'}`}
                onClick={() => setActiveTemplate(template.id)}
              >
                <img src={template.image} alt={template.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-semibold">{template.name}</h3>
                    {activeTemplate === template.id && (
                      <CheckCircle className="h-5 w-5 text-indigo-600" />
                    )}
                  </div>
                  <p className="text-gray-600">{template.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button 
              onClick={handleUseSelectedTemplate}
              className="bg-indigo-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-indigo-700 transition duration-300"
            >
              Use Selected Template
            </button>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="md:w-1/4 mb-8 md:mb-0 text-center">
              <div className="bg-indigo-100 text-indigo-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <h3 className="text-xl font-semibold mb-2">Choose a Template</h3>
              <p className="text-gray-600">Select from our professionally designed templates</p>
            </div>
            <div className="hidden md:block w-16">
              <ArrowRight className="h-8 w-8 text-gray-400" />
            </div>
            <div className="md:w-1/4 mb-8 md:mb-0 text-center">
              <div className="bg-indigo-100 text-indigo-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <h3 className="text-xl font-semibold mb-2">Fill in Your Details</h3>
              <p className="text-gray-600">Add your education, experience, skills and achievements</p>
            </div>
            <div className="hidden md:block w-16">
              <ArrowRight className="h-8 w-8 text-gray-400" />
            </div>
            <div className="md:w-1/4 text-center">
              <div className="bg-indigo-100 text-indigo-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h3 className="text-xl font-semibold mb-2">Download & Apply</h3>
              <p className="text-gray-600">Get your polished resume and start applying for jobs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">What Students Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-600 mb-4">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-indigo-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Create Your Professional Resume?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Join thousands of college students who have successfully landed internships and jobs with our resume builder.</p>
          <button 
            onClick={handleStartBuilding}
            className="bg-white text-indigo-600 font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-gray-100 transition duration-300"
          >
            Start Building for Free
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-bold mb-4">CollegeResume</h3>
              <p className="text-gray-400 max-w-xs">Helping college students create professional resumes that stand out to employers.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-4">Product</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white transition">Templates</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition">Features</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition">Pricing</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Resources</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white transition">Blog</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition">Resume Tips</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition">Career Advice</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Company</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white transition">About Us</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition">Contact</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition">Privacy Policy</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} CollegeResume. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;