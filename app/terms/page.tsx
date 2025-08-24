import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | The Left Diary',
  description: 'Terms of Service for The Left Diary. Understanding our policies and your rights when using our platform.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Terms of Service
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Please read these terms carefully before using our services. 
            By accessing our website, you agree to be bound by these terms.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-soft overflow-hidden">
          <div className="p-8 lg:p-12">
            {/* Section 1: Terms */}
            <section className="mb-12">
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center w-8 h-8 bg-gray-800 dark:bg-gray-600 text-white rounded-full mr-4 text-sm font-bold">
                  1
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Terms
                </h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-600 dark:text-gray-300">
                <p className="leading-relaxed">
                  By accessing the website at{' '}
                  <a href="https://leftdiary.com" className="text-gray-800 dark:text-gray-200 hover:underline font-medium">
                    leftdiary.com
                  </a>
                  , you are agreeing to be bound by these terms of service, all applicable laws and regulations, 
                  and agree that you are responsible for compliance with any applicable local laws. If you do not 
                  agree with any of these terms, you are prohibited from using or accessing this site. The materials 
                  contained in this website are protected by applicable copyright and trademark law.
                </p>
              </div>
            </section>

            {/* Section 2: Use License */}
            <section className="mb-12">
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center w-8 h-8 bg-gray-800 dark:bg-gray-600 text-white rounded-full mr-4 text-sm font-bold">
                  2
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Use License
                </h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-600 dark:text-gray-300">
                <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 mb-6">
                  <p className="leading-relaxed mb-4">
                    Permission is granted to temporarily download one copy of the materials (information or software) 
                    on Left Diary&apos;s website for personal, non-commercial transitory viewing only. This is the grant 
                    of a license, not a transfer of title, and under this license you may not:
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Modify or copy the materials
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Use the materials for any commercial purpose, or for any public display (commercial or non-commercial)
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Attempt to decompile or reverse engineer any software contained on Left Diary&apos;s website
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Remove any copyright or other proprietary notations from the materials
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Transfer the materials to another person or "mirror" the materials on any other server
                    </li>
                  </ul>
                </div>
                <p className="leading-relaxed text-sm">
                  This license shall automatically terminate if you violate any of these restrictions and may be 
                  terminated by Left Diary at any time. Upon terminating your viewing of these materials or upon 
                  the termination of this license, you must destroy any downloaded materials in your possession 
                  whether in electronic or printed format.
                </p>
              </div>
            </section>

            {/* Section 3: Disclaimer */}
            <section className="mb-12">
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center w-8 h-8 bg-gray-800 dark:bg-gray-600 text-white rounded-full mr-4 text-sm font-bold">
                  3
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Disclaimer
                </h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-600 dark:text-gray-300">
                <p className="leading-relaxed mb-4">
                  The materials on Left Diary&apos;s website are provided on an &apos;as is&apos; basis. Left Diary makes no warranties, 
                  expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, 
                  implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement 
                  of intellectual property or other violation of rights.
                </p>
                <p className="leading-relaxed">
                  Further, Left Diary does not warrant or make any representations concerning the accuracy, likely results, 
                  or reliability of the use of the materials on its website or otherwise relating to such materials or on 
                  any sites linked to this site.
                </p>
              </div>
            </section>

            {/* Section 4: Limitations */}
            <section className="mb-12">
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center w-8 h-8 bg-gray-800 dark:bg-gray-600 text-white rounded-full mr-4 text-sm font-bold">
                  4
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Limitations
                </h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-600 dark:text-gray-300">
                <p className="leading-relaxed">
                  In no event shall Left Diary or its suppliers be liable for any damages (including, without limitation, 
                  damages for loss of data or profit, or due to business interruption) arising out of the use or inability 
                  to use the materials on Left Diary&apos;s website, even if Left Diary or a Left Diary authorized representative 
                  has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not 
                  allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, 
                  these limitations may not apply to you.
                </p>
              </div>
            </section>

            {/* Remaining Sections */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {/* Section 5: Accuracy of Materials */}
              <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center w-6 h-6 bg-gray-800 dark:bg-gray-600 text-white rounded-full mr-3 text-xs font-bold">
                    5
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    Accuracy of Materials
                  </h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  The materials appearing on Left Diary&apos;s website could include technical, typographical, or photographic 
                  errors. Left Diary does not warrant that any of the materials on its website are accurate, complete or current.
                </p>
              </div>

              {/* Section 6: Links */}
              <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center w-6 h-6 bg-gray-800 dark:bg-gray-600 text-white rounded-full mr-3 text-xs font-bold">
                    6
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    External Links
                  </h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  Left Diary has not reviewed all of the sites linked to its website and is not responsible for the 
                  contents of any such linked site. The inclusion of any link does not imply endorsement by Left Diary of the site.
                </p>
              </div>

              {/* Section 7: Modifications */}
              <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center w-6 h-6 bg-gray-800 dark:bg-gray-600 text-white rounded-full mr-3 text-xs font-bold">
                    7
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    Modifications
                  </h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  Left Diary may revise these terms of service for its website at any time without notice. 
                  By using this website you are agreeing to be bound by the then current version of these terms of service.
                </p>
              </div>

              {/* Section 8: Governing Law */}
              <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center w-6 h-6 bg-gray-800 dark:bg-gray-600 text-white rounded-full mr-3 text-xs font-bold">
                    8
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    Governing Law
                  </h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  These terms and conditions are governed by and construed in accordance with the laws of India and 
                  you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 sm:mb-0">
                  <a href="https://getterms.io" className="hover:text-gray-700 dark:hover:text-gray-300 hover:underline" title="Generate a free terms of use document">
                    Terms of Use created with GetTerms.
                  </a>
                </p>
                <a 
                  href="/contact" 
                  className="inline-flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white font-medium rounded-lg transition-colors duration-200 text-sm"
                >
                  Questions? Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

