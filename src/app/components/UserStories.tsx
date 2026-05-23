import { BookOpen, CheckCircle, AlertCircle, Layers, Sparkles, Users } from "lucide-react";

export function UserStories() {
  return (
    <div className="space-y-5 text-slate-100">
      {/* Header */}
      <div className="text-center space-y-3">
        <div className="flex justify-center">
          <div className="p-3 bg-gradient-to-br from-cyan-600 to-blue-800 rounded-2xl shadow-lg">
            <BookOpen className="w-10 h-10 text-white" />
          </div>
        </div>
        <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          User Stories in Agile
        </h1>
        <p className="text-slate-400 text-sm max-w-lg mx-auto">
          Short, simple descriptions of features from the user's perspective
        </p>
      </div>

      {/* What is it */}
      <div className="bg-slate-800/50 backdrop-blur p-4 rounded-xl border border-slate-700">
        <h3 className="text-lg font-semibold mb-2 text-cyan-400">What is it?</h3>
        <p className="text-slate-300 text-sm">
          A key component of agile software development - short, simple descriptions of features or functionality from the user's perspective. Used to capture requirements and help teams understand user needs and expectations.
        </p>
      </div>

      {/* Key Characteristics */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-cyan-400 flex items-center gap-2">
          <Users className="w-4 h-4" />
          Key Characteristics
        </h3>
        <div className="grid grid-cols-2 gap-1.5">
          {[
            "User-centric",
            "Simple",
            "Independent",
            "Negotiable",
            "Valuable",
            "Estimable",
            "Testable",
            "Prioritized"
          ].map((char, idx) => (
            <div key={idx} className="flex items-center gap-2 bg-slate-800/30 px-2 py-1.5 rounded border border-slate-700/50">
              <div className="w-1 h-1 bg-cyan-400 rounded-full"></div>
              <span className="text-xs text-slate-300">{char}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Standard Pattern */}
      <div className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 border border-cyan-700/50 p-4 rounded-xl">
        <h3 className="text-lg font-semibold mb-3 text-cyan-400">User Story Pattern</h3>
        <div className="bg-slate-900/50 p-3 rounded-lg border border-slate-600 font-mono text-xs">
          <p className="text-cyan-300">As a <span className="text-blue-400">[type of user]</span>,</p>
          <p className="text-cyan-300">I want <span className="text-blue-400">[an action]</span>,</p>
          <p className="text-cyan-300">So that <span className="text-blue-400">[some reason]</span></p>
        </div>
      </div>

      {/* The 3 C's Model */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-cyan-400 flex items-center gap-2">
          <Layers className="w-4 h-4" />
          The 3 C's Model
        </h3>
        <div className="grid grid-cols-1 gap-2">
          {[
            { letter: "C", title: "Card", desc: "Write stories on cards, prioritize, estimate and schedule" },
            { letter: "C", title: "Conversation", desc: "Conduct conversations, specify requirements, bring clarity" },
            { letter: "C", title: "Confirmation", desc: "Meet the acceptance criteria of the software" }
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-3 bg-gradient-to-r from-cyan-900/30 to-blue-900/30 p-3 rounded-lg border border-cyan-700/50">
              <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-cyan-600 to-blue-800 rounded-full flex items-center justify-center font-bold">
                {item.letter}
              </div>
              <div>
                <h4 className="font-semibold text-slate-200 text-sm">{item.title}</h4>
                <p className="text-xs text-slate-400">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* INVEST Principle */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-cyan-400 flex items-center gap-2">
          <CheckCircle className="w-4 h-4" />
          INVEST Principle
        </h3>
        <div className="space-y-1.5">
          {[
            { letter: "I", word: "Independent", desc: "Not dependent on other stories" },
            { letter: "N", word: "Negotiable", desc: "Includes the important, avoids contracts" },
            { letter: "V", word: "Valuable", desc: "Provides value to customer" },
            { letter: "E", word: "Estimable", desc: "Should be estimated" },
            { letter: "S", word: "Small", desc: "Simple and small, not complex" },
            { letter: "T", word: "Testable", desc: "Evaluated by pre-written acceptance criteria" }
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 bg-slate-800/30 p-2 rounded border border-slate-700/50">
              <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-cyan-600 to-blue-700 rounded flex items-center justify-center font-bold text-xs">
                {item.letter}
              </div>
              <div className="flex-1">
                <span className="font-semibold text-cyan-300 text-xs">{item.word}</span>
                <span className="text-slate-400 text-xs ml-1.5">- {item.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Advantages */}
      {/* <div className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 border border-cyan-700/50 p-4 rounded-xl">
        <h3 className="text-lg font-semibold mb-3 text-cyan-400 flex items-center gap-2">
          <Sparkles className="w-4 h-4" />
          Key Advantages
        </h3>
        <div className="grid grid-cols-1 gap-1.5">
          {[
            "Focus on user needs and expectations",
            "Easy to understand and create quickly",
            "Flexible and easily refined",
            "Promotes collaboration between stakeholders",
            "Enables incremental delivery"
          ].map((benefit, idx) => (
            <div key={idx} className="flex items-center gap-2 px-2 py-1">
              <div className="w-1 h-1 bg-cyan-400 rounded-full flex-shrink-0"></div>
              <span className="text-xs text-slate-300">{benefit}</span>
            </div>
          ))}
        </div>
      </div> */}

      {/* Reference */}
      <div className="bg-slate-800/30 border border-slate-700/50 p-3 rounded-lg">
        <h3 className="text-xs font-semibold mb-1.5 text-cyan-400">Reference</h3>
        <p className="text-xs text-slate-400 leading-relaxed">
          GeeksforGeeks. (2025, July 23). User Stories in Agile Software Development. <a href="https://www.geeksforgeeks.org/user-stories-in-agile-software-development/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 underline">https://www.geeksforgeeks.org/user-stories-in-agile-software-development/</a>
        </p>
      </div>
    </div>
  );
}
