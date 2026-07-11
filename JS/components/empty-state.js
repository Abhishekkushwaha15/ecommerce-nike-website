export function emptyState({ context = 'content' } = {}) {
  return `<section data-component="empty-state" data-context="${context}"></section>`;
}
