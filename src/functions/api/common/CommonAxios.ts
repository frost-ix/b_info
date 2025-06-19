import Axios from "@/functions/api/config/AxiosConfigure";
import { returnPage } from "@/functions/common/event";

function getList() {
  const listData = Axios.get("")
    .then((res) => {
      if (!!res.data) {
        returnPage("Exception");
      } else {
        return res.data;
      }
    })
    .catch(() => {
      returnPage("Exception");
    });

  return listData;
}

function postBoard(boardData: object) {
  Axios.post("", { data: boardData }).then((res) => {
    const statusCode = res.data;
    switch (statusCode) {
      case 200:
        return "ok";
      case 404:
        return returnPage("Exception");
      case 500:
        return returnPage("Internal");
    }
  });
}

export default { getList, postBoard };
