import { React, useContext, useState } from 'react'
import {
    ArrowRight, Bot, Check, CheckCircle2, ChevronRight,
    ClipboardList, Download, Eye, FileText, FolderOpen,
    LayoutTemplate, Mail, Menu, Palette,
    Shield, Sparkles, Star, X, Zap
} from 'lucide-react';
import { landingPageStyles } from '../assets/dummyStyle'
import { UserContext } from '../context/userContext';
import { useNavigate } from 'react-router-dom';
import ProfileInfoCard from '../components/Cards';
import Modal from '../components/Modal';
import Login from '../components/Login';
import SignUp from '../components/SignUp';
import { resumeTemplates } from '../utils/data';
import Resume1 from '../assets/Resume1.png';
import Resume2 from '../assets/Resume2.png';
import Resume3 from '../assets/Resume3.png';

// ── Score Ring ────────────────────────────────────────────────
const ScoreRing = ({ score = 96 }) => {
    const radius = 38;
    const circumference = 2 * Math.PI * radius;
    const filled = (score / 100) * circumference;
    return (
        <div className="bg-white rounded-2xl shadow-lg shadow-blue-100/60 border border-slate-100 px-4 py-3 flex flex-col items-center">
            <div className="relative w-20 h-20">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r={radius} stroke="#EEF2FF" strokeWidth="9" fill="none" />
                    <circle cx="50" cy="50" r={radius} stroke="url(#scoreGrad)" strokeWidth="9" fill="none"
                        strokeLinecap="round"
                        strokeDasharray={`${filled} ${circumference}`}
                    />
                    <defs>
                        <linearGradient id="scoreGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#3B5BDB" />
                            <stop offset="100%" stopColor="#5C7CFA" />
                        </linearGradient>
                    </defs>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-xl font-black text-[#0D1B4B] leading-none">{score}%</span>
                </div>
            </div>
            <div className="text-[11px] font-bold text-emerald-600 mt-1.5 flex items-center gap-1">
                <Check size={10} />Excellent
            </div>
        </div>
    );
};

// ── Floating Hero Preview ────────────────────────────────────
const HeroResumePreview = () => (
    <div className="relative h-[420px] sm:h-[460px] lg:h-[500px] select-none">
        {/* Main resume card */}
        <div className="absolute left-0 top-6 w-[68%] sm:w-[64%] bg-white rounded-2xl shadow-2xl shadow-blue-200/40 border border-slate-100 p-5 animate-float z-20" style={{ animationDuration: '5s' }}>
            <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 flex-shrink-0" />
                <div className="flex-1">
                    <div className="h-2.5 bg-slate-800 rounded-full w-28 mb-1.5" />
                    <div className="h-1.5 bg-slate-300 rounded-full w-20" />
                </div>
                <div className="text-[9px] font-semibold text-[#3B5BDB] bg-blue-50 px-2 py-1 rounded-lg whitespace-nowrap hidden sm:block">UI/UX Designer</div>
            </div>
            <div className="flex items-center gap-1.5 mb-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#3B5BDB]" />
                <div className="h-1 bg-slate-200 rounded-full w-28" />
                <div className="h-1 bg-slate-200 rounded-full w-16 ml-1" />
            </div>
            <div className="mb-3">
                <div className="h-1.5 bg-slate-700 rounded-full w-20 mb-2" />
                <div className="space-y-1.5">
                    <div className="h-1 bg-slate-200 rounded-full w-full" />
                    <div className="h-1 bg-slate-200 rounded-full w-5/6" />
                    <div className="h-1 bg-slate-200 rounded-full w-4/5" />
                </div>
            </div>
            <div>
                <div className="h-1.5 bg-slate-700 rounded-full w-16 mb-2" />
                <div className="pl-2 border-l-2 border-[#3B5BDB]">
                    <div className="h-1.5 bg-slate-600 rounded-full w-36 mb-1.5" />
                    <div className="h-1 bg-[#3B5BDB]/25 rounded-full w-20 mb-1.5" />
                    <div className="space-y-1">
                        <div className="h-1 bg-slate-200 rounded-full w-full" />
                        <div className="h-1 bg-slate-200 rounded-full w-5/6" />
                    </div>
                </div>
            </div>
        </div>

        {/* Back card */}
        <div className="absolute right-0 top-16 w-[52%] sm:w-[46%] animate-float-delayed z-10 bg-white rounded-2xl shadow-xl shadow-blue-100/50 border border-slate-100 p-4" style={{ animationDuration: '7s' }}>
            <div className="flex items-center gap-2 mb-3">
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-indigo-300 to-blue-400 flex-shrink-0" />
                <div>
                    <div className="h-1.5 bg-slate-700 rounded-full w-16 mb-1" />
                    <div className="h-1 bg-slate-200 rounded-full w-12" />
                </div>
            </div>
            <div className="space-y-1.5 mb-2.5">
                <div className="h-1 bg-slate-200 rounded-full w-full" />
                <div className="h-1 bg-slate-200 rounded-full w-4/5" />
                <div className="h-1 bg-slate-200 rounded-full w-5/6" />
            </div>
            <div className="flex gap-1.5 flex-wrap">
                {['React', 'Node.js', 'AWS'].map(s => (
                    <span key={s} className="text-[8px] font-semibold px-1.5 py-0.5 bg-blue-50 text-[#3B5BDB] rounded-lg">{s}</span>
                ))}
            </div>
        </div>

        {/* Score ring */}
        <div className="absolute bottom-20 left-0 z-30 animate-float" style={{ animationDuration: '6s', animationDelay: '1s' }}>
            <ScoreRing score={96} />
        </div>

        {/* Feature badges */}
        <div className="absolute bottom-4 right-0 z-30 space-y-2 animate-float" style={{ animationDuration: '4s', animationDelay: '0.5s' }}>
            {['Smart Optimization', 'Keyword Match'].map((text, i) => (
                <div key={i} className={`flex items-center gap-2 px-3 py-2 rounded-xl border text-xs font-semibold ${i === 0 ? 'bg-emerald-50 border-emerald-100 text-emerald-700' : 'bg-blue-50 border-blue-100 text-[#3B5BDB]'}`}>
                    <Check size={11} className="flex-shrink-0" />{text}
                </div>
            ))}
        </div>
    </div>
);

// ─────────────────────────────────────────────────────────────
const LandingPage = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const { user } = useContext(UserContext)
    const navigate = useNavigate()
    const [openAuthModal, setOpenAuthModal] = useState(false)
    const [currentPage, setCurrentPage] = useState("login")
    const [emailInput, setEmailInput] = useState('')

    const handleCTA = () => {
        if (!user) { setOpenAuthModal(true) }
        else { navigate('/dashboard') }
    }

    // Pricing plan config
    const plans = [
        {
            name: 'Free', price: '$0', period: '/mo', highlight: false,
            cta: 'Get Started', ctaAction: handleCTA,
            features: ['1 Professional Resume', 'Access to Basic Templates', 'PDF Download'],
        },
        {
            name: 'Pro', price: '$12', period: '/mo', highlight: true, badge: 'RECOMMENDED',
            cta: 'Start Pro Trial', ctaAction: handleCTA,
            features: ['Unlimited Resumes', 'AI/AI Suggestions', 'Multi-format Exports', 'Custom Branding'],
        },
        {
            name: 'Enterprise', price: '$29', period: '/mo', highlight: false,
            cta: 'Contact Sales', ctaAction: handleCTA,
            features: ['All Pro Features', 'Personal Career Coach', 'LinkedIn Profile Review'],
        },
    ];

    // Template showcase data
    const showcaseTemplates = [
        { img: Resume1, name: 'The Architect', tag: 'Modern & Tech-focused' },
        { img: Resume2, name: 'Executive',     tag: 'Traditional & Flexible' },
        { img: Resume3, name: 'Creative Bold', tag: 'Artistic & High-impact' },
        { img: Resume1, name: 'Standard ATS',  tag: 'Optimized & Clean' },
    ];

    return (
        <div className="min-h-screen bg-white">

            {/* ═══════════════════ NAVBAR ═══════════════════ */}
            <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-xl border-b border-slate-200/80 shadow-sm">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex justify-between items-center">
                    {/* Logo */}
                    <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 bg-gradient-to-br from-[#3B5BDB] to-[#5C7CFA] rounded-lg flex items-center justify-center shadow-sm">
                            <LayoutTemplate size={16} className="text-white" />
                        </div>
                        <span className="text-lg font-black text-[#0D1B4B] tracking-tight">CraftCV</span>
                    </div>

                    {/* Desktop nav */}
                    <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-slate-500">
                        <button onClick={handleCTA} className="hover:text-[#3B5BDB] transition-colors">Features</button>
                        <button onClick={handleCTA} className="hover:text-[#3B5BDB] transition-colors">Templates</button>
                        <button onClick={handleCTA} className="hover:text-[#3B5BDB] transition-colors">Pricing</button>
                    </nav>

                    {/* Auth */}
                    <div className="hidden md:flex items-center gap-3">
                        {user ? <ProfileInfoCard /> : (
                            <>
                                <button onClick={() => setOpenAuthModal(true)} className="text-sm font-semibold text-slate-500 hover:text-[#3B5BDB] transition-colors">Sign In</button>
                                <button onClick={() => setOpenAuthModal(true)} className="px-4 py-2 bg-[#0D1B4B] text-white text-sm font-bold rounded-xl hover:bg-[#3B5BDB] transition-all">
                                    Sign Up
                                </button>
                            </>
                        )}
                    </div>

                    {/* Mobile toggle */}
                    <button className="md:hidden p-2 rounded-xl hover:bg-slate-100 transition-colors" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                        {mobileMenuOpen ? <X size={20} className="text-slate-600" /> : <Menu size={20} className="text-slate-600" />}
                    </button>
                </div>

                {/* Mobile menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden bg-white border-t border-slate-100 px-4 py-4 flex flex-col gap-3">
                        <button className="text-sm font-semibold text-slate-600 text-left py-2" onClick={handleCTA}>Features</button>
                        <button className="text-sm font-semibold text-slate-600 text-left py-2" onClick={handleCTA}>Templates</button>
                        <button className="text-sm font-semibold text-slate-600 text-left py-2" onClick={handleCTA}>Pricing</button>
                        {user
                            ? <button className="w-full py-2.5 bg-[#3B5BDB] text-white font-bold rounded-xl text-sm" onClick={() => { navigate('/dashboard'); setMobileMenuOpen(false); }}>Dashboard</button>
                            : <button className="w-full py-2.5 bg-[#0D1B4B] text-white font-bold rounded-xl text-sm" onClick={() => { setMobileMenuOpen(false); setOpenAuthModal(true); }}>Get Started</button>
                        }
                    </div>
                )}
            </header>

            {/* ═══════════════════ HERO ═════════════════════ */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 sm:pt-32 sm:pb-20">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                    {/* Left copy */}
                    <div className="flex-1 space-y-6 text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 border border-blue-100 text-[#3B5BDB] rounded-full text-xs font-bold">
                            <Sparkles size={12} />Professional Resume Builder
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-[58px] font-black leading-[1.08] text-[#0D1B4B] tracking-tight">
                            Craft Resumes<br />
                            That <span className="text-[#3B5BDB]">Land Offers</span>
                        </h1>

                        <p className="text-base sm:text-lg text-slate-500 leading-relaxed max-w-lg mx-auto lg:mx-0">
                            Create job-winning resumes with expertly designed templates.
                            ATS-friendly, recruiter-approved, and tailored to your career goals.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                            <button onClick={handleCTA} className="flex items-center justify-center gap-2 px-7 py-3 bg-[#3B5BDB] text-white font-bold rounded-xl hover:bg-[#2F4AC0] hover:shadow-xl hover:shadow-blue-200/60 transition-all text-sm">
                                Start Building Free <ArrowRight size={16} />
                            </button>
                            <button onClick={handleCTA} className="px-7 py-3 bg-white border-2 border-slate-200 text-[#0D1B4B] font-bold rounded-xl hover:border-blue-200 hover:bg-blue-50 transition-all text-sm">
                                View Templates
                            </button>
                        </div>

                        {/* Stats */}
                        <div className="flex flex-wrap justify-center lg:justify-start gap-8 pt-2">
                            {[
                                { value: '50K+', label: 'Resumes Created', colors: 'from-[#3B5BDB] to-[#5C7CFA]' },
                                { value: '4.9★', label: 'User Rating',     colors: 'from-amber-500 to-orange-500' },
                                { value: '5 Min', label: 'Build Time',      colors: 'from-emerald-500 to-teal-500' },
                            ].map((s, i) => (
                                <div key={i} className="text-center">
                                    <div className={`text-2xl sm:text-3xl font-black bg-gradient-to-r ${s.colors} bg-clip-text text-transparent`}>{s.value}</div>
                                    <div className="text-xs text-slate-400 font-medium mt-0.5">{s.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right illustration */}
                    <div className="flex-1 w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto lg:mx-0 relative">
                        <div className="absolute -inset-10 bg-gradient-to-br from-blue-50/60 to-indigo-50/60 rounded-3xl blur-3xl pointer-events-none" />
                        <div className="relative">
                            <HeroResumePreview />
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════ FEATURES ════════════════ */}
            <section className="bg-slate-50/80 border-y border-slate-100 py-16 sm:py-24">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 sm:mb-16">
                        <h2 className="text-3xl sm:text-4xl font-black text-[#0D1B4B] mb-3 tracking-tight">
                            Powerful Features for Success
                        </h2>
                        <p className="text-slate-500 max-w-xl mx-auto">
                            Our toolkit is built to give you every advantage in the competitive job market.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                        {[
                            {
                                icon: <ClipboardList size={22} className="text-[#3B5BDB]" />,
                                iconBg: 'bg-blue-50',
                                title: 'Step-by-Step Builder',
                                desc: 'Fill in your resume through a guided 8-step process — Profile, Contact, Experience, Education, Skills, Projects, Certifications, and more.',
                            },
                            {
                                icon: <Eye size={22} className="text-indigo-600" />,
                                iconBg: 'bg-indigo-50',
                                title: 'Live Preview',
                                desc: 'Watch your resume take shape in real-time as you enter your details. No guesswork — what you see is exactly what you get.',
                            },
                            {
                                icon: <LayoutTemplate size={22} className="text-violet-600" />,
                                iconBg: 'bg-violet-50',
                                title: 'Multiple Templates',
                                desc: 'Choose from a variety of professionally designed resume templates, each tailored for different industries and career stages.',
                            },
                            {
                                icon: <Download size={22} className="text-emerald-600" />,
                                iconBg: 'bg-emerald-50',
                                title: 'Instant PDF Export',
                                desc: 'Download your finished resume as a pixel-perfect PDF instantly. Print-ready and properly formatted every single time.',
                            },
                            {
                                icon: <Shield size={22} className="text-sky-600" />,
                                iconBg: 'bg-sky-50',
                                title: 'ATS-Friendly Design',
                                desc: 'All templates are built with clean layouts and standard formatting to pass Applicant Tracking Systems used by top recruiters.',
                            },
                            {
                                icon: <FolderOpen size={22} className="text-amber-600" />,
                                iconBg: 'bg-amber-50',
                                title: 'Resume Management',
                                desc: 'Create and manage multiple resumes from a single dashboard. Track completion progress for each one and switch between them easily.',
                            },
                        ].map((f, i) => (
                            <div key={i} className="group bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:shadow-blue-50/80 hover:-translate-y-1 transition-all duration-300">
                                <div className={`w-11 h-11 ${f.iconBg} rounded-xl flex items-center justify-center mb-4`}>
                                    {f.icon}
                                </div>
                                <h3 className="text-base font-black text-[#0D1B4B] mb-2">{f.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════ TEMPLATES ═══════════════ */}
            <section className="py-16 sm:py-24">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header row */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-10">
                        <div>
                            <h2 className="text-3xl sm:text-4xl font-black text-[#0D1B4B] mb-2 tracking-tight">
                                Professional Templates
                            </h2>
                            <p className="text-slate-500 text-sm max-w-md">
                                Designed for every career stage, from executive leadership to first-time entry roles.
                            </p>
                        </div>
                        <button onClick={handleCTA} className="flex items-center gap-1.5 text-[#3B5BDB] font-bold text-sm hover:gap-2.5 transition-all whitespace-nowrap">
                            Explore All Templates <ChevronRight size={16} />
                        </button>
                    </div>

                    {/* Template grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                        {showcaseTemplates.map((t, i) => (
                            <div
                                key={i}
                                onClick={handleCTA}
                                className="group cursor-pointer bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-blue-100/60 hover:-translate-y-1 transition-all duration-300"
                            >
                                {/* Template image */}
                                <div className="relative h-[220px] sm:h-[260px] overflow-hidden bg-slate-50">
                                    <img
                                        src={t.img}
                                        alt={t.name}
                                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                                    />
                                    {/* Hover overlay */}
                                    <div className="absolute inset-0 bg-[#3B5BDB]/0 group-hover:bg-[#3B5BDB]/10 transition-all duration-300 flex items-center justify-center">
                                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-[#3B5BDB] font-bold text-xs px-3 py-1.5 rounded-lg shadow-lg">
                                            Use Template
                                        </div>
                                    </div>
                                </div>
                                {/* Template info */}
                                <div className="p-4">
                                    <h4 className="font-black text-[#0D1B4B] text-sm mb-0.5">{t.name}</h4>
                                    <p className="text-xs text-slate-400 font-medium">{t.tag}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════ PRICING ═════════════════ */}
            <section className="bg-slate-50/80 border-y border-slate-100 py-16 sm:py-24">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-black text-[#0D1B4B] mb-3 tracking-tight">
                            Choose Your Path
                        </h2>
                        <p className="text-slate-500">
                            Start for free or upgrade to accelerate your job search with premium AI tools.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 items-center">
                        {plans.map((plan, i) => (
                            <div
                                key={i}
                                className={`relative rounded-2xl border p-6 sm:p-7 transition-all ${
                                    plan.highlight
                                        ? 'bg-[#0D1B4B] border-[#0D1B4B] shadow-2xl shadow-navy/30 scale-[1.04]'
                                        : 'bg-white border-slate-200 shadow-sm hover:shadow-md'
                                }`}
                            >
                                {/* Recommended badge */}
                                {plan.badge && (
                                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#3B5BDB] text-white text-[10px] font-black px-3 py-1 rounded-full tracking-wide">
                                        {plan.badge}
                                    </div>
                                )}

                                <div className={`text-sm font-bold mb-4 ${plan.highlight ? 'text-blue-300' : 'text-slate-500'}`}>
                                    {plan.name}
                                </div>

                                <div className="flex items-end gap-1 mb-5">
                                    <span className={`text-4xl font-black ${plan.highlight ? 'text-white' : 'text-[#0D1B4B]'}`}>
                                        {plan.price}
                                    </span>
                                    <span className={`text-sm mb-1.5 ${plan.highlight ? 'text-blue-300' : 'text-slate-400'}`}>
                                        {plan.period}
                                    </span>
                                </div>

                                <ul className="space-y-2.5 mb-7">
                                    {plan.features.map((feat, fi) => (
                                        <li key={fi} className="flex items-center gap-2.5 text-sm">
                                            <CheckCircle2 size={15} className={plan.highlight ? 'text-emerald-400 flex-shrink-0' : 'text-emerald-500 flex-shrink-0'} />
                                            <span className={plan.highlight ? 'text-slate-200' : 'text-slate-600'}>{feat}</span>
                                        </li>
                                    ))}
                                </ul>

                                <button
                                    onClick={plan.ctaAction}
                                    className={`w-full py-3 text-sm font-bold rounded-xl transition-all ${
                                        plan.highlight
                                            ? 'bg-[#3B5BDB] text-white hover:bg-[#2F4AC0] hover:shadow-lg hover:shadow-blue-500/30'
                                            : 'bg-slate-100 text-[#0D1B4B] hover:bg-slate-200'
                                    }`}
                                >
                                    {plan.cta}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════ FOOTER ══════════════════ */}
            <footer className="bg-white border-t border-slate-100 pt-12 sm:pt-16 pb-8">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-10">

                        {/* Brand */}
                        <div className="lg:col-span-1">
                            <div className="flex items-center gap-2 mb-3">
                                <div className="w-7 h-7 bg-gradient-to-br from-[#3B5BDB] to-[#5C7CFA] rounded-lg flex items-center justify-center">
                                    <LayoutTemplate size={14} className="text-white" />
                                </div>
                                <span className="font-black text-[#0D1B4B]">CraftCV</span>
                            </div>
                            <p className="text-slate-400 text-sm leading-relaxed max-w-[220px]">
                                Professional career tool for the modern workforce. Helps you craft resumes that get you landing interviews.
                            </p>
                        </div>

                        {/* Product */}
                        <div>
                            <h5 className="font-black text-[#0D1B4B] text-sm mb-4">PRODUCT</h5>
                            <ul className="space-y-2.5">
                                {['Features', 'Templates', 'Pricing'].map(l => (
                                    <li key={l}>
                                        <button onClick={handleCTA} className="text-slate-400 text-sm hover:text-[#3B5BDB] transition-colors">{l}</button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Support */}
                        <div>
                            <h5 className="font-black text-[#0D1B4B] text-sm mb-4">SUPPORT</h5>
                            <ul className="space-y-2.5">
                                {['Support', 'Privacy Policy', 'Terms of Service'].map(l => (
                                    <li key={l}>
                                        <button className="text-slate-400 text-sm hover:text-[#3B5BDB] transition-colors">{l}</button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Stay Updated */}
                        <div>
                            <h5 className="font-black text-[#0D1B4B] text-sm mb-4">STAY UPDATED</h5>
                            <div className="flex items-center gap-0 border border-slate-200 rounded-xl overflow-hidden focus-within:border-[#3B5BDB] focus-within:ring-2 focus-within:ring-blue-100 transition-all">
                                <input
                                    type="email"
                                    placeholder="Email address"
                                    value={emailInput}
                                    onChange={e => setEmailInput(e.target.value)}
                                    className="flex-1 px-3 py-2.5 text-sm text-slate-700 bg-white outline-none placeholder:text-slate-400"
                                />
                                <button className="px-3 py-2.5 bg-[#3B5BDB] hover:bg-[#2F4AC0] transition-colors flex items-center">
                                    <ArrowRight size={16} className="text-white" />
                                </button>
                            </div>
                            <p className="text-slate-400 text-xs mt-2">No spam. Unsubscribe anytime.</p>
                        </div>
                    </div>

                    {/* Bottom bar */}
                    <div className="border-t border-slate-100 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
                        <p className="text-slate-400 text-xs">
                            © 2024 CraftCV. All rights reserved. Professional career tools for the modern workforce.
                        </p>
                        <p className="text-slate-400 text-xs">
                            Crafted with ❤️ by{' '}
                            <a href="" target="_blank" rel="noreferrer" className="text-[#3B5BDB] hover:underline">Divij Malhotra</a>
                        </p>
                    </div>
                </div>
            </footer>

            {/* ═══════════════════ AUTH MODAL ══════════════ */}
            <Modal
                isOpen={openAuthModal}
                onClose={() => { setOpenAuthModal(false); setCurrentPage("login"); }}
                hideHeader
            >
                <div>
                    {currentPage === "login"  && <Login  setCurrentPage={setCurrentPage} />}
                    {currentPage === "signup" && <SignUp setCurrentPage={setCurrentPage} />}
                </div>
            </Modal>
        </div>
    )
}

export default LandingPage
