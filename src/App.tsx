import { ArrowRight, Send } from 'lucide-react';
import { Button } from './components/ui/Button';
import { Input } from './components/ui/Input';
import { PlanCard } from './components/common/PlanCard';
import { Navbar } from './components/common/Navbar';
import { planData } from "./data/Content"

export default function HomePage() {

  return (
    <div className="min-h-screen bg-white w-full">
      <Navbar />

      <main className="py-16">
        <div className="mx-10 md:mx-15 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-black leading-tight mb-8">
            Life Planning, Making Easy to Turn Dreams a Reality.
          </h1>

          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Get Exclusive offers on purchase of any plans
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-20">
            <Input
              type="email"
              placeholder="Your Email"
              icon={<Send className="h-5 w-5" />}
            />
            <Button variant="primary" size="lg" className="whitespace-nowrap">
              Sign Up
            </Button>
          </div>

          <div className="text-left">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-black">Featured Plans</h2>
              <Button variant="ghost">Explore All</Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
              {planData.map((plan, index) => (
                <PlanCard
                  key={index}
                  type={plan.type}
                  title={plan.title}
                  description={plan.description}
                  period={plan.period}
                  rate={plan.rate}
                  bgColor={plan.bgColor}
                  textColor={plan.textColor}
                  buttonBg={plan.buttonBg}
                  buttonText={plan.buttonText}
                  buttonHover={plan.buttonHover}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
  
      <footer className="py-8 mx-10 md:mx-15 border-t-1 border-black">
        <div className="flex items-center justify-between ">
          <div className="flex items-center space-x-8">
            <a href="#" className="text-black font-medium hover:text-gray-600 transition-colors">
              Terms Policy
            </a>
            <span className="text-gray-400">•</span>
            <a href="#" className="text-black font-medium hover:text-gray-600 transition-colors">
              Customer Story
            </a>
          </div>
          <button className="w-10 h-10 rounded-full border border-gray-300 hover:bg-gray-50 bg-transparent flex items-center justify-center transition-colors">
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </footer>
    </div>
  );
}