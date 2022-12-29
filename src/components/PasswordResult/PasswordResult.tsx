import { useEffect, useState, useContext } from "react";
import "./PasswordResult.css";
import { PasswordContextType, IPassword } from "../../types/types";
import { PasswordContext } from "../../contexts/passwordContext";
import PasswordContainer from "./PasswordContainer";

export default function PasswordResults() {
  var { passwords } = useContext(PasswordContext) as PasswordContextType;
  const [refresh, setRefresh] = useState<boolean>(false);

  function updateList() {
    setRefresh(true);
  }

  useEffect(() => {
    setRefresh(false);
  }, [refresh]);

  return (
    <>
      {passwords ? (
        passwords.map((password: IPassword, index: number) => (
          <PasswordContainer
            password={password}
            index={index}
            key={index}
            updateList={updateList}
          />
        ))
      ) : (
        <></>
      )}
    </>
  );
}
