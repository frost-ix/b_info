import API_URLS from "../config/ApiUrls";
import Axios from "../config/AxiosConfigure";

const apiUrl = API_URLS.CARD;
async function getCards(): Promise<Array<CardWithPerformance>> {
  const res = await Axios.get<Array<CardWithPerformance>>(apiUrl).then(
    (data) => {
      if (data.status === 200) {
        return data.data;
      } else {
        return [];
      }
    },
  );
  return res;
}

async function getCardByMemberId(
  memberId: number,
): Promise<Array<Card> | null> {
  const res = await Axios.get<Array<Card>>(`${apiUrl}/member/${memberId}`).then(
    (data) => {
      if (data.status === 200) {
        return data.data;
      } else {
        return null;
      }
    },
  );
  return res;
}

async function getCardByCardId(cardId: string): Promise<Card | null> {
  const res = await Axios.get<Card>(`${apiUrl}/${cardId}`).then((data) => {
    if (data.status === 200) {
      return data.data;
    } else {
      return null;
    }
  });
  return res;
}

export { getCards, getCardByMemberId, getCardByCardId };
