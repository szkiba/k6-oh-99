import http from "k6/http";
import { sleep } from "k6";

export let options = {
  discardResponseBodies: true,
  scenarios: {
    contacts: {
      executor: "ramping-vus",
      startVUs: 1,
      stages: [
        { duration: "10s", target: 2 },
        { duration: "10s", target: 10 },
        { duration: "10s", target: 2 },
        { duration: "10s", target: 10 },
        { duration: "10s", target: 2 },
        { duration: "10s", target: 10 },
        { duration: "10s", target: 2 },
      ],
      gracefulRampDown: "0s",
    },
  },
};

export default function () {
  http.get("http://test-api.k6.io");
  sleep(1);
}
