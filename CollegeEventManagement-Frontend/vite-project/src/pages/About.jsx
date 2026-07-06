function About() {
    return (
      <div className="min-h-screen bg-black text-white px-6 py-12">
  
        <div className="max-w-6xl mx-auto">
  
          <h1 className="text-5xl font-bold text-green-500 text-center mb-10">
            About Us
          </h1>
  
          <div className="bg-gray-900 border border-green-500 rounded-xl p-8">
  
            <p className="text-lg text-gray-300 leading-8 mb-6">
              College Event Management System is a modern platform designed
              to simplify event organization and participation within colleges.
              Students can easily discover upcoming events, register online,
              and track their participation through a unique registration ID.
            </p>
  
            <p className="text-lg text-gray-300 leading-8 mb-6">
              Our goal is to provide a seamless experience for both students
              and administrators. Students can explore technical, cultural,
              sports, and workshop events while administrators can efficiently
              manage events, registrations, and participant records.
            </p>
  
            <p className="text-lg text-gray-300 leading-8">
              This platform promotes student engagement, improves event
              visibility, and reduces manual paperwork through a fully
              digital registration system.
            </p>
  
          </div>
  
          <div className="grid md:grid-cols-3 gap-6 mt-10">
  
            <div className="bg-gray-900 border border-green-500 rounded-xl p-6 text-center">
              <h2 className="text-4xl font-bold text-green-500">50+</h2>
              <p className="text-gray-400 mt-2">Events Conducted</p>
            </div>
  
            <div className="bg-gray-900 border border-green-500 rounded-xl p-6 text-center">
              <h2 className="text-4xl font-bold text-green-500">500+</h2>
              <p className="text-gray-400 mt-2">Students Participated</p>
            </div>
  
            <div className="bg-gray-900 border border-green-500 rounded-xl p-6 text-center">
              <h2 className="text-4xl font-bold text-green-500">20+</h2>
              <p className="text-gray-400 mt-2">Departments</p>
            </div>
  
          </div>
  
        </div>
  
      </div>
    );
  }
  
  export default About;