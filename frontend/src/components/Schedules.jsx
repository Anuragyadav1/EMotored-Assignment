import React from "react";

export default function Schedules() {
  const schedules = [
    { id: 1, date: "2024-02-25", time: "10:00 AM", event: "Team Meeting", location: "Conference Room A" },
    { id: 2, date: "2024-02-26", time: "02:30 PM", event: "Project Deadline", location: "Remote" },
    { id: 3, date: "2024-02-27", time: "11:00 AM", event: "Client Presentation", location: "Zoom Call" },
    { id: 4, date: "2024-02-28", time: "04:00 PM", event: "Performance Review", location: "Office 2B" },
    { id: 5, date: "2024-02-29", time: "09:00 AM", event: "Team Outing", location: "Park Avenue" },
  ];

  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Schedules</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg text-sm sm:text-base">
          <thead>
            <tr className="bg-green-600 text-white">
              <th className="p-3 text-left">ID</th>
              <th className="p-3 text-left">Date</th>
              <th className="p-3 text-left">Time</th>
              <th className="p-3 text-left">Event</th>
              <th className="p-3 text-left">Location</th>
            </tr>
          </thead>
          <tbody>
            {schedules.map((schedule) => (
              <tr key={schedule.id} className="border-b">
                <td className="p-3">{schedule.id}</td>
                <td className="p-3">{schedule.date}</td>
                <td className="p-3">{schedule.time}</td>
                <td className="p-3">{schedule.event}</td>
                <td className="p-3">{schedule.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
