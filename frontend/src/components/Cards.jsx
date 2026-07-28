import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../context/userContext"
import { cardStyles } from "../assets/dummyStyle"
import { Award, Check, Clock, Edit2, MoreVertical, Trash2, TrendingUp, Zap } from "lucide-react"

// ── PROFILE INFO CARD ─────────────────────────────────────────
const ProfileInfoCard = () => {
    const navigate = useNavigate()
    const { user, clearUser } = useContext(UserContext)

    const handleLogout = () => {
        localStorage.removeItem('token')
        clearUser()
        navigate('/')
    }

    return (
        user && (
            <div className="flex items-center gap-3">
                {/* Avatar */}
                <div className="w-9 h-9 bg-gradient-to-br from-[#3B5BDB] to-[#5C7CFA] rounded-xl flex items-center justify-center shadow-sm flex-shrink-0">
                    <span className="text-sm font-black text-white">
                        {user.name ? user.name.charAt(0).toUpperCase() : ""}
                    </span>
                </div>

                {/* Name + logout */}
                <div className="flex flex-col">
                    <span className="text-sm font-bold text-[#0D1B4B] leading-tight">
                        {user.name || ""}
                    </span>
                    <button
                        onClick={handleLogout}
                        className="text-[11px] font-semibold text-slate-400 hover:text-red-500 transition-colors text-left leading-tight mt-0.5"
                    >
                        Logout
                    </button>
                </div>
            </div>
        )
    )
}

// ── RESUME SUMMARY CARD ───────────────────────────────────────
export const ResumeSummaryCard = ({
    title = "Untitled Resume",
    createdAt = null,
    updatedAt = null,
    onSelect,
    onDelete,
    completion = 85,
    isNew = false,
}) => {
    const [menuOpen, setMenuOpen] = useState(false)

    // Format dates
    const formattedCreatedDate = createdAt
        ? new Date(createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
        : "—"

    // Completion color
    const getBarColor = () => {
        if (completion >= 90) return "from-emerald-500 to-teal-500"
        if (completion >= 70) return "from-amber-400 to-orange-500"
        if (completion >= 40) return "from-[#3B5BDB] to-[#5C7CFA]"
        return "from-red-400 to-rose-500"
    }

    const getCompletionLabel = () => {
        if (completion >= 90) return { text: "Ready!", color: "text-emerald-600 bg-emerald-50 border-emerald-100" }
        if (completion >= 70) return { text: "Almost there", color: "text-amber-600 bg-amber-50 border-amber-100" }
        if (completion >= 40) return { text: "In progress", color: "text-[#3B5BDB] bg-blue-50 border-blue-100" }
        return { text: "Getting started", color: "text-slate-500 bg-slate-50 border-slate-100" }
    }

    // Preview card accent color
    const accents = [
        { top: "from-[#3B5BDB] to-[#5C7CFA]", bg: "from-blue-50/80 to-indigo-50/80" },
        { top: "from-sky-500 to-blue-500",      bg: "from-sky-50/80 to-blue-50/80" },
        { top: "from-violet-500 to-indigo-500", bg: "from-violet-50/80 to-indigo-50/80" },
        { top: "from-cyan-500 to-sky-500",      bg: "from-cyan-50/80 to-sky-50/80" },
        { top: "from-indigo-500 to-blue-500",   bg: "from-indigo-50/80 to-blue-50/80" },
    ]
    const accent = accents[title.length % accents.length]
    const label = getCompletionLabel()

    const handleDeleteClick = (e) => {
        e.stopPropagation()
        setMenuOpen(false)
        if (onDelete) onDelete()
    }

    return (
        <div
            className="group relative flex flex-col bg-white border border-slate-100 rounded-2xl overflow-hidden
                cursor-pointer transition-all duration-300 hover:shadow-xl hover:shadow-blue-100/50
                hover:border-blue-200 hover:-translate-y-0.5"
            onClick={onSelect}
        >
            {/* ── NEW badge ── */}
            {isNew && (
                <div className="absolute top-3 left-3 z-20 px-2 py-0.5 bg-[#3B5BDB] text-white text-[9px] font-black rounded-full tracking-wide">
                    NEW
                </div>
            )}

            {/* ── 3-dot menu ── */}
            <div className="absolute top-3 right-3 z-20" onClick={e => e.stopPropagation()}>
                <button
                    className="w-7 h-7 flex items-center justify-center rounded-lg bg-white/80 backdrop-blur-sm
                        border border-slate-100 text-slate-400 hover:text-slate-700 hover:bg-white
                        opacity-0 group-hover:opacity-100 transition-all"
                    onClick={() => setMenuOpen(v => !v)}
                >
                    <MoreVertical size={14} />
                </button>
                {menuOpen && (
                    <div className="absolute top-8 right-0 w-36 bg-white border border-slate-100 rounded-xl shadow-lg shadow-blue-100/40 overflow-hidden z-30">
                        <button
                            className="w-full flex items-center gap-2.5 px-3 py-2.5 text-xs font-semibold text-[#0D1B4B] hover:bg-blue-50 transition-colors"
                            onClick={(e) => { e.stopPropagation(); setMenuOpen(false); if (onSelect) onSelect() }}
                        >
                            <Edit2 size={13} className="text-[#3B5BDB]" />Edit Resume
                        </button>
                        <button
                            className="w-full flex items-center gap-2.5 px-3 py-2.5 text-xs font-semibold text-red-500 hover:bg-red-50 transition-colors"
                            onClick={handleDeleteClick}
                        >
                            <Trash2 size={13} />Delete
                        </button>
                    </div>
                )}
            </div>

            {/* ── Preview area ── */}
            <div className={`relative h-[180px] bg-gradient-to-br ${accent.bg} flex items-center justify-center overflow-hidden`}>
                {/* Mini resume mockup */}
                <div className="w-[130px] bg-white rounded-xl shadow-lg border border-slate-100 p-3 transform group-hover:scale-[1.04] transition-transform duration-400">
                    {/* Colored top bar */}
                    <div className={`h-1.5 rounded-full bg-gradient-to-r ${accent.top} mb-2.5 w-full`} />
                    {/* Avatar + name row */}
                    <div className="flex items-center gap-2 mb-2">
                        <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${accent.top} flex-shrink-0`} />
                        <div className="space-y-1 flex-1">
                            <div className="h-1.5 bg-slate-700 rounded-full w-full" />
                            <div className="h-1 bg-slate-300 rounded-full w-3/4" />
                        </div>
                    </div>
                    {/* Lines */}
                    <div className="space-y-1.5 mb-2">
                        <div className="h-1 bg-slate-200 rounded-full w-full" />
                        <div className="h-1 bg-slate-200 rounded-full w-5/6" />
                        <div className="h-1 bg-slate-200 rounded-full w-4/5" />
                    </div>
                    {/* Section pills */}
                    <div className="flex gap-1 flex-wrap">
                        {['Profile', 'Work', 'Skills', 'Edu'].map((s, i) => (
                            <div key={i} className={`px-1.5 py-0.5 text-[8px] rounded font-semibold ${
                                i < Math.floor(completion / 25)
                                    ? 'bg-blue-100 text-[#3B5BDB]'
                                    : 'bg-slate-100 text-slate-400'
                            }`}>{s}</div>
                        ))}
                    </div>
                </div>

                {/* Completion % badge */}
                <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 bg-white/90 backdrop-blur-sm border border-slate-100 rounded-full shadow-sm">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${getBarColor()}`} />
                    <span className="text-[10px] font-black text-[#0D1B4B]">{completion}%</span>
                </div>
            </div>

            {/* ── Info area ── */}
            <div className="p-4 flex flex-col gap-3">
                {/* Title + date */}
                <div>
                    <h5 className="font-black text-[#0D1B4B] text-sm truncate mb-1 group-hover:text-[#3B5BDB] transition-colors">
                        {title}
                    </h5>
                    <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
                        <Clock size={10} className="flex-shrink-0" />
                        <span>Created {formattedCreatedDate}</span>
                    </div>
                </div>

                {/* Progress bar */}
                <div>
                    <div className="relative w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                        <div
                            className={`h-full bg-gradient-to-r ${getBarColor()} rounded-full transition-all duration-700 ease-out relative overflow-hidden`}
                            style={{ width: `${completion}%` }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
                        </div>
                    </div>
                    <div className="flex justify-between items-center mt-1.5">
                        <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${label.color}`}>
                            {label.text}
                        </span>
                        <span className="text-[11px] font-black text-[#0D1B4B]">{completion}%</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfoCard


// ── TEMPLATE CARD ─────────────────────────────────────────────
export const TemplateCard = ({ thumbnailImg, isSelected, onSelect }) => {
    return (
        <div
            className={`group h-auto md:h-[300px] lg:h-[320px] flex flex-col bg-white border-2 overflow-hidden cursor-pointer
                transition-all duration-300 hover:scale-[1.02] hover:shadow-xl rounded-2xl ${
                isSelected
                    ? 'border-[#3B5BDB] shadow-lg shadow-blue-200/50 bg-blue-50/30'
                    : 'border-slate-200 hover:border-blue-300 hover:shadow-blue-100/60'
            }`}
            onClick={onSelect}
        >
            {thumbnailImg ? (
                <div className="relative w-full h-full overflow-hidden">
                    <img
                        src={thumbnailImg || '/placeholder.svg'}
                        alt="Template Preview"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {isSelected && (
                        <div className="absolute inset-0 bg-[#3B5BDB]/10 flex items-center justify-center">
                            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                                <Check size={22} className="text-[#3B5BDB]" />
                            </div>
                        </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-100/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
            ) : (
                <div className="w-full h-[200px] flex items-center flex-col justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#3B5BDB] to-[#5C7CFA] rounded-2xl flex items-center justify-center mb-3 shadow-md">
                        <Edit2 size={20} className="text-white" />
                    </div>
                    <span className="text-[#0D1B4B] font-bold text-sm">No Preview</span>
                </div>
            )}
        </div>
    )
}
