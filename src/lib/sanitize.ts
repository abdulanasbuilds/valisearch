export const sanitizeIdea = (idea: string) => {
  return idea.trim().replace(/[\r\n]{3,}/g, '\n\n').slice(0, 2000);
};
