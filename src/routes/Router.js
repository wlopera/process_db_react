import { lazy } from "react";
// import AuthRoutes from "./AuthRoutes";

const Home = lazy(() => import("../views/home/Home"));

const FilterDB = lazy(() => import("../views/database/FilterDB"));

const FormDB = lazy(() => import("../views/database/FormDB"));

// const auths = [].concat(AuthRoutes);

var ThemeRoutes = [
  {
    path: "/home",
    name: "Inicio",
    icon: "play",
    component: Home,
  },
  {
    collapse: true,
    path: "/mysql",
    name: "MYSQL",
    state: "mysql_pages",
    icon: "layers",
    child: [
      {
        path: "/filterDB",
        params: { typeDB: "mysql" },
        mini: "B",
        name: "Conexión",
        icon: "mdi mdi-adjust",
        component: FilterDB,
      },
      {
        path: "/mysql/storeProcedure",
        params: { typeDB: "mysql" },
        name: "Consultas",
        mini: "B",
        icon: "mdi mdi-adjust",
        component: FormDB,
      },
    ],
  },
  {
    collapse: true,
    path: "/oracle",
    name: "ORACLE",
    state: "oracle_pages",
    icon: "layers",
    child: [
      {
        path: "/filterDB",
        params: { typeDB: "oracle" },
        mini: "B",
        name: "Conexión",
        icon: "mdi mdi-adjust",
        component: FilterDB,
      },
      {
        path: "/mysql/storeProcedure",
        params: { typeDB: "oracle" },
        name: "Consultas",
        mini: "B",
        icon: "mdi mdi-adjust",
        component: FormDB,
      },
    ],
  },
  {
    navlabel: true,
    name: "APPS",
    icon: "mdi mdi-dots-horizontal",
  },
  {
    path: "/",
    pathTo: "/home",
    name: "Inicio",
    redirect: true,
  },
];
export default ThemeRoutes;
