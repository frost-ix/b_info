import Axios from "@/functions/api/config/AxiosConfigure";
import API_URLS from "@/functions/api/config/ApiUrls";
import { Category } from "@/interface/category";
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

export default {
  getCategory,
  getTargetCategory,
};
