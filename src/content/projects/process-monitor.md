---
title: 'Process Monitor'
summary: 'Monitor de procesos para Linux en la terminal, estilo htop, escrito en Go y leyendo directamente de /proc.'
cover: '../../assets/projects/process-monitor.png'
coverAlt: 'Monitor de procesos en la terminal con la tabla de procesos, uso de CPU y memoria'
technologies: ['Go', 'Linux', 'tcell']
repoUrl: 'https://github.com/jerichd4c/process-monitor'
date: 2026-10-20
featured: true
---

## Descripción

Monitor de procesos a pantalla completa para Linux (~2.200 líneas de Go). Lee la información directamente de `/proc`, calcula el %CPU por deltas y ofrece vista de árbol, hilos e historial. El núcleo usa solo la librería estándar y el binario no puede ejecutar programas externos.

## Lo que hice

- Implementé el envío de señales y el cambio de prioridad con verificación contra la reutilización de PID.
- Respaldé el proyecto con 81 pruebas unitarias ejecutadas con el detector de condiciones de carrera de Go.
