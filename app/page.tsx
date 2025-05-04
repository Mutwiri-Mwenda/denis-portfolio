import React from 'react';


export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 p-6 font-sans">
      {/* Hero Section */}
      <section className="text-center py-20">
        <h1 className="text-4xl font-bold mb-4">Denis Mutwiri</h1>
        <p className="text-xl mb-6">
          I help startups build powerful tools with GPT-4, React, Ruby on Rails, Go, and Node.js.
        </p>
        <a
          href="#projects"
          className="bg-blue-600 text-white px-6 py-2 rounded-xl shadow hover:bg-blue-700 transition"
        >
          View My Projects
        </a>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-12">
        <h2 className="text-3xl font-semibold text-center mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-2xl font-semibold mb-2">SmartPitch</h3>
            <p className="mb-4">
              GPT-powered idea pitch generator for startup founders.
            </p>
            <a
              href="#"
              className="text-blue-600 hover:underline"
            >
              Live Demo (Coming Soon)
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">About Me</h2>
          <p className="mb-4">
            I’m an AI-focused fullstack developer based in Kenya. I specialize in
            building custom GPT-4 powered applications using React, Node.js, and LangChain.
          </p>
          <p>Currently building tools that make founders smarter and teams faster.</p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12">
        <div className="text-center">
          <h2 className="text-3xl font-semibold mb-4">Contact</h2>
          <p className="mb-2">Email: <a href="mailto:mutwirimwenda24@gmail.com" className="text-blue-600 hover:underline">mutwirimwenda24@gmail.com</a></p>
          <p className="mb-2">GitHub: <a href="https://github.com/Mutwiri-Mwenda" target="_blank" className="text-blue-600 hover:underline">Mutwiri-Mwenda</a></p>
          <p>LinkedIn: <span className="text-gray-600">(Add link soon)</span></p>
        </div>
      </section>
    </main>
  );
}
