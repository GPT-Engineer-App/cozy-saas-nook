import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Rocket, Zap, Shield, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Revolutionize Your Workflow</h1>
          <p className="text-xl md:text-2xl mb-8">Streamline your business processes with our cutting-edge SaaS solution</p>
          <Button size="lg" className="bg-white text-pink-600 hover:bg-gray-100">Get Started Free</Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Rocket className="h-8 w-8 text-pink-600" />}
              title="Boost Productivity"
              description="Streamline your workflow and get more done in less time."
            />
            <FeatureCard
              icon={<Zap className="h-8 w-8 text-pink-600" />}
              title="Real-time Collaboration"
              description="Work seamlessly with your team, no matter where they are."
            />
            <FeatureCard
              icon={<Shield className="h-8 w-8 text-pink-600" />}
              title="Enterprise-grade Security"
              description="Your data is safe and secure with our advanced protection."
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Simple, Transparent Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PricingCard
              title="Starter"
              price="$29"
              features={["5 Users", "10GB Storage", "Basic Support"]}
            />
            <PricingCard
              title="Pro"
              price="$79"
              features={["25 Users", "100GB Storage", "Priority Support", "Advanced Analytics"]}
              highlighted={true}
            />
            <PricingCard
              title="Enterprise"
              price="Custom"
              features={["Unlimited Users", "Unlimited Storage", "24/7 Support", "Custom Integration"]}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8">Join thousands of satisfied customers and take your productivity to the next level.</p>
          <Button size="lg" className="bg-pink-600 text-white hover:bg-pink-700">Start Your Free Trial</Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-pink-600">About Us</a></li>
                <li><a href="#" className="text-gray-600 hover:text-pink-600">Careers</a></li>
                <li><a href="#" className="text-gray-600 hover:text-pink-600">Press</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-pink-600">Features</a></li>
                <li><a href="#" className="text-gray-600 hover:text-pink-600">Pricing</a></li>
                <li><a href="#" className="text-gray-600 hover:text-pink-600">Integrations</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-pink-600">Blog</a></li>
                <li><a href="#" className="text-gray-600 hover:text-pink-600">Help Center</a></li>
                <li><a href="#" className="text-gray-600 hover:text-pink-600">Documentation</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-pink-600"><Facebook size={24} /></a>
                <a href="#" className="text-gray-600 hover:text-pink-600"><Twitter size={24} /></a>
                <a href="#" className="text-gray-600 hover:text-pink-600"><Instagram size={24} /></a>
                <a href="#" className="text-gray-600 hover:text-pink-600"><Linkedin size={24} /></a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 text-center">
            <p className="text-gray-600">&copy; 2024 Your SaaS Company. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <Card>
    <CardHeader>
      <CardTitle className="flex items-center gap-2">
        {icon}
        <span>{title}</span>
      </CardTitle>
    </CardHeader>
    <CardContent>
      <p>{description}</p>
    </CardContent>
  </Card>
);

const PricingCard = ({ title, price, features, highlighted = false }) => (
  <Card className={`flex flex-col ${highlighted ? 'border-pink-600 border-2' : ''}`}>
    <CardHeader>
      <CardTitle className="text-2xl font-bold">{title}</CardTitle>
      <p className="text-4xl font-bold">{price}<span className="text-sm font-normal">/month</span></p>
    </CardHeader>
    <CardContent className="flex-grow">
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-green-500" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </CardContent>
    <div className="p-6 mt-auto">
      <Button className="w-full" variant={highlighted ? "default" : "outline"}>
        Choose Plan
      </Button>
    </div>
  </Card>
);

export default Index;
