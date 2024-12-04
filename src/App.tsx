import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { OrcasPage } from './pages/OrcasPage';
import { HomePage } from './pages/HomePage';
import { ProjectDetailsPage } from './pages/ProjectDetailsPage';
import { TrendingPage } from './pages/TrendingPage';
import { NewsPage } from './pages/NewsPage';
import { NewsArticlePage } from './pages/NewsArticlePage';
import { AnnouncementsPage } from './pages/AnnouncementsPage';
import { GetStartedPage } from './pages/GetStartedPage';
import { ProfilePage } from './pages/ProfilePage';
import { ProfileOverview } from './pages/profile/ProfileOverview';
import { ProfileWallet } from './pages/profile/ProfileWallet';
import { ProfileInvestments } from './pages/profile/ProfileInvestments';
import { ProfileNotifications } from './pages/profile/ProfileNotifications';
import { ProfileSecurity } from './pages/profile/ProfileSecurity';
import { ProfileSettings } from './pages/profile/ProfileSettings';
import { ProjectManagement } from './pages/profile/ProjectManagement';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/*"
          element={
            <Layout>
              <Routes>
                <Route path="/" element={<OrcasPage />} />
                <Route path="/token-launches" element={<HomePage />} />
                <Route path="/get-started" element={<GetStartedPage />} />
                <Route path="/project/:id" element={<ProjectDetailsPage />} />
                <Route path="/trending" element={<TrendingPage />} />
                <Route path="/news" element={<NewsPage />} />
                <Route path="/news/:id" element={<NewsArticlePage />} />
                <Route path="/announcements" element={<AnnouncementsPage />} />
                <Route path="/profile" element={<ProfilePage />}>
                  <Route index element={<ProfileOverview />} />
                  <Route path="wallet" element={<ProfileWallet />} />
                  <Route path="investments" element={<ProfileInvestments />} />
                  <Route path="notifications" element={<ProfileNotifications />} />
                  <Route path="security" element={<ProfileSecurity />} />
                  <Route path="settings" element={<ProfileSettings />} />
                  <Route path="projects" element={<ProjectManagement />} />
                </Route>
              </Routes>
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}