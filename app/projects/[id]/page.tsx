"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { supabase } from "../../../lib/supabaseClient";

type Skill = {
  id: string;
  name: string;
  description: string;
};

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
  const [skills, setSkills] = useState<Skill[]>([]);
  const [assignedSkills, setAssignedSkills] = useState<string[]>([]);
  const [skillsLoading, setSkillsLoading] = useState(true);

  useEffect(() => {
    const fetchProjectAndSkills = async () => {
      setLoading(true);
      setSkillsLoading(true);
      setError("");
      // Fetch project
      const { data: projectData, error: projectError } = await supabase
        .from("projects")
        .select("*")
        .eq("id", id)
        .single();
      if (projectError) setError(projectError.message);
      else {
        setProject(projectData);
        setName(projectData.name);
        setDescription(projectData.description);
      }
      setLoading(false);
      // Fetch all skills
      const { data: skillsData, error: skillsError } = await supabase
        .from("skills")
        .select("*");
      if (skillsError) setError(skillsError.message);
      else setSkills(skillsData || []);
      // Fetch assigned skills for this project
      const { data: assignedData, error: assignedError } = await supabase
        .from("project_skills")
        .select("skill_id")
        .eq("project_id", id);
      if (assignedError) setError(assignedError.message);
      else setAssignedSkills((assignedData || []).map((row: any) => row.skill_id));
      setSkillsLoading(false);
    };
    if (id) fetchProjectAndSkills();
  }, [id]);
  // Assign or unassign a skill
  const handleSkillToggle = async (skillId: string, assigned: boolean) => {
    setSkillsLoading(true);
    setError("");
    if (assigned) {
      // Unassign skill
      const { error } = await supabase
        .from("project_skills")
        .delete()
        .eq("project_id", id)
        .eq("skill_id", skillId);
      if (error) setError(error.message);
      setAssignedSkills(assignedSkills.filter(sid => sid !== skillId));
    } else {
      // Assign skill
      const { error } = await supabase
        .from("project_skills")
        .insert([{ project_id: id, skill_id: skillId }]);
      if (error) setError(error.message);
      setAssignedSkills([...assignedSkills, skillId]);
    }
    setSkillsLoading(false);
  };

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
      {/* Skill assignment section */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-2 text-green-700 dark:text-green-300">Assigned Skills</h3>
        {skillsLoading ? (
          <div>Loading skills...</div>
        ) : (
          <ul className="mb-4">
            {skills.length === 0 && <li className="text-zinc-600">No skills available.</li>}
            {skills.map(skill => (
              <li key={skill.id} className="flex items-center gap-2 mb-2">
                <input
                  type="checkbox"
                  checked={assignedSkills.includes(skill.id)}
                  onChange={() => handleSkillToggle(skill.id, assignedSkills.includes(skill.id))}
                  disabled={skillsLoading}
                />
                <span className="font-medium text-zinc-800 dark:text-zinc-200">{skill.name}</span>
                <span className="text-xs text-zinc-500 dark:text-zinc-400">{skill.description}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
      {error && <div className="text-red-500 mt-2">{error}</div>}
    </div>
  );
}
