import http from "k6/http";
import { sleep } from "k6";

export let options = {
  duration: "5s",
};

export default function () {
  http.get("http://test-api.k6.io");
  sleep(1);
}
