import Axios from "@/functions/api/config/AxiosConfigure";
import API_URLS from "@/functions/api/config/ApiUrls";
import { Category } from "@/interface/catetory";
import { returnPage } from "@/functions/common/event";

const CATEGORIES_API = API_URLS.CATEGORIES;

async function getCategory(): Promise<Category[]> {
  const res = await Axios.get<Category[]>(CATEGORIES_API + "/list").then(
    (res) => {
      if (!!res.data) {
        return res.data;
      } else {
        returnPage("Exception");
        throw new Error("No data found");
      }
    },
  );
  return res;
}

async function getTargetCategory(categoryId: string): Promise<Category> {
  return await Axios.get<Category>(CATEGORIES_API, {
    params: { categoryId },
  }).then((res) => {
    if (!!res.data) {
      return res.data;
    } else {
      throw new Error("No data found for the given category ID");
    }
  });
}

async function postCategory(categoryData: object): Promise<any> {
  const status = await Axios.post(CATEGORIES_API, { data: categoryData }).then(
    (res) => {
      const statusCode = res.data;
      switch (statusCode) {
        case 200:
          return "ok";
        case 404:
          throw new Error("Category not found");
        case 500:
          throw new Error("Internal server error");
        default:
          throw new Error("Unexpected status code: " + statusCode);
      }
    },
  );
  return status;
}

async function patchCategory(categoryData: object): Promise<any> {
  const status = await Axios.patch(CATEGORIES_API, { data: categoryData }).then(
    (res) => {
      const statusCode = res.data;
      switch (statusCode) {
        case 200:
          return "ok";
        case 404:
          throw new Error("Category not found");
        case 500:
          throw new Error("Internal server error");
        default:
          throw new Error("Unexpected status code: " + statusCode);
      }
    },
  );
  return status;
}

async function deleteCategory(categoryId: string): Promise<any> {
  const status = await Axios.delete(CATEGORIES_API, {
    data: { categoryId },
  }).then((res) => {
    const statusCode = res.data;
    switch (statusCode) {
      case 200:
        return "ok";
      case 404:
        throw new Error("Category not found");
      case 500:
        throw new Error("Internal server error");
      default:
        throw new Error("Unexpected status code: " + statusCode);
    }
  });
  return status;
}

export {
  getCategory,
  getTargetCategory,
  postCategory,
  patchCategory,
  deleteCategory,
};
