import React from "react";
import Navbar from "../components/Navbar";
import { useTranslation } from "react-i18next";
import "../components/i18n";
const App = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Navbar />
      <h1>{t("helloWorld")}</h1>
      <p>{t("description")}</p>
    </div>
  );
};

export default App;
