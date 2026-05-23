import { Users, Target, TrendingUp, Shield, GitBranch } from "lucide-react";

export function StakeholderMapping() {
  return (
    <div className="space-y-5 text-slate-100">
      {/* Header */}
      <div className="text-center space-y-3">
        <div className="flex justify-center">
          <div className="p-3 bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl shadow-lg">
            <Users className="w-10 h-10 text-white" />
          </div>
        </div>
        <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Stakeholder Mapping
        </h1>
        <p className="text-slate-400 text-sm max-w-lg mx-auto">
          Strategic visualization to identify, analyze and document roles and relationships
        </p>
      </div>

      {/* What is it */}
      <div className="bg-slate-800/50 backdrop-blur p-4 rounded-xl border border-slate-700">
        <h3 className="text-lg font-semibold mb-2 text-purple-400">What is it?</h3>
        <p className="text-slate-300 text-sm">
          A strategic tool to visualize and analyze relationships between various parties involved in a project or business initiative.
        </p>
      </div>

      {/* Stakeholder Types */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-purple-400 flex items-center gap-2">
          <Shield className="w-4 h-4" />
          Stakeholder Types
        </h3>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-purple-900/20 border border-purple-700/50 p-3 rounded-lg">
            <h4 className="font-semibold text-purple-300 mb-1.5 text-sm">Internal</h4>
            <ul className="text-xs text-slate-400 space-y-0.5">
              <li>• Board members</li>
              <li>• Executives</li>
              <li>• Team members</li>
              <li>• Employees</li>
            </ul>
          </div>
          <div className="bg-purple-900/20 border border-purple-700/50 p-3 rounded-lg">
            <h4 className="font-semibold text-purple-300 mb-1.5 text-sm">External</h4>
            <ul className="text-xs text-slate-400 space-y-0.5">
              <li>• Customers</li>
              <li>• Suppliers</li>
              <li>• Regulators</li>
              <li>• Communities</li>
            </ul>
          </div>
        </div>
      </div>

      {/* The 5-Step Process */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-purple-400 flex items-center gap-2">
          <GitBranch className="w-4 h-4" />
          5-Step Process
        </h3>
        <div className="bg-slate-800/30 p-4 rounded-xl border border-slate-700/50">
          <div className="flex items-center justify-between relative">
            {/* Connecting line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-600 via-purple-500 to-purple-600 -translate-y-1/2 -z-10"></div>

            {[
              { num: "1", title: "Identify", desc: "Discover stakeholders" },
              { num: "2", title: "Analyze", desc: "Examine impact" },
              { num: "3", title: "Prioritize", desc: "Rank influence" },
              { num: "4", title: "Create Map", desc: "Visualize power" },
              { num: "5", title: "Engage", desc: "Develop strategies" }
            ].map((step, idx) => (
              <div key={step.num} className="flex flex-col items-center gap-2 flex-1">
                {/* Ball */}
                <div className="relative group">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 via-purple-600 to-purple-800 rounded-full flex items-center justify-center font-bold text-lg shadow-lg shadow-purple-900/50 border-2 border-purple-400/30 hover:scale-110 transition-transform cursor-pointer">
                    {step.num}
                  </div>
                  {/* Shine effect */}
                  <div className="absolute top-1.5 left-1.5 w-4 h-4 bg-white/20 rounded-full blur-sm"></div>
                </div>
                {/* Labels */}
                <div className="text-center">
                  <h4 className="font-semibold text-slate-200 text-xs">{step.title}</h4>
                  <p className="text-[10px] text-slate-400 mt-0.5 max-w-[80px]">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mapping Techniques */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-purple-400 flex items-center gap-2">
          <Target className="w-4 h-4" />
          Key Mapping Techniques
        </h3>
        <div className="grid grid-cols-1 gap-2">
          {[
            { name: "Power/Interest Grid", desc: "4 quadrants based on power & interest levels" },
            { name: "Salience Model", desc: "Evaluates power, legitimacy & urgency" },
            { name: "Stakeholder Circle", desc: "Concentric rings show influence levels" },
            { name: "Influence/Impact Matrix", desc: "Plots ability to influence outcomes" },
            { name: "Engagement Assessment", desc: "Tracks awareness to leadership states" }
          ].map((technique, idx) => (
            <div key={idx} className="bg-gradient-to-r from-slate-800/50 to-slate-700/30 p-3 rounded-lg border border-slate-700/50">
              <h4 className="font-semibold text-purple-300 mb-0.5 text-sm">{technique.name}</h4>
              <p className="text-xs text-slate-400">{technique.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Best Practices */}
      <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-700/50 p-4 rounded-xl">
        <h3 className="text-lg font-semibold mb-3 text-purple-400 flex items-center gap-2">
          <TrendingUp className="w-4 h-4" />
          Best Practices
        </h3>
        <ul className="space-y-1.5 text-slate-300">
          <li className="flex items-start gap-2">
            <span className="text-purple-400 mt-0.5">✓</span>
            <span className="text-xs">Ensure accuracy and completeness</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-purple-400 mt-0.5">✓</span>
            <span className="text-xs">Maintain current information</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-purple-400 mt-0.5">✓</span>
            <span className="text-xs">Integrate with business processes</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-purple-400 mt-0.5">✓</span>
            <span className="text-xs">Regular updates and reviews</span>
          </li>
        </ul>
      </div>

      {/* Reference */}
      <div className="bg-slate-800/30 border border-slate-700/50 p-3 rounded-lg">
        <h3 className="text-xs font-semibold mb-1.5 text-purple-400">Reference</h3>
        <p className="text-xs text-slate-400 leading-relaxed">
          Team, E. (2024, November 25). COVID-19 Situation: Six Sigma Ongoing Training Announcements. <span className="italic">SixSigma.us</span>. <a href="https://www.6sigma.us/project-management/stakeholder-mapping/" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 underline">https://www.6sigma.us/project-management/stakeholder-mapping/</a>
        </p>
      </div>
    </div>
  );
}
