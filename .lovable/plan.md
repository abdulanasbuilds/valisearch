# Fix Build Error + Footer Update

## 1. Fix KanbanSection.tsx build error

The `KanbanTask` type only has `estimated_effort`, not `effort`. Two fixes needed:

- **Line 59**: `task.effort ?? task.estimated_effort` → `task.estimated_effort` (remove the non-existent `effort` reference)
- **Line 207**: Remove the `effort` property from the new task object literal, keep only `estimated_effort`

## 2. Update Footer with social media links

Replace the generic social links with real @abdulanasbuilds accounts:

- X (Twitter): `https://x.com/abdulanasbuilds`
- GitHub: `https://github.com/abdulanasbuilds`
- LinkedIn: `https://linkedin.com/in/abdulanasbuilds`
- Instagram: `https://instagram.com/abdulanasbuilds`
- YouTube: `https://youtube.com/@abdulanasbuilds`
- `Tiktok; https://tiktok.com/@abdulanasbuilds` 
- &nbsp;

Add "Built by Abdul Anas" credit line in the bottom bar next to the copyright.