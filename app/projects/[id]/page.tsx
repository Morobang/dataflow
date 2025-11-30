"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { supabase } from "../../../lib/supabaseClient";

export default function ProjectDetailsPage() {
  const { id } = useParams();
  const router = useRouter();
  const [project, setProject] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [actionLoading, setActionLoading] = useState(false);

  useEffect(() => {
    const fetchProject = async () => {
      setLoading(true);
      setError("");
      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .eq("id", id)
        .single();
      if (error) setError(error.message);
      else {
        setProject(data);
        setName(data.name);
        setDescription(data.description);
      }
      setLoading(false);
    };
    if (id) fetchProject();
  }, [id]);

  const handleEdit = async (e: React.FormEvent) => {
    e.preventDefault();
    setActionLoading(true);
    setError("");
    const { error } = await supabase
      .from("projects")
      .update({ name, description })
      .eq("id", id);
    if (error) setError(error.message);
    else {
      setEditMode(false);
      setProject({ ...project, name, description });
    }
    setActionLoading(false);
  };

  const handleDelete = async () => {
    if (!confirm("Are you sure you want to delete this project?")) return;
    setActionLoading(true);
    setError("");
    const { error } = await supabase
      .from("projects")
      .delete()
      .eq("id", id);
    if (error) setError(error.message);
    else router.push("/projects");
    setActionLoading(false);
  };

  if (loading) return <div className="max-w-2xl mx-auto mt-10 p-6">Loading...</div>;
  if (error) return <div className="max-w-2xl mx-auto mt-10 p-6 text-red-500">{error}</div>;
  if (!project) return <div className="max-w-2xl mx-auto mt-10 p-6">Project not found.</div>;

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 border rounded shadow bg-white dark:bg-zinc-900">
      {editMode ? (
        <form onSubmit={handleEdit} className="mb-4">
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            className="w-full mb-2 p-2 border rounded"
            required
          />
          <textarea
            value={description}
            onChange={e => setDescription(e.target.value)}
            className="w-full mb-2 p-2 border rounded"
            rows={3}
          />
          <div className="flex gap-2">
            <button type="submit" disabled={actionLoading} className="bg-blue-600 text-white px-4 py-2 rounded font-semibold">Save</button>
            <button type="button" onClick={() => setEditMode(false)} className="bg-gray-400 text-white px-4 py-2 rounded font-semibold">Cancel</button>
          </div>
        </form>
      ) : (
        <>
          <h2 className="text-2xl font-bold mb-2 text-blue-700 dark:text-blue-300">{project.name}</h2>
          <p className="mb-4 text-zinc-700 dark:text-zinc-300">{project.description}</p>
          <span className="text-xs text-zinc-500 dark:text-zinc-400">Created: {new Date(project.created_at).toLocaleString()}</span>
          <div className="flex gap-2 mt-4">
            <button onClick={() => setEditMode(true)} className="bg-blue-600 text-white px-4 py-2 rounded font-semibold">Edit</button>
            <button onClick={handleDelete} disabled={actionLoading} className="bg-red-600 text-white px-4 py-2 rounded font-semibold">Delete</button>
          </div>
        </>
      )}
      {error && <div className="text-red-500 mt-2">{error}</div>}
    </div>
  );
}
