import  { 
    LoginPage,
    HomePage,
    HomeContent,
    Dashboard,
    Settings,
    RequireAuth
  } from '../components/global'

export default [
    {
        path: "/",
        element : <HomePage></HomePage>,
        children : [
          {
            index: true,
            element : <HomeContent></HomeContent>
          },
          {
            path: "/login",
            element : <LoginPage></LoginPage>,
            RouteName: "Login",
            protected: false
          },
          {
            path: "/dashboard",
            element : <RequireAuth><Dashboard /></RequireAuth> ,
            RouteName: "Dashboard",
            protected: true
          },
          {
            path: "/settings",
            element : <RequireAuth><Settings /></RequireAuth>,
            RouteName: "Settings",
            protected: true
          }
        ]
      },
]