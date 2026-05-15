import { useState } from "react";
import { BsCheckCircle } from "react-icons/bs";
import { services } from "../assets/serviceData";
import api from "../config/Api";
import toast from "react-hot-toast";

const offices = [
  {
    city: "New Delhi (HQ)",
    address: " C12/12 1st Floor MIG Flat Sec 03 ",
    state: "Rohini Delhi, 110085",
    phone: "+91 1135783931",
  },
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
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const namePattern = /^[A-Za-z]+(?:[ '-][A-Za-z]+)*$/;
  const phonePattern = /^[6-9]\d{9}$/;

  const formatPhone = (value) => {
    const cleaned = value.replace(/[\s().-]/g, "");

    if (cleaned.startsWith("+91")) {
      const digits = cleaned.slice(3).replace(/\D/g, "").slice(0, 10);
      return `+91${digits}`;
    }

    const digits = cleaned.replace(/\D/g, "").slice(0, 10);
    return digits;
  };

  const normalizePhone = (value) =>
    value.replace(/[\s().-]/g, "").replace(/^\+91/, "");

  const validate = (values) => {
    const nextErrors = {};

    if (!values.firstName.trim()) {
      nextErrors.firstName = "Please enter your first name.";
    } else if (!namePattern.test(values.firstName.trim())) {
      nextErrors.firstName = "Please enter a valid first name.";
    }

    if (!values.lastName.trim()) {
      nextErrors.lastName = "Please enter your last name.";
    } else if (!namePattern.test(values.lastName.trim())) {
      nextErrors.lastName = "Please enter a valid last name.";
    }

    if (!values.email.trim()) {
      nextErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    const normalizedPhone = normalizePhone(values.phone.trim());

    if (!values.phone.trim()) {
      nextErrors.phone = "Please enter your phone number.";
    } else if (!phonePattern.test(normalizedPhone)) {
      nextErrors.phone = "Please enter a valid 10-digit Indian mobile number.";
    }

    if (!values.practiceArea)
      nextErrors.practiceArea = "Please select a practice area.";
    if (!values.message.trim())
      nextErrors.message = "Please share a brief message.";
    if (!values.agree)
      nextErrors.agree = "Please confirm this notice to continue.";

    return nextErrors;
  };

  const currentErrors = validate(formData);
  const isFormValid = Object.keys(currentErrors).length === 0;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const nextValue = name === "phone" ? formatPhone(value) : value;
    setFormData((p) => ({
      ...p,
      [name]: type === "checkbox" ? checked : nextValue,
    }));

    setErrors((p) => {
      const next = { ...p };

      if (name === "firstName" && value.trim()) delete next.firstName;
      if (name === "lastName" && value.trim()) delete next.lastName;
      if (name === "practiceArea" && value) delete next.practiceArea;
      if (name === "message" && value.trim()) delete next.message;
      if (name === "agree" && checked) delete next.agree;
      if (name === "phone") {
        const normalizedPhone = normalizePhone(nextValue.trim());

        if (!nextValue.trim() || phonePattern.test(normalizedPhone))
          delete next.phone;
      }
      if (name === "email") {
        if (!value.trim()) {
          next.email = "Please enter your email address.";
        } else if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          delete next.email;
        }
      }

      return next;
    });
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((p) => ({ ...p, [name]: true }));
    setErrors(validate(formData));
  };

  const handleClear = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      practiceArea: "",
      message: "",
      agree: false,
    });
    setErrors({});
    setTouched({});
    setSubmitted(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    const nextErrors = validate(formData);
    setErrors(nextErrors);
    setTouched({
      firstName: true,
      lastName: true,
      email: true,
      phone: true,
      company: true,
      practiceArea: true,
      message: true,
      agree: true,
    });

    if (Object.keys(nextErrors).length > 0) return;

    setIsSubmitting(true);

    try {
      const cleanedData = {
        ...formData,
        firstName: formData.firstName.trim(),
        lastName: formData.lastName.trim(),
        email: formData.email.trim(),
        phone: normalizePhone(formData.phone.trim()),
        company: formData.company.trim(),
        practiceArea: formData.practiceArea.trim(),
        message: formData.message.trim(),
      };
      await api.post("/contact/message", cleanedData);
      toast.success("Message sent successfully.");
      handleClear();
      setSubmitted(true);
    } catch (error) {
      const errorMessage =
        error?.response?.data?.message ||
        "Unable to send your message.\n Please try again.";
      toast.error(errorMessage, {
        style: {
          border: "1px solid #713200",
          padding: "16px",
          color: "#713200",
        },
        iconTheme: {
          primary: "#713200",
          secondary: "#FFFAEE",
        },
      });
    } finally {
      setIsSubmitting(false);
    }
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
          <h1 className="section-title-white text-4xl md:text-6xl max-w-2xl">
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
                <div className="text-5xl text-green-600 mb-4 flex justify-center ">
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
              <form
                onSubmit={handleSubmit}
                onReset={handleClear}
                className="space-y-8"
                noValidate
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-[10px] tracking-widest uppercase text-slate-500 block mb-2">
                      First Name *
                    </label>
                    <input
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      aria-invalid={Boolean(
                        touched.firstName && errors.firstName,
                      )}
                      className={`input-field ${touched.firstName && errors.firstName ? "border-red-500 focus:border-red-500" : ""}`}
                      placeholder="John"
                      required
                    />
                    {touched.firstName && errors.firstName ? (
                      <p className="mt-2 text-xs text-red-600">
                        {errors.firstName}
                      </p>
                    ) : null}
                  </div>
                  <div>
                    <label className="text-[10px] tracking-widest uppercase text-slate-500 block mb-2">
                      Last Name *
                    </label>
                    <input
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      aria-invalid={Boolean(
                        touched.lastName && errors.lastName,
                      )}
                      className={`input-field ${touched.lastName && errors.lastName ? "border-red-500 focus:border-red-500" : ""}`}
                      placeholder="Doe"
                      required
                    />
                    {touched.lastName && errors.lastName ? (
                      <p className="mt-2 text-xs text-red-600">
                        {errors.lastName}
                      </p>
                    ) : null}
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
                      onBlur={handleBlur}
                      aria-invalid={Boolean(touched.email && errors.email)}
                      className={`input-field ${touched.email && errors.email ? "border-red-500 focus:border-red-500" : ""}`}
                      placeholder="john@example.com"
                      required
                    />
                    {touched.email && errors.email ? (
                      <p className="mt-2 text-xs text-red-600">
                        {errors.email}
                      </p>
                    ) : null}
                  </div>
                  <div>
                    <label className="text-[10px] tracking-widest uppercase text-slate-500 block mb-2">
                      Phone
                    </label>
                    <input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      aria-invalid={Boolean(touched.phone && errors.phone)}
                      className={`input-field ${touched.phone && errors.phone ? "border-red-500 focus:border-red-500" : ""}`}
                      placeholder="+91 999 900 0000"
                      maxLength={13}
                    />
                    {touched.phone && errors.phone ? (
                      <p className="mt-2 text-xs text-red-600">
                        {errors.phone}
                      </p>
                    ) : null}
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
                    onBlur={handleBlur}
                    aria-invalid={Boolean(
                      touched.practiceArea && errors.practiceArea,
                    )}
                    className={`input-field bg-transparent cursor-pointer ${touched.practiceArea && errors.practiceArea ? "border-red-500 focus:border-red-500" : ""}`}
                    required
                  >
                    <option value="">Select a practice area...</option>
                    {services.map((s) => (
                      <option key={s.slug} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                    <option value="Other">Other</option>
                  </select>
                  {touched.practiceArea && errors.practiceArea ? (
                    <p className="mt-2 text-xs text-red-600">
                      {errors.practiceArea}
                    </p>
                  ) : null}
                </div>

                <div>
                  <label className="text-[10px] tracking-widest uppercase text-slate-500 block mb-2">
                    Describe Your Matter *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    rows={5}
                    required
                    aria-invalid={Boolean(touched.message && errors.message)}
                    className={`input-field resize-none ${touched.message && errors.message ? "border-red-500 focus:border-red-500" : ""}`}
                    placeholder="Please briefly describe your legal situation and what you're seeking help with..."
                  />
                  {touched.message && errors.message ? (
                    <p className="mt-2 text-xs text-red-600">
                      {errors.message}
                    </p>
                  ) : null}
                </div>

                <div className="flex gap-3 items-start">
                  <input
                    type="checkbox"
                    name="agree"
                    id="agree"
                    checked={formData.agree}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-invalid={Boolean(touched.agree && errors.agree)}
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

                {Object.keys(errors).length > 0 &&
                Object.keys(touched).length > 0 ? (
                  <p className="text-xs text-red-600 leading-relaxed">
                    Please fix the highlighted fields before submitting.
                  </p>
                ) : null}

                <button
                  type="submit"
                  disabled={!isFormValid || isSubmitting}
                  className="btn-gold-solid w-full text-center disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[#c9a84c]"
                >
                  {isSubmitting
                    ? "Submitting..."
                    : "Submit Consultation Request"}
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
                    <h4 className="font-serif text-lg font-semibold text-[#0a1628] mb-2 group-hover:text-[#c9a84c] transition-colors">
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
                  { day: "Monday – Friday", hours: "9:00 AM – 6:00 PM" },
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
                href="tel:+91 7070054113"
                className="font-serif text-2xl text-[#c9a84c] font-light"
              >
                +91 7070054113
              </a>
              <p className="text-white/30 text-[10px] mt-1">Available 24/7</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-10 md:py-14 bg-[#1a2f5a]">
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
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
