const monthYear = new Intl.DateTimeFormat('es', {
  month: 'short',
  year: 'numeric',
  timeZone: 'UTC',
});

// Turns "2026-02" into "feb 2026"
export function formatYearMonth(value: string) {
  const [year, month] = value.split('-').map(Number);
  return monthYear.format(new Date(Date.UTC(year, month - 1, 1)));
}

// Turns a start/end pair into "feb 2026 – abr 2026" or "ene 2023 – Actualidad"
export function formatPeriod(start: string, end?: string) {
  return `${formatYearMonth(start)} – ${end ? formatYearMonth(end) : 'Actualidad'}`;
}

// "Sebastián Cohen" -> "SC"
export function getInitials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0].toUpperCase())
    .join('');
}
