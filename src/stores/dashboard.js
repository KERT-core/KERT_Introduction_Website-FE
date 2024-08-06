import { create } from 'zustand';


const useDashboard = create((set) => ({
    SelectedDashboardMenu: "home",
    moveHome: () => set((state) => ({ SelectedDashboardMenu: "home" })),
    moveHistory: () => set((state) => ({ SelectedDashboardMenu: "history" })),
    moveExecutive: () => set((state) => ({ SelectedDashboardMenu: "executive" })),
    moveAdmin: () => set((state) => ({ SelectedDashboardMenu: "admin" })),
    moveManageUser: () => set((state) => ({ SelectedDashboardMenu: "manageuser" }))
}));
  
export default useDashboard;