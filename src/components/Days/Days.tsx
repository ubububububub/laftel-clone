import { Day } from "@/components";
import { useDailyAnimes } from "@/hooks";

const days = [
  {
    id: 1,
    animes: "mon",
    day: "월요일",
  },
  {
    id: 2,
    animes: "tue",
    day: "화요일",
  },
  {
    id: 3,
    animes: "wed",
    day: "수요일",
  },
  {
    id: 4,
    animes: "thu",
    day: "목요일",
  },
  {
    id: 5,
    animes: "fri",
    day: "금요일",
  },
  {
    id: 6,
    animes: "sat",
    day: "토요일",
  },
  {
    id: 0,
    animes: "sun",
    day: "일요일",
  },
];

const today = new Date(Date.now()).getDay();

export function Days() {
  const { data } = useDailyAnimes();

  if (!data) {
    return null;
  }

  const mapedDays = days.map(({ animes, day, id }) => (
    <Day key={id} animes={data[animes]} day={day} today={today === id} />
  ));

  return <>{mapedDays}</>;
}
