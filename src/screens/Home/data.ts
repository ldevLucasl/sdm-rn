import React from "react";
import {
  getPosts,
  createPost,
  deletePost,
  updatePost,
} from "../../services/Posts";

const useFetch = () => {
  const [api, setApi] = React.useState<any>([]);

  React.useEffect(() => {
    const load = async () => {
      await getPosts()
        .then((response) => {
          setApi(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    load();
  }, [api]);

  async function handleCreate(item: any) {
    await createPost(item)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async function handleDelete(id: any) {
    await deletePost(id)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async function handleEdit(item: any) {
    await updatePost(item.id, item)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return {
    api,
    handlers: {
      handleCreate,
      handleDelete,
      handleEdit,
    },
  };
};

export default useFetch;
