import { Fragment } from "react";

const ResultDisplay = ({ firstEvent }) => {
  let card = undefined;
  const indexCard = firstEvent?.indexCard;
  if (indexCard?.length > 0) {
    card = Number(indexCard[0].slice(1));
  }

  return (
    <Fragment>
      {card && (
        <div
          data-v-6c15a629
          className="result-display-new win-aminate-nr"
          style={{}}
        >
          {card > 6 && card < 11 && (
            <img
              data-v-6c15a629
              className="app-image w_a_n-bg"
              src="https://cdn2.aig1234.com/bw/yiy-h5/assets/cg-template-2/red-green/p4/baccarat/dark/banker-win-card-bg.png.webp"
              loading="lazy"
            />
          )}
          {card > 10 && (
            <img
              data-v-6c15a629=""
              className="app-image w_a_n-bg"
              src="https://cdn2.aig1234.com/bw/yiy-h5/assets/cg-template-2/red-green/p4/baccarat/dark/player-win-card-bg.png.webp"
              loading="lazy"
            />
          )}
          {card < 7 && (
            <img
              data-v-6c15a629=""
              className="app-image w_a_n-bg"
              src="https://cdn2.aig1234.com/bw/yiy-h5/assets/cg-template-2/red-green/p4/baccarat/dark/tie-win-card-bg.png.webp"
              loading="lazy"
            />
          )}

          <div data-v-6c15a629 className="w_a_nr">
            <p data-v-6c15a629 className="w_a_n_p1">
              {card < 7 && "Amar"}
              {card > 6 && card < 11 && "Akbar"}
              {card > 10 && "Anthony"} Wins
            </p>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default ResultDisplay;
