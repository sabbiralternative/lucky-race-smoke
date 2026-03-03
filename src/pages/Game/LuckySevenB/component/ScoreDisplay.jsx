import { Fragment } from "react";

const ScoreDisplay = ({ firstEvent }) => {
  let card = undefined;
  const indexCard = firstEvent?.indexCard;
  if (indexCard?.length > 0) {
    card = Number(indexCard[0].slice(1));
  }

  return (
    <Fragment>
      {card && (
        <div data-v-6c15a629 className="score-display">
          <div
            data-v-6c15a629
            className="dragon-score"
            style={{
              backgroundImage:
                'url("https://cdn2.aig1234.com/bw/yiy-h5/assets/cg-template-2/red-green/p4/dragon-tiger/score-dragon-en-US.png")',
            }}
          >
            {card < 7 && (
              <img
                data-v-6c15a629
                className="app-image dragon-win"
                src="https://cdn2.aig1234.com/bw/yiy-h5/assets/cg-template-2/red-green/p4/baccarat/banker-win.webp"
                loading="lazy"
                style={{}}
              />
            )}

            <span data-v-6c15a629 style={{}}>
              {firstEvent?.indexCard?.slice(1)}
            </span>
          </div>
          <div
            data-v-6c15a629
            className="tiger-score"
            style={{
              backgroundImage:
                'url("https://cdn2.aig1234.com/bw/yiy-h5/assets/cg-template-2/red-green/p4/dragon-tiger/score-tiger-en-US.png")',
            }}
          >
            {card < 7 && (
              <img
                data-v-6c15a629
                className="app-image tiger-win"
                src="https://cdn2.aig1234.com/bw/yiy-h5/assets/cg-template-2/red-green/p4/baccarat/player-win.webp"
                loading="lazy"
              />
            )}

            <span data-v-6c15a629 style={{}}>
              {firstEvent?.indexCard?.slice(1)}
            </span>
          </div>
          <img
            data-v-6c15a629
            className="app-image bet-vs"
            src="https://cdn2.aig1234.com/bw/yiy-h5/assets/cg-template-2/red-green/p4/baccarat/bet-vs.png.webp"
            loading="lazy"
          />
        </div>
      )}
    </Fragment>
  );
};

export default ScoreDisplay;
