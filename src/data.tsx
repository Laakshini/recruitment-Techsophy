import interviewImage from "./assets/icons/Illustrations.png";
import interviewStatus from "./assets/icons/interviewStatusPending.png";
import approval from "./assets/icons/approvalPending.png";
import acceptance from "./assets/icons/acceptancePending.png";
import documentations from "./assets/icons/documentsPending.png";
import training from "./assets/icons/trainingPending.png";
import supervisor from "./assets/icons/supervisor.png";
import projectAllocation from "./assets/icons/projectAllocation.png";
export const statusCardData = [
  {
    number: 33,
    description: "Interview Scheduled",
    image: interviewImage,
  },
  {
    number: 2,
    description: "Interview Feedback Pending",
    image: interviewStatus,
  },
  {
    number: 44,
    description: "Approval Pending",
    image: approval,
  },
  {
    number: 13,
    description: "Offer Acceptance Pending",
    image: acceptance,
  },
  {
    number: 17,
    description: "Documentations Pending",
    image: documentations,
  },
  {
    number: 3,
    description: "Training Pending",
    image: training,
  },
  {
    number: 5,
    description: "Supervisor Allocation Pending",
    image: supervisor,
  },
  {
    number: 56,
    description: "Project Allocation Pending",
    image: projectAllocation,
  },
];

export const eventsData = [
  {
    date: "Today",
    time: "3:15",
    status: "Pending",
    description: {
      name: "Mini Soman",
      role: "Mean Stack developer",
      phase: "4th phase interview",
      time: "3:15 - 3:45",
    },
  },
  {
    date: "Today",
    time: "10:00",
    status: "Pending",
    description: {
      name: "Mini Soman",
      role: "Mean Stack developer",
      phase: "4th phase interview",
      time: "3:15 - 3:45",
    },
  },
  {
    date: "Today",
    time: "10:00",
    status: "Pending",
    description: {
      name: "Mini Soman",
      role: "Mean Stack developer",
      phase: "4th phase interview",
      time: "3:15 - 3:45",
    },
  },
  {
    date: "Tomorrow",
    time: "3:15",
    status: "Completed",
    description: {
      name: "Mini Soman",
      role: "Mean Stack developer",
      phase: "4th phase interview",
      time: "3:15 - 3:45",
    },
  },
  {
    date: "Tomorrow",
    time: "10:00",
    status: "Pending",
    description: {
      name: "Mini Soman",
      role: "Mean Stack developer",
      phase: "4th phase interview",
      time: "3:15 - 3:45",
    },
  },
  {
    date: "Tomorrow",
    time: "10:00",
    status: "Completed",
    description: {
      name: "Mini Soman",
      role: "Mean Stack developer",
      phase: "4th phase interview",
      time: "3:15 - 3:45",
    },
  },
  {
    date: "Tomorrow",
    time: "10:00",
    status: "Pending",
    description: {
      name: "Mini Soman",
      role: "Mean Stack developer",
      phase: "4th phase interview",
      time: "3:15 - 3:45",
    },
  },
  {
    date: "Sep 3",
    time: "3:15",
    status: "Pending",
    description: {
      name: "Mini Soman",
      role: "Mean Stack developer",
      phase: "4th phase interview",
      time: "3:15 - 3:45",
    },
  },
  {
    date: "Sep 3",
    time: "10:00",
    status: "Completed",
    description: {
      name: "Mini Soman",
      role: "Mean Stack developer",
      phase: "4th phase interview",
      time: "3:15 - 3:45",
    },
  },
  {
    date: "Sep 3",
    time: "10:00",
    status: "Pending",
    description: {
      name: "Mini Soman",
      role: "Mean Stack developer",
      phase: "4th phase interview",
      time: "3:15 - 3:45",
    },
  },
  {
    date: "Sep 4",
    time: "3:15",
    status: "Pending",
    description: {
      name: "Mini Soman",
      role: "Mean Stack developer",
      phase: "4th phase interview",
      time: "3:15 - 3:45",
    },
  },
  {
    date: "Sep 4",
    time: "10:00",
    status: "Pending",
    description: {
      name: "Mini Soman",
      role: "Mean Stack developer",
      phase: "4th phase interview",
      time: "3:15 - 3:45",
    },
  },
  {
    date: "Sep 4",
    time: "10:00",
    description: {
      name: "Mini Soman",
      role: "Mean Stack developer",
      phase: "4th phase interview",
      time: "3:15 - 3:45",
    },
  },
  {
    date: "Sep 7",
    time: "3:15",
    status: "Completed",
    description: {
      name: "Mini Soman",
      role: "Mean Stack developer",
      phase: "4th phase interview",
      time: "3:15 - 3:45",
    },
  },
  {
    date: "Sep 7",
    time: "10:00",
    status: "Pending",
    description: {
      name: "Mini Soman",
      role: "Mean Stack developer",
      phase: "4th phase interview",
      time: "3:15 - 3:45",
    },
  },
  {
    date: "Sep 8",
    time: "3:15",
    status: "Pending",
    description: {
      name: "Mini Soman",
      role: "Mean Stack developer",
      phase: "4th phase interview",
      time: "3:15 - 3:45",
    },
  },
  {
    date: "Sep 8",
    time: "10:00",
    status: "Pending",
    description: {
      name: "Mini Soman",
      role: "Mean Stack developer",
      phase: "4th phase interview",
      time: "3:15 - 3:45",
    },
  },
];
const eventsToday: any = [];
const eventsTomorrow: any = [];
const eventsThisWeek: any = [];
for (const event of eventsData) {
  if (event.date === "Today") {
    eventsToday.push(event);
  }
}
for (const event of eventsData) {
  if (event.date === "Tomorrow") {
    eventsTomorrow.push(event);
  }
}
for (const event of eventsData) {
  if (event.date !== "Yesterday" && event.date !== "Today") {
    eventsThisWeek.push(event);
  }
}

export { eventsToday, eventsTomorrow, eventsThisWeek };
