import { useState } from "react";
import { BsCheckCircle } from "react-icons/bs";

const offices = [
  {
    city: "New Delhi (HQ)",
    address: " C12/12 1st Floor MIG Flat Sec 03 ",
    state: "Rohini Delhi, 110085",
    phone: "+91 1135783931",
  },
  {
    city: "Los Angeles",
    address: "2000 Avenue of the Stars, Suite 1100",
    state: "Los Angeles, CA 90067",
    phone: "+1 (310) 555-0200",
  },
  // {
  //   city: "Chicago",
  //   address: "71 S. Wacker Drive, Suite 3200",
  //   state: "Chicago, IL 60606",
  //   phone: "+1 (312) 555-0300",
  // },
];
const mapQuery = encodeURIComponent(offices[0].address);

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    practiceArea: "",
    message: "",
    agree: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((p) => ({
      ...p,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="">
      {/* Header */}
      <section className="bg-[#0a1628] py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 60% 60%, #c9a84c 0%, transparent 60%)`,
          }}
        />
        <div className="max-w-7xl mx-auto px-6 relative z-10 pt-16">
          <span className="section-label">Get In Touch</span>
          <h1 className="section-title-white text-5xl md:text-6xl max-w-2xl">
            We're Ready to Discuss Your Case
          </h1>
          <div className="gold-divider" />
          <p className="text-white/50 max-w-xl text-sm leading-relaxed">
            Schedule a confidential, no-obligation consultation with one of our
            attorneys. We'll review your situation and outline your legal
            options.
          </p>
        </div>
      </section>

      {/* Contact grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Form — 3 cols */}
          <div className="lg:col-span-3">
            <span className="section-label">Send a Message</span>
            <h2 className="section-title text-3xl mb-8">
              Request a Consultation
            </h2>

            {submitted ? (
              <div className="border border-[#c9a84c]/40 bg-[#faf8f3] p-10 text-center">
                <div className="text-4xl text-green-600 mb-4 flex justify-center ">
                  <BsCheckCircle />
                </div>
                <h3 className="font-serif text-2xl text-[#0a1628] mb-3">
                  Message Received
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Thank you for contacting Vijai Bhava Law Firm. One of our
                  attorneys will be in touch within one business day.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-gold text-xs"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-[10px] tracking-widest uppercase text-slate-500 block mb-2">
                      First Name *
                    </label>
                    <input
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="input-field"
                      placeholder="John"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-[10px] tracking-widest uppercase text-slate-500 block mb-2">
                      Last Name *
                    </label>
                    <input
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="input-field"
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-[10px] tracking-widest uppercase text-slate-500 block mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="input-field"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-[10px] tracking-widest uppercase text-slate-500 block mb-2">
                      Phone
                    </label>
                    <input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="input-field"
                      placeholder="+91 9999 000-000"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[10px] tracking-widest uppercase text-slate-500 block mb-2">
                    Company / Organization
                  </label>
                  <input
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="Your company name (optional)"
                  />
                </div>

                <div>
                  <label className="text-[10px] tracking-widest uppercase text-slate-500 block mb-2">
                    Practice Area *
                  </label>
                  <select
                    name="practiceArea"
                    value={formData.practiceArea}
                    onChange={handleChange}
                    className="input-field bg-transparent cursor-pointer"
                    required
                  >
                    <option value="">Select a practice area...</option>
                    {[
                      "Corporate Law",
                      "Litigation",
                      "Real Estate",
                      "Intellectual Property",
                      "Employment Law",
                      "Family Law",
                      "Criminal Defense",
                      "Tax Law",
                      "Other",
                    ].map((a) => (
                      <option key={a} value={a}>
                        {a}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-[10px] tracking-widest uppercase text-slate-500 block mb-2">
                    Describe Your Matter *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                    className="input-field resize-none"
                    placeholder="Please briefly describe your legal situation and what you're seeking help with..."
                  />
                </div>

                <div className="flex gap-3 items-start">
                  <input
                    type="checkbox"
                    name="agree"
                    id="agree"
                    checked={formData.agree}
                    onChange={handleChange}
                    className="mt-1 accent-[#c9a84c]"
                    required
                  />
                  <label
                    htmlFor="agree"
                    className="text-slate-500 text-xs leading-relaxed cursor-pointer"
                  >
                    I understand that submitting this form does not create an
                    attorney-client relationship and that I should not include
                    confidential information in this message.
                  </label>
                </div>

                <button
                  type="submit"
                  className="btn-gold-solid w-full text-center"
                >
                  Submit Consultation Request
                </button>
              </form>
            )}
          </div>

          {/* Sidebar — 2 cols */}
          <div className="lg:col-span-2 space-y-8">
            {/* Office Info */}
            <div>
              <span className="section-label">Our Offices</span>
              <div className="space-y-0 border-l border-t border-slate-200">
                {offices.map((office) => (
                  <div
                    key={office.city}
                    className="border-r border-b border-slate-200 p-6 hover:bg-[#faf8f3] transition-colors group"
                  >
                    <h4 className="font-serif text-lg text-[#0a1628] mb-2 group-hover:text-[#c9a84c] transition-colors">
                      {office.city}
                    </h4>
                    <p className="text-slate-500 text-xs leading-relaxed">
                      {office.address}
                    </p>
                    <p className="text-slate-500 text-xs">{office.state}</p>
                    <a
                      href={`tel:${office.phone}`}
                      className="text-[#c9a84c] text-xs mt-2 block hover:underline"
                    >
                      {office.phone}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Hours */}
            <div className="bg-[#faf8f3] p-7 border border-slate-200">
              <span className="section-label">Office Hours</span>
              <div className="space-y-2 mt-3">
                {[
                  { day: "Monday – Friday", hours: "8:00 AM – 6:00 PM" },
                  { day: "Saturday", hours: "By Appointment" },
                  { day: "Sunday", hours: "Closed" },
                  { day: "Emergency Matters", hours: "24 / 7" },
                ].map((h) => (
                  <div key={h.day} className="flex justify-between text-xs">
                    <span className="text-slate-600">{h.day}</span>
                    <span className="text-[#c9a84c] font-medium">
                      {h.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Emergency */}
            <div className="bg-[#0a1628] p-7">
              <h4 className="font-serif text-white text-xl mb-2">
                Emergency Line
              </h4>
              <p className="text-white/50 text-xs mb-4 leading-relaxed">
                For urgent legal matters requiring immediate assistance:
              </p>
              <a
                href="tel:+911135783931"
                className="font-serif text-2xl text-[#c9a84c] font-light"
              >
                +91 1135783931
              </a>
              <p className="text-white/30 text-[10px] mt-1">Available 24/7</p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      {/* <section className="h-80 bg-[#1a2f5a] flex items-center justify-center relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(201,168,76,0.1) 40px, rgba(201,168,76,0.1) 41px), repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(201,168,76,0.1) 40px, rgba(201,168,76,0.1) 41px)`,
          }}
        />
        <div className="text-center relative z-10">
          <div className="text-4xl mb-4">VISIT US OUR ROHINI OFFICE</div>
          <p className="text-white/50 text-sm">
            C12/12 1st Floor MIG Flat Sec 03

          </p>
          <p className="text-white/30 text-xs mt-1">Rohini Delhi, 110085</p>
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold text-[11px] py-2 px-6 mt-5 inline-block"
          >
            Open in Google Maps
          </a>
        </div>
        
      </section> */}

      <section className="py-10 md:py-14 bg-[#1a2f5a]">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(201,168,76,0.1) 40px, rgba(201,168,76,0.1) 41px), repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(201,168,76,0.1) 40px, rgba(201,168,76,0.1) 41px)`,
          }}
        />
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            {/* Left Content */}
            <div className="text-center md:text-left max-w-md mx-auto md:mx-0">
              <span className="text-[11px] tracking-[0.35em] uppercase text-[#c9a84c] font-medium">
                Find Us on Map
              </span>

              <h2 className="font-serif text-2xl sm:text-3xl text-white mt-3 mb-4 leading-snug">
                Visit Our Rohini Office Location
              </h2>

              <p className="text-white/60 text-sm leading-relaxed">
                C12/12 1st Floor MIG Flat Sec 03
              </p>

              <p className="text-white/40 text-xs mt-1">Rohini Delhi, 110085</p>

              <a
                href="https://www.google.com/maps/search/?api=1&query=C12/12+1st+Floor+MIG+Flat+Sec+03+Rohini+Delhi+110085"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold text-[11px] py-2 px-6 mt-6 inline-block"
              >
                Open in Google Maps
              </a>
            </div>

            {/* Map */}
            <div className="w-full h-[260px] sm:h-[300px] md:h-[380px] rounded-lg overflow-hidden border border-white/10 shadow-sm">
              <iframe
                title="Vijai Bhava Law Firm Office Location"
                src="https://www.google.com/maps?q=C12/12+1st+Floor+MIG+Flat+Sec+03+Rohini+Delhi+110085&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
