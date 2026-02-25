const Counter = ({ firstEvent }) => {
  const timerDuration = firstEvent?.timerDuration;
  const lastUpdateTime = firstEvent?.lastUpdateTime;
  const utcMilliseconds = Date.now();
  const utcSeconds = Math.floor(utcMilliseconds / 1000);
  const timer = timerDuration - (utcSeconds - lastUpdateTime);

  return (
    <>
      {timer >= 0 && (
        <div className="absolute z-[99999] top-[0%] left-20 -translate-x-1/2">
          <div className="w-[30px] lg:scale-150 origin-center aspect-square rounded-full flex justify-center items-center relative">
            <div className="border-[6px] h-[83%] w-[83%] rounded-full aspect-square absolute border-white/10 bg-black/10" />
            <svg
              style={{
                animation: `progress-animation ${timerDuration}s linear 0s 1 forwards`,
              }}
              width="250"
              height="250"
              viewBox="0 0 250 250"
              className="circular-progress"
            >
              {/* <circle
                className="bg"
                stroke={timer > 3 ? "#32d74b" : "#cc980e"}
              ></circle> */}
              <circle
                className="fg"
                // stroke="#000000"
                stroke={timer > 3 ? "#32d74b" : "#cc980e"}
              ></circle>
            </svg>

            <span className="text-xl drop-shadow-md font-mono font-bold text-white absolute">
              {timer > 0 && timer}
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default Counter;
