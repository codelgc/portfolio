export default function Contact() {
  return (
    <section className="py-16 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto" id="contact">
      <div className="space-y-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A]">
          GET IN TOUCH
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                Phone
              </h3>
              <a
                href="tel:03394070105"
                className="text-base text-[#1A1A1A] hover:underline"
              >
                0339 4070105
              </a>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                Email
              </h3>
              <a
                href="mailto:usamaamanat043@gmail.com"
                className="text-base text-[#1A1A1A] hover:underline"
              >
                usamaamanat043@gmail.com
              </a>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                Location
              </h3>
              <p className="text-base text-[#1A1A1A]">
                Johar Town, Lahore
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                Portfolio
              </h3>
              <a
                href="https://usama-portfolio.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base text-[#1A1A1A] hover:underline"
              >
                usama-portfolio.netlify.app
              </a>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
              Education
            </h3>
            <div className="space-y-2">
              <p className="text-base font-medium text-[#1A1A1A]">
                Bachelors in Computer Science
              </p>
              <p className="text-sm text-gray-600">
                COMSATS University Islamabad Lahore Campus
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

