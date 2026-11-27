---
title: 'gRPC Inventory'
summary: 'Sistema de inventario y ventas con microservicios gRPC de reportes y auditoría, diseñado para tolerar fallos.'
cover: '../../assets/projects/grpc-inventory.png'
coverAlt: 'Menú principal del inventario en la terminal con los servicios de reportes y auditoría en línea'
technologies: ['Node.js', 'gRPC', 'Protocol Buffers', 'SQLite']
repoUrl: 'https://github.com/jerichd4c/grpc-inventory'
date: 2026-10-27
featured: true
---

## Descripción

Sistema de inventario y ventas compuesto por microservicios que se comunican con gRPC mediante contratos en Protocol Buffers. Los servicios de reportes y auditoría son independientes del núcleo de ventas.

## Lo que hice

- Reduje un 87 % el tiempo de detección de un servicio reiniciado (de ~15 s a ~2 s) ajustando la política de reconexión.
- Añadí deadlines de 3 s, errores tipados y health checks para que la caída de un servicio no bloquee al resto.
- Validé la tolerancia a fallos con 8 pruebas end-to-end con caídas simuladas: las ventas siguen operando aunque la auditoría esté caída.
