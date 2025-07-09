export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-lg mb-4">Rahul Gopi</p>
          <p className="text-gray-400 mb-6">
            Computer Science Engineering Student • AI/ML Enthusiast
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="https://linkedin.com/in/rahul-g-639926265"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <i className="fab fa-linkedin text-xl"></i>
            </a>
            <a
              href="https://github.com/rahul-lol"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <i className="fab fa-github text-xl"></i>
            </a>
            <a
              href="mailto:rahul.gopi0604@gmail.com"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <i className="fas fa-envelope text-xl"></i>
            </a>
          </div>
          <p className="text-gray-400 mt-6">
            © 2024 Rahul Gopi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
