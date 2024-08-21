import { useAppSelector } from "./app/hooks";
import { RootState } from "./app/store";
import RouteManagement from "./components/RouteManagement";

const App = () => {
  const util = useAppSelector((state: RootState) => state.util);
  console.log(util.theme);

  return (
    <div data-theme={util.theme == "dark" ? "dark" : "light"}>
      <RouteManagement />
    </div>
  );
};

export default App;
