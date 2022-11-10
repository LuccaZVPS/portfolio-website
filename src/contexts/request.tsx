import { createContext, ReactNode, useState, useMemo, useContext } from "react";
import axios from "axios";
const Context = createContext<request>({} as request);
interface props {
  children: ReactNode;
}
export const RequestContext = ({ children }: props) => {
  const [request, setRequest] = useState<request>({} as request);
  useMemo(() => {
    axios.get("http://localhost:3000/api/hello").then((r) => {
      setRequest(r.data as unknown as request);
    });
  }, []);
  console.log(request);

  if (request.about) {
    return <Context.Provider value={request}>{children}</Context.Provider>;
  } else {
    return (
      <Context.Provider value={request}>
        <div className="loading"></div>
      </Context.Provider>
    );
  }
};
export const useRequest = () => useContext(Context);
interface request {
  about: string[];
  projects: project[];
  skills: skills;
  contact: contact;
}

export interface project {
  title: string;
  txt: string;
  img: string;
  link: string;
  icons: string[];
}
export interface skills {
  front: Array<Array<string>>;
  back: Array<Array<string>>;
}
export interface contact {
  linkedin: string;
  email: string;
  number: string;
}