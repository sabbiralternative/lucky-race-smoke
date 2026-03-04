import { getBackPrice, getRunnerName } from "../../../../utils/betSlip";
import Stake from "../Stake/Stake";

const BetSlipCard = ({
  handleStakeChange,
  key,
  data,
  dataIndex,
  runnerIndex,
  type = "back",
  stakeState,
  color,
}) => {
  return (
    <div
      onClick={() =>
        handleStakeChange({
          key,
          data,
          dataIndex,
          runnerIndex,
          type,
        })
      }
      data-v-3aa2fe16
      data-v-12491877
      className={`flex fdr-c ai-c bet-item bet-column second-row ${color}`}
    >
      <div
        data-v-a792280e
        data-v-3aa2fe16
        className="text-container item-name-style"
        style={{ height: "31px" }}
      >
        <span
          data-v-a792280e
          className="text-content isDark isDarkBig"
          style={{ fontSize: "27px" }}
        >
          {getRunnerName(data, dataIndex, runnerIndex)}
        </span>
        <span
          data-v-a792280e
          className="text-content overlay"
          style={{ fontSize: "27px" }}
        >
          {getRunnerName(data, dataIndex, runnerIndex)}
        </span>
      </div>
      <span data-v-3aa2fe16 className="item-odds">
        {getBackPrice(data, dataIndex, runnerIndex)}
      </span>
      <img
        data-v-103f45dc
        data-v-3aa2fe16
        className="cg_icon item-help center"
        src="https://cdn2.aig1234.com/bw/yiy-h5/assets/cg-template-2/red-green/p4/icon/dark/i_help.png.webp"
        style={{ width: "var(--cg-px-28)", display: "none" }}
      />

      <Stake runner={key} stakeState={stakeState} />

      <div
        data-v-3aa2fe16
        className="win-effect flashing"
        style={{ display: "none" }}
      />
    </div>
  );
};

export default BetSlipCard;
