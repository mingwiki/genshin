import * as React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import CircularProgress from "@mui/material/CircularProgress";
import Stack from "@mui/material/Stack";

const Navigation = React.lazy(() => import("./Navigation/index"));
const Todos = React.lazy(() => import("./Navigation/Todos"));
const Teams = React.lazy(() => import("./Navigation/Teams"));
const Characters = React.lazy(() => import("./Navigation/Characters"));
const Artifacts = React.lazy(() => import("./Navigation/Artifacts"));
const Talents = React.lazy(() => import("./Navigation/Talents"));

export default function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <BrowserRouter>
          <React.Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="todos" element={<Todos />} />
              <Route path="teams" element={<Teams />} />
              <Route path="characters" element={<Characters />} />
              <Route path="artifacts" element={<Artifacts />} />
              <Route path="talents" element={<Talents />} />
              <Route path="*" element={<Navigate to="todos" replace />} />
            </Routes>
          </React.Suspense>
          <Navigation />
        </BrowserRouter>
      </Container>
    </React.Fragment>
  );
}
