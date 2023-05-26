"use client"

import { useState } from "react"
import Image from "next/image"
import { FaPlay } from "react-icons/fa"
import YouTube from "react-youtube"

import * as Style from "./styles"

export function Video() {
  const [showPreview, setShowPreview] = useState(true)
  const videoId = "XF1aKMVcyn8"

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 0,
    },
  }

  const handlePlay = () => {
    setShowPreview(false)
  }
  return (
    <Style.VideoContainer>
      {showPreview && (
        <div className="play-containner">
          <Image
            src={`/images/thub.jpg`}
            width={1000}
            height={1000}
            alt="Preview Video"
            onClick={handlePlay}
          />

          <div className="play-button" onClick={handlePlay}>
            <FaPlay className="play-icon" />
          </div>
        </div>
      )}
      {!showPreview && <YouTube videoId={videoId} opts={opts} />}
    </Style.VideoContainer>
  )
}
