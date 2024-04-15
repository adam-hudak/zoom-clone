import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk";
import { useEffect, useState } from "react";

export const useGetCallById = (id: string | string[]) => {
  const [call, setCall] = useState<Call>();
  const [isCallLoading, setIsCallLoading] = useState(true);

  const client = useStreamVideoClient();

  useEffect(() => {
    if (!client) return;

    const loadCall = async () => {
      const { calls } = await client.queryCalls({
        filter_conditions: { id },
      });

      console.log("calls useGetCallById", calls, calls[0]);
      if (calls.length) {
        setCall(calls[0]);
      }

      setIsCallLoading(false);
    };

    loadCall();
  }, [client, id]);
  return { call, isCallLoading };
};
