"use client";

import { getConversationInfo } from "@/actions/chat";
import useFetch from "@/app/hooks/use-fetch";
import { ApiResponse } from "@/types/api";
import { use, useEffect, useState } from "react";

export default function InfoPanel({ cid }: { cid: string | null }) {
  const [info, setInfo] = useState<any | null>(null);
  
  const {
    loading: loadingInfo,
    data: infoData,
    fetchData: fnGetInfo,
  } = useFetch<ApiResponse<any>>(getConversationInfo);
 
  useEffect(() => {
    if (!cid) return;
    fnGetInfo(cid);
  }, [cid]);

  useEffect(() => {
    if (infoData && infoData.success) {
      setInfo(infoData.data);
    }
    }, [infoData]);

  if (!cid) return <div className="p-4">Not Found</div>;
  if (!info) return <div className="p-4">Loading…</div>;

  return (
    <div className="p-4 space-y-4">
      <div>
        <div className="font-semibold mb-1">Customer</div>
        <div>{info?.user.name}</div>
        <div className="text-sm text-muted-foreground">{info?.user.email}</div>
        <div></div>
      </div>

      <div className="border-t" />

      <div>
        <div className="font-semibold mb-1">Interested Car</div>
        <div>{info?.car.model}</div>
        <div className="text-sm text-muted-foreground">
          {info?.car.make} - {info?.car.year}
        </div>
        <img src={info?.car.images[0]} alt={`${info?.car.make} ${info?.car.model}`} />


      </div>
    </div>
  );
}
