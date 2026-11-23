import { getCollection, getEntry } from 'astro:content';

export async function getProfile() {
  const profile = await getEntry('profile', 'index');
  if (!profile) throw new Error('Falta src/content/profile/index.md');
  return profile;
}

export async function getSkills() {
  const skills = await getCollection('skills');
  return skills.sort((a, b) => a.data.order - b.data.order);
}

export async function getExperience(type: 'education' | 'work') {
  const items = await getCollection('experience', ({ data }) => data.type === type);
  return items.sort((a, b) => b.data.start.localeCompare(a.data.start));
}

export async function getProjects() {
  const projects = await getCollection('projects', ({ data }) => !data.draft);
  return projects.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export async function getFeaturedProjects() {
  const projects = await getProjects();
  return projects.filter((project) => project.data.featured);
}