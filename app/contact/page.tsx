import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | The Left Diary',
  description: 'Get in touch with The Left Diary. We welcome your questions, feedback, and collaboration opportunities.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-gray-800 to-gray-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-soft p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Send us a Message
            </h2>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-gray-800 dark:focus:ring-gray-400 dark:focus:border-gray-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-200 hover:border-gray-300 dark:hover:border-gray-500"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-gray-800 dark:focus:ring-gray-400 dark:focus:border-gray-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-200 hover:border-gray-300 dark:hover:border-gray-500"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject
                </label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject"
                  className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-gray-800 dark:focus:ring-gray-400 dark:focus:border-gray-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-200 hover:border-gray-300 dark:hover:border-gray-500"
                  placeholder="What&apos;s this about?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-gray-800 dark:focus:ring-gray-400 dark:focus:border-gray-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-200 hover:border-gray-300 dark:hover:border-gray-500 resize-vertical"
                  placeholder="Tell us more about your inquiry..."
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-gray-800 hover:bg-gray-900 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 hover:-translate-y-1 shadow-lg hover:shadow-xl"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Direct Contact */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-soft p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-2 bg-gray-100 dark:bg-gray-700 rounded-lg mr-4">
                    <svg className="w-5 h-5 text-gray-800 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Email</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      <a href="mailto:theleftdiary@gmail.com" className="hover:text-gray-800 dark:hover:text-gray-100 transition-colors">
                        theleftdiary@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-2 bg-gray-100 dark:bg-gray-700 rounded-lg mr-4">
                    <svg className="w-5 h-5 text-gray-800 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Response Time</h4>
                    <p className="text-gray-600 dark:text-gray-300">We typically respond within 24-48 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-soft p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Frequently Asked Questions
              </h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Can I contribute to The Left Diary?
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Yes! We welcome contributions from writers and activists. Please reach out with your ideas and writing samples.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    How can I support your work?
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Share our articles, engage in discussions, and help spread progressive ideas in your community.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Do you accept guest posts?
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    We consider guest posts that align with our progressive values. Contact us with your proposal.
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-soft p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Follow Us
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Stay updated with our latest articles and progressive analysis.
              </p>
              
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
                  title="Follow us on Twitter"
                >
                  <svg className="w-5 h-5 text-gray-800 dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                
                <a 
                  href="#" 
                  className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
                  title="Follow us on Facebook"
                >
                  <svg className="w-5 h-5 text-gray-800 dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

