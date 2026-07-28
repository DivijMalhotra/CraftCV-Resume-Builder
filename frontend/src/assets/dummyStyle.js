// ─────────────────────────────────────────────────────────────
//  CraftCV Design System  —  Sky-Blue / Navy SaaS Theme
// ─────────────────────────────────────────────────────────────

// ── Landing Page ─────────────────────────────────────────────
export const landingPageStyles = {
  // Main container
  container: "min-h-screen",

  // Header / Navbar
  header: "fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/70 shadow-sm shadow-blue-50",
  headerContainer: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center",
  logoContainer: "flex items-center gap-3",
  logoIcon: "w-9 h-9 bg-gradient-to-br from-[#3B5BDB] to-[#5C7CFA] rounded-xl flex items-center justify-center shadow-md shadow-blue-200",
  logoIconInner: "w-5 h-5 text-white",
  logoText: "text-xl sm:text-2xl font-black text-[#0D1B4B] tracking-tight",
  mobileMenuButton: "md:hidden p-2 rounded-xl hover:bg-blue-50 transition-colors",
  mobileMenuIcon: "text-[#3B5BDB]",

  // Desktop auth buttons
  desktopAuthButton: "relative group px-6 py-2.5 bg-[#3B5BDB] text-white text-sm font-semibold rounded-xl overflow-hidden transition-all hover:bg-[#2F4AC0] hover:shadow-lg hover:shadow-blue-200 active:scale-95",
  desktopAuthButtonText: "relative",
  desktopAuthButtonOverlay: "",

  // Mobile menu
  mobileMenu: "md:hidden bg-white/98 backdrop-blur-lg w-full fixed top-[65px] left-0 right-0 z-40 shadow-lg border-b border-slate-100",
  mobileMenuContainer: "max-w-6xl mx-auto px-4 sm:px-6 py-4 flex flex-col gap-4",
  mobileUserInfo: "flex flex-col gap-4 py-2",
  mobileUserWelcome: "text-[#3B5BDB] font-semibold text-center py-2 text-base",
  mobileDashboardButton: "w-full px-6 py-3 bg-[#3B5BDB] text-white font-semibold rounded-xl hover:bg-[#2F4AC0] hover:shadow-lg transition-all",
  mobileAuthButton: "w-full px-6 py-3 bg-[#3B5BDB] text-white font-semibold rounded-xl hover:bg-[#2F4AC0] transition-all",

  // Main & Hero
  main: "pt-1",
  heroSection: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 sm:pt-36 sm:pb-24",
  heroGrid: "flex flex-col lg:flex-row justify-between gap-12 lg:gap-16 items-center",
  heroLeft: "flex-1 space-y-6 text-center lg:text-left",

  // Tagline pill
  tagline: "inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 border border-blue-100 text-[#3B5BDB] rounded-full font-semibold text-xs sm:text-sm tracking-wide",

  // Heading
  heading: "text-4xl sm:text-5xl lg:text-[62px] font-black leading-[1.1] text-[#0D1B4B] tracking-tight",
  headingText: "block",
  headingGradient: "block text-[#3B5BDB]",

  // Description & CTAs
  description: "text-base sm:text-lg text-slate-500 leading-relaxed max-w-lg mx-auto lg:mx-0 font-medium",
  ctaButtons: "flex flex-col sm:flex-row gap-3 justify-center lg:justify-start",

  // Primary CTA
  primaryButton: "group relative px-8 py-3.5 bg-[#3B5BDB] text-white font-bold rounded-xl overflow-hidden transition-all hover:bg-[#2F4AC0] hover:shadow-xl hover:shadow-blue-200/70 active:scale-95",
  primaryButtonOverlay: "",
  primaryButtonContent: "relative flex items-center gap-2",
  primaryButtonIcon: "group-hover:translate-x-1 transition-transform",
  secondaryButton: "px-8 py-3.5 bg-white border-2 border-slate-200 text-[#0D1B4B] font-bold rounded-xl hover:border-blue-300 hover:bg-blue-50 transition-all active:scale-95",

  // Stats
  statsContainer: "flex flex-wrap justify-center lg:justify-start items-center gap-8 pt-4",
  statItem: "text-center",
  statNumber: "text-2xl sm:text-3xl font-black bg-gradient-to-r bg-clip-text text-transparent",
  statLabel: "text-xs sm:text-sm text-slate-400 font-medium mt-0.5",

  // Hero illustration side
  heroIllustration: "flex-1 relative w-full max-w-sm sm:max-w-md lg:max-w-xl mx-auto lg:mx-0",
  heroIllustrationBg: "absolute -inset-12 bg-gradient-to-br from-blue-100/40 to-indigo-100/40 rounded-3xl blur-3xl pointer-events-none",
  heroIllustrationContainer: "relative",

  // SVG (legacy — kept for structure; primary hero is the card stack)
  svgContainer: "w-full h-auto max-w-md mx-auto",
  svgRect: "fill-white stroke-[#e2e8f0] stroke-[2]",
  svgCircle: "fill-[#3B5BDB]",
  svgRectPrimary: "fill-[#3B5BDB]",
  svgRectSecondary: "fill-[#5C7CFA]",
  svgRectLight: "fill-[#E2E8F0]",
  svgRectSkill: "fill-[#C5D8FF]",
  svgAnimatedCircle: "fill-[#F59E0B] opacity-80",
  svgAnimatedRect: "fill-[#10B981] opacity-80",
  svgAnimatedPolygon: "fill-[#EF4444] opacity-80",

  // Features section
  featuresSection: "bg-white/50 backdrop-blur-sm py-16 sm:py-24 border-t border-slate-100",
  featuresContainer: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",
  featuresHeader: "text-center mb-12 sm:mb-20",
  featuresTitle: "text-3xl sm:text-4xl lg:text-5xl font-black text-[#0D1B4B] mb-4",
  featuresTitleGradient: "text-[#3B5BDB]",
  featuresDescription: "text-base sm:text-lg text-slate-500 max-w-2xl mx-auto font-medium",
  featuresGrid: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8",

  // Feature cards
  featureCard: "group relative",
  featureCardHover: "absolute -inset-1 bg-gradient-to-r from-blue-100 to-indigo-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl rounded-2xl",
  featureCardContent: "relative bg-white border border-slate-100 p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-lg hover:shadow-blue-100/60 transition-all duration-300 group-hover:-translate-y-1",
  featureIconContainer: "w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br rounded-2xl flex items-center justify-center mb-5 text-white shadow-md",
  featureIcon: "w-7 h-7 sm:w-8 sm:h-8",
  featureTitle: "text-xl sm:text-2xl font-black text-[#0D1B4B] mb-2 sm:mb-3",
  featureDescription: "text-sm sm:text-base text-slate-500 leading-relaxed",

  // Feature gradients — blue palette
  featureCardViolet: "from-white to-white",
  featureCardFuchsia: "from-white to-white",
  featureCardOrange: "from-white to-white",
  featureIconViolet: "from-[#3B5BDB] to-[#5C7CFA]",
  featureIconFuchsia: "from-[#0EA5E9] to-[#38BDF8]",
  featureIconOrange: "from-[#059669] to-[#34D399]",

  // CTA section
  ctaSection: "py-16 sm:py-24",
  ctaContainer: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center",
  ctaCard: "relative",
  ctaCardBg: "absolute -inset-6 sm:-inset-8 bg-gradient-to-br from-blue-100/60 to-indigo-100/60 rounded-3xl blur-3xl",
  ctaCardContent: "relative bg-white border border-slate-100 rounded-3xl p-8 sm:p-16 shadow-xl shadow-blue-100/40",
  ctaTitle: "text-3xl sm:text-4xl lg:text-5xl font-black text-[#0D1B4B] mb-4 sm:mb-6 leading-tight",
  ctaTitleGradient: "text-[#3B5BDB]",
  ctaDescription: "text-base sm:text-lg text-slate-500 mb-8 sm:mb-10 max-w-2xl mx-auto",
  ctaButton: "group inline-flex items-center gap-2 px-10 py-4 bg-[#3B5BDB] text-white font-black text-base rounded-xl overflow-hidden transition-all hover:bg-[#2F4AC0] hover:shadow-2xl hover:shadow-blue-200 active:scale-95",
  ctaButtonOverlay: "",
  ctaButtonText: "relative",

  // Footer
  footer: "border-t border-slate-100 bg-white py-6 sm:py-8",
  footerContainer: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center",
  footerText: "text-sm sm:text-base text-slate-400 font-medium",
  footerHeart: "text-red-400",
  footerLink: "text-[#3B5BDB] hover:text-[#2F4AC0] underline transition-colors",
};

// ── Dashboard ────────────────────────────────────────────────
export const dashboardStyles = {
  // Container
  container: "container mx-auto px-4 py-8 max-w-7xl",

  // Header
  headerWrapper: "flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8",
  headerTitle: "text-2xl sm:text-3xl font-black text-[#0D1B4B] tracking-tight",
  headerSubtitle: "text-slate-400 font-medium mt-1",

  // Create Button
  createButton: "group relative px-7 py-3 bg-[#3B5BDB] text-white font-bold rounded-xl overflow-hidden transition-all hover:bg-[#2F4AC0] hover:shadow-xl hover:shadow-blue-200/60 active:scale-95",
  createButtonOverlay: "",
  createButtonContent: "relative flex items-center gap-2.5",

  // Loading
  spinnerWrapper: "flex justify-center items-center py-16",
  spinner: "animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-[#3B5BDB]",

  // Empty State
  emptyStateWrapper: "flex flex-col items-center justify-center py-20 text-center",
  emptyIconWrapper: "w-16 h-16 bg-blue-50 border border-blue-100 rounded-2xl flex items-center justify-center mb-5",
  emptyTitle: "text-xl font-black text-[#0D1B4B] mb-2",
  emptyText: "text-slate-400 max-w-md mb-8 leading-relaxed",

  // Grid
  grid: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",

  // New Resume Card (dashed)
  newResumeCard: "flex flex-col items-center justify-center bg-blue-50/50 border-2 border-dashed border-blue-200 rounded-2xl p-8 cursor-pointer transition-all hover:bg-blue-50 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-100/60 group",
  newResumeIcon: "w-14 h-14 rounded-2xl bg-gradient-to-br from-[#3B5BDB] to-[#5C7CFA] flex items-center justify-center mb-4 shadow-md shadow-blue-200 group-hover:scale-110 transition-transform",
  newResumeTitle: "text-lg font-black text-[#0D1B4B] mb-1 text-center",
  newResumeText: "text-slate-400 text-sm text-center",

  // Modal
  modalHeader: "flex justify-between items-center mb-5",
  modalTitle: "text-xl font-black text-[#0D1B4B]",
  modalCloseButton: "text-slate-400 hover:text-slate-700 w-8 h-8 flex items-center justify-center rounded-lg hover:bg-slate-100 transition-all text-lg font-bold",

  // Delete Confirmation
  deleteIconWrapper: "w-14 h-14 bg-red-50 border border-red-100 rounded-2xl flex items-center justify-center mb-4 mx-auto",
  deleteTitle: "text-lg font-black text-[#0D1B4B] mb-2",
  deleteText: "text-slate-400 mb-4 leading-relaxed",
};

// ── Cards ─────────────────────────────────────────────────────
export const cardStyles = {
  // ProfileInfoCard
  profileCard: "flex items-center gap-3 p-2 sm:p-2.5 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-200",
  profileInitialsContainer: "w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-br from-[#3B5BDB] to-[#5C7CFA] rounded-xl flex items-center justify-center shadow-sm",
  profileInitialsText: "text-sm font-black text-white",
  profileName: "text-xs sm:text-sm font-bold text-[#0D1B4B]",
  logoutButton: "text-slate-400 text-[10px] sm:text-xs font-semibold cursor-pointer hover:text-red-500 transition-colors mt-0.5",

  // ResumeSummaryCard
  resumeCard: "group relative flex flex-col bg-white border border-slate-100 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl hover:shadow-blue-100/60 hover:border-blue-200 hover:-translate-y-1",
  cardBackground: "absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300",
  previewArea: "p-4 sm:p-5 flex-1 relative overflow-hidden min-h-[180px]",
  emptyPreview: "w-full h-[180px] sm:h-[200px] flex flex-col items-center justify-center rounded-xl",
  emptyPreviewIcon: "w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-3 shadow-md",
  emptyPreviewText: "text-[#0D1B4B] text-sm font-bold",
  emptyPreviewSubtext: "text-slate-400 text-xs mt-1",
  infoArea: "bg-slate-50/80 border-t border-slate-100 p-4 sm:p-5",
  title: "text-sm font-bold text-[#0D1B4B] truncate mb-1.5 group-hover:text-[#3B5BDB] transition-colors",
  dateInfo: "flex items-center gap-1.5 text-xs text-slate-400 flex-wrap",

  // Action overlay buttons
  actionOverlay: "absolute inset-0 bg-gradient-to-t from-[#0D1B4B]/60 via-[#0D1B4B]/20 to-transparent flex items-end justify-center pb-6 opacity-0 group-hover:opacity-100 transition-all duration-300",
  actionButtonsContainer: "flex gap-3",
  editButton: "w-11 h-11 flex items-center justify-center bg-[#3B5BDB] rounded-xl shadow-lg hover:scale-110 transition-all duration-200",
  deleteButton: "w-11 h-11 flex items-center justify-center bg-white/90 backdrop-blur-sm rounded-xl shadow-lg hover:scale-110 hover:bg-red-50 transition-all duration-200",
  buttonIcon: "text-white",

  // Progress & completion
  progressBar: "relative w-full h-1.5 bg-slate-200 rounded-full overflow-hidden",
  progressFill: "h-full rounded-full transition-all duration-700 ease-out relative overflow-hidden",
  progressGlow: "absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer",
  progressIndicator: "absolute top-0 h-full w-4 bg-gradient-to-r from-transparent to-white/50 blur-sm transition-all duration-700",
  completionStatus: "flex justify-between items-center mt-2",
  statusText: "text-xs text-slate-400",
  percentageText: "text-xs font-bold text-[#0D1B4B]",

  // Completion indicator badge
  completionIndicator: "absolute top-3 right-3 z-10 flex items-center gap-1.5 px-2.5 py-1.5 bg-white/90 backdrop-blur-sm border border-slate-100 rounded-full shadow-sm",
  completionDot: "w-2.5 h-2.5 rounded-full flex items-center justify-center",
  completionDotInner: "w-1 h-1 bg-white rounded-full",
  completionPercentageText: "text-[10px] font-bold text-[#0D1B4B]",

  // Completion color classes
  completionHigh: "from-emerald-500 to-teal-500",
  completionMedium: "from-amber-400 to-orange-500",
  completionLow: "from-red-400 to-rose-500",

  // TemplateCard
  templateCard: "relative rounded-2xl overflow-hidden shadow-sm transition-all duration-300 cursor-pointer border border-slate-200",
  templateCardSelected: "ring-2 ring-[#3B5BDB] scale-[1.02] shadow-lg shadow-blue-200/50",
  templateCardDefault: "hover:shadow-lg hover:border-blue-200",
  templateDesign: "relative h-full w-full aspect-[4/5]",
  templateOverlay: "absolute inset-0 bg-white/10 backdrop-blur-sm",
  selectionIndicator: "absolute top-3 right-3 z-20",
  selectionCircle: "w-8 h-8 bg-[#3B5BDB] rounded-full flex items-center justify-center shadow-md",
  selectionIcon: "text-white",
  templateHoverEffect: "absolute inset-0 bg-blue-900/5 opacity-0 hover:opacity-100 transition-opacity duration-300",
  templateName: "text-sm font-semibold text-[#0D1B4B]",
  emptyTemplate: "relative h-full w-full rounded-xl overflow-hidden",
  emptyTemplateIcon: "p-3 bg-white/90 rounded-full shadow-sm",
  emptyTemplateText: "text-xs text-slate-500 mt-1",
};

// ── Auth Styles ────────────────────────────────────────────────
export const authStyles = {
  // Login
  container: "w-[90vw] md:w-[420px] p-8 bg-white rounded-3xl border border-slate-100 shadow-2xl shadow-blue-100/40",
  headerWrapper: "text-center mb-8",
  title: "text-2xl font-black text-[#0D1B4B] mb-2 tracking-tight",
  subtitle: "text-slate-400 font-medium",
  form: "space-y-5",
  errorMessage: "text-red-500 text-sm font-medium bg-red-50 border border-red-100 px-4 py-3 rounded-xl",
  submitButton: "w-full py-3.5 bg-[#3B5BDB] text-white font-bold rounded-xl hover:bg-[#2F4AC0] hover:shadow-lg hover:shadow-blue-200 transition-all active:scale-95 text-sm tracking-wide",
  switchText: "text-center text-sm text-slate-400 font-medium",
  switchButton: "font-bold text-[#3B5BDB] hover:text-[#2F4AC0] transition-colors",

  // Signup
  signupContainer: "w-[90vw] md:w-[420px] p-8 bg-white rounded-3xl border border-slate-100 shadow-2xl shadow-blue-100/40",
  signupTitle: "text-2xl font-black text-[#0D1B4B] mb-2 tracking-tight",
  signupSubtitle: "text-slate-400 font-medium",
  signupForm: "space-y-4",
  signupSubmit: "w-full py-3.5 bg-[#3B5BDB] text-white font-bold rounded-xl hover:bg-[#2F4AC0] hover:shadow-lg hover:shadow-blue-200 transition-all active:scale-95 text-sm tracking-wide",
  signupSwitchButton: "font-bold text-[#3B5BDB] hover:text-[#2F4AC0] transition-colors",
};

// ── Shimmer / Animation Style (injected inline in StepProgress) ──
export const shimmerStyle = `
  @keyframes shimmer {
    0%   { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
  @keyframes flow {
    0%   { background-position: 0% 50%; }
    50%  { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  @keyframes bubble {
    0%, 100% { transform: translateY(-50%) scale(1); opacity: 0.7; }
    50%       { transform: translateY(-70%) scale(1.1); opacity: 0.9; }
  }
  @keyframes pulse-glow {
    0%, 100% { box-shadow: 0 0 20px rgba(59,91,219,0.3); }
    50%       { box-shadow: 0 0 40px rgba(59,91,219,0.6); }
  }
  .animate-shimmer    { animation: shimmer 2s infinite; }
  .animate-flow       { animation: flow 4s infinite linear; }
  .animate-bubble     { animation: bubble 2s infinite ease-in-out; }
  .animate-pulse-glow { animation: pulse-glow 2s infinite; }
`;

// ── Common ────────────────────────────────────────────────────
export const commonStyles = {
  trashButton: "absolute top-3 right-3 p-2 text-red-400 hover:bg-red-50 rounded-xl transition-all hover:text-red-600",
  addButtonBase: "flex items-center gap-2.5 px-5 py-2.5 text-white font-bold rounded-xl hover:scale-105 transition-all shadow-md",
};

// ── Form Section Styles ────────────────────────────────────────
export const additionalInfoStyles = {
  container: "p-6 sm:p-8",
  heading: "text-xl sm:text-2xl font-black text-[#0D1B4B] mb-7 tracking-tight",
  sectionHeading: "text-base font-bold text-[#0D1B4B] mb-5 flex items-center gap-2",
  dotViolet: "w-2 h-2 bg-[#3B5BDB] rounded-full",
  dotOrange: "w-2 h-2 bg-amber-400 rounded-full",
  languageItem: "relative bg-white border border-slate-100 p-5 rounded-2xl shadow-sm hover:shadow-md hover:border-blue-100 transition-all",
  interestItem: "relative",
  addButtonLanguage: "bg-[#3B5BDB] hover:bg-[#2F4AC0]",
  addButtonInterest: "bg-amber-500 hover:bg-amber-600",
};

export const certificationInfoStyles = {
  container: "p-6 sm:p-8",
  heading: "text-xl sm:text-2xl font-black text-[#0D1B4B] mb-7 tracking-tight",
  item: "relative bg-white border border-slate-100 p-5 rounded-2xl shadow-sm hover:shadow-md hover:border-blue-100 transition-all",
  addButton: "bg-[#059669] hover:bg-emerald-700",
};

export const contactInfoStyles = {
  container: "p-6 sm:p-8",
  heading: "text-xl sm:text-2xl font-black text-[#0D1B4B] mb-7 tracking-tight",
};

export const educationDetailsStyles = {
  container: "p-6 sm:p-8",
  heading: "text-xl sm:text-2xl font-black text-[#0D1B4B] mb-7 tracking-tight",
  item: "relative bg-white border border-slate-100 p-5 rounded-2xl shadow-sm hover:shadow-md hover:border-blue-100 transition-all",
  addButton: "bg-[#3B5BDB] hover:bg-[#2F4AC0]",
};

export const profileInfoStyles = {
  container: "p-6 sm:p-8",
  heading: "text-xl sm:text-2xl font-black text-[#0D1B4B] mb-7 tracking-tight",
  textarea: "w-full p-3.5 bg-white border border-slate-200 rounded-xl focus:border-blue-400 focus:ring-4 focus:ring-blue-50 transition-all outline-none resize-none text-sm",
};

export const projectDetailStyles = {
  container: "p-6 sm:p-8",
  heading: "text-xl sm:text-2xl font-black text-[#0D1B4B] mb-7 tracking-tight",
  item: "relative bg-white border border-slate-100 p-5 rounded-2xl shadow-sm hover:shadow-md hover:border-blue-100 transition-all",
  textarea: "w-full p-3.5 bg-white border border-slate-200 rounded-xl focus:border-blue-400 focus:ring-4 focus:ring-blue-50 transition-all outline-none resize-none text-sm",
  addButton: "bg-[#0EA5E9] hover:bg-sky-600",
};

export const skillsInfoStyles = {
  container: "p-6 sm:p-8",
  heading: "text-xl sm:text-2xl font-black text-[#0D1B4B] mb-7 tracking-tight",
  item: "relative bg-white border border-slate-100 p-5 rounded-2xl shadow-sm hover:shadow-md hover:border-blue-100 transition-all",
  addButton: "bg-amber-500 hover:bg-amber-600",
};

export const workExperienceStyles = {
  container: "p-6 sm:p-8",
  heading: "text-xl sm:text-2xl font-black text-[#0D1B4B] mb-7 tracking-tight",
  item: "relative bg-white border border-slate-100 p-5 rounded-2xl shadow-sm hover:shadow-md hover:border-blue-100 transition-all",
  textarea: "w-full p-3.5 bg-white border border-slate-200 rounded-xl focus:border-blue-400 focus:ring-4 focus:ring-blue-50 transition-all outline-none resize-none text-sm",
  addButton: "bg-[#059669] hover:bg-emerald-700",
};

// ── Edit Resume Container ─────────────────────────────────────
export const containerStyles = {
  main: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6",
  header: "flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-white border border-slate-100 rounded-2xl py-4 px-5 mb-6 shadow-sm",
  grid: "grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8",
  formContainer: "bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm",
  previewContainer: "bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm p-4",
  previewInner: "w-full max-w-[800px] mx-auto",
  modalContent: "w-[90vw] h-[80vh]",
  pdfPreview: "w-full p-4 flex justify-center",
  hiddenThumbnail: "bg-white shadow-lg max-w-[400px] mx-auto",
};

// ── Button Styles ─────────────────────────────────────────────
export const buttonStyles = {
  theme: "flex items-center gap-2 px-3 sm:px-4 py-2 bg-blue-50 text-[#3B5BDB] font-bold rounded-xl hover:bg-blue-100 transition-all text-sm",
  delete: "flex items-center gap-2 px-3 sm:px-4 py-2 bg-red-50 text-red-600 font-bold rounded-xl hover:bg-red-100 transition-all text-sm",
  download: "flex items-center gap-2 px-3 sm:px-4 py-2 bg-emerald-50 text-emerald-700 font-bold rounded-xl hover:bg-emerald-100 transition-all text-sm",
  back: "flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 bg-slate-100 text-slate-600 font-bold rounded-xl hover:bg-slate-200 transition-all text-sm",
  save: "flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 bg-sky-50 text-sky-700 font-bold rounded-xl hover:bg-sky-100 transition-all text-sm",
  next: "flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 bg-[#3B5BDB] text-white font-bold rounded-xl hover:bg-[#2F4AC0] hover:shadow-lg hover:shadow-blue-200/60 transition-all text-sm",
  modalAction: "flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 bg-[#3B5BDB] text-white font-bold rounded-xl hover:bg-[#2F4AC0] hover:shadow-lg transition-all text-sm",
};

// ── Status Styles ─────────────────────────────────────────────
export const statusStyles = {
  completionBadge: "inline-flex items-center gap-2 bg-slate-100 px-3 py-1.5 rounded-full text-sm font-semibold text-slate-600",
  modalBadge: "inline-flex items-center gap-2 bg-blue-50 px-3 py-1.5 rounded-full text-sm font-semibold text-[#3B5BDB]",
  error: "flex items-center gap-3 text-sm font-medium text-amber-700 bg-amber-50 border border-amber-100 px-4 py-3 rounded-xl mb-4",
};

export const iconStyles = {
  pulseDot: "w-2 h-2 rounded-full bg-emerald-500 animate-pulse",
};

// ── Input Styles ──────────────────────────────────────────────
export const inputStyles = {
  wrapper: "mb-5 group",
  label: "block text-sm font-bold text-[#0D1B4B] mb-2 group-focus-within:text-[#3B5BDB] transition-colors",
  inputContainer: focused => `relative flex items-center bg-white border-2 px-4 py-3 rounded-xl transition-all duration-200 ${
    focused
      ? "border-[#3B5BDB] ring-4 ring-blue-100 shadow-sm"
      : "border-slate-200 hover:border-slate-300"
  }`,
  inputField: "w-full bg-transparent outline-none text-[#0D1B4B] placeholder-slate-400 text-sm font-medium",
  toggleButton: "text-slate-400 hover:text-[#3B5BDB] transition-colors p-1 rounded-lg hover:bg-blue-50",
};

// ── Photo Selector ─────────────────────────────────────────────
export const photoSelectorStyles = {
  container: "flex justify-center mb-8",
  hiddenInput: "hidden",
  placeholder: hovered => `relative w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center bg-slate-50 border-2 border-dashed border-slate-300 rounded-full cursor-pointer transition-all duration-200 ${hovered ? "border-[#3B5BDB] bg-blue-50" : ""}`,
  cameraButton: "absolute -bottom-2 -right-2 w-10 h-10 flex items-center justify-center bg-[#3B5BDB] hover:bg-[#2F4AC0] text-white rounded-full transition-all shadow-md hover:scale-110",
  previewWrapper: "relative group",
  previewImageContainer: hovered => `w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-slate-200 shadow-lg transition-all duration-200 ${hovered ? "border-[#3B5BDB]" : ""}`,
  previewImage: "w-full h-full object-cover cursor-pointer group-hover:scale-110 transition-transform duration-300",
  overlay: "absolute inset-0 bg-black/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center",
  actionButton: (bg, hoverBg, textColor) => `w-10 h-10 flex items-center justify-center bg-${bg} text-${textColor} rounded-full hover:bg-${hoverBg} transition-all`,
};

// ── Title Input ────────────────────────────────────────────────
export const titleInputStyles = {
  container: "flex items-center gap-2.5",
  titleText: "text-base sm:text-lg font-bold text-[#0D1B4B] truncate max-w-[200px]",
  editButton: "p-1.5 rounded-lg bg-slate-100 hover:bg-blue-50 transition-all group",
  editIcon: "w-4 h-4 text-slate-500 group-hover:text-[#3B5BDB] transition-colors",
  inputField: focused => `text-base sm:text-lg font-bold bg-transparent outline-none text-[#0D1B4B] border-b-2 pb-1 transition-all duration-200 ${focused ? "border-[#3B5BDB]" : "border-slate-300"}`,
  confirmButton: "p-1.5 rounded-lg bg-[#3B5BDB] hover:bg-[#2F4AC0] text-white transition-all",
};

// ── Modal ──────────────────────────────────────────────────────
export const modalStyles = {
  overlay: "fixed inset-0 flex items-center justify-center w-full h-full bg-[#0D1B4B]/50 backdrop-blur-sm z-50",
  container: "relative flex flex-col bg-white shadow-2xl shadow-blue-200/30 rounded-2xl overflow-hidden border border-slate-100 max-w-[95vw] max-h-[95vh]",
  header: "flex items-center justify-between p-5 border-b border-slate-100 bg-white",
  title: "text-lg font-black text-[#0D1B4B] tracking-tight",
  actionButton: "flex items-center gap-2 px-5 py-2.5 bg-[#3B5BDB] text-white font-bold rounded-xl hover:bg-[#2F4AC0] hover:shadow-lg transition-all mr-12 text-sm",
  closeButton: "absolute top-3.5 right-3.5 w-9 h-9 flex items-center justify-center bg-slate-100 hover:bg-red-50 text-slate-400 hover:text-red-500 rounded-xl transition-all hover:scale-110 z-10",
  body: "flex-1 overflow-y-auto",
};

// ── Resume Info Section Styles ─────────────────────────────────
export const infoStyles = {
  progressWrapper: "w-20 h-1.5 rounded-full bg-slate-200",
  progressBar: color => `h-full rounded-full transition-all`,

  actionWrapper: "flex items-center gap-2",
  actionIconWrapper: "w-6 h-6 flex items-center justify-center rounded-full",
  actionLink: "text-sm font-medium underline cursor-pointer break-all text-slate-500 hover:text-[#3B5BDB] transition-colors",

  certContainer: "mb-4",
  certTitle: "text-base font-semibold text-gray-900",
  certRow: "flex items-center gap-2 mt-1",
  certYear: bgColor => `text-xs font-bold text-white px-3 py-1 rounded-lg`,
  certIssuer: "text-sm text-gray-600 font-medium",

  contactRow: "flex items-center gap-3 mb-3",
  contactIconWrapper: "w-8 h-8 flex items-center justify-center rounded-lg",
  contactText: "flex-1 text-sm font-medium break-all text-gray-700",

  eduContainer: "mb-5",
  eduDegree: "text-base font-semibold pb-2 text-gray-900",
  eduInstitution: "text-sm text-gray-700 font-medium",
  eduDuration: "text-xs text-gray-500 font-medium italic mt-1",

  infoRow: "flex items-center justify-between mb-3",
  infoLabel: "text-sm font-semibold text-gray-900",
  linkRow: "flex items-center space-x-1 hover:text-blue-600",

  projectContainer: "mb-5",
  projectTitle: isPreview => `${isPreview ? "text-sm" : "text-base"} font-semibold text-gray-900`,
  projectDesc: "text-sm text-gray-600 mt-1 leading-relaxed",
  projectLinks: "flex items-center gap-4 font-medium mt-3",

  ratingWrapper: "flex gap-2 cursor-pointer",
  ratingDot: "w-4 h-4 rounded transition-all hover:scale-110",

  skillGrid: "grid grid-cols-2 gap-x-6 gap-y-2 mb-5",

  workContainer: "mb-6",
  workHeader: "flex items-start justify-between mb-2",
  workCompany: "text-base font-semibold pb-2 text-gray-900",
  workRole: "text-base font-medium text-gray-700",
  workDuration: color => `text-sm font-bold italic`,
  workDesc: "text-sm text-gray-600 font-medium leading-relaxed",
};