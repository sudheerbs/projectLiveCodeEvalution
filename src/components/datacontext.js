import { Children, createContext, useEffect, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
      
    useEffect(() => {
      
      const getData = async () => {
      const data = await fetch('https://jsonplaceholder.typicode.com/posts');
      const result = await data.json();
      setData(result);
      setLoading(false);
      }
      getData();
    }, []);

    const deleteData = (data) => {
        setData((prevData) => {
          return prevData.filter((res) => res.id !== data.id);
        })
    }
    return (
      <DataContext.Provider  value={{data, loading, deleteData}}>
        {children}
      </DataContext.Provider>
    )

}
