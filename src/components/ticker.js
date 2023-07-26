import React from "react"
import Marquee from "react-fast-marquee"

const Ticker = () => {
  return (
    <Marquee className="word-marquee" gradient={false} speed={20}>
      {[...Array(10)].map((e, i) => (
        <div className="marquee-item" key={i}>
          Website Coming Soon
        </div>
      ))}
    </Marquee>
  )
}

export default Ticker
