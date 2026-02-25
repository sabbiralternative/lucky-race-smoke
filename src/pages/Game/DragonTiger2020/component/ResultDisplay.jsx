import { Fragment } from "react";

const ResultDisplay = ({ firstEvent }) => {
  const winner = firstEvent?.runners?.find(
    (runner) => runner?.status === "WINNER",
  );

  return (
    <Fragment>
      {winner?.name && (
        <div
          data-v-6c15a629
          className="result-display-new win-aminate-nr"
          style={{}}
        >
          {winner?.name === "Dragon" && (
            <img
              data-v-6c15a629
              className="app-image w_a_n-bg"
              src="https://cdn2.aig1234.com/bw/yiy-h5/assets/cg-template-2/red-green/p4/baccarat/dark/banker-win-card-bg.png.webp"
              loading="lazy"
            />
          )}
          {winner?.name === "Tiger" && (
            <img
              data-v-6c15a629=""
              className="app-image w_a_n-bg"
              src="https://cdn2.aig1234.com/bw/yiy-h5/assets/cg-template-2/red-green/p4/baccarat/dark/player-win-card-bg.png.webp"
              loading="lazy"
            />
          )}
          {(winner?.name === "Tie" || winner?.name === "Suited") && (
            <img
              data-v-6c15a629=""
              className="app-image w_a_n-bg"
              src="https://cdn2.aig1234.com/bw/yiy-h5/assets/cg-template-2/red-green/p4/baccarat/dark/tie-win-card-bg.png.webp"
              loading="lazy"
            />
          )}

          <div data-v-6c15a629 className="w_a_nr">
            <p data-v-6c15a629 className="w_a_n_p1">
              {winner?.name} Wins
            </p>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default ResultDisplay;
