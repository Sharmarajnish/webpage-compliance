import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { 
  Shield, 
  Clock, 
  AlertTriangle, 
  CheckCircle, 
  ArrowRight,
  Eye,
  Zap,
  Lock,
  FileCheck,
  Users,
  TrendingUp,
  Monitor
} from 'lucide-react';
import { mockData } from '../data/mock';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-slate-900">Precogs</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-slate-600 hover:text-blue-600 transition-colors">Features</a>
            <a href="#compliance" className="text-slate-600 hover:text-blue-600 transition-colors">Compliance</a>
            <a href="#reporting" className="text-slate-600 hover:text-blue-600 transition-colors">Reporting</a>
            <a href="#contact" className="text-slate-600 hover:text-blue-600 transition-colors">Contact</a>
          </nav>
          <Button className="bg-blue-600 hover:bg-blue-700">
            Schedule Demo
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-100">
            Real-Time Compliance Intelligence
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            {mockData.hero.headline}
          </h1>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            {mockData.hero.subheadline}
          </p>
          <p className="text-lg text-slate-700 mb-10 max-w-3xl mx-auto">
            {mockData.hero.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3">
              <Eye className="mr-2 h-5 w-5" />
              Schedule Live Demo
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-slate-300">
              Learn More
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Comprehensive Coverage Section */}
      <section id="features" className="py-20 px-6 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <Shield className="h-12 w-12 text-blue-600" />
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              {mockData.coverage.title}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {mockData.coverage.subtitle}
            </p>
          </div>
          
          {/* Frameworks Table */}
          <Card className="mb-12 shadow-lg">
            <CardHeader>
              <CardTitle className="text-center text-2xl">Supported Compliance Frameworks</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-4 px-6 font-semibold text-slate-900">Framework / Standard</th>
                      <th className="text-left py-4 px-6 font-semibold text-slate-900">Focus Area</th>
                      <th className="text-left py-4 px-6 font-semibold text-slate-900">Real-Time Monitoring</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockData.frameworks.map((framework, index) => (
                      <tr key={index} className="border-b hover:bg-slate-50 transition-colors">
                        <td className="py-4 px-6">
                          <div className="flex items-center">
                            <Badge variant="secondary" className="mr-2">{framework.name}</Badge>
                          </div>
                        </td>
                        <td className="py-4 px-6 text-slate-700">{framework.focus}</td>
                        <td className="py-4 px-6 text-slate-700">{framework.monitoring}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Industry-Specific Compliance */}
      <section id="compliance" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <FileCheck className="h-12 w-12 text-blue-600" />
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              {mockData.industryCompliance.title}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {mockData.industryCompliance.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Lock className="mr-2 h-6 w-6 text-blue-600" />
                  Industry-Specific Compliance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockData.industryCompliance.industries.map((industry, index) => (
                    <div key={index} className="p-4 bg-slate-50 rounded-lg">
                      <h4 className="font-semibold text-slate-900 mb-2">{industry.name}</h4>
                      <p className="text-slate-700 text-sm">{industry.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Users className="mr-2 h-6 w-6 text-blue-600" />
                  Enterprise-Specific Compliance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 mb-4">
                  {mockData.industryCompliance.enterpriseDescription}
                </p>
                <div className="space-y-3">
                  {mockData.industryCompliance.enterpriseFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                      <span className="text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Real-Time Reporting */}
      <section id="reporting" className="py-20 px-6 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <Zap className="h-12 w-12 text-blue-600" />
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              {mockData.realTimeReporting.title}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {mockData.realTimeReporting.subtitle}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {mockData.realTimeReporting.features.map((feature, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-center mb-4">
                    {feature.icon === 'Monitor' && <Monitor className="h-10 w-10 text-blue-600" />}
                    {feature.icon === 'AlertTriangle' && <AlertTriangle className="h-10 w-10 text-blue-600" />}
                    {feature.icon === 'TrendingUp' && <TrendingUp className="h-10 w-10 text-blue-600" />}
                  </div>
                  <CardTitle className="text-center text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start text-sm">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                        <span className="text-slate-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advantage Comparison */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              The Precogs Advantage
            </h2>
            <p className="text-xl text-slate-600">
              See how real-time compliance transforms your security operations
            </p>
          </div>

          <Card className="shadow-lg">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-slate-100">
                    <tr>
                      <th className="text-left py-4 px-6 font-semibold text-slate-900">Feature</th>
                      <th className="text-left py-4 px-6 font-semibold text-slate-900">Traditional Compliance</th>
                      <th className="text-left py-4 px-6 font-semibold text-blue-900 bg-blue-50">Precogs Real-Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockData.comparison.map((item, index) => (
                      <tr key={index} className="border-b hover:bg-slate-50 transition-colors">
                        <td className="py-4 px-6 font-medium text-slate-900">{item.feature}</td>
                        <td className="py-4 px-6 text-slate-600">{item.traditional}</td>
                        <td className="py-4 px-6 text-slate-900 bg-blue-50/50 font-medium">{item.precogs}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-6 bg-slate-900 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">
            Turn Compliance into Your Competitive Edge
          </h2>
          <p className="text-xl text-slate-300 mb-10">
            Stop letting compliance be a bottleneck. With Precogs, it becomes a seamless part of your operations, building customer trust and accelerating business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3">
              <Eye className="mr-2 h-5 w-5" />
              Schedule a Demo
            </Button>
            <Button size="lg" variant="outline" className="border-slate-300 text-white hover:bg-white hover:text-slate-900 text-lg px-8 py-3">
              Learn More
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 px-6 border-t border-slate-800">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Shield className="h-6 w-6 text-blue-600" />
                <span className="text-xl font-bold text-white">Precogs</span>
              </div>
              <p className="text-sm">
                Real-time compliance monitoring and reporting for modern enterprises.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Compliance</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Reporting</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm">
            <p>&copy; 2025 Precogs. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;