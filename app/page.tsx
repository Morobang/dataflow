                  {/* User Journey Visualization Section */}
                  <section className="w-full max-w-4xl mx-auto py-12 px-4">
                    <h2 className="text-3xl font-bold text-center mb-8 text-zinc-900 dark:text-zinc-100">How DataFlow Works</h2>
                    <div className="user-journey flex flex-col md:flex-row items-center justify-center gap-8">
                      <div className="journey-step flex flex-col items-center">
                        <div className="step-number w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold mb-2">1</div>
                        <h4 className="font-semibold text-lg mb-1">Choose Your Project</h4>
                        <p className="text-zinc-600 dark:text-zinc-300 text-center">Pick from 20+ templates or create custom</p>
                      </div>
                      <div className="journey-arrow text-3xl text-blue-400">→</div>
                      <div className="journey-step flex flex-col items-center">
                        <div className="step-number w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold mb-2">2</div>
                        <h4 className="font-semibold text-lg mb-1">Follow Guided Steps</h4>
                        <p className="text-zinc-600 dark:text-zinc-300 text-center">Get clear instructions at every phase</p>
                      </div>
                      <div className="journey-arrow text-3xl text-blue-400">→</div>
                      <div className="journey-step flex flex-col items-center">
                        <div className="step-number w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold mb-2">3</div>
                        <h4 className="font-semibold text-lg mb-1">Learn as You Go</h4>
                        <p className="text-zinc-600 dark:text-zinc-300 text-center">Context-aware lessons build your skills</p>
                      </div>
                      <div className="journey-arrow text-3xl text-blue-400">→</div>
                      <div className="journey-step flex flex-col items-center">
                        <div className="step-number w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold mb-2">4</div>
                        <h4 className="font-semibold text-lg mb-1">Showcase Results</h4>
                        <p className="text-zinc-600 dark:text-zinc-300 text-center">Automatically generate portfolio pieces</p>
                      </div>
                    </div>
                  </section>
            {/* Template Showcase Section */}
            <section className="w-full max-w-4xl mx-auto py-12 px-4">
              <h2 className="text-3xl font-bold text-center mb-8 text-zinc-900 dark:text-zinc-100">Start with Proven Templates</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                <div className="template-card bg-white dark:bg-zinc-800 p-6 rounded-lg shadow flex flex-col items-center text-center">
                  <div className="template-icon text-3xl mb-2">📈</div>
                  <h4 className="font-semibold text-lg mb-1">Sales Analysis</h4>
                  <p className="text-zinc-600 dark:text-zinc-300 mb-2">Complete ETL → Dashboard project</p>
                  <div className="tools text-xs text-blue-600 dark:text-blue-300">Excel • SQL • Power BI</div>
                </div>
                <div className="template-card bg-white dark:bg-zinc-800 p-6 rounded-lg shadow flex flex-col items-center text-center">
                  <div className="template-icon text-3xl mb-2">🔮</div>
                  <h4 className="font-semibold text-lg mb-1">ML Classification</h4>
                  <p className="text-zinc-600 dark:text-zinc-300 mb-2">End-to-end machine learning pipeline</p>
                  <div className="tools text-xs text-blue-600 dark:text-blue-300">Python • Pandas • Scikit-learn</div>
                </div>
                <div className="template-card bg-white dark:bg-zinc-800 p-6 rounded-lg shadow flex flex-col items-center text-center">
                  <div className="template-icon text-3xl mb-2">⚙️</div>
                  <h4 className="font-semibold text-lg mb-1">ETL Pipeline</h4>
                  <p className="text-zinc-600 dark:text-zinc-300 mb-2">Build robust data engineering workflows</p>
                  <div className="tools text-xs text-blue-600 dark:text-blue-300">SQL • Python • APIs</div>
                </div>
                <div className="template-card bg-white dark:bg-zinc-800 p-6 rounded-lg shadow flex flex-col items-center text-center">
                  <div className="template-icon text-3xl mb-2">📊</div>
                  <h4 className="font-semibold text-lg mb-1">Executive Dashboard</h4>
                  <p className="text-zinc-600 dark:text-zinc-300 mb-2">Create stakeholder-ready reports</p>
                  <div className="tools text-xs text-blue-600 dark:text-blue-300">Tableau • Power BI • Excel</div>
                </div>
              </div>
            </section>
      {/* Features Showcase Section */}
      <section className="w-full max-w-4xl mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-zinc-900 dark:text-zinc-100">Explore DataFlow Features</h2>
        <div className="features-tabs bg-white dark:bg-zinc-800 rounded-lg shadow p-6">
          <div className="tab-buttons flex gap-4 justify-center mb-6">
            <button className="tab-active bg-blue-600 text-white px-4 py-2 rounded font-semibold shadow">Project Navigator</button>
            <button className="bg-zinc-200 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-200 px-4 py-2 rounded font-semibold">Skill Tracker</button>
            <button className="bg-zinc-200 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-200 px-4 py-2 rounded font-semibold">Learning Hub</button>
            <button className="bg-zinc-200 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-200 px-4 py-2 rounded font-semibold">Portfolio Builder</button>
          </div>
          <div className="tab-content flex flex-col md:flex-row gap-8 items-center">
            <div className="feature-visual w-full md:w-1/2 flex justify-center">
              {/* Placeholder for animated GIF/screen recording */}
              <div className="w-64 h-40 bg-blue-100 dark:bg-zinc-900 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-300 font-bold text-xl">
                [App Demo GIF]
              </div>
            </div>
            <div className="feature-text w-full md:w-1/2">
              <h3 className="text-xl font-bold mb-2 text-blue-700 dark:text-blue-200">Never Get Stuck Mid-Project Again</h3>
              <ul className="list-disc list-inside text-zinc-700 dark:text-zinc-300">
                <li>✓ Pre-built templates for common data projects</li>
                <li>✓ Phase-by-phase guidance</li>
                <li>✓ Tool-specific instructions (Excel, SQL, Python, Power BI)</li>
                <li>✓ Progress tracking and reminders</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-zinc-100 dark:from-black dark:to-zinc-900 font-sans">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center pt-24 pb-16 px-4 w-full">
        <h1 className="text-5xl md:text-6xl font-extrabold text-center mb-4 text-black dark:text-white">
          From Data Chaos to <span className="bg-gradient-to-r from-blue-500 to-green-400 bg-clip-text text-transparent">Clear Projects</span>
        </h1>
        <p className="subtitle text-lg md:text-xl text-center text-zinc-700 dark:text-zinc-300 max-w-2xl mb-8">
          The all-in-one platform that guides data professionals through projects while building their skills.<br />Never wonder <span className="italic">"what's next?"</span> again.
        </p>
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <a href="/auth" className="cta-primary bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg shadow font-semibold text-lg transition">Start Your First Project →</a>
          <button className="cta-secondary bg-white dark:bg-zinc-800 border border-blue-600 text-blue-700 dark:text-blue-300 px-8 py-3 rounded-lg shadow font-semibold text-lg transition">Watch Demo (2 min)</button>
        </div>
        {/* Social Proof */}
        <div className="social-proof text-center mt-4">
          <p className="text-zinc-500 dark:text-zinc-400 mb-2">Trusted by data teams at:</p>
          <div className="flex gap-6 justify-center items-center text-zinc-400">
            <span className="font-bold">[Company Logo]</span>
            <span className="font-bold">[Company Logo]</span>
            <span className="font-bold">[Company Logo]</span>
          </div>
        </div>
      </section>
      {/* Problem/Solution Section */}
      <section className="w-full max-w-4xl mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-zinc-900 dark:text-zinc-100">The Data Struggle is Real</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="problem-card bg-white dark:bg-zinc-800 p-6 rounded-lg shadow flex flex-col items-center text-center">
            <div className="text-3xl mb-2">❓</div>
            <h3 className="font-semibold text-lg mb-1">"Where do I even start?"</h3>
            <p className="text-zinc-600 dark:text-zinc-300">Staring at raw data without a clear workflow</p>
          </div>
          <div className="problem-card bg-white dark:bg-zinc-800 p-6 rounded-lg shadow flex flex-col items-center text-center">
            <div className="text-3xl mb-2">🔄</div>
            <h3 className="font-semibold text-lg mb-1">Endless Tutorial Purgatory</h3>
            <p className="text-zinc-600 dark:text-zinc-300">Watching videos but not applying to real projects</p>
          </div>
          <div className="problem-card bg-white dark:bg-zinc-800 p-6 rounded-lg shadow flex flex-col items-center text-center">
            <div className="text-3xl mb-2">📊</div>
            <h3 className="font-semibold text-lg mb-1">Inconsistent Progress</h3>
            <p className="text-zinc-600 dark:text-zinc-300">Starting strong but losing momentum mid-project</p>
          </div>
          <div className="problem-card bg-white dark:bg-zinc-800 p-6 rounded-lg shadow flex flex-col items-center text-center">
            <div className="text-3xl mb-2">🤔</div>
            <h3 className="font-semibold text-lg mb-1">Skills Gap Anxiety</h3>
            <p className="text-zinc-600 dark:text-zinc-300">Not knowing what you don't know</p>
          </div>
        </div>
        <div className="flex justify-center mb-8">
          <div className="solution-arrow text-3xl text-blue-500">↓</div>
        </div>
        <h2 className="text-3xl font-bold text-center mb-8 text-zinc-900 dark:text-zinc-100">How DataFlow Solves This</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="solution-card bg-blue-50 dark:bg-zinc-800 p-6 rounded-lg shadow flex flex-col items-center text-center">
            <div className="text-3xl mb-2">🗺️</div>
            <h3 className="font-semibold text-lg mb-1">Guided Project Maps</h3>
            <p className="text-zinc-700 dark:text-zinc-300">Step-by-step workflows for every data task</p>
          </div>
          <div className="solution-card bg-blue-50 dark:bg-zinc-800 p-6 rounded-lg shadow flex flex-col items-center text-center">
            <div className="text-3xl mb-2">🎯</div>
            <h3 className="font-semibold text-lg mb-1">Context-Aware Learning</h3>
            <p className="text-zinc-700 dark:text-zinc-300">Learn exactly what you need, when you need it</p>
          </div>
          <div className="solution-card bg-blue-50 dark:bg-zinc-800 p-6 rounded-lg shadow flex flex-col items-center text-center">
            <div className="text-3xl mb-2">📈</div>
            <h3 className="font-semibold text-lg mb-1">Progress Tracking</h3>
            <p className="text-zinc-700 dark:text-zinc-300">See your project and skills grow simultaneously</p>
          </div>
          <div className="solution-card bg-blue-50 dark:bg-zinc-800 p-6 rounded-lg shadow flex flex-col items-center text-center">
            <div className="text-3xl mb-2">💼</div>
            <h3 className="font-semibold text-lg mb-1">Portfolio Builder</h3>
            <p className="text-zinc-700 dark:text-zinc-300">Turn work into career assets automatically</p>
          </div>
        </div>
      </section>
    </div>
  );
}
