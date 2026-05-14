import { useMemo, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { BsCheckCircle } from "react-icons/bs";
import jobs from "../assets/careerData";
import api from "../config/Api";

export default function JobApplication() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const job = jobs.find((j) => j.slug === slug);

  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    experience: "",
    coverLetter: "",
    agree: false,
  };

  const [formData, setFormData] = useState(initialState);
  const [resumeFile, setResumeFile] = useState(null);
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

    return cleaned.replace(/\D/g, "").slice(0, 10);
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

    if (!values.experience.trim()) {
      nextErrors.experience = "Please enter your years of experience.";
    }

    if (!resumeFile) {
      nextErrors.resume = "Please upload your resume.";
    } else {
      const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];

      if (!allowedTypes.includes(resumeFile.type)) {
        nextErrors.resume = "Only PDF, DOC, and DOCX files are allowed.";
      }

      const maxSize = 2 * 1024 * 1024;

      if (resumeFile.size > maxSize) {
        nextErrors.resume = "Resume must be smaller than 2MB.";
      }
    }

    if (!values.agree) {
      nextErrors.agree = "Please confirm before submitting.";
    }

    return nextErrors;
  };

  const currentErrors = useMemo(
    () => validate(formData),
    [formData, resumeFile],
  );

  const isFormValid = Object.keys(currentErrors).length === 0;

  function handleClose() {
    setFormData(initialState);
    setResumeFile(null);
    setErrors({});
    setTouched({});
    setSubmitted(false);
    setIsSubmitting(false);
    navigate(-1);
  }

  function handleChange(e) {
    const { name, value, type, checked } = e.target;

    const nextValue = name === "phone" ? formatPhone(value) : value;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : nextValue,
    }));
  }

  const handleBlur = (e) => {
    const { name } = e.target;

    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));

    setErrors(validate(formData));
  };

  const handleFile = (e) => {
    const file = e.target.files?.[0];

    setTouched((prev) => ({
      ...prev,
      resume: true,
    }));

    setResumeFile(file || null);
  };

  const resetForm = () => {
    setFormData(initialState);
    setResumeFile(null);
    setErrors({});
    setTouched({});
    setIsSubmitting(false);
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
      experience: true,
      resume: true,
      agree: true,
    });

    if (Object.keys(nextErrors).length > 0) return;

    setIsSubmitting(true);

    try {
      const form = new FormData();

      form.append("job", job?.slug || "");
      form.append("title", job?.title || "");
      form.append("firstName", formData.firstName.trim());
      form.append("lastName", formData.lastName.trim());
      form.append("email", formData.email.trim());
      form.append("phone", normalizePhone(formData.phone.trim()));
      form.append("experience", formData.experience.trim());
      form.append("coverLetter", formData.coverLetter.trim());

      if (resumeFile) {
        form.append("resume", resumeFile);
      }

      const res = await api.post("/applications/submit", form, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log(res.data);

      setSubmitted(true);

      resetForm();
    } catch (error) {
      console.log(error);

      console.log(error.response?.data);

      setErrors((prev) => ({
        ...prev,
        submit: error.response?.data?.message || "Something went wrong",
      }));
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!job) {
    return (
      <main className="min-h-screen bg-white flex items-center justify-center px-6">
        <div className="max-w-xl text-center">
          <span className="section-label">Careers</span>
          <h1 className="section-title text-4xl">Application Not Found</h1>
          <p className="text-slate-600 text-sm mt-4">
            The job you are trying to apply for does not exist.
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <Link to="/careers" className="btn-gold">
              Back to Careers
            </Link>
            <button onClick={() => navigate(-1)} className="btn-gold-solid">
              Go Back
            </button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main
      className={`min-h-screen bg-[#fbfaf7] ${submitted ? " px-4 p-48 sm:p-36" : " px-4 pt-24 pb-16 sm:pt-28 sm:pb-20"}`}
    >
      <div className="mx-auto flex w-full max-w-3xl flex-col border border-slate-200 bg-white animate-fadeIn relative">
        {submitted ? (
          <div className="p-10 sm:p-14 text-center">
            <div className="flex justify-center text-green-600 text-6xl mb-5">
              <BsCheckCircle />
            </div>

            <h3 className="font-serif text-3xl text-[#0a1628] mb-3">
              Application Submitted
            </h3>

            <p className="text-slate-600 text-sm leading-relaxed max-w-md mx-auto">
              Thank you for applying for{" "}
              <span className="text-[#c9a84c] font-medium">{job?.title}</span>.
              Our recruitment team will review your application and contact you
              shortly.
            </p>

            <button onClick={handleClose} className="btn-gold-solid mt-8">
              Close
            </button>
          </div>
        ) : (
          <div className="p-6 sm:p-10">
            <div className="mb-8">
              <span className="section-label">Career Application</span>

              <h2 className="section-title text-3xl mt-2">
                Apply for Position
              </h2>

              <p className="text-[#c9a84c] text-sm mt-2 tracking-wide">
                {job?.title}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-7" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-[10px] tracking-widest uppercase text-slate-500 block mb-2">
                    First Name *
                  </label>

                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="John"
                    aria-invalid={Boolean(
                      touched.firstName && errors.firstName,
                    )}
                    className={`input-field ${touched.firstName && errors.firstName ? "border-red-500 focus:border-red-500" : ""}`}
                  />

                  {touched.firstName && errors.firstName && (
                    <p className="mt-2 text-xs text-red-600">
                      {errors.firstName}
                    </p>
                  )}
                </div>

                <div>
                  <label className="text-[10px] tracking-widest uppercase text-slate-500 block mb-2">
                    Last Name *
                  </label>

                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Doe"
                    aria-invalid={Boolean(touched.lastName && errors.lastName)}
                    className={`input-field ${touched.lastName && errors.lastName ? "border-red-500 focus:border-red-500" : ""}`}
                  />

                  {touched.lastName && errors.lastName && (
                    <p className="mt-2 text-xs text-red-600">
                      {errors.lastName}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-[10px] tracking-widest uppercase text-slate-500 block mb-2">
                    Email Address *
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="john@example.com"
                    aria-invalid={Boolean(touched.email && errors.email)}
                    className={`input-field ${touched.email && errors.email ? "border-red-500 focus:border-red-500" : ""}`}
                  />

                  {touched.email && errors.email && (
                    <p className="mt-2 text-xs text-red-600">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label className="text-[10px] tracking-widest uppercase text-slate-500 block mb-2">
                    Phone Number *
                  </label>

                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="+91 9999 000 000"
                    aria-invalid={Boolean(touched.phone && errors.phone)}
                    className={`input-field ${touched.phone && errors.phone ? "border-red-500 focus:border-red-500" : ""}`}
                  />

                  {touched.phone && errors.phone && (
                    <p className="mt-2 text-xs text-red-600">{errors.phone}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-[10px] tracking-widest uppercase text-slate-500 block mb-2">
                    Years of Experience *
                  </label>

                  <input
                    type="text"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="5"
                    aria-invalid={Boolean(
                      touched.experience && errors.experience,
                    )}
                    className={`input-field ${touched.experience && errors.experience ? "border-red-500 focus:border-red-500" : ""}`}
                  />

                  {touched.experience && errors.experience && (
                    <p className="mt-2 text-xs text-red-600">
                      {errors.experience}
                    </p>
                  )}
                </div>

                <div>
                  <label className="text-[10px] tracking-widest uppercase text-slate-500 block mb-2">
                    Resume *
                  </label>

                  <label
                    htmlFor="resumeUpload"
                    className="mt-2 flex flex-col items-center justify-center border border-dashed border-slate-300 rounded-lg p-3 text-center cursor-pointer hover:border-[#c9a84c] transition"
                  >
                    <input
                      type="file"
                      id="resumeUpload"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFile}
                      className="hidden"
                    />

                    {resumeFile ? (
                      <span className="text-[#0a1628] font-medium text-sm break-all">
                        {resumeFile.name}
                      </span>
                    ) : (
                      <span className="text-slate-600 text-sm">
                        Click to upload your resume
                      </span>
                    )}
                  </label>

                  {touched.resume && errors.resume && (
                    <p className="mt-2 text-xs text-red-600">{errors.resume}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="text-[10px] tracking-widest uppercase text-slate-500 block mb-2">
                  Cover Letter (optional)
                </label>

                <textarea
                  name="coverLetter"
                  placeholder="Cover Letter (optional)"
                  value={formData.coverLetter}
                  onChange={handleChange}
                  rows={4}
                  className="input-field resize-none"
                />
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
                  I agree to be contacted regarding this application and confirm
                  the information provided is accurate.
                </label>
              </div>

              {Object.keys(errors).length > 0 &&
              Object.keys(touched).length > 0 ? (
                <p className="text-xs text-red-600 leading-relaxed">
                  Please fix the highlighted fields before submitting.
                </p>
              ) : null}

              <div className="flex flex-col sm:flex-row gap-3 sm:justify-end pt-2">
                <button
                  type="button"
                  onClick={handleClose}
                  className="w-full sm:w-auto px-6 py-3 border border-dotted border-red-500 text-red-500 text-xs tracking-widest uppercase font-semibold hover:bg-red-500 hover:text-white transition"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={!isFormValid || isSubmitting}
                  className="btn-gold-solid w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[#c9a84c]"
                >
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </main>
  );
}
