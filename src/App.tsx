import React from "react";
import "./global.scss";
import { Button } from "reactstrap";
import { BaseLayout } from "./components/BaseLayout";

function App() {
  return (
    <BaseLayout title="Welcome to React App thats build without CRA">
      <Button color="danger">Danger!</Button>
    </BaseLayout>
  );
}

export default App;
