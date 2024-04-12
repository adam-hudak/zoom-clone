"use client";

import React, { useState } from "react";
import HomeCard from "./HomeCard";
import { useRouter } from "next/navigation";
import MeetingModal from "./MeetingModal";

const MeetingTypeList = () => {
  const router = useRouter();
  const [meetingState, setMeetingState] = useState<
    "isScheduleMeeting" | "isJoiningMeeting" | "isInstantMeeting" | undefined
  >();

  const createMeeting = () => {};

  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
      <HomeCard
        color={"bg-orange-1"}
        icon="/icons/add-meeting.svg"
        alt="meeting"
        title="New Meeting"
        text="Start an instant Meeting"
        handleClick={() => setMeetingState("isInstantMeeting")}
      />
      <HomeCard
        color={"bg-blue-1"}
        icon="/icons/schedule.svg"
        alt="schedule"
        title="Schedule Meeting"
        text="Plan your  Meeting"
        handleClick={() => setMeetingState("isScheduleMeeting")}
      />
      <HomeCard
        color={"bg-purple-1"}
        icon="/icons/recordings.svg"
        alt="recordings"
        title="View Recordings"
        text="Check out your recordings"
        handleClick={() => router.push("/recordings")}
      />
      <HomeCard
        color={"bg-yellow-1"}
        icon="/icons/join-meeting.svg"
        alt="join-meeting"
        title="Join Meeting"
        text="via invitation link"
        handleClick={() => setMeetingState("isJoiningMeeting")}
      />

      <MeetingModal
        isOpen={meetingState === "isInstantMeeting"}
        onClose={() => {
          setMeetingState(undefined);
        }}
        title="Start an Instant Meeting"
        className="text-center"
        buttonText="Start Meeting"
        handleClick={createMeeting}
      />
    </section>
  );
};

export default MeetingTypeList;
