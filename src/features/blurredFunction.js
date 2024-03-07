import { useEffect, useState } from "react";

const blurredFunction = () => {
    const [blurred, setBlurred] = useState(true);

    useEffect(() => {
      const blurTimer = setTimeout(() => {
        setBlurred(false);
      }, 10); 
  
      return () => clearTimeout(blurTimer); 
    }, []);
    return  { blurred }
}
export default blurredFunction
