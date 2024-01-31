import React from "react";

function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);
        }

        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    }, 4000);
  }, [itemName, initialValue]);

  const saveItem = (newItems) => {
    localStorage.setItem(itemName, JSON.stringify(newItems));
    setItem(newItems);
  };
  // Un dato importa a la hora de retormar muestros custom hooks es, que cuado sea mas de dos se lo haga como un objeto. es decir ya no con los corchetes si no con las llaves.
  // return [item, saveItem]; --> Este caso seria solo si usamos maximo dos hooks.

  return { item, saveItem, loading, error };
}

export { useLocalStorage };
