export function KanbanMockup() {
  const columns = [
    {
      title: "Backlog",
      tasks: [
        { title: "Design Landing Page", priority: "high", type: "design" },
        { title: "Setup Database Schema", priority: "high", type: "backend" },
      ]
    },
    {
      title: "In Progress",
      tasks: [
        { title: "Implement Auth Flow", priority: "high", type: "fullstack" },
        { title: "Create API Endpoints", priority: "medium", type: "backend" },
      ]
    },
    {
      title: "Done",
      tasks: [
        { title: "Project Setup", priority: "medium", type: "config" },
        { title: "Define Tech Stack", priority: "low", type: "planning" },
      ]
    }
  ];

  return (
    <div className="w-full h-full min-h-[300px] bg-[#0A0A0A] rounded-xl border border-white/10 p-4 sm:p-5 overflow-hidden">
      <div className="text-[12px] text-white/40 uppercase tracking-widest font-medium mb-4">
        Sprint Board
      </div>
      <div className="flex gap-4 overflow-x-auto pb-4 snap-x">
        {columns.map(col => (
          <div key={col.title} className="flex-1 min-w-[220px] shrink-0 snap-center bg-white/[0.02] rounded-lg border border-white/[0.05] p-3 flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="text-[13px] font-semibold text-white/80">{col.title}</span>
              <span className="text-[10px] bg-white/[0.08] text-white/50 px-2 py-0.5 rounded-full">{col.tasks.length}</span>
            </div>
            {col.tasks.map(task => (
              <div key={task.title} className="bg-[#111] border border-white/[0.08] rounded-md p-3 shadow-sm flex flex-col gap-2">
                <div className="text-[12px] font-medium text-white/90 leading-snug">{task.title}</div>
                <div className="flex items-center gap-2 mt-1">
                  <span className={`text-[9px] uppercase tracking-wider font-bold px-1.5 py-0.5 rounded
                    ${task.priority === 'high' ? 'bg-red-500/10 text-red-400' : 
                      task.priority === 'medium' ? 'bg-amber-500/10 text-amber-400' : 
                      'bg-blue-500/10 text-blue-400'}`}>
                    {task.priority}
                  </span>
                  <span className="text-[9px] text-white/40">{task.type}</span>
                </div>
              </div>
            ))}
            <div className="border border-dashed border-white/10 rounded-md p-2 text-center text-white/30 text-[11px] hover:bg-white/[0.02] cursor-pointer mt-auto transition-colors">
              + Add Task
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}