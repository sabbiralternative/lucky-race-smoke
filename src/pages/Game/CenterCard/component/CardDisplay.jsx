const CardDisplay = ({ firstEvent }) => {
  const card = firstEvent?.indexCard;

  return (
    <div data-v-6c15a629 className="card-display">
      {card?.[0] && (
        <div data-v-6c15a629 className="dragon-card">
          <div
            data-v-425d8a96
            data-v-6c15a629
            className="flex fdr-c ai-c card-container"
            style={{}}
          >
            <div
              data-v-425d8a96
              className="card flipped"
              style={{
                width: "var(--cg-px-204)",
                height: "var(--cg-px-204)",
                marginTop: "0px",
              }}
            >
              {/* <img
                data-v-425d8a96
                className="app-image card-front"
                src="https://cdn2.aig1234.com/bw/yiy-h5/assets/cg-template-2/red-green/p4/baccarat/poker-card-Clubs-K.png.webp"
                loading="lazy"
              /> */}
              <img
                data-v-425d8a96
                className="app-image card-front"
                src={`/cards/${card?.[0]}.png`}
                loading="lazy"
              />
              <img
                data-v-425d8a96
                className="app-image card-back"
                src="https://cdn2.aig1234.com/bw/yiy-h5/assets/cg-template-2/red-green/p4/baccarat/poker-card-back.png.webp"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      )}
      {card?.[1] && (
        <div
          style={{ marginRight: "0px" }}
          data-v-6c15a629
          className="tiger-card"
        >
          <div
            data-v-425d8a96
            data-v-6c15a629
            className="flex fdr-c ai-c card-container"
            style={{}}
          >
            <div
              data-v-425d8a96
              className="card flipped"
              style={{
                width: "var(--cg-px-204)",
                height: "var(--cg-px-204)",
                marginTop: "0px",
              }}
            >
              {/* <img
                data-v-425d8a96
                className="app-image card-front"
                src="https://cdn2.aig1234.com/bw/yiy-h5/assets/cg-template-2/red-green/p4/baccarat/poker-card-Spades-5.png.webp"
                loading="lazy"
              /> */}
              <img
                data-v-425d8a96
                className="app-image card-front"
                src={`/cards/${card?.[1]}.png`}
                loading="lazy"
              />
              <img
                data-v-425d8a96
                className="app-image card-back"
                src="https://cdn2.aig1234.com/bw/yiy-h5/assets/cg-template-2/red-green/p4/baccarat/poker-card-back.png.webp"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      )}
      {card?.[2] && (
        <div data-v-6c15a629 className="tiger-card">
          <div
            data-v-425d8a96
            data-v-6c15a629
            className="flex fdr-c ai-c card-container"
            style={{}}
          >
            <div
              data-v-425d8a96
              className="card flipped"
              style={{
                width: "var(--cg-px-204)",
                height: "var(--cg-px-204)",
                marginTop: "0px",
              }}
            >
              {/* <img
                data-v-425d8a96
                className="app-image card-front"
                src="https://cdn2.aig1234.com/bw/yiy-h5/assets/cg-template-2/red-green/p4/baccarat/poker-card-Spades-5.png.webp"
                loading="lazy"
              /> */}
              <img
                data-v-425d8a96
                className="app-image card-front"
                src={`/cards/${card?.[2]}.png`}
                loading="lazy"
              />
              <img
                data-v-425d8a96
                className="app-image card-back"
                src="https://cdn2.aig1234.com/bw/yiy-h5/assets/cg-template-2/red-green/p4/baccarat/poker-card-back.png.webp"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardDisplay;
