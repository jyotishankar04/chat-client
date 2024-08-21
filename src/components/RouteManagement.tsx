import { Route, Routes } from "react-router-dom";
import NotFound from "../pages/NotFound";
import { lazy, Suspense } from "react";
import UserLayout from "../layouts/UserLayout";
import MyProfile from "../pages/MyProfile";
import GeneralSettings from "../pages/GeneralSettings";
import SecuritySettings from "../pages/SecuritySettings";
import HelpSettings from "../pages/HelpSettings";
import Loading from "./Loading";
import MessageBoxLoader from "./Loaders/MessageBoxLoader";
import LoadingComponent from "./LoadingComponent";

const HomePage = lazy(() => import("../pages/Home"));
const LoginPage = lazy(() => import("../pages/Login"));
const SignupPage = lazy(() => import("../pages/Signup"));
const AuthPage = lazy(() => import("../layouts/AuthLayout"));

const Chat = lazy(() => import("../layouts/ChatLayout"));
const MessageBoxLazy = lazy(
  () => import("../components/MessageBox/MessageBox")
);
const SettingLayoutLazy = lazy(() => import("../layouts/SettingsLayout"));

const RouteManagement = () => {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route
        path="/"
        element={
          <Suspense fallback={<Loading />}>
            {" "}
            <HomePage />
          </Suspense>
        }
      />
      <Route
        path="/auth"
        element={
          <Suspense fallback={<Loading />}>
            {" "}
            <AuthPage />
          </Suspense>
        }
      >
        <Route
          path="login"
          element={
            <Suspense fallback={<Loading />}>
              {" "}
              <LoginPage />
            </Suspense>
          }
        />
        <Route
          path="signup"
          element={
            <Suspense fallback={<Loading />}>
              {" "}
              <SignupPage />
            </Suspense>
          }
        />
      </Route>
      <Route
        path="/chat"
        element={
          <Suspense fallback={<Loading />}>
            <Chat />
          </Suspense>
        }
      >
        <Route
          path="user/:id"
          element={
            <Suspense fallback={<MessageBoxLoader />}>
              <MessageBoxLazy />
            </Suspense>
          }
        />
        <Route
          path=""
          element={
            <h1 className="card-title flex items-center justify-center h-full text-5xl">
              Welcome to coChatter
            </h1>
          }
        />
      </Route>
      <Route path="/user" element={<UserLayout />}>
        <Route path="profile" element={<MyProfile />} />

        <Route path=":id" element={<LoadingComponent />} />
        <Route
          path="settings"
          element={
            <Suspense fallback={<Loading />}>
              <SettingLayoutLazy />
            </Suspense>
          }
        >
          <Route path="general" element={<GeneralSettings />} />
          <Route path="security" element={<SecuritySettings />} />
          <Route path="help" element={<HelpSettings />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default RouteManagement;
