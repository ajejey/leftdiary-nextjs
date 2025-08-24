import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Disclaimer | The Left Diary',
  description: 'Disclaimer for The Left Diary. Important information about our content, external links, and affiliate programs.',
};

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Disclaimer
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Important information about our content, external links, and policies. 
            Please read this disclaimer carefully to understand our terms and limitations.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-soft overflow-hidden">
          <div className="p-8 lg:p-12">
            {/* Introduction */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                General Information
              </h2>
              <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  If you require any more information or have any questions about our site&apos;s disclaimer, 
                  please feel free to contact us by email at{' '}
                  <a href="mailto:theleftdiary@gmail.com" className="text-gray-800 dark:text-gray-200 hover:underline font-medium">
                    theleftdiary@gmail.com
                  </a>
                </p>
              </div>
            </section>

            {/* Main Disclaimer */}
            <section className="mb-12">
              <div className="flex items-center mb-6">
                <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg mr-4">
                  <svg className="w-6 h-6 text-gray-800 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Content Disclaimer
                </h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-600 dark:text-gray-300">
                <p className="leading-relaxed mb-6">
                  All the information on this website - <strong>https://leftdiary.com</strong> - is published in good faith 
                  and for general information purpose only. Left Diary does not make any warranties about the completeness, 
                  reliability and accuracy of this information. Any action you take upon the information you find on this 
                  website (Left Diary), is strictly at your own risk. Left Diary will not be liable for any losses and/or 
                  damages in connection with the use of our website.
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
                  External Links Policy
                </h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-600 dark:text-gray-300">
                <p className="leading-relaxed mb-4">
                  From our website, you can visit other websites by following hyperlinks to such external sites. 
                  While we strive to provide only quality links to useful and ethical websites, we have no control 
                  over the content and nature of these sites. These links to other websites do not imply a recommendation 
                  for all the content found on these sites.
                </p>
                <p className="leading-relaxed">
                  Site owners and content may change without notice and may occur before we have the opportunity to 
                  remove a link which may have gone &apos;bad&apos;. Please be also aware that when you leave our website, other 
                  sites may have different privacy policies and terms which are beyond our control.
                </p>
              </div>
            </section>

            {/* Privacy Notice */}
            <section className="mb-12">
              <div className="flex items-center mb-6">
                <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg mr-4">
                  <svg className="w-6 h-6 text-gray-800 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Privacy & External Sites
                </h2>
              </div>
              <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl p-6">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Please be sure to check the Privacy Policies of external sites as well as their "Terms of Service" 
                  before engaging in any business or uploading any information. We cannot be held responsible for 
                  the privacy practices or content of external websites.
                </p>
              </div>
            </section>

            {/* Affiliate Disclosure */}
            <section className="mb-12">
              <div className="flex items-center mb-6">
                <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg mr-4">
                  <svg className="w-6 h-6 text-gray-800 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Affiliate Program Disclosure
                </h2>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    We are a participant in the Amazon Services LLC Associates Program, an affiliate advertising program 
                    designed to provide a means for us to earn advertising fees by linking to Amazon.com and affiliated websites. 
                    This means we may receive a small commission for purchases made through our links at no additional cost to you.
                  </p>
                </div>
              </div>
            </section>

            {/* Legal Actions */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {/* Consent */}
              <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Your Consent
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  By using our website, you hereby consent to our disclaimer and agree to its terms. 
                  Your continued use of the site constitutes acceptance of these terms.
                </p>
              </div>

              {/* Updates */}
              <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Updates to Disclaimer
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  Should we update, amend or make any changes to this document, those changes will be prominently 
                  posted here. We recommend checking this page periodically.
                </p>
              </div>
            </div>

            {/* Contact Section */}
            <section className="border-t border-gray-200 dark:border-gray-700 pt-8">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Questions About This Disclaimer?
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  If you have any questions or concerns about our disclaimer, please don&apos;t hesitate to contact us.
                </p>
                <a 
                  href="/contact" 
                  className="inline-flex items-center px-6 py-3 bg-gray-800 hover:bg-gray-900 text-white font-semibold rounded-lg transition-all duration-200 hover:-translate-y-1 shadow-lg hover:shadow-xl"
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

