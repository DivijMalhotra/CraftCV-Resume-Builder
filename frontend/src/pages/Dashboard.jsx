import React, { useContext, useEffect, useState } from 'react'
import DashboardLayout from '../components/DashboardLayout'
import { useNavigate } from 'react-router-dom'
import {
  BarChart3, Clock, FilePlus, FileText, LucideFilePlus,
  LucideTrash2, Plus, Search, Sparkles, TrendingUp
} from 'lucide-react'
import axiosInstance from '../utils/axiosInstance'
import { API_PATHS } from '../utils/apiPaths'
import { ResumeSummaryCard } from '../components/Cards'
import toast from 'react-hot-toast'
import moment from 'moment'
import Modal from '../components/Modal'
import CreateResumeForm from '../components/CreateResumeForm'
import { UserContext } from '../context/userContext'

const Dashboard = () => {

  const navigate = useNavigate()
  const { user } = useContext(UserContext)
  const [openCreateModal, setOpenCreateModal] = useState(false)
  const [allResumes, setAllResumes] = useState([])
  const [loading, setLoading] = useState(true)
  const [resumeToDelete, setResumeToDelete] = useState(null)
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  // ── Completion calculation (unchanged logic) ──────────────
  const calculateCompletion = (resume) => {
    let completedFields = 0, totalFields = 0
    totalFields += 3
    if (resume.profileInfo?.fullName) completedFields++
    if (resume.profileInfo?.designation) completedFields++
    if (resume.profileInfo?.summary) completedFields++
    totalFields += 2
    if (resume.contactInfo?.email) completedFields++
    if (resume.contactInfo?.phone) completedFields++
    resume.workExperience?.forEach(exp => {
      totalFields += 5
      if (exp.company) completedFields++
      if (exp.role) completedFields++
      if (exp.startDate) completedFields++
      if (exp.endDate) completedFields++
      if (exp.description) completedFields++
    })
    resume.education?.forEach(edu => {
      totalFields += 4
      if (edu.degree) completedFields++
      if (edu.institution) completedFields++
      if (edu.startDate) completedFields++
      if (edu.endDate) completedFields++
    })
    resume.skills?.forEach(skill => {
      totalFields += 2
      if (skill.name) completedFields++
      if (skill.progress > 0) completedFields++
    })
    resume.projects?.forEach(project => {
      totalFields += 4
      if (project.title) completedFields++
      if (project.description) completedFields++
      if (project.github) completedFields++
      if (project.liveDemo) completedFields++
    })
    resume.certifications?.forEach(cert => {
      totalFields += 3
      if (cert.title) completedFields++
      if (cert.issuer) completedFields++
      if (cert.year) completedFields++
    })
    resume.languages?.forEach(lang => {
      totalFields += 2
      if (lang.name) completedFields++
      if (lang.progress > 0) completedFields++
    })
    totalFields += (resume.interests?.length || 0)
    completedFields += (resume.interests?.filter(i => i?.trim() !== '')?.length || 0)
    return Math.round((completedFields / totalFields) * 100)
  }

  const fetchAllResumes = async () => {
    try {
      setLoading(true)
      const response = await axiosInstance.get(API_PATHS.RESUME.GET_ALL)
      const resumeWithCompletion = response.data.map(resume => ({
        ...resume,
        completion: calculateCompletion(resume),
      }))
      setAllResumes(resumeWithCompletion)
    } catch (error) {
      console.error('Error fetching resumes', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { fetchAllResumes() }, [])

  const handleDeleteResume = async () => {
    if (!resumeToDelete) return
    try {
      await axiosInstance.delete(API_PATHS.RESUME.DELETE(resumeToDelete))
      toast.success('Resume deleted successfully')
      fetchAllResumes()
    } catch (error) {
      console.error('Error deleting resume:', error)
      toast.error('Failed to delete resume')
    } finally {
      setResumeToDelete(null)
      setShowDeleteConfirm(false)
    }
  }

  const handleDeleteClick = (id) => {
    setResumeToDelete(id)
    setShowDeleteConfirm(true)
  }

  // Derived stats
  const avgCompletion = allResumes.length
    ? Math.round(allResumes.reduce((s, r) => s + r.completion, 0) / allResumes.length)
    : 0
  const recentCount = allResumes.filter(r => moment().diff(moment(r.createdAt), 'days') < 7).length

  // Filtered list
  const filtered = allResumes.filter(r =>
    r.title?.toLowerCase().includes(searchQuery.toLowerCase())
  )

  // Greeting
  const hour = new Date().getHours()
  const greeting = hour < 12 ? 'Good morning' : hour < 17 ? 'Good afternoon' : 'Good evening'
  const firstName = user?.name?.split(' ')[0] || 'there'

  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* ══════════════ WELCOME HEADER ══════════════════════ */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <p className="text-sm text-slate-400 font-medium mb-1">{greeting} 👋</p>
            <h1 className="text-2xl sm:text-3xl font-black text-[#0D1B4B] tracking-tight">
              My Resumes
            </h1>
            <p className="text-slate-400 text-sm mt-1">
              {allResumes.length > 0
                ? `You have ${allResumes.length} resume${allResumes.length !== 1 ? 's' : ''}`
                : 'Start building your professional resume'}
            </p>
          </div>

          <button
            onClick={() => setOpenCreateModal(true)}
            className="flex items-center gap-2 px-6 py-3 bg-[#3B5BDB] text-white font-bold rounded-xl
              hover:bg-[#2F4AC0] hover:shadow-xl hover:shadow-blue-200/60 transition-all text-sm active:scale-95 self-start sm:self-auto"
          >
            <FilePlus size={17} />
            Create now
          </button>
        </div>

        {/* ══════════════ STATS ROW ═══════════════════════════ */}
        {!loading && allResumes.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
            {[
              {
                icon: <FileText size={18} className="text-[#3B5BDB]" />,
                iconBg: 'bg-blue-50',
                label: 'Total Resumes',
                value: allResumes.length,
              },
              {
                icon: <BarChart3 size={18} className="text-emerald-600" />,
                iconBg: 'bg-emerald-50',
                label: 'Avg. Completion',
                value: `${avgCompletion}%`,
              },
              {
                icon: <Sparkles size={18} className="text-amber-500" />,
                iconBg: 'bg-amber-50',
                label: 'Created This Week',
                value: recentCount,
                className: 'col-span-2 sm:col-span-1',
              },
            ].map((stat, i) => (
              <div
                key={i}
                className={`bg-white border border-slate-100 rounded-2xl p-4 sm:p-5 shadow-sm flex items-center gap-4 ${stat.className || ''}`}
              >
                <div className={`w-10 h-10 ${stat.iconBg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  {stat.icon}
                </div>
                <div>
                  <div className="text-2xl font-black text-[#0D1B4B]">{stat.value}</div>
                  <div className="text-xs text-slate-400 font-medium mt-0.5">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ══════════════ SEARCH BAR (when resumes exist) ═════ */}
        {!loading && allResumes.length > 0 && (
          <div className="relative mb-6 max-w-sm">
            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search resumes…"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 text-sm bg-white border border-slate-200 rounded-xl outline-none
                focus:border-[#3B5BDB] focus:ring-2 focus:ring-blue-100 transition-all placeholder:text-slate-400 text-[#0D1B4B]"
            />
          </div>
        )}

        {/* ══════════════ LOADING ═════════════════════════════ */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-24 gap-4">
            <div className="w-10 h-10 border-2 border-[#3B5BDB] border-t-transparent rounded-full animate-spin" />
            <p className="text-slate-400 text-sm font-medium">Loading your resumes…</p>
          </div>
        )}

        {/* ══════════════ EMPTY STATE ═════════════════════════ */}
        {!loading && allResumes.length === 0 && (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            {/* Decorative bg blob */}
            <div className="relative mb-6">
              <div className="w-20 h-20 bg-blue-50 rounded-3xl flex items-center justify-center shadow-sm border border-blue-100">
                <FileText size={32} className="text-[#3B5BDB]" />
              </div>
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-[#3B5BDB] rounded-full flex items-center justify-center shadow-md">
                <Plus size={12} className="text-white" />
              </div>
            </div>

            <h3 className="text-xl font-black text-[#0D1B4B] mb-2">No Resumes Yet</h3>
            <p className="text-slate-400 max-w-xs mb-7 text-sm leading-relaxed">
              You haven't created any resumes yet. Build your first one and start landing interviews.
            </p>

            <button
              onClick={() => setOpenCreateModal(true)}
              className="flex items-center gap-2 px-7 py-3 bg-[#3B5BDB] text-white font-bold rounded-xl
                hover:bg-[#2F4AC0] hover:shadow-xl hover:shadow-blue-200/60 transition-all text-sm"
            >
              <FilePlus size={17} />
              Create Your First Resume
            </button>

            {/* Mini tip */}
            <div className="mt-8 flex items-center gap-2 px-4 py-2.5 bg-blue-50 border border-blue-100 rounded-xl text-sm text-[#3B5BDB] font-medium">
              <Sparkles size={14} />
              Takes less than 5 minutes to build
            </div>
          </div>
        )}

        {/* ══════════════ RESUME GRID ══════════════════════════ */}
        {!loading && allResumes.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">

            {/* ── Create New Card ── */}
            <button
              onClick={() => setOpenCreateModal(true)}
              className="group flex flex-col items-center justify-center min-h-[300px] bg-white border-2 border-dashed
                border-blue-200 rounded-2xl p-8 cursor-pointer transition-all
                hover:border-[#3B5BDB] hover:bg-blue-50/40 hover:shadow-lg hover:shadow-blue-100/60
                focus:outline-none focus:ring-2 focus:ring-[#3B5BDB] focus:ring-offset-2"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-[#3B5BDB] to-[#5C7CFA] rounded-2xl flex items-center justify-center
                mb-4 shadow-md shadow-blue-200 group-hover:scale-110 transition-transform duration-300">
                <Plus size={24} className="text-white" />
              </div>
              <span className="text-base font-black text-[#0D1B4B] mb-1 group-hover:text-[#3B5BDB] transition-colors">
                Create New Resume
              </span>
              <span className="text-xs text-slate-400 font-medium">Start building your career</span>
            </button>

            {/* ── Resume Cards ── */}
            {filtered.map((resume) => (
              <ResumeSummaryCard
                key={resume._id}
                image={resume.thumbnailLink}
                title={resume.title}
                createdAt={resume.createdAt}
                updatedAt={resume.updatedAt}
                onSelect={() => navigate(`/resume/${resume._id}`)}
                onDelete={() => handleDeleteClick(resume._id)}
                completion={resume.completion || 0}
                isPremium={resume.isPremium}
                isNew={moment().diff(moment(resume.createdAt), 'days') < 7}
              />
            ))}
          </div>
        )}

        {/* No search results */}
        {!loading && allResumes.length > 0 && filtered.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-400 text-sm">No resumes match "<span className="font-semibold text-slate-600">{searchQuery}</span>"</p>
            <button onClick={() => setSearchQuery('')} className="mt-2 text-[#3B5BDB] text-sm font-semibold hover:underline">Clear search</button>
          </div>
        )}
      </div>

      {/* ══════════════ CREATE MODAL ════════════════════════════ */}
      <Modal
        isOpen={openCreateModal}
        onClose={() => setOpenCreateModal(false)}
        hideHeader
        maxWidth="max-w-md"
      >
        <div className="p-7">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-gradient-to-br from-[#3B5BDB] to-[#5C7CFA] rounded-xl flex items-center justify-center shadow-md">
                <FilePlus size={17} className="text-white" />
              </div>
              <h3 className="text-lg font-black text-[#0D1B4B]">New Resume</h3>
            </div>
          </div>
          <CreateResumeForm onSuccess={() => {
            setOpenCreateModal(false)
            fetchAllResumes()
          }} />
        </div>
      </Modal>

      {/* ══════════════ DELETE CONFIRM MODAL ═══════════════════ */}
      <Modal
        isOpen={showDeleteConfirm}
        onClose={() => setShowDeleteConfirm(false)}
        title="Confirm Deletion"
        showActionBtn
        actionBtnText="Delete"
        actionBtnClassname="bg-red-600 hover:bg-red-700"
        onActionClick={handleDeleteResume}
      >
        <div className="p-6">
          <div className="flex flex-col items-center text-center">
            <div className="w-14 h-14 bg-red-50 border border-red-100 rounded-2xl flex items-center justify-center mb-4">
              <LucideTrash2 size={22} className="text-red-500" />
            </div>
            <h3 className="text-lg font-black text-[#0D1B4B] mb-2">Delete Resume?</h3>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Are you sure you want to delete this resume? This action cannot be undone.
            </p>
          </div>
        </div>
      </Modal>
    </DashboardLayout>
  )
}

export default Dashboard
