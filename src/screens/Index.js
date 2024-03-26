import { useState, useEffect } from "react";

import WaveBackground from "../components/WaveBackground";
import Counter from "../components/Counter";

export default Index = () => {
  const [damacana, setDamacana] = useState(() => {
    const saved = localStorage.getItem("damacana");
    const initialValue = JSON.parse(saved);
    return initialValue || 0;
  });
  const [surahi, setSurahi] = useState(() => {
    const saved = localStorage.getItem("surahi");
    const initialValue = JSON.parse(saved);
    return initialValue || 0;
  });
  const [level, setLevel] = useState(0);

  useEffect(() => {
    setLevel((damacana * 100) / 60);
    localStorage.setItem("damacana", JSON.stringify(damacana));
  }, [damacana]);

  useEffect(() => {
    if (surahi >= 10) {
      setDamacana(damacana + 1);
      setSurahi(0);
    }
    localStorage.setItem("surahi", JSON.stringify(surahi));
  }, [surahi]);

  return (
    <WaveBackground level={level}>
      <Counter label="Damacana" value={damacana} setValue={setDamacana} />
      <Counter label="Sürahi" value={surahi} setValue={setSurahi} />
    </WaveBackground>
  );
};
