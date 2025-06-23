import Axios from "@/functions/api/config/AxiosConfigure";
import API_URLS from "../config/ApiUrls";
import { returnPage } from "@/functions/common/event";
import { Board } from "@/interface/board";

const BOARD_API = API_URLS.BOARD;

async function getTargetBoardList(tableId: string): Promise<any> {
  const data = await Axios.get<Board[]>(BOARD_API + "/li/t", {
    params: { tableId },
  }).then((res) => {
    if (!!res.data) {
      return res.data;
    } else {
      return returnPage("Exception");
    }
  });
  console.log(data);
  return data;
}

async function getTargetBoard(boardId: string): Promise<any> {
  const data = await Axios.get<Board>(BOARD_API, {
    params: { boardId },
  }).then((res) => {
    if (!!res.data) {
      return res.data;
    } else {
      return returnPage("Exception");
    }
  });
  return data;
}

async function getList(): Promise<any> {
  const data = await Axios.get<Board[]>(BOARD_API + "/li").then((res) => {
    if (!!res.data) {
      return returnPage("Exception");
    } else {
      return res.data;
    }
  });
  return data;
}

function postBoard(boardData: object) {
  return Axios.post(BOARD_API, { data: boardData }).then((res) => {
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

function patchBoard(boardData: object) {
  return Axios.patch(BOARD_API, { data: boardData }).then((res) => {
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

function deleteBoard(boardId: string) {
  return Axios.delete(BOARD_API, { data: { boardId } }).then((res) => {
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

export {
  getTargetBoardList,
  getTargetBoard,
  getList,
  postBoard,
  patchBoard,
  deleteBoard,
};
