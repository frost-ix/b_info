import Axios from "@/functions/api/config/AxiosConfigure";
import API_URLS from "../config/ApiUrls";
import { returnPage } from "@/functions/common/event";
import { Board } from "@/interface/board";

const BOARD_API = API_URLS.BOARD;

async function getList(): Promise<Board[]> {
  const data = await Axios.get<Board[]>(BOARD_API + "/list").then((res) => {
    if (res.data) {
      return res.data;
    } else {
      return returnPage("Exception");
    }
  });
  return data ? data : [];
}

async function getTargetBoard(boardId: string): Promise<Board> {
  const data = await Axios.get<Board>(BOARD_API, {
    params: { boardId },
  }).then((res) => {
    if (!!res.data) {
      return res.data;
    } else {
      return returnPage("Exception");
    }
  });
  return data ? data : ({} as Board);
}

async function getTargetBoardList(tableId: string): Promise<Board[]> {
  const data = await Axios.get<Board[]>(BOARD_API + "/list/t", {
    params: { tableId },
  }).then((res) => {
    if (!!res.data) {
      return res.data;
    } else {
      return returnPage("Exception");
    }
  });
  return data ? data : [];
}

export default { getTargetBoardList, getTargetBoard, getList };
