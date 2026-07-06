function Contact() {
    return (
      <div className="min-h-screen bg-black text-white px-6 py-12">
  
        <div className="max-w-4xl mx-auto">
  
          <h1 className="text-5xl font-bold text-green-500 text-center mb-10">
            Contact Us
          </h1>
  
          <div className="bg-gray-900 border border-green-500 rounded-xl p-8">
  
            <form className="space-y-5">
  
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded bg-gray-800 border border-gray-700"
              />
  
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded bg-gray-800 border border-gray-700"
              />
  
              <input
                type="text"
                placeholder="Subject"
                className="w-full p-3 rounded bg-gray-800 border border-gray-700"
              />
  
              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full p-3 rounded bg-gray-800 border border-gray-700"
              />
  
              <button
                type="submit"
                className="
                  bg-green-500
                  hover:bg-green-400
                  text-black
                  font-bold
                  px-8
                  py-3
                  rounded-lg
                  transition
                "
              >
                Send Message
              </button>
  
            </form>
  
          </div>
  
          <div className="grid md:grid-cols-3 gap-6 mt-10">
  
            <div className="bg-gray-900 border border-green-500 rounded-xl p-6 text-center">
              <h3 className="text-xl font-bold text-green-500">
                📍 Address
              </h3>
              <p className="text-gray-400 mt-2">
                SECE Campus,
                Tamil Nadu,
                India
              </p>
            </div>
  
            <div className="bg-gray-900 border border-green-500 rounded-xl p-6 text-center">
              <h3 className="text-xl font-bold text-green-500">
                📧 Email
              </h3>
              <p className="text-gray-400 mt-2">
                events@college.com
              </p>
            </div>
  
            <div className="bg-gray-900 border border-green-500 rounded-xl p-6 text-center">
              <h3 className="text-xl font-bold text-green-500">
                📞 Phone
              </h3>
              <p className="text-gray-400 mt-2">
                +91 98765 43210
              </p>
            </div>
  
          </div>
  
        </div>
  
      </div>
    );
  }
  
  export default Contact;