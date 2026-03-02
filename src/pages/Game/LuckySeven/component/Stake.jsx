import { Fragment } from "react";
import { chipItems } from "../../../../static/chipData";

const Stake = ({ runner, stakeState }) => {
  function calculateChunks(arr, chipItems) {
    if (arr?.length > 0) {
      const result = [];
      let start = 0;
      while (start < arr.length) {
        let end = arr.length;
        let found = false;
        while (end > start) {
          const slice = arr.slice(start, end);
          const sum = slice.reduce((acc, val) => acc + val, 0);
          const matchedChip = chipItems.find((item) => item.value === sum);

          if (matchedChip) {
            result.push(matchedChip.label);
            start = end;
            found = true;
            break;
          }

          end--;
        }

        if (!found) {
          start++;
        }
      }

      return result;
    }
  }
  const output = calculateChunks(stakeState?.[runner]?.undo, chipItems);

  return (
    <Fragment>
      {stakeState?.[runner]?.show && (
        <div data-v-3aa2fe16 className="bet-detail">
          <div
            data-v-3aa2fe16
            className="bet-chip-container"
            style={{ "--bottomRatio": "0.05", marginBottom: "15%" }}
          >
            <div data-v-3aa2fe16 className="bet-chip-container__inner">
              {output?.map((item, index) => {
                return (
                  <div
                    key={item}
                    data-v-3aa2fe16
                    className="bet-chip"
                    data-content={2}
                    style={{
                      bottom: `${index * 4}px`,
                      width: "var(--cg-px-64)",
                      height: "var(--cg-px-64)",
                    }}
                  >
                    <img
                      data-v-3aa2fe16
                      className="app-image chip-item-bg"
                      src={`/src/assets/images/bet-chip/bet-chip-${item}.png.webp`}
                      loading="lazy"
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div data-v-3aa2fe16 className="bet-amount">
            {stakeState?.[runner]?.stake}
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Stake;
