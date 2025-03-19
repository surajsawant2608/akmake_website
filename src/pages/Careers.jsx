import React, { useState } from "react";

const jobList = [
  {
    title: "Marketing Specialist",
    location: "Gujarat, India",
    description: "We need a dynamic marketing specialist to manage campaigns and grow our brand.",
  },
  {
    title: "Machine Specialist",
    location: "Gujarat, India",
    description: "We need a machine specialist with expertise in industrial operations and maintenance.",
  },
];

export default function JobBoard() {
  // const [jobs, setJobs] = useState(jobList);
  // const [newJob, setNewJob] = useState({ title: "", location: "", description: "" });
  const [applicant, setApplicant] = useState({ name: "", email: "", resume: null });

  // const addJob = () => {
  //   if (newJob.title && newJob.location && newJob.description) {
  //     setJobs([...jobs, newJob]);
  //     setNewJob({ title: "", location: "", description: "" });
  //   }
  // };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "text/plain", "application/rtf"].includes(file.type)) {
      setApplicant({ ...applicant, resume: file });
    } else {
      alert("Invalid file type. Please upload a PDF, DOC, DOCX, TXT, or RTF file.");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (applicant.name && applicant.email && applicant.resume) {
      alert(`Application submitted successfully!\nName: ${applicant.name}\nEmail: ${applicant.email}`);
      setApplicant({ name: "", email: "", resume: null });
    } else {
      alert("Please fill in all fields and upload a valid resume.");
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800">Join Our Team</h2>
          <p className="mt-4 text-gray-600">
            We’re looking for talented individuals to help us shape the future.
            Explore our current opportunities and submit your resume to be considered.
          </p>
        </div>

        {/* Job Listings */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {jobList.length > 0 ? (
            jobList.map((job, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-800">{job.title}</h3>
                <p className="mt-2 text-gray-600">Location: {job.location}</p>
                <p className="mt-2 text-gray-600">{job.description}</p>
                <button className="mt-4 w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                  Apply Now
                </button>
              </div>
            ))
          ) : (
            <div className="bg-white shadow-lg rounded-lg p-6 text-center col-span-1 md:col-span-2 lg:col-span-3">
              <h3 className="text-xl font-bold text-gray-800">No Job Openings</h3>
              <p className="mt-2 text-gray-600">
                We currently do not have any open positions. Please check back later.
              </p>
            </div>
          )}
        </div>

        {/* Conditional Divider Line */}
        <div className="mt-16 mb-10 border-t-2 border-gray-300"></div>
        

        {/* Resume Submission Form */}
        <div className="mx-auto lg:w-3/4">
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 text-center">Submit Your Resume</h3>
            <p className="mt-2 text-gray-600 text-center">
            {jobList.length > 0
                ? "If the listed jobs don't match your profile, you can still send us your resume for future opportunities."
                : "Even if there are no current openings, send us your resume for future opportunities."}
            </p>
            <form onSubmit={handleSubmit} className="mt-6">
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold">Full Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  value={applicant.name}
                  onChange={(e) => setApplicant({ ...applicant, name: e.target.value })}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  value={applicant.email}
                  onChange={(e) => setApplicant({ ...applicant, email: e.target.value })}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold">Upload Resume (PDF, DOC, DOCX, TXT, RTF)</label>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx,.txt,.rtf"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none"
                  onChange={handleFileChange}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
