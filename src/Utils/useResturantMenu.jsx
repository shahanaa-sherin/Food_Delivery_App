import  { useEffect ,useState} from "react";
import { RESTURANT_MENU_URL } from "./Constants";

const useResturantMenu = (resid) => {
    const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchData();
  });
  const fetchData = async () => {
    const data = await fetch(RESTURANT_MENU_URL + resid);
    const json = await data.json();
    setResInfo(json.data);
  };

  return resInfo;
};


export default useResturantMenu;
