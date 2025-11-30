export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-zinc-100 dark:from-black dark:to-zinc-900 font-sans">
      <main className="flex flex-col items-center justify-center w-full max-w-2xl py-20 px-6 bg-white dark:bg-zinc-900 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-blue-700 dark:text-blue-300 mb-4">DataFlow</h1>
        <p className="text-lg text-zinc-700 dark:text-zinc-300 mb-8 text-center">
          The complete data project companion. Track your progress, build your skills, and showcase your portfolio—all in one place.
        </p>
        <div className="flex gap-4 mb-8">
          <a href="/auth" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded shadow font-semibold">Sign In / Sign Up</a>
          <a href="/projects" className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded shadow font-semibold">Projects</a>
        </div>
        <div className="w-full mt-8">
          <h2 className="text-xl font-semibold text-zinc-800 dark:text-zinc-200 mb-2">How to get started:</h2>
          <ol className="list-decimal list-inside text-zinc-700 dark:text-zinc-300">
            <li>Sign up or sign in to your account.</li>
            <li>Create your first data project.</li>
            <li>Track your progress and build your skills.</li>
            <li>Showcase your work in your portfolio.</li>
          </ol>
        </div>
      </main>
    </div>
  );
}
