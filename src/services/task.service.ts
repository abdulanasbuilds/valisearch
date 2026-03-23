/**
 * AI Sprint Planner — maps product features to tasks.
 */

export type TaskItem = {
  id: string;
  title: string;
  column: "backlog" | "todo" | "doing" | "done";
};

export function featuresToTasks(features: string[]): TaskItem[] {
  return features.map((title, i) => ({
    id: `task-${i + 1}`,
    title,
    column: "backlog" as const,
  }));
}
