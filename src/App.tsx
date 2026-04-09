import { lazy, Suspense, Component, ReactNode } from "react";
import "./App.css";

const CharacterModel = lazy(() => import("./components/Character"));
const MainContainer = lazy(() => import("./components/MainContainer"));
import { LoadingProvider } from "./context/LoadingProvider";

class WebGLErrorBoundary extends Component<
  { children: ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) return null;
    return this.props.children;
  }
}

const App = () => {
  return (
    <>
      <LoadingProvider>
        <Suspense>
          <MainContainer>
            <WebGLErrorBoundary>
              <Suspense>
                <CharacterModel />
              </Suspense>
            </WebGLErrorBoundary>
          </MainContainer>
        </Suspense>
      </LoadingProvider>
    </>
  );
};

export default App;
