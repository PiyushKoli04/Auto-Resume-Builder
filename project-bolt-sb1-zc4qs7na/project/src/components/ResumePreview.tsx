import React from 'react';
import html2pdf from 'html2pdf.js';

interface ResumePreviewProps {
  resumeData: any;
  templateId: number;
}

const ResumePreview: React.FC<ResumePreviewProps> = ({ resumeData, templateId }) => {
  const handleDownloadPDF = () => {
    const element = document.getElementById('resume-preview');
    const opt = {
      margin: 10,
      filename: `${resumeData.personalInfo.name || 'Resume'}.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };
    
    html2pdf().set(opt).from(element).save();
  };

  // Professional Template
  if (templateId === 0) {
    return (
      <div className="relative">
        <button 
          onClick={handleDownloadPDF}
          className="absolute top-4 right-4 bg-green-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-green-700 transition duration-300"
        >
          Download PDF
        </button>
        
        <div id="resume-preview" className="max-w-4xl mx-auto bg-white p-8 shadow-lg">
          {/* Header */}
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-gray-800">{resumeData.personalInfo.name || "Your Name"}</h1>
            <div className="text-gray-600 mt-1 flex flex-wrap justify-center gap-x-4">
              {resumeData.personalInfo.email && (
                <span>{resumeData.personalInfo.email}</span>
              )}
              {resumeData.personalInfo.phone && (
                <span>{resumeData.personalInfo.phone}</span>
              )}
              {resumeData.personalInfo.address && (
                <span>{resumeData.personalInfo.address}</span>
              )}
            </div>
            <div className="text-gray-600 mt-1 flex flex-wrap justify-center gap-x-4">
              {resumeData.personalInfo.linkedin && (
                <span>{resumeData.personalInfo.linkedin}</span>
              )}
              {resumeData.personalInfo.website && (
                <span>{resumeData.personalInfo.website}</span>
              )}
            </div>
          </div>

          {/* Education */}
          {resumeData.education.length > 0 && (
            <div className="mb-6">
              <h2 className="text-xl font-bold text-gray-800 border-b-2 border-gray-300 pb-1 mb-3">EDUCATION</h2>
              {resumeData.education.map((edu: any, index: number) => (
                <div key={index} className="mb-3">
                  <div className="flex justify-between">
                    <div className="font-semibold">{edu.school}</div>
                    <div className="text-gray-600">{edu.startDate} - {edu.endDate}</div>
                  </div>
                  <div className="flex justify-between">
                    <div className="italic">{edu.degree}{edu.fieldOfStudy ? `, ${edu.fieldOfStudy}` : ''}</div>
                    {edu.gpa && <div>GPA: {edu.gpa}</div>}
                  </div>
                  {edu.description && <div className="text-gray-700 mt-1">{edu.description}</div>}
                </div>
              ))}
            </div>
          )}

          {/* Experience */}
          {resumeData.experience.length > 0 && (
            <div className="mb-6">
              <h2 className="text-xl font-bold text-gray-800 border-b-2 border-gray-300 pb-1 mb-3">EXPERIENCE</h2>
              {resumeData.experience.map((exp: any, index: number) => (
                <div key={index} className="mb-3">
                  <div className="flex justify-between">
                    <div className="font-semibold">{exp.company}</div>
                    <div className="text-gray-600">{exp.startDate} - {exp.endDate}</div>
                  </div>
                  <div className="flex justify-between">
                    <div className="italic">{exp.position}</div>
                    {exp.location && <div>{exp.location}</div>}
                  </div>
                  {exp.description && <div className="text-gray-700 mt-1">{exp.description}</div>}
                </div>
              ))}
            </div>
          )}

          {/* Projects */}
          {resumeData.projects.length > 0 && (
            <div className="mb-6">
              <h2 className="text-xl font-bold text-gray-800 border-b-2 border-gray-300 pb-1 mb-3">PROJECTS</h2>
              {resumeData.projects.map((project: any, index: number) => (
                <div key={index} className="mb-3">
                  <div className="flex justify-between">
                    <div className="font-semibold">{project.title}</div>
                    {project.link && <div className="text-blue-600">{project.link}</div>}
                  </div>
                  {project.technologies && <div className="italic">{project.technologies}</div>}
                  {project.description && <div className="text-gray-700 mt-1">{project.description}</div>}
                </div>
              ))}
            </div>
          )}

          {/* Skills */}
          {resumeData.skills.length > 0 && resumeData.skills[0] !== '' && (
            <div className="mb-6">
              <h2 className="text-xl font-bold text-gray-800 border-b-2 border-gray-300 pb-1 mb-3">SKILLS</h2>
              <div className="flex flex-wrap gap-2">
                {resumeData.skills.map((skill: string, index: number) => (
                  <span key={index} className="bg-gray-100 px-3 py-1 rounded-full text-gray-700">{skill}</span>
                ))}
              </div>
            </div>
          )}

          {/* Activities */}
          {resumeData.activities.length > 0 && (
            <div className="mb-6">
              <h2 className="text-xl font-bold text-gray-800 border-b-2 border-gray-300 pb-1 mb-3">EXTRACURRICULAR ACTIVITIES</h2>
              {resumeData.activities.map((activity: any, index: number) => (
                <div key={index} className="mb-3">
                  <div className="flex justify-between">
                    <div className="font-semibold">{activity.organization}</div>
                    <div className="text-gray-600">{activity.startDate} - {activity.endDate}</div>
                  </div>
                  <div className="italic">{activity.position}</div>
                  {activity.description && <div className="text-gray-700 mt-1">{activity.description}</div>}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  } 
  // Creative Template
  else if (templateId === 1) {
    return (
      <div className="relative">
        <button 
          onClick={handleDownloadPDF}
          className="absolute top-4 right-4 bg-green-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-green-700 transition duration-300"
        >
          Download PDF
        </button>
        
        <div id="resume-preview" className="max-w-4xl mx-auto bg-white p-8 shadow-lg">
          {/* Header - Creative Style */}
          <div className="flex flex-col md:flex-row justify-between items-start mb-8 border-b-4 border-indigo-500 pb-4">
            <div>
              <h1 className="text-4xl font-bold text-indigo-600">{resumeData.personalInfo.name || "Your Name"}</h1>
              {resumeData.personalInfo.address && (
                <div className="text-gray-600 mt-1">{resumeData.personalInfo.address}</div>
              )}
            </div>
            <div className="mt-4 md:mt-0 text-right">
              {resumeData.personalInfo.email && (
                <div className="text-gray-700">{resumeData.personalInfo.email}</div>
              )}
              {resumeData.personalInfo.phone && (
                <div className="text-gray-700">{resumeData.personalInfo.phone}</div>
              )}
              {resumeData.personalInfo.linkedin && (
                <div className="text-indigo-600">{resumeData.personalInfo.linkedin}</div>
              )}
              {resumeData.personalInfo.website && (
                <div className="text-indigo-600">{resumeData.personalInfo.website}</div>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              {/* Experience */}
              {resumeData.experience.length > 0 && (
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-indigo-600 mb-4">Experience</h2>
                  {resumeData.experience.map((exp: any, index: number) => (
                    <div key={index} className="mb-5">
                      <div className="flex justify-between items-baseline">
                        <h3 className="text-xl font-semibold">{exp.position}</h3>
                        <span className="text-gray-600 text-sm">{exp.startDate} - {exp.endDate}</span>
                      </div>
                      <div className="text-indigo-500 font-medium">{exp.company}{exp.location ? `, ${exp.location}` : ''}</div>
                      {exp.description && <p className="text-gray-700 mt-2">{exp.description}</p>}
                    </div>
                  ))}
                </div>
              )}

              {/* Projects */}
              {resumeData.projects.length > 0 && (
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-indigo-600 mb-4">Projects</h2>
                  {resumeData.projects.map((project: any, index: number) => (
                    <div key={index} className="mb-5">
                      <div className="flex justify-between items-baseline">
                        <h3 className="text-xl font-semibold">{project.title}</h3>
                        {project.link && <a href={project.link} className="text-indigo-500 text-sm">View Project</a>}
                      </div>
                      {project.technologies && <div className="text-indigo-500 font-medium">{project.technologies}</div>}
                      {project.description && <p className="text-gray-700 mt-2">{project.description}</p>}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div>
              {/* Education */}
              {resumeData.education.length > 0 && (
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-indigo-600 mb-4">Education</h2>
                  {resumeData.education.map((edu: any, index: number) => (
                    <div key={index} className="mb-5">
                      <h3 className="text-lg font-semibold">{edu.school}</h3>
                      <div className="text-gray-700">{edu.degree}{edu.fieldOfStudy ? `, ${edu.fieldOfStudy}` : ''}</div>
                      <div className="text-gray-600">{edu.startDate} - {edu.endDate}</div>
                      {edu.gpa && <div className="text-gray-600">GPA: {edu.gpa}</div>}
                      {edu.description && <div className="text-gray-700 mt-1">{edu.description}</div>}
                    </div>
                  ))}
                </div>
              )}

              {/* Skills */}
              {resumeData.skills.length > 0 && resumeData.skills[0] !== '' && (
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-indigo-600 mb-4">Skills</h2>
                  <div className="flex flex-wrap gap-2">
                    {resumeData.skills.map((skill: string, index: number) => (
                      <span key={index} className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full">{skill}</span>
                    ))}
                  </div>
                </div>
              )}

              {/* Activities */}
              {resumeData.activities.length > 0 && (
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-indigo-600 mb-4">Activities</h2>
                  {resumeData.activities.map((activity: any, index: number) => (
                    <div key={index} className="mb-4">
                      <h3 className="text-lg font-semibold">{activity.organization}</h3>
                      <div className="text-indigo-500">{activity.position}</div>
                      <div className="text-gray-600 text-sm">{activity.startDate} - {activity.endDate}</div>
                      {activity.description && <p className="text-gray-700 mt-1">{activity.description}</p>}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  } 
  // Academic Template
  else {
    return (
      <div className="relative">
        <button 
          onClick={handleDownloadPDF}
          className="absolute top-4 right-4 bg-green-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-green-700 transition duration-300"
        >
          Download PDF
        </button>
        
        <div id="resume-preview" className="max-w-4xl mx-auto bg-white p-8 shadow-lg">
          {/* Header - Academic Style */}
          <div className="text-center mb-6 border-b-2 border-gray-800 pb-4">
            <h1 className="text-3xl font-bold text-gray-900">{resumeData.personalInfo.name || "Your Name"}</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-2">
              <div>
                {resumeData.personalInfo.phone && (
                  <div className="text-gray-700">{resumeData.personalInfo.phone}</div>
                )}
              </div>
              <div>
                {resumeData.personalInfo.email && (
                  <div className="text-gray-700">{resumeData.personalInfo.email}</div>
                )}
              </div>
              <div>
                {resumeData.personalInfo.address && (
                  <div className="text-gray-700">{resumeData.personalInfo.address}</div>
                )}
              </div>
            </div>
            <div className="flex justify-center gap-4 mt-2">
              {resumeData.personalInfo.linkedin && (
                <div className="text-gray-700">{resumeData.personalInfo.linkedin}</div>
              )}
              {resumeData.personalInfo.website && (
                <div className="text-gray-700">{resumeData.personalInfo.website}</div>
              )}
            </div>
          </div>

          {/* Education */}
          {resumeData.education.length > 0 && (
            <div className="mb-6">
              <h2 className="text-xl font-bold text-gray-900 border-b border-gray-400 pb-1 mb-3">EDUCATION</h2>
              {resumeData.education.map((edu: any, index: number) => (
                <div key={index} className="mb-4">
                  <div className="flex justify-between font-semibold">
                    <div>{edu.degree}{edu.fieldOfStudy ? ` in ${edu.fieldOfStudy}` : ''}</div>
                    <div>{edu.startDate} - {edu.endDate}</div>
                  </div>
                  <div className="font-semibold">{edu.school}</div>
                  {edu.gpa && <div className="italic">GPA: {edu.gpa}</div>}
                  {edu.description && <div className="text-gray-700 mt-1">{edu.description}</div>}
                </div>
              ))}
            </div>
          )}

          {/* Research/Publications (using Projects section) */}
          {resumeData.projects.length > 0 && (
            <div className="mb-6">
              <h2 className="text-xl font-bold text-gray-900 border-b border-gray-400 pb-1 mb-3">RESEARCH & PUBLICATIONS</h2>
              {resumeData.projects.map((project: any, index: number) => (
                <div key={index} className="mb-4">
                  <div className="font-semibold">{project.title}</div>
                  {project.technologies && <div className="italic">{project.technologies}</div>}
                  {project.description && <div className="text-gray-700 mt-1">{project.description}</div>}
                  {project.link && <div className="text-gray-600 mt-1">Reference: {project.link}</div>}
                </div>
              ))}
            </div>
          )}

          {/* Experience */}
          {resumeData.experience.length > 0 && (
            <div className="mb-6">
              <h2 className="text-xl font-bold text-gray-900 border-b border-gray-400 pb-1 mb-3">PROFESSIONAL EXPERIENCE</h2>
              {resumeData.experience.map((exp: any, index: number) => (
                <div key={index} className="mb-4">
                  <div className="flex justify-between font-semibold">
                    <div>{exp.position}</div>
                    <div>{exp.startDate} - {exp.endDate}</div>
                  </div>
                  <div className="italic">{exp.company}{exp.location ? `, ${exp.location}` : ''}</div>
                  {exp.description && <div className="text-gray-700 mt-1">{exp.description}</div>}
                </div>
              ))}
            </div>
          )}

          {/* Skills */}
          {resumeData.skills.length > 0 && resumeData.skills[0] !== '' && (
            <div className="mb-6">
              <h2 className="text-xl font-bold text-gray-900 border-b border-gray-400 pb-1 mb-3">SKILLS & COMPETENCIES</h2>
              <div className="flex flex-wrap">
                {resumeData.skills.map((skill: string, index: number) => (
                  <div key={index} className="w-1/2 md:w-1/3 mb-2">• {skill}</div>
                ))}
              </div>
            </div>
          )}

          {/* Activities */}
          {resumeData.activities.length > 0 && (
            <div className="mb-6">
              <h2 className="text-xl font-bold text-gray-900 border-b border-gray-400 pb-1 mb-3">ACADEMIC & PROFESSIONAL ACTIVITIES</h2>
              {resumeData.activities.map((activity: any, index: number) => (
                <div key={index} className="mb-4">
                  <div className="flex justify-between font-semibold">
                    <div>{activity.position}, {activity.organization}</div>
                    <div>{activity.startDate} - {activity.endDate}</div>
                  </div>
                  {activity.description && <div className="text-gray-700 mt-1">{activity.description}</div>}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }
};

export default ResumePreview;