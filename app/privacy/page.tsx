import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | The Left Diary',
  description: 'Privacy Policy for The Left Diary. Learn how we handle user data and personal information with transparency and care.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            We value your privacy and are committed to protecting your personal information. 
            This policy explains how we collect, use, and safeguard your data.
          </p>
          <div className="mt-6 text-sm text-gray-500 dark:text-gray-400">
            <p>Last updated: April 19, 2020</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-soft overflow-hidden">
          <div className="p-8 lg:p-12">
            {/* Introduction */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Our Commitment to Privacy
              </h2>
              <div className="prose prose-lg max-w-none text-gray-600 dark:text-gray-300">
                <p className="leading-relaxed mb-4">
                  Your privacy is important to us. It is Left Diary&apos;s policy to respect your privacy 
                  regarding any information we may collect from you across our website, 
                  <a href="https://leftdiary.com" className="text-gray-800 dark:text-gray-200 hover:underline font-medium">
                    leftdiary.com
                  </a>, and other sites we own and operate.
                </p>
              </div>
            </section>

            {/* Information Collection */}
            <section className="mb-12">
              <div className="flex items-center mb-6">
                <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg mr-4">
                  <svg className="w-6 h-6 text-gray-800 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Information We Collect
                </h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-600 dark:text-gray-300">
                <p className="leading-relaxed mb-4">
                  We only ask for personal information when we truly need it to provide a service to you. 
                  We collect it by fair and lawful means, with your knowledge and consent. We also let you 
                  know why we&apos;re collecting it and how it will be used.
                </p>
              </div>
            </section>

            {/* Data Protection */}
            <section className="mb-12">
              <div className="flex items-center mb-6">
                <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg mr-4">
                  <svg className="w-6 h-6 text-gray-800 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  How We Protect Your Data
                </h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-600 dark:text-gray-300">
                <p className="leading-relaxed mb-4">
                  We only retain collected information for as long as necessary to provide you with your 
                  requested service. What data we store, we&apos;ll protect within commercially acceptable means 
                  to prevent loss and theft, as well as unauthorized access, disclosure, copying, use or modification.
                </p>
              </div>
            </section>

            {/* Data Sharing */}
            <section className="mb-12">
              <div className="flex items-center mb-6">
                <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg mr-4">
                  <svg className="w-6 h-6 text-gray-800 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Information Sharing
                </h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-600 dark:text-gray-300">
                <p className="leading-relaxed mb-4">
                  We don&apos;t share any personally identifying information publicly or with third-parties, 
                  except when required to by law. Your privacy and trust are fundamental to our mission.
                </p>
              </div>
            </section>

            {/* External Links */}
            <section className="mb-12">
              <div className="flex items-center mb-6">
                <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg mr-4">
                  <svg className="w-6 h-6 text-gray-800 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  External Websites
                </h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-600 dark:text-gray-300">
                <p className="leading-relaxed mb-4">
                  Our website may link to external sites that are not operated by us. Please be aware that 
                  we have no control over the content and practices of these sites, and cannot accept 
                  responsibility or liability for their respective privacy policies.
                </p>
              </div>
            </section>

            {/* Your Rights */}
            <section className="mb-12">
              <div className="flex items-center mb-6">
                <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg mr-4">
                  <svg className="w-6 h-6 text-gray-800 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Your Rights
                </h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-600 dark:text-gray-300">
                <p className="leading-relaxed mb-4">
                  You are free to refuse our request for your personal information, with the understanding 
                  that we may be unable to provide you with some of your desired services. Your continued 
                  use of our website will be regarded as acceptance of our practices around privacy and 
                  personal information.
                </p>
              </div>
            </section>

            {/* Contact Information */}
            <section className="border-t border-gray-200 dark:border-gray-700 pt-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Questions About This Policy?
              </h2>
              <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  If you have any questions about how we handle user data and personal information, 
                  feel free to contact us.
                </p>
                <a 
                  href="/contact" 
                  className="inline-flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white font-medium rounded-lg transition-colors duration-200"
                >
                  Contact Us
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

