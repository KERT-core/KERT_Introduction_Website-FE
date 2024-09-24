import { create } from 'zustand';

const useDashboard = create((set) => ({
  SelectedDashboardMenu: '',
  moveHome: () => set((state) => ({ SelectedDashboardMenu: 'home' })),
  moveHistory: () => set((state) => ({ SelectedDashboardMenu: 'history' })),
  moveExecutive: () => set((state) => ({ SelectedDashboardMenu: 'executive' })),
  moveAdmin: () => set((state) => ({ SelectedDashboardMenu: 'admin' })),
  moveUsers: () => set((state) => ({ SelectedDashboardMenu: 'users' })),
  notFound: () => set((state) => ({ SelectedDashboardMenu: '' })),
}));

export default useDashboard;
