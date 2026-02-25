const Winner = ({ firstEvent, currentRoundWinAmount }) => {
  const winner = firstEvent?.runners?.find(
    (runner) => runner?.status === "WINNER",
  );
  return (
    <div
      data-v-6c15a629
      className="win-aminate"
      style={{ display: winner?.name ? "block" : "none" }}
    >
      <div data-v-6c15a629>
        <div data-v-6c15a629 className="win-aminate-nr">
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

          {currentRoundWinAmount > 0 && (
            <div data-v-6c15a629 className="w_a_nr">
              <p data-v-6c15a629 className="w_a_n_p1">
                YOU WIN
              </p>

              <p data-v-6c15a629 className="w_a_n_p2">
                {" "}
                +{currentRoundWinAmount}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Winner;
