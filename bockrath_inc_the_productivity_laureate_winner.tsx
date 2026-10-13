import React, { useState, useEffect, useCallback } from 'react';

// --- Premium Iconography (Lucide-inspired SVGs for guaranteed rendering) ---
const IconClock = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
);
const IconCheckCircle = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
);
const IconTrendingUp = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
);
const IconCalendar = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
);
const IconTarget = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
);
const IconZap = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
);
const IconAlertTriangle = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
);
const IconDownload = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
);

const initialTasks = [
  { id: 1, text: "Secure term life insurance for Mark ($500K–$1M)", assignee: "Mark", status: "pending", notes: "Meeting w/ agent Tuesday Oct. 14th" },
  { id: 2, text: "File 2025 MD state and federal taxes", assignee: "Mark", status: "pending", notes: "Due Oct 15. Started, exp. finish Sept. 25th" },
  { id: 3, text: "Cancel Experian Subscription", assignee: "Mark", status: "completed", notes: "Done" },
  { id: 4, text: "Obtain auto insurance for new lease & consolidate", assignee: "Tabby", status: "pending", notes: "Use 'Insurance GPT'" },
  { id: 5, text: "Consolidate Wifi and Mobile carrier", assignee: "Mark", status: "pending", notes: "Meeting w/ Comcast end of Sept." },
  { id: 6, text: "Plan Temple’s 1st birthday party", assignee: "Tabby", status: "completed", notes: "Done" },
  { id: 7, text: "Obtain new consolidated auto/renters policy", assignee: "Tabby", status: "pending", notes: "Monthly Action Item" },
];

const financialData = {
  liquidity: [
    { label: "Checking", value: 26.32 },
    { label: "Savings & Emergency", value: 500.14 },
    { label: "Mark 5/3", value: 18.62 },
    { label: "Mercury (Pending $3105)", value: 1616.00 },
    { label: "Acorns", value: 52.16 },
  ],
  investments: [
    { label: "Tabby Retirement Est.", value: 2300.00 },
  ],
  debt: [
    { label: "Discover Card", value: 11450.55 },
    { label: "Venmo Credit", value: 562.16 },
  ]
};

const calendarEvents = [
  { date: "Oct 16", event: "Brian & Michele Wedding (Mimi babysitting)" },
  { date: "Oct 17", event: "Temple’s Party" },
  { date: "Oct 19", event: "Temple’s 1yr Checkup" },
  { date: "Oct 23", event: "Karen’s Bday" },
  { date: "Oct 25", event: "Tyler’s Bday" },
  { date: "Oct 31", event: "Library Halloween Party" },
  { date: "Nov 3", event: "Family Photos (TBC)" },
  { date: "Nov 26", event: "Thanksgiving in Delaware" },
  { date: "Dec 25", event: "Christmas (GA/TN w/ Mom's side)" },
];

const parkingLotItems = [
  "Update passwords in shared drive spreadsheet",
  "Determine timeline for resuming car payments to Mom",
  "Open Temple an investment/savings account (ESA or 530A)",
  "Resolve Fifth Third account purpose (Close vs. Shared vs. Personal Allocations)"
];


const FinanceCard = ({ title, items, total, type }) => {
  const colorClass = type === 'debt' ? 'text-red-400' : 'text-emerald-400';
  const barClass = type === 'debt' ? 'bg-red-500/20' : 'bg-emerald-500/20';
  const fillClass = type === 'debt' ? 'bg-red-500' : 'bg-emerald-500';

  return (
    <div className="bg-slate-800/50 backdrop-blur-md rounded-2xl p-6 border border-slate-700/50 hover:border-slate-500/50 transition-all duration-300">
      <h3 className="text-slate-400 text-sm font-medium uppercase tracking-wider mb-4">{title}</h3>
      <div className="space-y-4">
        {items.map((item, idx) => (
          <div key={idx} className="group cursor-pointer">
            <div className="flex justify-between text-sm mb-1">
              <span className="text-slate-300 group-hover:text-white transition-colors">{item.label}</span>
              <span className={`font-mono ${colorClass}`}>${item.value.toLocaleString('en-US', {minimumFractionDigits: 2})}</span>
            </div>
            {/* Visual Bar representation relative to a generic max for aesthetics */}
            <div className={`h-1.5 w-full rounded-full overflow-hidden ${barClass}`}>
              <div className={`h-full ${fillClass} transition-all duration-1000`} style={{ width: `${Math.min((item.value / 12000) * 100, 100)}%` }}></div>
            </div>
          </div>
        ))}
        {total && (
           <div className="pt-4 mt-4 border-t border-slate-700/50 flex justify-between items-center">
             <span className="text-white font-bold">Total</span>
             <span className={`text-xl font-mono font-bold ${colorClass}`}>${total.toLocaleString('en-US', {minimumFractionDigits: 2})}</span>
           </div>
        )}
      </div>
    </div>
  );
};


export default function App() {
  const [activeTab, setActiveTab] = useState('overview');
  const [tasks, setTasks] = useState(initialTasks);
  const [timeLeft, setTimeLeft] = useState(3600); // 60 minutes
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  // Timer Logic
  useEffect(() => {
    let interval;
    if (isTimerRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsTimerRunning(false);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, timeLeft]);

  const toggleTaskStatus = (taskId) => {
    setTasks(tasks.map(t => 
      t.id === taskId ? { ...t, status: t.status === 'completed' ? 'pending' : 'completed' } : t
    ));
  };

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const calculateTotal = (arr) => arr.reduce((sum, item) => sum + item.value, 0);

  // MAB AI Strategies Export Functionality
  const handleExportCode = () => {
    const htmlContent = document.documentElement.outerHTML;
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Bockrath_Inc_Quarterly_Planner.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-indigo-500/30">
      
      {/* GLOBAL HEADER: MAB Branding & Timer */}
      <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/80 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          {/* MAB AI Strategies Logo Requirement */}
          <div className="flex items-center gap-2 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
             <img 
               src="OfficialCompanyLogo.jpg" 
               alt="MAB AI Strategies LLC" 
               className="h-6 w-6 object-cover rounded bg-indigo-500 hidden" // Hidden fallback if image fails, visual below
               onError={(e) => e.target.style.display = 'none'} 
             />
             {/* Visual Fallback/Enhancement for Logo */}
             <div className="h-6 w-6 bg-gradient-to-br from-indigo-500 to-purple-600 rounded flex items-center justify-center font-bold text-xs text-white">MAB</div>
             <span className="text-sm font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-200 to-slate-400">AI Strategies</span>
          </div>
          <div className="h-6 w-px bg-slate-800 mx-2"></div>
          <div>
            <h1 className="text-xl font-bold text-white tracking-tight">Bockrath Inc. Q4 Strategy</h1>
            <p className="text-xs text-slate-400">Exec Board: Mark, Tabby, Temple</p>
          </div>
        </div>

        {/* Global Timer (Runner-Up 2 Integration: Frictionless Flow & Constraints) */}
        <div className="flex items-center gap-4 bg-slate-900 rounded-full px-2 py-1.5 border border-slate-800 shadow-inner">
          <button 
            onClick={() => setIsTimerRunning(!isTimerRunning)}
            className={`flex items-center gap-2 px-4 py-1.5 rounded-full font-mono text-lg font-bold transition-all ${
              timeLeft < 900 ? 'text-red-400 bg-red-900/20 animate-pulse' : 
              isTimerRunning ? 'text-emerald-400 bg-emerald-900/20' : 'text-slate-300 hover:bg-slate-800'
            }`}
          >
            <IconClock className="w-5 h-5" />
            {formatTime(timeLeft)}
          </button>
          <div className="text-xs text-slate-500 pr-3 font-medium uppercase tracking-wider hidden sm:block">
            Hard Cap
          </div>
        </div>
      </header>

      {/* MAIN LAYOUT GRID */}
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* SIDEBAR NAVIGATION */}
        <div className="lg:col-span-3 space-y-2">
          <nav className="sticky top-28 space-y-1">
            {[
              { id: 'overview', label: 'Q4 Overview', icon: IconTarget },
              { id: 'phase1', label: 'Phase 1: Tactical', icon: IconZap, tag: '15 Min' },
              { id: 'phase2', label: 'Phase 2: Strategic', icon: IconTrendingUp, tag: '45 Min' },
              { id: 'parkingLot', label: 'Parking Lot', icon: IconAlertTriangle },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-300 ${
                  activeTab === tab.id 
                    ? 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/30 shadow-[0_0_20px_rgba(99,102,241,0.1)]' 
                    : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200 border border-transparent'
                }`}
              >
                <div className="flex items-center gap-3 font-medium">
                  <tab.icon className={`w-5 h-5 ${activeTab === tab.id ? 'text-indigo-400' : 'text-slate-500'}`} />
                  {tab.label}
                </div>
                {tab.tag && (
                  <span className={`text-[10px] uppercase font-bold px-2 py-1 rounded bg-slate-900/50 ${activeTab === tab.id ? 'text-indigo-300 border border-indigo-500/20' : 'text-slate-600'}`}>
                    {tab.tag}
                  </span>
                )}
              </button>
            ))}

            {/* Warning Banner */}
            <div className="mt-8 bg-amber-500/10 border border-amber-500/20 rounded-xl p-4">
              <h4 className="flex items-center gap-2 text-amber-400 font-bold text-sm mb-2">
                <IconAlertTriangle className="w-4 h-4" /> ADHD Policy Active
              </h4>
              <p className="text-xs text-amber-200/70 leading-relaxed">
                No Real-Time Research. Assign quote lookups as post-meeting items.
              </p>
            </div>
          </nav>
        </div>

        {/* DYNAMIC CONTENT AREA */}
        <div className="lg:col-span-9">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            
            {/* VIEW: PHASE 1 TACTICAL */}
            {(activeTab === 'overview' || activeTab === 'phase1') && (
              <section className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-8 w-1 bg-indigo-500 rounded-full"></div>
                  <h2 className="text-2xl font-bold text-white tracking-tight">Phase 1: Tactical Monthly Sprint</h2>
                </div>

                {/* Financial Grid (Runner-Up 4 Integration: Best Data Viz) */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
                  <FinanceCard 
                    title="Liquid Assets" 
                    items={financialData.liquidity} 
                    total={calculateTotal(financialData.liquidity)}
                    type="asset"
                  />
                  <FinanceCard 
                    title="Investments" 
                    items={financialData.investments} 
                    total={calculateTotal(financialData.investments)}
                    type="asset"
                  />
                  <FinanceCard 
                    title="Debt Balances" 
                    items={financialData.debt} 
                    total={calculateTotal(financialData.debt)}
                    type="debt"
                  />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Task Management (Runner-Up 3 Integration: Gamification Hook) */}
                  <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
                    <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                      <IconCheckCircle className="w-5 h-5 text-indigo-400" />
                      Task Delegation & Loops
                    </h3>
                    <div className="space-y-3">
                      {tasks.map(task => (
                        <div 
                          key={task.id} 
                          onClick={() => toggleTaskStatus(task.id)}
                          className={`group flex items-start gap-4 p-4 rounded-xl border transition-all cursor-pointer ${
                            task.status === 'completed' 
                              ? 'bg-emerald-900/10 border-emerald-500/20 opacity-60 hover:opacity-100' 
                              : 'bg-slate-800/50 border-slate-700/50 hover:bg-slate-800 hover:border-indigo-500/50 hover:shadow-[0_0_15px_rgba(99,102,241,0.15)]'
                          }`}
                        >
                          <div className={`mt-0.5 w-5 h-5 rounded-md flex-shrink-0 flex items-center justify-center border transition-colors ${
                            task.status === 'completed' ? 'bg-emerald-500 border-emerald-500 text-slate-900' : 'border-slate-500 group-hover:border-indigo-400 text-transparent'
                          }`}>
                            <IconCheckCircle className="w-3.5 h-3.5" />
                          </div>
                          <div>
                            <p className={`text-sm font-medium transition-all ${task.status === 'completed' ? 'text-slate-400 line-through decoration-emerald-500/50' : 'text-slate-200'}`}>
                              {task.text}
                            </p>
                            <div className="flex items-center gap-3 mt-2">
                              <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded-full ${
                                task.assignee === 'Mark' ? 'bg-blue-500/20 text-blue-300' : 'bg-purple-500/20 text-purple-300'
                              }`}>
                                {task.assignee}
                              </span>
                              <span className="text-xs text-slate-500">{task.notes}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Calendar Highlights */}
                  <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
                    <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                      <IconCalendar className="w-5 h-5 text-indigo-400" />
                      30-60 Day Radar
                    </h3>
                    <div className="relative border-l border-slate-800 ml-3 space-y-6">
                      {calendarEvents.map((ev, idx) => (
                        <div key={idx} className="relative pl-6 group">
                          <div className="absolute w-3 h-3 bg-slate-800 rounded-full -left-[1.5px] top-1.5 border-2 border-slate-900 group-hover:bg-indigo-500 group-hover:shadow-[0_0_10px_rgba(99,102,241,0.8)] transition-all"></div>
                          <div className="text-xs font-bold text-indigo-400 mb-0.5">{ev.date}</div>
                          <div className="text-sm text-slate-300">{ev.event}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* VIEW: PHASE 2 STRATEGIC */}
            {(activeTab === 'overview' || activeTab === 'phase2') && (
              <section className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-8 w-1 bg-purple-500 rounded-full"></div>
                  <h2 className="text-2xl font-bold text-white tracking-tight">Phase 2: Quarterly Strategic Reset</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Strategy Pillars */}
                  <div className="col-span-1 space-y-4">
                    {['Look Back: Last 90 Days', 'The Core Pillars', 'Look Forward: Next 90'].map((title, i) => (
                       <div key={i} className="bg-slate-900/80 p-5 rounded-xl border border-slate-800 hover:border-purple-500/30 transition-colors cursor-pointer group">
                         <h4 className="font-bold text-slate-200 group-hover:text-purple-300 transition-colors">{title}</h4>
                         <div className="h-1 w-0 bg-purple-500 mt-2 group-hover:w-full transition-all duration-500 ease-out"></div>
                       </div>
                    ))}
                  </div>

                  {/* Interactive Strategy Workspace (Runner-Up 1 Integration: Aesthetic/Interactive) */}
                  <div className="col-span-2 bg-gradient-to-br from-slate-900 to-slate-950 p-8 rounded-2xl border border-slate-800 relative overflow-hidden">
                    {/* Decorative element */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                    
                    <h3 className="text-xl font-bold text-white mb-6 relative z-10">Define The 3 "Rocks"</h3>
                    <p className="text-sm text-slate-400 mb-6 relative z-10">Pick a maximum of 3 key shared objectives for the upcoming quarter.</p>
                    
                    <div className="space-y-4 relative z-10">
                      {[1, 2, 3].map((num) => (
                        <div key={num} className="flex gap-4">
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center font-bold text-slate-400 font-mono">
                            {num}
                          </div>
                          <input 
                            type="text" 
                            placeholder={`Define Rock ${num}...`}
                            className="flex-1 bg-slate-800/50 border border-slate-700 rounded-xl px-4 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                          />
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 pt-8 border-t border-slate-800 relative z-10">
                      <h4 className="text-sm font-bold text-slate-300 mb-3">Individual Support Check-In</h4>
                      <div className="bg-slate-800/30 rounded-xl p-4 italic text-slate-400 text-sm border-l-2 border-purple-500">
                        "What is one major goal you have this quarter, and how can I best support you?"
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* VIEW: PARKING LOT */}
            {(activeTab === 'parkingLot') && (
              <section className="mb-12">
                 <div className="flex items-center gap-3 mb-6">
                  <div className="h-8 w-1 bg-amber-500 rounded-full"></div>
                  <h2 className="text-2xl font-bold text-white tracking-tight">The Parking Lot</h2>
                </div>
                
                <div className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden">
                  <div className="p-4 bg-slate-800/50 border-b border-slate-800 text-sm text-slate-400">
                    Items tabled to respect the 60-minute time cap and ADHD Policy.
                  </div>
                  <ul className="divide-y divide-slate-800/50">
                    {parkingLotItems.map((item, idx) => (
                      <li key={idx} className="p-4 hover:bg-slate-800/30 transition-colors flex justify-between items-center group">
                        <span className="text-slate-300">{item}</span>
                        <button className="text-xs bg-slate-800 text-slate-400 px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 hover:bg-amber-500/20 hover:text-amber-300 transition-all">
                          Promote to Task
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

          </div>
        </div>
      </div>

      {/* MAB AI Strategies Export Button Mandate */}
      <button 
        onClick={handleExportCode}
        className="fixed bottom-6 right-6 flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-3 rounded-full font-bold shadow-[0_4px_20px_rgba(79,70,229,0.4)] hover:shadow-[0_4px_25px_rgba(79,70,229,0.6)] hover:-translate-y-1 transition-all duration-300 z-50 group"
      >
        <IconDownload className="w-5 h-5 group-hover:animate-bounce" />
        Export Code File
      </button>

    </div>
  );
}