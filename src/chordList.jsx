

import useSWR, {useSWRConfig} from "swr";

//fetcher関数の作成
const fetcher = (url) => fetch(url).then((r) => r.json());

export default function ChordList() {
  const { data, error } = useSWR(
    "https://chordprogressor-api.herokuapp.com/api/chord/",
    // "https://api.adviceslip.com/advice",
    fetcher
  );
  //エラー
  if (error) return <div>failed to load</div>;
  //ロード中
  if (!data) return <div>loading...</div>;
  //成功
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
