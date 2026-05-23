import { StakeholderMapping } from "./components/StakeholderMapping";
import { UserStories } from "./components/UserStories";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 overflow-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        {/* Left Column - Stakeholder Mapping */}
        <div className="relative bg-slate-900/50 p-6 lg:p-8">
          <StakeholderMapping />
        </div>

        {/* Vertical Gradient Divider */}
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyan-500 to-transparent transform -translate-x-1/2"></div>

        {/* Right Column - User Stories */}
        <div className="relative bg-slate-800/50 p-6 lg:p-8">
          <UserStories />
        </div>
      </div>
    </div>
  );
}
