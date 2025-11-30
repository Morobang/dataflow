"use client";
import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabaseClient";

export default function ProjectsPage() {
  const [projects, setProjects] = useState<any[]>([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch projects for the signed-in user
  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      setError("");
      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();
      if (userError || !user) {
        setError("You must be signed in to view projects.");
        setLoading(false);
        return;
      }
      const { data, error: projectsError } = await supabase
        .from("projects")
        .select("*")
        .eq("user_id", user.id)
        .order("created_at", { ascending: false });
      if (projectsError) setError(projectsError.message);
      else setProjects(data || []);
      setLoading(false);
    };
    fetchProjects();
  }, []);

  // Create a new project
  const handleCreateProject = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();
    if (userError || !user) {
      setError("You must be signed in to create projects.");
      setLoading(false);
      return;
    }
    const { error: insertError } = await supabase.from("projects").insert([
      {
        user_id: user.id,
        name,
        description,
      },
    ]);
    if (insertError) setError(insertError.message);
    else {
      setName("");
      setDescription("");
      // Refresh projects
      const { data } = await supabase
        .from("projects")
        .select("*")
        .eq("user_id", user.id)
        .order("created_at", { ascending: false });
      setProjects(data || []);
    }
    setLoading(false);
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 border rounded shadow bg-white dark:bg-zinc-900">
      <h2 className="text-2xl font-bold mb-4 text-blue-700 dark:text-blue-300">Your Projects</h2>
      <form onSubmit={handleCreateProject} className="mb-6">
        <input
          type="text"
          placeholder="Project Name"
          value={name}
          onChange={e => setName(e.target.value)}
          className="w-full mb-2 p-2 border rounded"
          required
        />
        <textarea
          placeholder="Project Description"
          value={description}
          onChange={e => setDescription(e.target.value)}
          className="w-full mb-2 p-2 border rounded"
          rows={3}
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-green-600 text-white px-4 py-2 rounded font-semibold"
        >
          Create Project
        </button>
      </form>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <ul>
        {projects.length === 0 && !loading && (
          <li className="text-zinc-600 dark:text-zinc-300">No projects yet.</li>
        )}
        {projects.map((project: any) => (
          <li key={project.id} className="mb-4 p-4 border rounded bg-zinc-50 dark:bg-zinc-800">
            <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-200">{project.name}</h3>
            <p className="text-zinc-700 dark:text-zinc-300">{project.description}</p>
            <span className="text-xs text-zinc-500 dark:text-zinc-400">Created: {new Date(project.created_at).toLocaleString()}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
