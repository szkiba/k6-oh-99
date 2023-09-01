import http from "k6/http";
import { sleep } from "k6";

export let options = {
  discardResponseBodies: true,
  scenarios: {
    camel: {
      executor: "ramping-vus",
      startVUs: 1,
      stages: [
        { duration: "30s", target: 2 },
        { duration: "60s", target: 5 },
        { duration: "60s", target: 2 },
        { duration: "60s", target: 5 },
        { duration: "60s", target: 2 },
        { duration: "60s", target: 1 },
      ],
      gracefulRampDown: "0s",
    },
    snake: {
      executor: "ramping-vus",
      startVUs: 1,
      stages: [
        { duration: "20s", target: 1 },
        { duration: "20s", target: 4 },
        { duration: "20s", target: 1 },
        { duration: "20s", target: 4 },
        { duration: "20s", target: 1 },
        { duration: "20s", target: 4 },
        { duration: "20s", target: 1 },
        { duration: "20s", target: 4 },
        { duration: "20s", target: 1 },
        { duration: "20s", target: 4 },
        { duration: "20s", target: 1 },
        { duration: "20s", target: 4 },
        { duration: "20s", target: 1 },
        { duration: "20s", target: 4 },
        { duration: "20s", target: 1 },
        { duration: "20s", target: 4 },
        { duration: "20s", target: 1 },
        { duration: "20s", target: 4 },
      ],
      gracefulRampDown: "0s",
    },
  },
};

export default function () {
  http.get("http://test-api.k6.io");

  sleep(0.2);

  http.get("http://test-api.k6.io/public/crocodiles/");

  sleep(0.2);

  for (var i = 0; i < 5; i++) {
    http.get(http.url`http://test-api.k6.io/public/crocodiels/${i}`);
    sleep(0.5);
  }
}
