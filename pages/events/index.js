import EventList from "@/components/events/event-list";
import EventSearch from "@/components/events/event-search";
import { getAllEvents } from "@/dummy-data";
import { useRouter } from "next/router";

export default function AllEventsPage() {
  const events = getAllEvents();
  const router = useRouter();
  const handleSearch = (year,month)=>{
    const url = `./events/${year}/${month}`;
    router.push(url);
  }
  return (
    <div>
      <EventSearch onSearch={handleSearch}/>
      <EventList items={events}/>
    </div>
  );
}
