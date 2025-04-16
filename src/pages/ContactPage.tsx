
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    productInterest: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      message: '',
      productInterest: ''
    });
    
    // Show success toast
    toast({
      title: "Inquiry Submitted",
      description: "We'll get back to you as soon as possible.",
      duration: 5000
    });
  };

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Contact Us</h1>
            <p className="text-xl text-gray-600">
              Get in touch with our team for inquiries, support, or to request a quote.
            </p>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-medical-500 focus:border-medical-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-medical-500 focus:border-medical-500"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-medical-500 focus:border-medical-500"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-medical-500 focus:border-medical-500"
                  />
                </div>
              </div>
              
              <div className="mb-4">
                <label htmlFor="productInterest" className="block text-sm font-medium text-gray-700 mb-1">
                  Product Category of Interest
                </label>
                <select
                  id="productInterest"
                  name="productInterest"
                  value={formData.productInterest}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-medical-500 focus:border-medical-500"
                >
                  <option value="">Select a category</option>
                  <option value="scissors">Scissors</option>
                  <option value="needle-holders">Needle Holders</option>
                  <option value="forceps">Forceps</option>
                  <option value="retractors">Retractors</option>
                  <option value="bone-instruments">Bone Instruments</option>
                  <option value="specialty-instruments">Specialty Instruments</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-medical-500 focus:border-medical-500"
                  placeholder="Please let us know how we can assist you..."
                ></textarea>
              </div>
              
              <Button type="submit" className="w-full bg-medical-600 hover:bg-medical-700">
                Submit Inquiry
              </Button>
            </form>
          </div>
          
          {/* Contact Info */}
          <div>
            <div className="bg-white p-8 rounded-lg shadow-md mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Phone className="text-medical-600 mt-1 mr-3" size={20} />
                  <div>
                    <p className="font-medium text-gray-900">Phone</p>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="text-medical-600 mt-1 mr-3" size={20} />
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <p className="text-gray-600">info@precisionmed.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="text-medical-600 mt-1 mr-3" size={20} />
                  <div>
                    <p className="font-medium text-gray-900">Address</p>
                    <p className="text-gray-600">
                      123 Medical Drive<br />
                      Suite 200<br />
                      City, State 12345<br />
                      Country
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-start">
                <MessageSquare className="text-medical-600 mt-1 mr-3" size={20} />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Business Hours</h3>
                  <table className="w-full text-gray-600">
                    <tbody>
                      <tr>
                        <td className="py-1">Monday - Friday</td>
                        <td className="py-1">9:00 AM - 5:00 PM</td>
                      </tr>
                      <tr>
                        <td className="py-1">Saturday</td>
                        <td className="py-1">10:00 AM - 2:00 PM</td>
                      </tr>
                      <tr>
                        <td className="py-1">Sunday</td>
                        <td className="py-1">Closed</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
