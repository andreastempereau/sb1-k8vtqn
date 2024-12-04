import React, { useState } from 'react';
import { X, Plus, Trash } from 'lucide-react';
import { Project } from '../../types/project';

interface AddEditProjectProps {
  project?: Project;
  onClose: () => void;
  onSave: (project: Project) => void;
}

export function AddEditProject({ project, onClose, onSave }: AddEditProjectProps) {
  const [formData, setFormData] = useState({
    title: project?.title || '',
    tokenSymbol: project?.tokenSymbol || '',
    description: project?.description || '',
    longDescription: project?.longDescription || '',
    targetAmount: project?.targetAmount || 0,
    totalSupply: project?.totalSupply || 0,
    initialCirculation: project?.initialCirculation || 0,
    tgeDate: project?.tgeDate.split('T')[0] || '',
    whitepaper: project?.whitepaper || '',
    tokenomics: project?.tokenomics || [
      { category: '', percentage: 0 }
    ],
    faqs: project?.faqs || [
      { question: '', answer: '' }
    ],
    companyProfile: {
      founded: project?.companyProfile.founded || '',
      location: project?.companyProfile.location || '',
      employees: project?.companyProfile.employees || 0,
      investors: project?.companyProfile.investors || [],
      partnerships: project?.companyProfile.partnerships || [],
      socialLinks: {
        website: project?.companyProfile.socialLinks.website || '',
        twitter: project?.companyProfile.socialLinks.twitter || '',
        telegram: project?.companyProfile.socialLinks.telegram || '',
        github: project?.companyProfile.socialLinks.github || '',
        linkedin: project?.companyProfile.socialLinks.linkedin || ''
      }
    },
    founderVideo: {
      thumbnailUrl: project?.founderVideo.thumbnailUrl || '',
      videoUrl: project?.founderVideo.videoUrl || '',
      title: project?.founderVideo.title || '',
      description: project?.founderVideo.description || ''
    }
  });

  const [currentTab, setCurrentTab] = useState('basic');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      ...formData,
      id: project?.id || Date.now().toString(),
      raisedAmount: project?.raisedAmount || 0,
      daysLeft: project?.daysLeft || 30,
      imageUrl: project?.imageUrl || 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&q=80',
      team: project?.team || [],
      comments: project?.comments || []
    });
  };

  const addTokenomicsItem = () => {
    setFormData(prev => ({
      ...prev,
      tokenomics: [...prev.tokenomics, { category: '', percentage: 0 }]
    }));
  };

  const removeTokenomicsItem = (index: number) => {
    setFormData(prev => ({
      ...prev,
      tokenomics: prev.tokenomics.filter((_, i) => i !== index)
    }));
  };

  const addFAQ = () => {
    setFormData(prev => ({
      ...prev,
      faqs: [...prev.faqs, { question: '', answer: '' }]
    }));
  };

  const removeFAQ = (index: number) => {
    setFormData(prev => ({
      ...prev,
      faqs: prev.faqs.filter((_, i) => i !== index)
    }));
  };

  const tabs = [
    { id: 'basic', label: 'Basic Info' },
    { id: 'tokenomics', label: 'Tokenomics' },
    { id: 'company', label: 'Company Profile' },
    { id: 'video', label: 'Founder Video' },
    { id: 'faqs', label: 'FAQs' }
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              {project ? 'Edit Project' : 'New Project'}
            </h2>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="mb-6">
            <nav className="flex space-x-4">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setCurrentTab(tab.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    currentTab === tab.id
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {currentTab === 'basic' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Title</label>
                    <input
                      type="text"
                      required
                      value={formData.title}
                      onChange={e => setFormData(prev => ({ ...prev, title: e.target.value }))}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Token Symbol</label>
                    <input
                      type="text"
                      required
                      value={formData.tokenSymbol}
                      onChange={e => setFormData(prev => ({ ...prev, tokenSymbol: e.target.value }))}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Short Description</label>
                  <textarea
                    required
                    value={formData.description}
                    onChange={e => setFormData(prev => ({ ...prev, description: e.target.value }))}
                    rows={2}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Long Description</label>
                  <textarea
                    required
                    value={formData.longDescription}
                    onChange={e => setFormData(prev => ({ ...prev, longDescription: e.target.value }))}
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Target Amount ($)</label>
                    <input
                      type="number"
                      required
                      value={formData.targetAmount}
                      onChange={e => setFormData(prev => ({ ...prev, targetAmount: Number(e.target.value) }))}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Total Supply</label>
                    <input
                      type="number"
                      required
                      value={formData.totalSupply}
                      onChange={e => setFormData(prev => ({ ...prev, totalSupply: Number(e.target.value) }))}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Initial Circulation</label>
                    <input
                      type="number"
                      required
                      value={formData.initialCirculation}
                      onChange={e => setFormData(prev => ({ ...prev, initialCirculation: Number(e.target.value) }))}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">TGE Date</label>
                    <input
                      type="date"
                      required
                      value={formData.tgeDate}
                      onChange={e => setFormData(prev => ({ ...prev, tgeDate: e.target.value }))}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Whitepaper URL</label>
                    <input
                      type="url"
                      required
                      value={formData.whitepaper}
                      onChange={e => setFormData(prev => ({ ...prev, whitepaper: e.target.value }))}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>
            )}

            {currentTab === 'tokenomics' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium text-gray-900">Token Distribution</h3>
                  <button
                    type="button"
                    onClick={addTokenomicsItem}
                    className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 flex items-center"
                  >
                    <Plus className="w-4 h-4 mr-1" />
                    Add Category
                  </button>
                </div>

                <div className="space-y-4">
                  {formData.tokenomics.map((item, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <input
                        type="text"
                        placeholder="Category"
                        required
                        value={item.category}
                        onChange={e => {
                          const newTokenomics = [...formData.tokenomics];
                          newTokenomics[index].category = e.target.value;
                          setFormData(prev => ({ ...prev, tokenomics: newTokenomics }));
                        }}
                        className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      />
                      <input
                        type="number"
                        placeholder="Percentage"
                        required
                        min="0"
                        max="100"
                        value={item.percentage}
                        onChange={e => {
                          const newTokenomics = [...formData.tokenomics];
                          newTokenomics[index].percentage = Number(e.target.value);
                          setFormData(prev => ({ ...prev, tokenomics: newTokenomics }));
                        }}
                        className="w-24 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      />
                      <span className="text-gray-500">%</span>
                      {index > 0 && (
                        <button
                          type="button"
                          onClick={() => removeTokenomicsItem(index)}
                          className="text-red-500 hover:text-red-600"
                        >
                          <Trash className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {currentTab === 'company' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Founded Year</label>
                    <input
                      type="text"
                      required
                      value={formData.companyProfile.founded}
                      onChange={e => setFormData(prev => ({
                        ...prev,
                        companyProfile: { ...prev.companyProfile, founded: e.target.value }
                      }))}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Location</label>
                    <input
                      type="text"
                      required
                      value={formData.companyProfile.location}
                      onChange={e => setFormData(prev => ({
                        ...prev,
                        companyProfile: { ...prev.companyProfile, location: e.target.value }
                      }))}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Number of Employees</label>
                    <input
                      type="number"
                      required
                      value={formData.companyProfile.employees}
                      onChange={e => setFormData(prev => ({
                        ...prev,
                        companyProfile: { ...prev.companyProfile, employees: Number(e.target.value) }
                      }))}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Key Investors</label>
                  <textarea
                    placeholder="Enter each investor on a new line"
                    value={formData.companyProfile.investors.join('\n')}
                    onChange={e => setFormData(prev => ({
                      ...prev,
                      companyProfile: {
                        ...prev.companyProfile,
                        investors: e.target.value.split('\n').filter(Boolean)
                      }
                    }))}
                    rows={3}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Strategic Partnerships</label>
                  <textarea
                    placeholder="Enter each partnership on a new line"
                    value={formData.companyProfile.partnerships.join('\n')}
                    onChange={e => setFormData(prev => ({
                      ...prev,
                      companyProfile: {
                        ...prev.companyProfile,
                        partnerships: e.target.value.split('\n').filter(Boolean)
                      }
                    }))}
                    rows={3}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-gray-900">Social Links</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Website</label>
                      <input
                        type="url"
                        required
                        value={formData.companyProfile.socialLinks.website}
                        onChange={e => setFormData(prev => ({
                          ...prev,
                          companyProfile: {
                            ...prev.companyProfile,
                            socialLinks: { ...prev.companyProfile.socialLinks, website: e.target.value }
                          }
                        }))}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Twitter</label>
                      <input
                        type="url"
                        required
                        value={formData.companyProfile.socialLinks.twitter}
                        onChange={e => setFormData(prev => ({
                          ...prev,
                          companyProfile: {
                            ...prev.companyProfile,
                            socialLinks: { ...prev.companyProfile.socialLinks, twitter: e.target.value }
                          }
                        }))}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Telegram</label>
                      <input
                        type="url"
                        required
                        value={formData.companyProfile.socialLinks.telegram}
                        onChange={e => setFormData(prev => ({
                          ...prev,
                          companyProfile: {
                            ...prev.companyProfile,
                            socialLinks: { ...prev.companyProfile.socialLinks, telegram: e.target.value }
                          }
                        }))}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">LinkedIn</label>
                      <input
                        type="url"
                        value={formData.companyProfile.socialLinks.linkedin}
                        onChange={e => setFormData(prev => ({
                          ...prev,
                          companyProfile: {
                            ...prev.companyProfile,
                            socialLinks: { ...prev.companyProfile.socialLinks, linkedin: e.target.value }
                          }
                        }))}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {currentTab === 'video' && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Video Title</label>
                  <input
                    type="text"
                    required
                    value={formData.founderVideo.title}
                    onChange={e => setFormData(prev => ({
                      ...prev,
                      founderVideo: { ...prev.founderVideo, title: e.target.value }
                    }))}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Video Description</label>
                  <textarea
                    required
                    value={formData.founderVideo.description}
                    onChange={e => setFormData(prev => ({
                      ...prev,
                      founderVideo: { ...prev.founderVideo, description: e.target.value }
                    }))}
                    rows={3}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Video URL</label>
                    <input
                      type="url"
                      required
                      value={formData.founderVideo.videoUrl}
                      onChange={e => setFormData(prev => ({
                        ...prev,
                        founderVideo: { ...prev.founderVideo, videoUrl: e.target.value }
                      }))}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Thumbnail URL</label>
                    <input
                      type="url"
                      required
                      value={formData.founderVideo.thumbnailUrl}
                      onChange={e => setFormData(prev => ({
                        ...prev,
                        founderVideo: { ...prev.founderVideo, thumbnailUrl: e.target.value }
                      }))}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>
            )}

            {currentTab === 'faqs' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium text-gray-900">Frequently Asked Questions</h3>
                  <button
                    type="button"
                    onClick={addFAQ}
                    className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 flex items-center"
                  >
                    <Plus className="w-4 h-4 mr-1" />
                    Add FAQ
                  </button>
                </div>

                <div className="space-y-6">
                  {formData.faqs.map((faq, index) => (
                    <div key={index} className="space-y-4 bg-gray-50 p-4 rounded-lg">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Question</label>
                        <input
                          type="text"
                          required
                          value={faq.question}
                          onChange={e => {
                            const newFaqs = [...formData.faqs];
                            newFaqs[index].question = e.target.value;
                            setFormData(prev => ({ ...prev, faqs: newFaqs }));
                          }}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Answer</label>
                        <textarea
                          required
                          value={faq.answer}
                          onChange={e => {
                            const newFaqs = [...formData.faqs];
                            newFaqs[index].answer = e.target.value;
                            setFormData(prev => ({ ...prev, faqs: newFaqs }));
                          }}
                          rows={3}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        />
                      </div>
                      {index > 0 && (
                        <button
                          type="button"
                          onClick={() => removeFAQ(index)}
                          className="text-red-500 hover:text-red-600 flex items-center"
                        >
                          <Trash className="w-4 h-4 mr-1" />
                          Remove FAQ
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="flex justify-end space-x-3 pt-6 border-t">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-gray-700 hover:text-gray-900"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                {project ? 'Save Changes' : 'Create Project'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}