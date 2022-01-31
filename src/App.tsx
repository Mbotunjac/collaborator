import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import ErrorBoundary from '@components/ErrorBoundary';

const About = lazy(() => import('@pages/About'));
const Home = lazy(() => import('@pages/Home'));
const TestBB = lazy(() => import('@pages/TestBB'));
const TestSS = lazy(() => import('@pages/TestSS'));
const TestVS = lazy(() => import('@pages/TestVS'));
const TestSM = lazy(() => import('@pages/TestSM'));
const TestMB = lazy(() => import('@pages/TestMB'));
const LoginPage = lazy(() => import('@pages/LoginPage'));
const Timesheet = lazy(() => import('@pages/Timesheet'));
const NotFoundPage = lazy(() => import('@pages/NotFoundPage'));
const AdminOverview = lazy(() => import('@pages/AdminOverview'));
const UserOverview = lazy(() => import('@pages/UsersOverview/idex'));
const People = lazy(() => import('@pages/People'));
const Profile = lazy(() => import('@pages/Profile'));
const Projects = lazy(() => import('@pages/Projects'));
const ErrorPage = lazy(() => import('@pages/ErrorPage'));
const Tutorials = lazy(() => import('@pages/Tutorials'));
const Header = lazy(() => import('@components/Header/Header'));
const TimesheetDetails = lazy(() => import('@components/TimesheetDetails'));
const Test = lazy(() => import('@components/PrivateRoute/Test'));
const PrivateRoute = lazy(
    () => import('@components/PrivateRoute/PrivateRoute')
);
const ProtectedRoute = lazy(
    () => import('@components/ProtectedRoute/ProtectedRoute')
);
const Layout = lazy(() => import('@components/Layout'));
const ClientPage = lazy(() => import('@components/ClientPage'));

function App() {
    return (
        <ErrorBoundary>
            <BrowserRouter>
                <Suspense fallback="Loading...">
                    <Routes>
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/" element={<Layout />}>
                            <Route
                                path="header"
                                element={
                                    <ProtectedRoute>
                                        <Header />
                                    </ProtectedRoute>
                                }
                            />
                            <Route
                                path="header"
                                element={
                                    <PrivateRoute>
                                        <Header />
                                    </PrivateRoute>
                                }
                            />
                            <Route
                                path="/"
                                element={
                                    <ProtectedRoute>
                                        <Home />
                                    </ProtectedRoute>
                                }
                            />
                            <Route
                                path="/"
                                element={
                                    <PrivateRoute>
                                        <Home />
                                    </PrivateRoute>
                                }
                            />
                            <Route
                                path="about"
                                element={
                                    <ProtectedRoute>
                                        <About />
                                    </ProtectedRoute>
                                }
                            />
                            <Route
                                path="about"
                                element={
                                    <PrivateRoute>
                                        <About />
                                    </PrivateRoute>
                                }
                            />
                            <Route
                                path="test1"
                                element={
                                    <PrivateRoute>
                                        <Test />
                                    </PrivateRoute>
                                }
                            />
                            <Route
                                path="/people"
                                element={
                                    <ProtectedRoute>
                                        <People />
                                    </ProtectedRoute>
                                }
                            />
                            <Route
                                path="/profile"
                                element={
                                    <ProtectedRoute>
                                        <Profile />
                                    </ProtectedRoute>
                                }
                            />
                            <Route
                                path="/projects"
                                element={
                                    <ProtectedRoute>
                                        <Projects />
                                    </ProtectedRoute>
                                }
                            />
                            <Route
                                path="/clients"
                                element={
                                    <ProtectedRoute>
                                        <ClientPage />
                                    </ProtectedRoute>
                                }
                            />
                            <Route path="/testsm" element={<TestSM />} />
                            <Route path="/testvs" element={<TestVS />} />
                            <Route path="/testbb" element={<TestBB />} />
                            <Route path="/testss" element={<TestSS />} />
                            <Route path="/timesheet" element={<Timesheet />} />
                            <Route
                                path="/timesheet/:day/:month/:year"
                                element={<TimesheetDetails />}
                            />
                            <Route path="/testmb" element={<TestMB />} />
                            <Route path="/error" element={<ErrorPage />} />
                            <Route
                                path="/admin-overview"
                                element={
                                    <PrivateRoute>
                                        <AdminOverview />
                                    </PrivateRoute>
                                }
                            />
                            <Route
                                path="user-overview"
                                element={
                                    <ProtectedRoute>
                                        <UserOverview />
                                    </ProtectedRoute>
                                }
                            />
                            <Route path="tutorial" element={<Tutorials />} />
                            <Route path="*" element={<NotFoundPage />} />
                        </Route>
                    </Routes>
                </Suspense>
            </BrowserRouter>
        </ErrorBoundary>
    );
}

export default App;
