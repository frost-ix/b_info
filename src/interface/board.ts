interface Board {
  boardId: string;
  tableId: string;
  title: string;
  content: string;
  writeDate: string;
  updateDate?: string;
}

interface BoardList {
  boardList: Board[];
}

export type { Board, BoardList };
