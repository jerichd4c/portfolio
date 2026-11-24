import { defineCollection } from 'astro:content';
import { file, glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Timeline dates in "YYYY-MM" format
const yearMonth = z
  .string()
  .regex(/^\d{4}-(0[1-9]|1[0-2])$/, 'Usa el formato AAAA-MM, por ejemplo 2026-02');

const profile = defineCollection({
  loader: glob({ pattern: 'index.md', base: './src/content/profile' }),
  schema: ({ image }) =>
    z
      .object({
        name: z.string().min(1),
        role: z.string().min(1),
        tagline: z.string().min(1),
        location: z.string().optional(),
        avatar: image().optional(),
        avatarAlt: z.string().optional(),
        email: z.email(),
        socials: z
          .array(
            z.object({
              label: z.string().min(1),
              url: z.url(),
              icon: z.enum(['github', 'linkedin', 'website']),
            }),
          )
          .min(1),
        cv: z.string().startsWith('/').endsWith('.pdf').optional(),
        contactMessage: z.string().min(1),
        seoDescription: z.string().min(50).max(160),
      })
      .refine((data) => !data.avatar || data.avatarAlt, {
        message: 'Si hay avatar, avatarAlt es obligatorio',
        path: ['avatarAlt'],
      }),
});

const skills = defineCollection({
  loader: file('src/content/skills.json'),
  schema: z.object({
    name: z.string().min(1),
    items: z.array(z.string().min(1)).min(1),
    order: z.number().int(),
  }),
});

const experience = defineCollection({
  loader: file('src/content/experience.json'),
  schema: z
    .object({
      type: z.enum(['education', 'work']),
      title: z.string().min(1),
      organization: z.string().min(1),
      location: z.string().optional(),
      start: yearMonth,
      end: yearMonth.optional(),
      description: z.string().optional(),
      highlights: z.array(z.string().min(1)).default([]),
    })
    .refine((data) => !data.end || data.end >= data.start, {
      message: 'end no puede ser anterior a start',
      path: ['end'],
    }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string().min(1),
      summary: z.string().min(20).max(160),
      cover: image(),
      coverAlt: z.string().min(1),
      technologies: z.array(z.string().min(1)).min(1),
      repoUrl: z.url().optional(),
      demoUrl: z.url().optional(),
      teamSize: z.number().int().min(1).default(1),
      date: z.coerce.date(),
      featured: z.boolean().default(false),
      draft: z.boolean().default(false),
    }),
});

export const collections = { profile, skills, experience, projects };
