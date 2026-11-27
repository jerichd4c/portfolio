---
title: 'FlowSheet'
summary: 'Sistema de gestión de hojas de tiempo con dashboards por rol, reportes y chat por proyecto.'
cover: '../../assets/projects/flowsheet.png'
coverAlt: 'Dashboard del módulo de Miembro con proyectos, horas de la semana y notificaciones'
technologies: ['React', 'Node.js', 'PostgreSQL', 'Recharts']
repoUrl: 'https://github.com/chiq-mari/FlowSheet'
teamSize: 3
date: 2026-08-08
---

## Descripción

Plataforma para registrar y gestionar las horas de trabajo de los miembros de cada proyecto, con dashboards, reportes y comunicación por proyecto.

## Mi rol

- Desarrollé de punta a punta el módulo de Miembro: dashboard, proyectos, reportes con Recharts y chat de proyecto.
- Protegí los datos contra IDOR validando en el servidor que el usuario pertenece al recurso antes de cada lectura o escritura, y definí en PostgreSQL los permisos de cada perfil.
