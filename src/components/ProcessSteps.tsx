
import { FileText, Users, Calendar, CheckCircle } from 'lucide-react';

const ProcessSteps = () => {
  const steps = [
    {
      icon: FileText,
      title: "Upload Resume",
      description: "Share your resume and let our AI extract key details and skills automatically",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Users,
      title: "Smart Matching",
      description: "Our intelligent system matches your profile with relevant employer requirements",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Calendar,
      title: "Schedule Interview",
      description: "Book interviews seamlessly with matched employers at your convenience",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      icon: CheckCircle,
      title: "Land Your Dream Job",
      description: "Connect with the right opportunities and advance your career",
      color: "from-green-500 to-green-600"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From resume to interview in three simple steps
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="text-center group hover:scale-105 transition-all duration-300 animate-fade-in"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                <step.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
