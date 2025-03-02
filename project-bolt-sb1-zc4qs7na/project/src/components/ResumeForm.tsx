import React from 'react';
import { Plus, Trash2 } from 'lucide-react';

interface ResumeFormProps {
  resumeData: any;
  onUpdateResumeData: (data: any) => void;
  onPreview: () => void;
}

const ResumeForm: React.FC<ResumeFormProps> = ({ resumeData, onUpdateResumeData, onPreview }) => {
  const handlePersonalInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    onUpdateResumeData({
      ...resumeData,
      personalInfo: {
        ...resumeData.personalInfo,
        [name]: value
      }
    });
  };

  const handleArrayItemChange = (section: string, index: number, field: string, value: string) => {
    const newData = { ...resumeData };
    newData[section][index][field] = value;
    onUpdateResumeData(newData);
  };

  const handleSkillChange = (index: number, value: string) => {
    const newSkills = [...resumeData.skills];
    newSkills[index] = value;
    onUpdateResumeData({
      ...resumeData,
      skills: newSkills
    });
  };

  const addItem = (section: string) => {
    const newData = { ...resumeData };
    
    if (section === 'education') {
      newData.education.push({ 
        school: '', 
        degree: '', 
        fieldOfStudy: '', 
        startDate: '', 
        endDate: '', 
        gpa: '',
        description: '' 
      });
    } else if (section === 'experience') {
      newData.experience.push({ 
        company: '', 
        position: '', 
        location: '', 
        startDate: '', 
        endDate: '', 
        description: '' 
      });
    } else if (section === 'projects') {
      newData.projects.push({ 
        title: '', 
        description: '', 
        technologies: '', 
        link: '' 
      });
    } else if (section === 'activities') {
      newData.activities.push({ 
        organization: '', 
        position: '', 
        startDate: '', 
        endDate: '', 
        description: '' 
      });
    } else if (section === 'skills') {
      newData.skills.push('');
    }
    
    onUpdateResumeData(newData);
  };

  const removeItem = (section: string, index: number) => {
    const newData = { ...resumeData };
    newData[section].splice(index, 1);
    onUpdateResumeData(newData);
  };

  return (
    <div className="space-y-8">
      {/* Personal Information */}
      <div>
        <h3 className="text-xl font-semibold mb-4 pb-2 border-b border-gray-200">Personal Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              value={resumeData.personalInfo.name}
              onChange={handlePersonalInfoChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={resumeData.personalInfo.email}
              onChange={handlePersonalInfoChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500"
              placeholder="johndoe@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
            <input
              type="tel"
              name="phone"
              value={resumeData.personalInfo.phone}
              onChange={handlePersonalInfoChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500"
              placeholder="(123) 456-7890"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
            <input
              type="text"
              name="address"
              value={resumeData.personalInfo.address}
              onChange={handlePersonalInfoChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500"
              placeholder="City, State"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">LinkedIn</label>
            <input
              type="text"
              name="linkedin"
              value={resumeData.personalInfo.linkedin}
              onChange={handlePersonalInfoChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500"
              placeholder="linkedin.com/in/johndoe"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Website/Portfolio</label>
            <input
              type="text"
              name="website"
              value={resumeData.personalInfo.website}
              onChange={handlePersonalInfoChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500"
              placeholder="johndoe.com"
            />
          </div>
        </div>
      </div>

      {/* Education */}
      <div>
        <div className="flex justify-between items-center mb-4 pb-2 border-b border-gray-200">
          <h3 className="text-xl font-semibold">Education</h3>
          <button 
            onClick={() => addItem('education')}
            className="flex items-center text-sm text-indigo-600 hover:text-indigo-800"
          >
            <Plus className="h-4 w-4 mr-1" /> Add Education
          </button>
        </div>
        
        {resumeData.education.map((edu: any, index: number) => (
          <div key={index} className="mb-6 p-4 bg-gray-50 rounded-md relative">
            <button 
              onClick={() => removeItem('education', index)}
              className="absolute top-2 right-2 text-gray-400 hover:text-red-500"
              title="Remove"
            >
              <Trash2 className="h-5 w-5" />
            </button>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">School/University</label>
                <input
                  type="text"
                  value={edu.school}
                  onChange={(e) => handleArrayItemChange('education', index, 'school', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  placeholder="University Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Degree</label>
                <input
                  type="text"
                  value={edu.degree}
                  onChange={(e) => handleArrayItemChange('education', index, 'degree', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  placeholder="Bachelor of Science"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Field of Study</label>
                <input
                  type="text"
                  value={edu.fieldOfStudy}
                  onChange={(e) => handleArrayItemChange('education', index, 'fieldOfStudy', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  placeholder="Computer Science"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">GPA</label>
                <input
                  type="text"
                  value={edu.gpa}
                  onChange={(e) => handleArrayItemChange('education', index, 'gpa', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  placeholder="3.8/4.0"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
                <input
                  type="text"
                  value={edu.startDate}
                  onChange={(e) => handleArrayItemChange('education', index, 'startDate', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  placeholder="Aug 2020"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">End Date (or Expected)</label>
                <input
                  type="text"
                  value={edu.endDate}
                  onChange={(e) => handleArrayItemChange('education', index, 'endDate', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  placeholder="May 2024"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Relevant Coursework/Achievements</label>
              <input
                type="text"
                value={edu.description}
                onChange={(e) => handleArrayItemChange('education', index, 'description', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500"
                placeholder="Data Structures, Algorithms, Dean's List"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Experience */}
      <div>
        <div className="flex justify-between items-center mb-4 pb-2 border-b border-gray-200">
          <h3 className="text-xl font-semibold">Experience</h3>
          <button 
            onClick={() => addItem('experience')}
            className="flex items-center text-sm text-indigo-600 hover:text-indigo-800"
          >
            <Plus className="h-4 w-4 mr-1" /> Add Experience
          </button>
        </div>
        
        {resumeData.experience.map((exp: any, index: number) => (
          <div key={index} className="mb-6 p-4 bg-gray-50 rounded-md relative">
            <button 
              onClick={() => removeItem('experience', index)}
              className="absolute top-2 right-2 text-gray-400 hover:text-red-500"
              title="Remove"
            >
              <Trash2 className="h-5 w-5" />
            </button>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Company/Organization</label>
                <input
                  type="text"
                  value={exp.company}
                  onChange={(e) => handleArrayItemChange('experience', index, 'company', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  placeholder="Company Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Position</label>
                <input
                  type="text"
                  value={exp.position}
                  onChange={(e) => handleArrayItemChange('experience', index, 'position', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  placeholder="Software Engineering Intern"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                <input
                  type="text"
                  value={exp.location}
                  onChange={(e) => handleArrayItemChange('experience', index, 'location', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  placeholder="San Francisco, CA"
                />
              </div>
              <div className="md:col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
                <input
                  type="text"
                  value={exp.startDate}
                  onChange={(e) => handleArrayItemChange('experience', index, 'startDate', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  placeholder="June 2022"
                />
              </div>
              <div className="md:col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
                <input
                  type="text"
                  value={exp.endDate}
                  onChange={(e) => handleArrayItemChange('experience', index, 'endDate', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  placeholder="August 2022 (or Present)"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
              <textarea
                value={exp.description}
                onChange={(e) => handleArrayItemChange('experience', index, 'description', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500"
                placeholder="Describe your responsibilities and achievements"
                rows={3}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Projects */}
      <div>
        <div className="flex justify-between items-center mb-4 pb-2 border-b border-gray-200">
          <h3 className="text-xl font-semibold">Projects</h3>
          <button 
            onClick={() => addItem('projects')}
            className="flex items-center text-sm text-indigo-600 hover:text-indigo-800"
          >
            <Plus className="h-4 w-4 mr-1" /> Add Project
          </button>
        </div>
        
        {resumeData.projects.map((project: any, index: number) => (
          <div key={index} className="mb-6 p-4 bg-gray-50 rounded-md relative">
            <button 
              onClick={() => removeItem('projects', index)}
              className="absolute top-2 right-2 text-gray-400 hover:text-red-500"
              title="Remove"
            >
              <Trash2 className="h-5 w-5" />
            </button>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Project Title</label>
                <input
                  type="text"
                  value={project.title}
                  onChange={(e) => handleArrayItemChange('projects', index, 'title', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  placeholder="E-commerce Website"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Technologies Used</label>
                <input
                  type="text"
                  value={project.technologies}
                  onChange={(e) => handleArrayItemChange('projects', index, 'technologies', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  placeholder="React, Node.js, MongoDB"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Project Link (GitHub, Demo, etc.)</label>
              <input
                type="text"
                value={project.link}
                onChange={(e) => handleArrayItemChange('projects', index, 'link', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500"
                placeholder="https://github.com/username/project"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
              <textarea
                value={project.description}
                onChange={(e) => handleArrayItemChange('projects', index, 'description', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500"
                placeholder="Describe the project, your role, and key achievements"
                rows={3}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Skills */}
      <div>
        <div className="flex justify-between items-center mb-4 pb-2 border-b border-gray-200">
          <h3 className="text-xl font-semibold">Skills</h3>
          <button 
            onClick={() => addItem('skills')}
            className="flex items-center text-sm text-indigo-600 hover:text-indigo-800"
          >
            <Plus className="h-4 w-4 mr-1" /> Add Skill
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {resumeData.skills.map((skill: string, index: number) => (
            <div key={index} className="flex items-center">
              <input
                type="text"
                value={skill}
                onChange={(e) => handleSkillChange(index, e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500"
                placeholder="JavaScript, Python, etc."
              />
              <button 
                onClick={() => removeItem('skills', index)}
                className="ml-2 text-gray-400 hover:text-red-500"
                title="Remove"
              >
                <Trash2 className="h-5 w-5" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Extracurricular Activities */}
      <div>
        <div className="flex justify-between items-center mb-4 pb-2 border-b border-gray-200">
          <h3 className="text-xl font-semibold">Extracurricular Activities</h3>
          <button 
            onClick={() => addItem('activities')}
            className="flex items-center text-sm text-indigo-600 hover:text-indigo-800"
          >
            <Plus className="h-4 w-4 mr-1" /> Add Activity
          </button>
        </div>
        
        {resumeData.activities.map((activity: any, index: number) => (
          <div key={index} className="mb-6 p-4 bg-gray-50 rounded-md relative">
            <button 
              onClick={() => removeItem('activities', index)}
              className="absolute top-2 right-2 text-gray-400 hover:text-red-500"
              title="Remove"
            >
              <Trash2 className="h-5 w-5" />
            </button>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Organization</label>
                <input
                  type="text"
                  value={activity.organization}
                  onChange={(e) => handleArrayItemChange('activities', index, 'organization', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  placeholder="Computer Science Club"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Position</label>
                <input
                  type="text"
                  value={activity.position}
                  onChange={(e) => handleArrayItemChange('activities', index, 'position', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  placeholder="Vice President"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
                <input
                  type="text"
                  value={activity.startDate}
                  onChange={(e) => handleArrayItemChange('activities', index, 'startDate', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  placeholder="September 2021"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
                <input
                  type="text"
                  value={activity.endDate}
                  onChange={(e) => handleArrayItemChange('activities', index, 'endDate', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  placeholder="Present"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
              <textarea
                value={activity.description}
                onChange={(e) => handleArrayItemChange('activities', index, 'description', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500"
                placeholder="Describe your responsibilities and achievements"
                rows={3}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="pt-4 border-t border-gray-200 flex justify-end">
        <button 
          onClick={onPreview}
          className="bg-indigo-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-indigo-700 transition duration-300"
        >
          Preview Resume
        </button>
      </div>
    </div>
  );
};

export default ResumeForm;