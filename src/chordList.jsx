

import useSWR from "swr";

//fetcher関数の作成
const fetcher = (url) => fetch(url).then((r) => r.json());

export default function index() {
  const { data, error } = useSWR(
    "https://chord-progressor-api.herokuapp.com/api/chord/",
    fetcher
  );
  //エラー
  if (error) return <div>failed to load</div>;
  //ロード中
  if (!data) return <div>loading...</div>;
  //成功
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
