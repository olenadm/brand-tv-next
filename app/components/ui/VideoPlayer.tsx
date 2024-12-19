"use client";
import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import { useState } from "react";

import VideoSkeleton from "./VideoSkeleton";
import VideoDescription from "./VideoDescription";

const ReactPlayer = dynamic(() => import("react-player/vimeo"), { ssr: false });

export default function VideoPlayer(props: { url?: string; name?: string }) {
  const [loading, setLoading] = useState(true); // Track loading state

  const { url, name } = props;

  const handleReady = () => {
    setLoading(false); // Mark as loaded when ready
  };

  useEffect(() => {
    // Safety fallback to prevent infinite loading
    const timer = setTimeout(() => setLoading(false), 2000); // Timeout after 5 seconds
    return () => clearTimeout(timer); // Cleanup timeout
  }, []);

  return (
    <>
      {url ? (
        <>
          {loading ? (
            <VideoSkeleton />
          ) : (
            <>
              <div className="mb-3 videoplaceholder p-3">
                <div className="player-wrapper-x">
                  <ReactPlayer
                    url={url}
                    width="100%"
                    height="100%"
                    onReady={handleReady}
                    onError={(e) => console.error("Player error:", e)}
                    config={{
                      playerOptions: { responsive: true },
                    }}
                    controls
                  />
                </div>
              </div>

              <div className="mx-3 px-md-5 mt-3">
                <VideoDescription name={name} />
              </div>
            </>
          )}
        </>
      ) : (
        <div>No video URL provided</div>
      )}
    </>
  );
}
