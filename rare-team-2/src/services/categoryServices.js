export const createCategory = (category) => {
    return fetch("http://localhost:8088/categories", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(category),
    }).then((res) => res.json());
  };

  export const getAllCategories = () => {
    return fetch(`http://localhost:8088/categories`).then((res) =>
      res.json()
    );
  };

  export const deleteCategory = (categoryId) => {
    return fetch(`http://localhost:8088/categories/${categoryId}`, {
      method: "DELETE",
    });
  };

  export const putCategory = (categoryId, categoryToUpdate) => {
    return fetch(`http://localhost:8088/categories/${categoryId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(categoryToUpdate),
    })
   
  };
  